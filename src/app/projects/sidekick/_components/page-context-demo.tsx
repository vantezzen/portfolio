import { LayoutDashboard, MousePointer2, Scan, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { AssistantBlock, ToolCall, UserMessage } from "./chat";

/** Fictional week of ROAS. Thursday is the dip the conversation is about. */
const DAYS = [
  { day: "M", roas: 3.1 },
  { day: "T", roas: 3.4 },
  { day: "W", roas: 3.2 },
  { day: "T", roas: 1.9, highlight: true },
  { day: "F", roas: 2.0, highlight: true },
  { day: "S", roas: 3.0 },
  { day: "S", roas: 3.3 },
];
const ROAS_MAX = 4;

/**
 * Sidekick reading the page it sits on. A dashboard element gets picked with
 * the DevTools-style overlay, lands in the chat as context, and the agent
 * pulls the structured data behind it to answer.
 */
export function PageContextDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-full rounded-3xl bg-neutral-100 p-3 sm:p-6", className)}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
        <header className="flex items-center justify-between border-b border-neutral-100 px-5 py-3 text-sm">
          <div className="flex items-center gap-2 font-medium text-neutral-800">
            <LayoutDashboard className="size-4 text-neutral-500" />
            Performance Max
            <span className="font-normal text-neutral-400">· Acme Outdoor</span>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 sm:inline-flex">
            <Scan className="size-3.5" />
            Picking an element
          </span>
        </header>

        <div className="grid md:grid-cols-[3fr_2fr]">
          <Dashboard />
          <Chat />
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex flex-col gap-4 bg-neutral-50 p-5 sm:p-6">
      <Reveal className="relative">
        <Card title="ROAS daily">
          <RoasBars />
        </Card>
        <PickerOverlay label="ROAS daily chart" />
      </Reveal>

      <Reveal delay={0.1}>
        <Card title="Campaign settings">
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-xs">
            <Setting label="Daily budget" value="€165.00" />
            <Setting label="Bidding" value="Target ROAS · 400%" />
            <Setting label="Status" value="Enabled" />
          </dl>
        </Card>
      </Reveal>
    </div>
  );
}

function Chat() {
  return (
    <div className="flex flex-col border-t border-neutral-100 md:border-t-0 md:border-l">
      <div className="flex items-center gap-2 border-b border-neutral-100 px-5 py-3 text-sm font-medium text-neutral-800">
        <span className="flex size-6 items-center justify-center rounded-full bg-neutral-900 text-white">
          <Sparkles className="size-3.5" />
        </span>
        Sidekick
      </div>

      <div className="flex flex-1 flex-col gap-5 px-5 py-5">
        <Reveal delay={0.55} className="flex flex-col items-end gap-1.5">
          <ContextChip>ROAS daily chart</ContextChip>
          <UserMessage>Why does it dip here?</UserMessage>
        </Reveal>

        <Reveal delay={0.8}>
          <AssistantBlock>
            <div className="flex flex-col gap-1.5">
              <ToolCall code="get_element_context" args="1" />
              <ToolCall code="get_element_context" args="2" />
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">
              Thursday fell to 1.9× while spend stayed flat. That is the day the
              bidding target moved to 400% in your settings, so delivery pulled
              back before catching up on Saturday.
            </p>
          </AssistantBlock>
        </Reveal>
      </div>

      <div className="px-5 pb-4">
        <div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 text-sm text-neutral-400">
          <Scan className="size-4" />
          <span className="flex-1">Ask about this page…</span>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">
      <div className="mb-3 text-xs font-medium text-neutral-700">{title}</div>
      {children}
    </div>
  );
}

/** The DevTools-style selection: translucent fill, blue edge, a name tag. */
function PickerOverlay({ label }: { label: string }) {
  return (
    <Reveal
      delay={0.35}
      className="pointer-events-none absolute -inset-1 rounded-[14px] bg-blue-500/10 ring-2 ring-blue-500"
    >
      <span className="absolute -top-3 left-3 inline-flex items-center gap-1 rounded-md bg-blue-500 px-2 py-0.5 text-[11px] font-medium text-white shadow-sm">
        <MousePointer2 className="size-3" />
        {label}
      </span>
    </Reveal>
  );
}

function ContextChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-600">
      <Scan className="size-3 text-neutral-400" />
      {children}
    </span>
  );
}

function Setting({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-neutral-500">{label}</dt>
      <dd className="text-neutral-800">{value}</dd>
    </>
  );
}

function RoasBars() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex h-20 items-end gap-2">
        {DAYS.map((d, i) => (
          <span
            key={i}
            className={cn(
              "flex-1 rounded-t-[3px]",
              d.highlight ? "bg-neutral-800" : "bg-neutral-300",
            )}
            style={{ height: `${(d.roas / ROAS_MAX) * 100}%` }}
          />
        ))}
      </div>
      <div className="flex gap-2">
        {DAYS.map((d, i) => (
          <span
            key={i}
            className="flex-1 text-center text-[10px] text-neutral-400"
          >
            {d.day}
          </span>
        ))}
      </div>
    </div>
  );
}
