"use client";

/**
 * Adapted from Vercel AI Elements (https://elements.ai-sdk.dev/elements/shimmer).
 * Always renders a span; the original's `as` prop created components during
 * render, which the React Compiler rejects.
 */
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { memo } from "react";
import { cn } from "@/lib/utils";

export interface TextShimmerProps {
  children: string;
  className?: string;
  duration?: number;
  spread?: number;
}

const ShimmerComponent = ({
  children,
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) => {
  const dynamicSpread = (children?.length ?? 0) * spread;

  return (
    <motion.span
      animate={{ backgroundPosition: "0% center" }}
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--color-background),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        className,
      )}
      initial={{ backgroundPosition: "100% center" }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage:
            "var(--bg), linear-gradient(var(--color-muted-foreground), var(--color-muted-foreground))",
        } as CSSProperties
      }
      transition={{
        duration,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      {children}
    </motion.span>
  );
};

export const Shimmer = memo(ShimmerComponent);
