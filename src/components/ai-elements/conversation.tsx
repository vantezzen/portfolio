"use client";

/**
 * Adapted from Vercel AI Elements (https://elements.ai-sdk.dev/elements/conversation).
 * The shadcn Button was swapped for a plain button styled like the rest of this site,
 * and the download helper was dropped.
 */
import { ArrowDown } from "lucide-react";
import type { ComponentProps } from "react";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";
import { cn } from "@/lib/utils";

export type ConversationProps = ComponentProps<typeof StickToBottom>;

export const Conversation = ({ className, ...props }: ConversationProps) => (
  <StickToBottom
    className={cn("relative flex-1 overflow-y-hidden", className)}
    initial="smooth"
    resize="smooth"
    role="log"
    {...props}
  />
);

export type ConversationContentProps = ComponentProps<
  typeof StickToBottom.Content
>;

export const ConversationContent = ({
  className,
  ...props
}: ConversationContentProps) => (
  <StickToBottom.Content
    className={cn("flex flex-col gap-3 p-4", className)}
    {...props}
  />
);

export type ConversationScrollButtonProps = ComponentProps<"button">;

export const ConversationScrollButton = ({
  className,
  ...props
}: ConversationScrollButtonProps) => {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  if (isAtBottom) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to latest message"
      onClick={() => scrollToBottom()}
      className={cn(
        "absolute bottom-3 left-1/2 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm",
        "animate-in fade-in zoom-in-95 duration-200 ease-out",
        "transition-colors hover:bg-neutral-50 active:scale-95",
        className,
      )}
      {...props}
    >
      <ArrowDown className="size-4" />
    </button>
  );
};
