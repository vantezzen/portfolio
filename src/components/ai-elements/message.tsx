"use client";

/**
 * Adapted from Vercel AI Elements (https://elements.ai-sdk.dev/elements/message).
 * Kept: the Message / MessageContent primitives and the Streamdown-based
 * MessageResponse. Dropped: branching, toolbars and tooltips, which need
 * shadcn primitives this site does not ship. Styling follows the site's
 * neutral palette and reads as chat bubbles.
 */
import type { UIMessage } from "ai";
import { memo, type ComponentProps, type HTMLAttributes } from "react";
import { Streamdown } from "streamdown";
import { cn } from "@/lib/utils";
import "streamdown/styles.css";

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  from: UIMessage["role"];
};

export const Message = ({ className, from, ...props }: MessageProps) => (
  <div
    className={cn(
      "group flex w-full flex-col gap-1",
      from === "user" ? "is-user items-end" : "is-assistant items-start",
      className,
    )}
    {...props}
  />
);

export type MessageContentProps = HTMLAttributes<HTMLDivElement>;

export const MessageContent = ({
  className,
  ...props
}: MessageContentProps) => (
  <div
    className={cn(
      "max-w-full rounded-2xl px-3.5 py-2 text-[14px] leading-[1.45] break-words",
      "group-[.is-user]:rounded-br-md group-[.is-user]:bg-neutral-900 group-[.is-user]:text-white",
      "group-[.is-assistant]:rounded-bl-md group-[.is-assistant]:bg-neutral-100 group-[.is-assistant]:text-neutral-800",
      className,
    )}
    {...props}
  />
);

export type MessageResponseProps = ComponentProps<typeof Streamdown>;

export const MessageResponse = memo(
  ({ className, ...props }: MessageResponseProps) => (
    <Streamdown
      className={cn("bennet-prose", className)}
      linkSafety={{ enabled: false }}
      {...props}
    />
  ),
  (prev, next) =>
    prev.children === next.children && prev.isAnimating === next.isAnimating,
);

MessageResponse.displayName = "MessageResponse";
