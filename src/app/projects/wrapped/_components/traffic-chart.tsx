"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useEntrance } from "@/components/motion";
import { cn } from "@/lib/utils";
import { formatCompact } from "@/lib/format";
import access from "../access.json";

type Month = {
  month: string;
  visits: number;
  uniqueVisits: number;
  complete: boolean;
};

const months: Month[] = access;
const Y_MAX = 12_000_000;
const TICKS = [0, 4_000_000, 8_000_000, 12_000_000];
const LABEL_THRESHOLD = 1_500_000;

const monthName = (month: string) =>
  new Date(`${month}-01T00:00:00`).toLocaleString("en", {
    month: "short",
    year: "numeric",
  });

/**
 * Unique visitors per month as a column chart. Decembers are emphasised,
 * everything else is context.
 */
export function TrafficChart() {
  const [active, setActive] = useState<number | null>(null);
  const barEntrance = useEntrance(0.6);
  const labelEntrance = useEntrance(0.4);

  return (
    <figure className="flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="relative flex h-56 w-8 shrink-0 flex-col justify-between text-right text-[11px] text-neutral-400">
          {[...TICKS].reverse().map((tick) => (
            <span
              key={tick}
              className="-translate-y-1/2 leading-none first:translate-y-0 last:-translate-y-full"
            >
              {tick === 0 ? "0" : formatCompact(tick, 0)}
            </span>
          ))}
        </div>

        <div className="relative h-56 flex-1">
          {TICKS.map((tick) => (
            <div
              key={tick}
              aria-hidden
              className="absolute inset-x-0 border-t border-neutral-200"
              style={{ bottom: `${(tick / Y_MAX) * 100}%` }}
            />
          ))}

          <ol className="absolute inset-0 flex items-end gap-[2px] sm:gap-[3px]">
            {months.map((entry, index) => {
              const height = (entry.uniqueVisits / Y_MAX) * 100;
              const isDecember = entry.month.endsWith("-12");
              const isActive = active === index;
              const position = index / (months.length - 1);
              const alignLeft = position < 0.25;
              const alignRight = position > 0.75;
              return (
                <li
                  key={entry.month}
                  tabIndex={0}
                  aria-label={`${monthName(entry.month)}: ${entry.uniqueVisits.toLocaleString("en")} unique visitors`}
                  onPointerEnter={() => setActive(index)}
                  onPointerLeave={() => setActive(null)}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  className="group relative flex h-full flex-1 items-end outline-none"
                >
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "0px 0px -48px 0px" }}
                    transition={{
                      ...barEntrance,
                      delay: barEntrance.duration ? index * 0.015 : 0,
                    }}
                    className={cn(
                      "w-full max-w-6 origin-bottom rounded-t-[3px] transition-colors",
                      isDecember ? "bg-neutral-900" : "bg-neutral-300",
                      isActive &&
                        (isDecember ? "bg-neutral-700" : "bg-neutral-400"),
                      !entry.complete && "opacity-50",
                    )}
                    style={{ height: `${Math.max(height, 0.6)}%` }}
                  />

                  {entry.uniqueVisits >= LABEL_THRESHOLD && isDecember && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "0px 0px -48px 0px" }}
                      transition={{
                        ...labelEntrance,
                        delay: labelEntrance.duration
                          ? index * 0.015 + 0.45
                          : 0,
                      }}
                      className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[11px] font-medium whitespace-nowrap text-neutral-700"
                      style={{ bottom: `calc(${height}% + 6px)` }}
                    >
                      {formatCompact(entry.uniqueVisits, 1)}
                    </motion.span>
                  )}

                  {isActive && (
                    <div
                      role="tooltip"
                      className={cn(
                        "pointer-events-none absolute z-10 flex flex-col gap-0.5 rounded-xl bg-white px-3 py-2 text-xs whitespace-nowrap shadow-lg shadow-black/10 ring-1 ring-neutral-200",
                        alignLeft
                          ? "left-0"
                          : alignRight
                            ? "right-0"
                            : "left-1/2 -translate-x-1/2",
                      )}
                      style={{
                        bottom: `calc(${Math.min(height, 82)}% + 28px)`,
                      }}
                    >
                      <span className="font-medium text-neutral-800">
                        {entry.uniqueVisits.toLocaleString("en")} unique
                        visitors
                      </span>
                      <span className="text-neutral-500">
                        {monthName(entry.month)} ·{" "}
                        {formatCompact(entry.visits, 1)} visits
                        {!entry.complete && " · partial month"}
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <ol
        className="ml-11 flex gap-[2px] text-[11px] text-neutral-400 sm:gap-[3px]"
        aria-hidden
      >
        {months.map((entry, index) => (
          <li key={entry.month} className="flex-1">
            {(index === 0 || entry.month.endsWith("-01")) &&
              entry.month.slice(0, 4)}
          </li>
        ))}
      </ol>
    </figure>
  );
}
