"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";

/** ease-out-cubic: quick start, soft landing. For elements entering the screen. */
export const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

/**
 * Transition for an entrance. Instant when the visitor prefers reduced
 * motion, so the element still reaches its final state without animating.
 *
 * Start states are always rendered (also on the server) so hydration matches;
 * reduced motion is handled by the transition, never by skipping `initial`.
 */
export function useEntrance(duration = 0.5, delay = 0): Transition {
  const reduceMotion = useReducedMotion();
  return reduceMotion
    ? { duration: 0, delay: 0 }
    : { duration, ease: EASE_OUT, delay };
}

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -64px 0px" }}
      transition={useEntrance(0.5, delay)}
    >
      {children}
    </motion.div>
  );
}

function staggerVariants(reduceMotion: boolean): {
  container: Variants;
  item: Variants;
} {
  return {
    container: {
      hidden: {},
      show: {
        transition: reduceMotion
          ? { staggerChildren: 0, delayChildren: 0 }
          : { staggerChildren: 0.07, delayChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      show: {
        opacity: 1,
        y: 0,
        transition: reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: EASE_OUT },
      },
    },
  };
}

/** Animates its `StaggerItem` children in one after another on mount. */
export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { container } = staggerVariants(useReducedMotion() ?? false);
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { item } = staggerVariants(useReducedMotion() ?? false);
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
