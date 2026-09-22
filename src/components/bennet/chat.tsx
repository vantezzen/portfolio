"use client";

import { useChat, type Chat } from "@ai-sdk/react";
import { RotateCcw, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import headImage from "@/assets/head.jpeg";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { EASE_OUT } from "@/components/motion";
import { bennet } from "@/content/bennet/persona";
import { LIMITS } from "@/lib/bennet/schema";
import type { BenNetMessage } from "@/lib/bennet/types";
import {
  AssistantMessage,
  ErrorBubble,
  TypingIndicator,
  UserMessage,
} from "./bubbles";
import { Composer } from "./composer";

/** The opening bubble plus its starter chips. Ours, not the model's. */
export function createWelcome(): BenNetMessage {
  return {
    id: "welcome",
    role: "assistant",
    parts: [
      { type: "text", text: bennet.welcome },
      { type: "data-suggestions", id: "suggestions", data: bennet.starters },
    ],
  };
}

export function BenNetChat({
  chat,
  onClose,
}: {
  chat: Chat<BenNetMessage>;
  onClose: () => void;
}) {
  const {
    messages,
    sendMessage,
    status,
    error,
    stop,
    regenerate,
    setMessages,
    clearError,
  } = useChat({ chat });

  // Messages that were already in the chat when the panel opened don't
  // animate in again.
  const [seenIds] = useState(() => new Set(messages.map((m) => m.id)));

  const busy = status === "submitted" || status === "streaming";
  const last = messages.at(-1);
  const lastHasText =
    last?.role === "assistant" &&
    last.parts.some((part) => part.type === "text" && part.text.trim());
  const showTyping =
    status === "submitted" || (status === "streaming" && !lastHasText);

  const suggestions =
    status === "ready" && !error && last?.role === "assistant"
      ? (last.parts.find((part) => part.type === "data-suggestions")?.data ??
        [])
      : [];

  const full = messages.length >= LIMITS.conversation - 1;

  function send(text: string) {
    if (busy || full) return;
    clearError();
    void sendMessage({ text });
  }

  function reset() {
    stop();
    clearError();
    setMessages([createWelcome()]);
  }

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3">
        <span className="relative shrink-0">
          <Image
            src={headImage}
            alt=""
            className="size-9 rounded-full object-cover"
          />
          <span
            className="absolute -right-px -bottom-px size-2.5 rounded-full border-2 border-white bg-emerald-500"
            aria-hidden
          />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <h2 className="text-[15px] font-medium text-neutral-800">
            {bennet.name}
          </h2>
          <p className="text-[12px] text-neutral-500">
            {busy ? <Shimmer duration={1.4}>typing…</Shimmer> : bennet.tagline}
          </p>
        </div>
        {messages.length > 1 && (
          <IconButton label="Start over" onClick={reset}>
            <RotateCcw className="size-4" />
          </IconButton>
        )}
        <IconButton label="Close chat" onClick={onClose}>
          <X className="size-[18px]" />
        </IconButton>
      </header>

      <Conversation className="min-h-0 flex-1">
        <ConversationContent className="gap-3 px-4 py-4">
          {messages.map((message) =>
            message.role === "user" ? (
              <UserMessage
                key={message.id}
                message={message}
                animate={!seenIds.has(message.id)}
              />
            ) : (
              <AssistantMessage
                key={message.id}
                message={message}
                streaming={status === "streaming" && message.id === last?.id}
                animate={!seenIds.has(message.id)}
              />
            ),
          )}

          {showTyping && <TypingIndicator />}

          {error && (
            <ErrorBubble
              message={error.message}
              onRetry={() => {
                clearError();
                void regenerate();
              }}
            />
          )}

          {suggestions.length > 0 && last && (
            <SuggestionRow
              key={last.id}
              items={suggestions}
              onPick={send}
              disabled={full}
            />
          )}

          {full && (
            <p className="px-1 text-center text-[12px] text-neutral-400">
              That was a long one. Start a fresh chat to keep going.
            </p>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <Composer busy={busy} disabled={full} onSend={send} onStop={stop} />

      <p className="px-4 pb-2.5 text-center text-[11px] leading-snug text-neutral-400">
        AI stand-in, can be wrong. Only talks about Bennett.
      </p>
    </div>
  );
}

/** Follow-up chips, staggered in after the reply lands. */
function SuggestionRow({
  items,
  onPick,
  disabled,
}: {
  items: string[];
  onPick: (text: string) => void;
  disabled: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <Suggestions className="mt-1 pl-0.5">
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={reduce ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.22,
            ease: EASE_OUT,
            delay: reduce ? 0 : 0.05 + index * 0.05,
          }}
        >
          <Suggestion suggestion={item} onClick={onPick} disabled={disabled} />
        </motion.div>
      ))}
    </Suggestions>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex size-8 shrink-0 items-center justify-center rounded-full text-neutral-500 transition-colors duration-150 ease-out hover:bg-neutral-100 hover:text-neutral-800 active:scale-95"
    >
      {children}
    </button>
  );
}
