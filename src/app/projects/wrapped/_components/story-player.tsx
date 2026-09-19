"use client";

import type { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "@mantine/hooks";
import { cn } from "@/lib/utils";
import { PhoneFrame, PhoneScreenshot } from "@/components/project";

const INTERVAL_MS = 3500;

/**
 * Plays a sequence of phone screens like a story: the current screen sits in
 * the middle at full size, its neighbours peek in from the sides. Advances on
 * its own while visible, pauses on hover, and can be stepped by hand.
 */
export function StoryPlayer({
  screens,
  className,
}: {
  screens: StaticImageData[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  /** null = not chosen yet, so autoplay follows the reduced-motion preference. */
  const [playingChoice, setPlayingChoice] = useState<boolean | null>(null);
  const reducedMotion = useReducedMotion(false);
  const playing = playingChoice ?? !reducedMotion;
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const count = screens.length;

  const step = (delta: number) =>
    setIndex((current) => (current + delta + count) % count);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || hovering || !inView) return;
    const timer = setInterval(() => step(1), INTERVAL_MS);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, hovering, inView, count]);

  return (
    <div
      ref={rootRef}
      className={cn(
        "flex w-full flex-col items-center gap-6 overflow-hidden rounded-3xl bg-neutral-100 py-10 sm:py-14",
        className,
      )}
    >
      <div
        className="relative h-[450px] w-full sm:h-[540px]"
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={() => setHovering(false)}
      >
        {screens.map((screen, i) => {
          // Signed distance from the active screen, wrapping around the ends.
          const offset =
            ((i - index + count + Math.floor(count / 2)) % count) -
            Math.floor(count / 2);
          if (Math.abs(offset) > 2) return null;
          const isActive = offset === 0;
          return (
            <button
              key={i}
              type="button"
              tabIndex={isActive ? -1 : 0}
              aria-label={isActive ? undefined : `Show screen ${i + 1}`}
              aria-hidden={Math.abs(offset) === 2}
              onClick={() => !isActive && setIndex(i)}
              className={cn(
                "absolute top-1/2 left-1/2 w-[210px] transition-[transform,opacity] duration-500 ease-out outline-none motion-reduce:transition-none sm:w-[250px]",
                isActive
                  ? "z-10 cursor-default drop-shadow-2xl"
                  : "cursor-pointer opacity-40 hover:opacity-60 focus-visible:opacity-60",
                Math.abs(offset) === 2 && "opacity-0",
              )}
              style={{
                transform: `translate(calc(-50% + ${offset * 112}%), -50%) scale(${isActive ? 1 : 0.86})`,
              }}
            >
              <PhoneFrame>
                <PhoneScreenshot
                  image={screen}
                  alt={isActive ? `Wrapped screen ${i + 1} of ${count}` : ""}
                  preload={i < 2}
                />
              </PhoneFrame>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-1 text-sm text-neutral-500">
        <IconButton label="Previous screen" onClick={() => step(-1)}>
          <ChevronLeft className="size-4" />
        </IconButton>
        <span className="w-16 text-center tabular-nums">
          {index + 1} / {count}
        </span>
        <IconButton label="Next screen" onClick={() => step(1)}>
          <ChevronRight className="size-4" />
        </IconButton>
        <IconButton
          label={playing ? "Pause" : "Play"}
          onClick={() => setPlayingChoice(!playing)}
          className="ml-2"
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </IconButton>
      </div>
    </div>
  );
}

function IconButton({
  label,
  onClick,
  className,
  children,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex size-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-white hover:text-neutral-800",
        className,
      )}
    >
      {children}
    </button>
  );
}
