import type { UIMessage } from "ai";

/** What the guardrail classifier decided about the visitor's latest message. */
export type Guard = {
  verdict: "allow" | "redirect" | "refuse";
  category: string;
};

/** Custom stream parts BenNet attaches to each assistant message. */
export type BenNetDataParts = {
  guard: Guard;
  suggestions: string[];
};

export type BenNetMessage = UIMessage<unknown, BenNetDataParts>;
