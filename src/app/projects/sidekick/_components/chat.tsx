import { Check, Sparkles, Wrench } from "lucide-react";

/** Chat primitives shared by the Sidekick demos. */

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[80%] rounded-2xl rounded-br-md bg-neutral-900 px-4 py-2.5 text-sm leading-relaxed text-white">
      {children}
    </p>
  );
}

export function AssistantBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
        <Sparkles className="size-3.5" />
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-3">{children}</div>
    </div>
  );
}

/** One finished tool call, e.g. `get_campaign_metrics(last_30_days)`. */
export function ToolCall({ code, args }: { code: string; args: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-neutral-600">
      <Wrench className="size-3 shrink-0 text-neutral-400" />
      <span className="truncate">
        {code}
        <span className="text-neutral-400">({args})</span>
      </span>
      <Check className="ml-auto size-3 shrink-0 text-neutral-400" />
    </div>
  );
}
