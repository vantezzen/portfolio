import { generateText } from "ai";
import { knowledge } from "@/content/bennet/knowledge";
import { bennet } from "@/content/bennet/persona";
import { model } from "./model";
import type { ChatMessage } from "./schema";
import type { Guard } from "./types";

/**
 * Three follow-up chips for the reply that was just given. Asked for as
 * plain lines rather than JSON: small models get that right every time,
 * and a line parser is all the structure this needs.
 */
const INSTRUCTIONS = `
You write the three follow-up chips shown under BenNet's latest reply. BenNet is the AI stand-in of Bennett Hollstein on his portfolio site and only talks about Bennett.

Rules:
- Write from the visitor's point of view, addressed to Bennett ("What did you build with MCP?").
- Each question must be answerable from the knowledge below. Never invent topics.
- Short: at most eight words, no trailing period. Same language as the conversation.
- Vary them: one that digs deeper into what was just discussed, one that jumps to a different area (another project, the stack, background, contact), one that is a bit fun or opinionated.
- Don't repeat anything the visitor already asked or the reply already answered.
- If the last message was declined as off-topic, all three should pull the visitor back to Bennett.

Output exactly three lines, one question per line. No numbering, no bullets, no quotes, nothing else.
`.trim();

const MIN_LENGTH = 3;
const MAX_LENGTH = 70;

export function parseSuggestions(text: string): string[] | null {
  const lines = text
    .split("\n")
    .map((line) => line.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, "").trim())
    .map((line) => line.replace(/^["“„']+|["”“']+$/g, "").trim())
    .filter((line) => line.length >= MIN_LENGTH && line.length <= MAX_LENGTH);
  const unique = [...new Set(lines)];
  return unique.length >= 3 ? unique.slice(0, 3) : null;
}

export async function suggest(
  turns: ChatMessage[],
  reply: string,
  guard: Guard,
): Promise<string[]> {
  const transcript = turns
    .slice(-6)
    .map((turn) => {
      const part = turn.parts[0];
      const text = part?.type === "text" ? part.text : "";
      return `${turn.role === "user" ? "Visitor" : "BenNet"}: ${text.slice(0, 300)}`;
    })
    .join("\n");

  // One retry: small models occasionally return a single line.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const parsed = await generate(transcript, reply, guard);
      if (parsed) return parsed;
    } catch (error) {
      console.error("[bennet] suggestions failed", error);
    }
  }
  return bennet.starters;
}

async function generate(transcript: string, reply: string, guard: Guard) {
  const { text } = await generateText({
    model,
    system: `${INSTRUCTIONS}\n\n# Knowledge\n${knowledge}`,
    prompt: [
      `Conversation:\n${transcript}`,
      `BenNet: ${reply.slice(0, 600)}`,
      guard.verdict === "allow"
        ? ""
        : "(That last visitor message was declined as out of scope.)",
    ].join("\n\n"),
    temperature: 0.8,
    reasoning: "none",
    maxOutputTokens: 500,
  });
  const parsed = parseSuggestions(text);
  if (!parsed) {
    console.error("[bennet] suggestions unparseable", JSON.stringify(text));
  }
  return parsed;
}
