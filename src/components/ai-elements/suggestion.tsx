"use client";

/**
 * Adapted from Vercel AI Elements (https://elements.ai-sdk.dev/elements/suggestion).
 * Chips wrap instead of scrolling horizontally, which reads better in a
 * narrow chat panel, and the shadcn Button is a plain styled button.
 */
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type SuggestionsProps = ComponentProps<"div">;

export const Suggestions = ({ className, ...props }: SuggestionsProps) => (
  <div className={cn("flex flex-wrap gap-1.5", className)} {...props} />
);

export type SuggestionProps = Omit<ComponentProps<"button">, "onClick"> & {
  suggestion: string;
  onClick?: (suggestion: string) => void;
};

export const Suggestion = ({
  suggestion,
  onClick,
  className,
  children,
  ...props
}: SuggestionProps) => (
  <button
    type="button"
    onClick={() => onClick?.(suggestion)}
    className={cn(
      "rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-left text-[13px] leading-snug text-neutral-700",
      "transition-[background-color,border-color] duration-150 ease-out hover:border-neutral-300 hover:bg-neutral-50",
      "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children ?? suggestion}
  </button>
);
