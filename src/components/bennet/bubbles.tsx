"use client";

import { ShieldAlert, ShieldOff } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { EASE_OUT } from "@/components/motion";
import type { BenNetMessage, Guard } from "@/lib/bennet/types";

/** Entrance for a bubble: a short lift and fade, skipped for bubbles that were already there. */
function useEnter(animate: boolean) {
  const reduce = useReducedMotion();
  return {
    initial: animate && !reduce ? { opacity: 0, y: 6 } : false,
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: EASE_OUT },
  } as const;
}

/** A blank line in the reply becomes a new bubble, like sending two texts in a row. */
function splitBubbles(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function UserMessage({
  message,
  animate,
}: {
  message: BenNetMessage;
  animate: boolean;
}) {
  const enter = useEnter(animate);
  const text = message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n");

  return (
    <Message from="user">
      <motion.div {...enter} className="flex max-w-[85%] justify-end">
        <MessageContent className="whitespace-pre-wrap">{text}</MessageContent>
      </motion.div>
    </Message>
  );
}

export function AssistantMessage({
  message,
  streaming,
  animate,
}: {
  message: BenNetMessage;
  /** Whether this message is still receiving text. */
  streaming: boolean;
  animate: boolean;
}) {
  const enter = useEnter(animate);
  const text = message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
  const guard = message.parts.find((part) => part.type === "data-guard")?.data;
  const bubbles = splitBubbles(text);

  if (bubbles.length === 0) return null;

  return (
    <Message from="assistant">
      {guard && guard.verdict !== "allow" && <GuardLabel guard={guard} />}
      {bubbles.map((bubble, index) => (
        <motion.div key={index} {...enter} className="flex max-w-[85%]">
          <MessageContent>
            <MessageResponse
              mode="streaming"
              isAnimating={streaming && index === bubbles.length - 1}
            >
              {bubble}
            </MessageResponse>
          </MessageContent>
        </motion.div>
      ))}
    </Message>
  );
}

/** Makes the guardrail visible: a small note above replies that were redirected or refused. */
function GuardLabel({ guard }: { guard: Guard }) {
  const refused = guard.verdict === "refuse";
  const Icon = refused ? ShieldOff : ShieldAlert;
  return (
    <div
      className="mb-0.5 ml-1 flex items-center gap-1 text-[11px] text-neutral-400"
      title={`Guardrail: classified as ${guard.category}`}
    >
      <Icon className="size-3" aria-hidden />
      {refused ? "Blocked by guardrail" : "Off-topic, redirected"}
    </div>
  );
}

export function TypingIndicator() {
  const enter = useEnter(true);
  return (
    <Message from="assistant">
      <motion.div {...enter} className="flex">
        <MessageContent
          className="flex h-9 items-center gap-1 px-3.5"
          aria-label="BenNet is typing"
        >
          <span className="bennet-dot" />
          <span className="bennet-dot [animation-delay:150ms]" />
          <span className="bennet-dot [animation-delay:300ms]" />
        </MessageContent>
      </motion.div>
    </Message>
  );
}

export function ErrorBubble({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  const enter = useEnter(true);
  return (
    <Message from="assistant">
      <motion.div {...enter} className="flex max-w-[85%]">
        <div className="rounded-2xl rounded-bl-md border border-dashed border-neutral-300 px-3.5 py-2 text-[13px] leading-snug text-neutral-500">
          {message}{" "}
          <button
            type="button"
            onClick={onRetry}
            className="font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-800"
          >
            Retry
          </button>
        </div>
      </motion.div>
    </Message>
  );
}
