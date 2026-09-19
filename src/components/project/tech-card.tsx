"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { EASE_OUT } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * Dark card for the short technical block. It stands apart from the rest of
 * the page so readers who do not care can skip it at a glance.
 */
export function TechCard({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-neutral-900 p-6 text-neutral-300 sm:p-8">
      {title && <h3 className="text-lg font-medium text-white">{title}</h3>}
      {children}
    </div>
  );
}

export type PipelineStep = {
  label: string;
  detail: string;
  /** Where this step runs, e.g. "Neural Engine" or "GPU". */
  runsOn?: string;
};

function pipelineVariants(reduceMotion: boolean) {
  const t = (duration: number) =>
    reduceMotion ? { duration: 0 } : { duration, ease: EASE_OUT };
  return {
    step: {
      hidden: {},
      show: { transition: { staggerChildren: reduceMotion ? 0 : 0.11 } },
    },
    dot: { hidden: { scale: 0 }, show: { scale: 1, transition: t(0.35) } },
    track: {
      hidden: { scaleX: 0, scaleY: 0 },
      show: { scaleX: 1, scaleY: 1, transition: t(0.45) },
    },
    text: {
      hidden: { opacity: 0, y: 6 },
      show: { opacity: 1, y: 0, transition: t(0.4) },
    },
  } satisfies Record<string, Variants>;
}

/**
 * The stages a frame passes through, drawn as stops on a single track:
 * horizontal on wider screens, a vertical rail on phones. The track draws
 * itself stop by stop the first time it scrolls into view.
 */
export function Pipeline({ steps }: { steps: PipelineStep[] }) {
  const variants = pipelineVariants(useReducedMotion() ?? false);
  return (
    <motion.ol
      className="flex flex-col sm:grid sm:grid-flow-col sm:auto-cols-fr"
      variants={variants.step}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -64px 0px" }}
    >
      {steps.map((step, index) => {
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;
        return (
          <motion.li
            key={step.label}
            className="flex gap-4 sm:flex-col sm:gap-4"
            variants={variants.step}
          >
            {step.runsOn && (
              <motion.span
                variants={variants.text}
                className="w-24 shrink-0 text-[11px] text-neutral-500 sm:flex sm:h-8 sm:w-auto sm:items-end sm:justify-center sm:text-center"
              >
                {step.runsOn}
              </motion.span>
            )}

            <div className="flex w-2.5 shrink-0 flex-col items-center sm:w-auto sm:flex-row">
              <Track
                hidden={isFirst}
                variants={variants.track}
                className="h-[5px] flex-none sm:h-px sm:flex-1"
              />
              <motion.span
                variants={variants.dot}
                className="size-2.5 shrink-0 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.12)]"
              />
              <Track
                hidden={isLast}
                variants={variants.track}
                className="flex-1"
              />
            </div>

            <motion.div
              variants={variants.text}
              className="flex flex-col gap-1 pb-8 sm:items-center sm:px-3 sm:pb-0 sm:text-center"
            >
              <span className="text-sm font-medium text-white">
                {step.label}
              </span>
              <span className="text-sm text-neutral-400">{step.detail}</span>
            </motion.div>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}

function Track({
  hidden,
  variants,
  className,
}: {
  hidden: boolean;
  variants: Variants;
  className?: string;
}) {
  return (
    <motion.span
      variants={variants}
      className={cn(
        "w-px origin-top-left bg-white/15 sm:h-px sm:w-auto",
        className,
        hidden && "invisible",
      )}
    />
  );
}

export function TechText({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-prose text-sm leading-relaxed text-neutral-400 [&_a]:text-white [&_a]:underline [&_a]:decoration-neutral-600 [&_a]:underline-offset-2 hover:[&_a]:decoration-white">
      {children}
    </p>
  );
}
