import { Check, Sparkles, Wrench } from "lucide-react";

/** Card art for Sidekick: one question, one tool call. The whole product in two lines. */
export function SidekickArt() {
  return (
    <div className="flex w-[78%] flex-col gap-3">
      <div className="flex justify-end">
        <span className="rounded-2xl rounded-br-md bg-neutral-900 px-4 py-2.5 text-[15px] leading-snug text-white">
          Quick wins for my ROAS?
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm">
          <Sparkles className="size-4" />
        </span>
        <span className="flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 font-mono text-[12px] text-neutral-600 shadow-sm">
          <Wrench className="size-3.5 shrink-0 text-neutral-400" />
          <span className="truncate">get_campaign_metrics</span>
          <Check className="ml-auto size-3.5 shrink-0 text-neutral-400" />
        </span>
      </div>
    </div>
  );
}
