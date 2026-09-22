"use client";

import { ArrowUp, Square } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { LIMITS } from "@/lib/bennet/schema";
import { cn } from "@/lib/utils";

const ACTION_BUTTON =
  "flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition-[background-color,color,transform] duration-150 ease-out hover:bg-neutral-700 active:scale-[0.94] disabled:bg-neutral-200 disabled:text-neutral-400 disabled:active:scale-100";

export function Composer({
  busy,
  disabled,
  onSend,
  onStop,
}: {
  /** A reply is being generated: show stop instead of send. */
  busy: boolean;
  /** The conversation is full; input is locked. */
  disabled: boolean;
  onSend: (text: string) => void;
  onStop: () => void;
}) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Grow with the text, up to about four lines.
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, [value]);

  const canSend = value.trim().length > 0 && !busy && !disabled;

  function submit() {
    if (!canSend) return;
    onSend(value.trim());
    setValue("");
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      submit();
    }
  }

  const remaining = LIMITS.message - value.length;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
      className="px-3 pt-1 pb-2"
    >
      <div
        className={cn(
          "flex items-end gap-2 rounded-[22px] border border-neutral-200 bg-white py-1.5 pr-1.5 pl-4",
          "transition-[border-color,box-shadow] duration-150 ease-out focus-within:border-neutral-400 focus-within:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]",
          disabled && "opacity-60",
        )}
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onKeyDown}
          maxLength={LIMITS.message}
          disabled={disabled}
          autoFocus
          placeholder={
            disabled
              ? "Start a new chat to keep going"
              : "Ask me anything about Bennett"
          }
          aria-label="Message BenNet"
          className="max-h-[120px] min-h-6 flex-1 resize-none bg-transparent py-1 text-[14px] leading-6 text-neutral-800 outline-none placeholder:text-neutral-400 disabled:cursor-not-allowed"
        />
        {busy ? (
          <button
            type="button"
            onClick={onStop}
            aria-label="Stop generating"
            className={ACTION_BUTTON}
          >
            <Square className="size-3 fill-current" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canSend}
            aria-label="Send"
            className={ACTION_BUTTON}
          >
            <ArrowUp className="size-4" strokeWidth={2.5} />
          </button>
        )}
      </div>
      {remaining <= 80 && (
        <div className="mt-1 pr-3 text-right text-[11px] tabular-nums text-neutral-400">
          {remaining} left
        </div>
      )}
    </form>
  );
}
