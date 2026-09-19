"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Eye } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type Look = {
  id: string;
  label: string;
  image: StaticImageData;
  /** Colors of the lights in this look, shown as dots on the tab. */
  lights?: string[];
};

/**
 * A product shot that can be switched between variants in place. The first
 * look is the untouched original; holding the pointer (or Space) anywhere on
 * the image shows it until released, for a quick before/after.
 */
export function LookSwitcher({
  looks,
  alt,
  className,
}: {
  looks: [original: Look, ...rest: Look[]];
  alt: string;
  className?: string;
}) {
  const [original] = looks;
  const [activeId, setActiveId] = useState(looks[1]?.id ?? original.id);
  const [isHolding, setIsHolding] = useState(false);

  const active = looks.find((look) => look.id === activeId) ?? original;
  const shown = isHolding ? original : active;
  const canCompare = active.id !== original.id;

  const hold = () => canCompare && setIsHolding(true);
  const release = () => setIsHolding(false);

  /** Press-and-hold handlers, shared by the image and the compare button. */
  const holdHandlers = {
    onPointerDown: hold,
    onPointerUp: release,
    onPointerLeave: release,
    onPointerCancel: release,
    onKeyDown: (event: React.KeyboardEvent) => {
      if (event.key === " " && !event.repeat) {
        event.preventDefault();
        hold();
      }
    },
    onKeyUp: (event: React.KeyboardEvent) => event.key === " " && release(),
    onContextMenu: (event: React.MouseEvent) => event.preventDefault(),
  };

  return (
    <div className={cn("flex w-full flex-col items-center gap-6", className)}>
      <div
        role="button"
        tabIndex={0}
        aria-label={`Hold to show the ${original.label.toLowerCase()}`}
        {...holdHandlers}
        className={cn(
          "relative w-full touch-none select-none outline-none",
          canCompare && "cursor-pointer",
        )}
        style={{
          aspectRatio: `${original.image.width} / ${original.image.height}`,
        }}
      >
        {looks.map((look, index) => (
          <Image
            key={look.id}
            src={look.image}
            alt={look.id === shown.id ? alt : ""}
            draggable={false}
            preload={index <= 1}
            sizes="(min-width: 1280px) 1152px, 100vw"
            className={cn(
              "absolute inset-0 size-full object-contain ease-out",
              look.id === shown.id ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Tabs
          value={activeId}
          onValueChange={(value) => setActiveId(String(value))}
          className="w-full max-w-sm"
        >
          <TabsList aria-label="Lighting look">
            {looks.map((look) => (
              <TabsTrigger
                key={look.id}
                value={look.id}
                className="whitespace-nowrap"
              >
                <LightDots lights={look.lights} />
                {look.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <button
          type="button"
          disabled={!canCompare}
          aria-pressed={isHolding}
          {...holdHandlers}
          className={cn(
            "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-medium whitespace-nowrap transition-[background-color,color,transform] duration-150 ease-out select-none touch-none outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 enabled:active:scale-[0.96]",
            isHolding
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70",
            !canCompare && "cursor-default opacity-40 hover:bg-neutral-100",
          )}
        >
          <Eye className="size-3.5" />
          {isHolding
            ? `Showing ${original.label.toLowerCase()}`
            : "Hold to compare"}
        </button>
      </div>
    </div>
  );
}

function LightDots({ lights }: { lights?: string[] }) {
  if (!lights?.length) {
    return (
      <span className="size-2.5 rounded-full border border-current opacity-50" />
    );
  }
  return (
    <span className="flex -space-x-1">
      {lights.map((color, index) => (
        <span
          key={index}
          className="size-2.5 rounded-full ring-1 ring-white/80"
          style={{ backgroundColor: color }}
        />
      ))}
    </span>
  );
}
