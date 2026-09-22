import {
  convertToModelMessages,
  type ModelMessage,
  createUIMessageStream,
  createUIMessageStreamResponse,
  smoothStream,
  streamText,
} from "ai";
import { buildSystemPrompt } from "@/content/bennet/persona";
import { classify } from "@/lib/bennet/guard";
import { model } from "@/lib/bennet/model";
import { clientKey, rateLimit } from "@/lib/bennet/rate-limit";
import {
  LIMITS,
  lastUserText,
  requestSchema,
  sanitize,
} from "@/lib/bennet/schema";
import { suggest } from "@/lib/bennet/suggestions";
import type { BenNetMessage, Guard } from "@/lib/bennet/types";

export const maxDuration = 30;

const ALLOWED: Guard = { verdict: "allow", category: "about_bennett" };

/** Logs the real error and hands the visitor a friendly, detail-free line. */
function streamErrorMessage(error: unknown) {
  console.error("[bennet] stream failed", error);
  return "BenNet tripped over something. Try again in a moment.";
}

/** Plain-text errors: the client shows them as-is in a bubble. */
function reject(message: string, status: number, headers?: HeadersInit) {
  return new Response(message, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8", ...headers },
  });
}

function answer(
  messages: ModelMessage[],
  guard: Guard,
  abortSignal?: AbortSignal,
) {
  return streamText({
    model,
    system: buildSystemPrompt(guard),
    messages,
    temperature: 0.7,
    // Replies are short by prompt; the budget leaves room for models that reason first.
    reasoning: "none",
    maxOutputTokens: 600,
    abortSignal,
    experimental_transform: smoothStream({ chunking: "word" }),
  });
}

export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request));
  if (!limit.ok) {
    return reject(
      "Slow down a bit 😅 You can send more messages in a few minutes.",
      429,
      { "retry-after": String(limit.retryAfterSeconds) },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) return reject("That request didn't look right.", 400);

  const turns = sanitize(parsed.data.messages);
  if (!turns) return reject("Send a message first.", 400);

  if (lastUserText(turns).length > LIMITS.message) {
    return reject(
      `That's a lot of text for a portfolio bot. Keep it under ${LIMITS.message} characters.`,
      413,
    );
  }

  const messages = await convertToModelMessages(turns);

  const stream = createUIMessageStream<BenNetMessage>({
    execute: async ({ writer }) => {
      writer.write({ type: "start" });

      // The classifier and a speculative answer run side by side. Most
      // messages are fine, so the answer is usually ready to stream the
      // moment the verdict lands. Anything else is thrown away unread and
      // answered again with the verdict in the prompt.
      const speculative = new AbortController();
      const speculativeAnswer = answer(messages, ALLOWED, speculative.signal);
      speculativeAnswer.consumeStream({ onError: () => {} });
      const guard = await classify(turns);

      // Streamed to the client so the UI can show when a message was
      // redirected or refused.
      writer.write({ type: "data-guard", id: "guard", data: guard });

      let result = speculativeAnswer;
      if (guard.verdict !== "allow") {
        speculative.abort();
        result = answer(messages, guard);
      }

      writer.merge(
        result.toUIMessageStream({
          sendStart: false,
          sendFinish: false,
          onError: streamErrorMessage,
        }),
      );

      const reply = await result.text;
      const suggestions = await suggest(turns, reply, guard);
      writer.write({
        type: "data-suggestions",
        id: "suggestions",
        data: suggestions,
      });

      writer.write({ type: "finish" });
    },
    onError: streamErrorMessage,
  });

  return createUIMessageStreamResponse({ stream });
}
