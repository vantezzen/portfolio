import { z } from "zod";
import type { UIMessage } from "ai";

export const LIMITS = {
  /** Characters per visitor message. The composer enforces this too. */
  message: 500,
  /** Messages the model gets to see. Older ones are dropped server-side. */
  history: 16,
  /** Messages per conversation before the client asks for a fresh chat. */
  conversation: 40,
} as const;

const textPart = z.object({
  type: z.literal("text"),
  text: z.string().max(4000),
});

/** Data parts and anything else the client echoes back. Ignored, but tolerated. */
const otherPart = z.looseObject({ type: z.string() });

const message = z.object({
  id: z.string().max(100),
  role: z.enum(["user", "assistant"]),
  parts: z.array(z.union([textPart, otherPart])).max(30),
});

export const requestSchema = z.object({
  messages: z.array(message).min(1).max(LIMITS.conversation),
});

export type ChatMessage = Omit<UIMessage, "id">;

/**
 * Reduces the client's messages to plain text turns the model should see:
 * text parts only, empty turns dropped, capped to the recent history.
 * Returns `null` when the last turn is not from the visitor.
 */
export function sanitize(
  messages: z.infer<typeof requestSchema>["messages"],
): ChatMessage[] | null {
  const turns: ChatMessage[] = [];
  for (const { role, parts } of messages) {
    const text = parts
      .filter((part): part is z.infer<typeof textPart> => part.type === "text")
      .map((part) => part.text)
      .join("\n")
      .trim();
    if (!text) continue;
    turns.push({ role, parts: [{ type: "text", text }] });
  }
  if (turns.at(-1)?.role !== "user") return null;
  return turns.slice(-LIMITS.history);
}

export function lastUserText(turns: ChatMessage[]) {
  const part = turns.at(-1)?.parts[0];
  return part?.type === "text" ? part.text : "";
}
