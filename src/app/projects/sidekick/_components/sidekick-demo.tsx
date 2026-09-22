import {
  ArrowRight,
  ArrowUp,
  Bookmark,
  BookOpen,
  Bot,
  Brain,
  Check,
  ChevronDown,
  Paperclip,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion";
import { AssistantBlock, ToolCall, UserMessage } from "./chat";
import { cn } from "@/lib/utils";

/** Fictional account. Numbers are illustrative. */
const CAMPAIGNS = [
  { name: "Brand – Exact", roas: 5.8, spend: 3120, highlight: true },
  { name: "Shopping – Bestsellers", roas: 3.4, spend: 8940 },
  { name: "Retargeting – 30 d", roas: 2.9, spend: 2260 },
  { name: "Competitor – Phrase", roas: 1.6, spend: 1870 },
  { name: "Generic – Broad", roas: 0.9, spend: 2140, highlight: true },
];
const ROAS_MAX = 6;

/**
 * A staged Sidekick conversation: question, the agent's working steps
 * including a sub-agent, an answer with a chart, and a write action waiting
 * for human confirmation. Blocks reveal one after another when in view.
 */
export function SidekickDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-full rounded-3xl bg-neutral-100 p-3 sm:p-6", className)}
    >
      <div
        data-demo-window
        className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200"
      >
        <header className="flex items-center justify-between border-b border-neutral-100 px-5 py-3">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
            <span className="flex size-6 items-center justify-center rounded-full bg-neutral-900 text-white">
              <Sparkles className="size-3.5" />
            </span>
            Sidekick
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Acme Outdoor · Google Ads
          </span>
        </header>

        <div className="flex flex-col gap-5 px-5 py-5 sm:px-6">
          <Reveal className="flex justify-end">
            <UserMessage>
              What are some quick wins to improve ROAS this month?
            </UserMessage>
          </Reveal>

          <Reveal delay={0.15}>
            <AssistantBlock>
              <Steps>
                <Step
                  icon={BookOpen}
                  label="Loaded skill"
                  detail="Performance review"
                />
                <Step
                  icon={Brain}
                  label="Recalled memory"
                  detail="TV campaign started Jan 5, 2026"
                />
                <Step icon={Bot} label="Started Data Analysis Agent" open>
                  <SubSteps>
                    <ToolCall code="get_campaign_metrics" args="last_30_days" />
                    <ToolCall
                      code="get_campaign_metrics"
                      args="previous_period"
                    />
                    <ToolCall code="get_search_terms" args="conversions = 0" />
                    <p className="pt-1 text-xs text-neutral-500">
                      Compared 12 campaigns, found 3 opportunities. Returning to
                      main agent.
                    </p>
                  </SubSteps>
                </Step>
              </Steps>
            </AssistantBlock>
          </Reveal>

          <Reveal delay={0.3}>
            <AssistantBlock>
              <p className="text-sm leading-relaxed text-neutral-700">
                Three things stand out in the last 30 days. Brand search is
                capped while Generic keywords burn budget below break-even.
              </p>
              <RoasChart />
              <ol className="flex flex-col gap-2 text-sm text-neutral-700">
                <Win n={1}>
                  <strong>Raise the budget on Brand – Exact.</strong> It hit its
                  cap on 6 of the last 7 days at 5.8× ROAS.
                </Win>
                <Win n={2}>
                  <strong>Pause Generic – Broad.</strong> €2,140 spent at 0.9×,
                  down from 1.7× before the TV campaign shifted demand to brand
                  terms.
                </Win>
                <Win n={3}>
                  <strong>Add 41 negatives.</strong> Search terms with spend but
                  zero conversions, mostly “free” and “used” queries.
                </Win>
              </ol>
            </AssistantBlock>
          </Reveal>

          <Reveal delay={0.45}>
            <AssistantBlock>
              <ConfirmCard />
              <p className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
                <Bookmark className="size-3.5" />
                Saved as template “Monthly quick wins”. Ask for it any time.
              </p>
            </AssistantBlock>
          </Reveal>
        </div>

        <footer className="border-t border-neutral-100 px-5 py-3 sm:px-6">
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 text-sm text-neutral-400">
            <Paperclip className="size-4" />
            <span className="flex-1">Ask about your account…</span>
            <span className="flex size-7 items-center justify-center rounded-full bg-neutral-900 text-white">
              <ArrowUp className="size-3.5" />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Steps({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-1.5">{children}</ul>;
}

function Step({
  icon: Icon,
  label,
  detail,
  open,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  detail?: string;
  open?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <li className="rounded-xl border border-neutral-200 text-sm">
      <div className="flex items-center gap-2 px-3 py-2">
        <Icon className="size-3.5 text-neutral-500" />
        <span className="font-medium text-neutral-700">{label}</span>
        {detail && (
          <span className="truncate text-neutral-500">· {detail}</span>
        )}
        <span className="ml-auto flex items-center gap-1 text-neutral-400">
          <Check className="size-3.5" />
          <ChevronDown className={cn("size-3.5", open && "rotate-180")} />
        </span>
      </div>
      {open && children}
    </li>
  );
}

function SubSteps({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5 border-t border-neutral-100 bg-neutral-50 px-3 py-2.5">
      <span className="text-[11px] font-medium text-neutral-400">
        Data Analysis Agent
      </span>
      {children}
    </div>
  );
}

function Win({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 leading-relaxed [&_strong]:font-medium [&_strong]:text-neutral-800">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs text-neutral-600">
        {n}
      </span>
      <span>{children}</span>
    </li>
  );
}

/** ROAS by campaign as horizontal bars, the two actionable ones emphasised. */
function RoasChart() {
  return (
    <figure className="rounded-xl border border-neutral-200 p-4">
      <figcaption className="mb-3 flex items-baseline justify-between text-xs">
        <span className="font-medium text-neutral-700">ROAS by campaign</span>
        <span className="text-neutral-400">Last 30 days</span>
      </figcaption>
      <ul className="flex flex-col gap-2">
        {CAMPAIGNS.map((c) => (
          <li
            key={c.name}
            className="grid grid-cols-[9rem_1fr_2.5rem] items-center gap-3 text-xs"
          >
            <span className="truncate text-neutral-600">{c.name}</span>
            <span className="relative h-3 rounded-r-[3px] bg-neutral-100">
              <span
                className={cn(
                  "absolute inset-y-0 left-0 rounded-r-[3px]",
                  c.highlight ? "bg-neutral-800" : "bg-neutral-300",
                )}
                style={{ width: `${(c.roas / ROAS_MAX) * 100}%` }}
              />
            </span>
            <span className="text-right tabular-nums text-neutral-700">
              {c.roas.toFixed(1)}×
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function ConfirmCard() {
  return (
    <div className="rounded-xl border border-neutral-200 p-4">
      <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-neutral-500">
        <ShieldCheck className="size-3.5" />
        Needs your confirmation
      </div>
      <p className="text-sm text-neutral-700">
        Apply quick win 1 to the account:{" "}
        <strong className="font-medium text-neutral-800">
          raise the daily budget on Brand – Exact.
        </strong>
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-neutral-50 px-3 py-2 text-xs">
        <span className="text-neutral-500">Daily budget</span>
        <span className="flex items-center gap-2 font-medium tabular-nums text-neutral-800">
          <span className="text-neutral-400 line-through">€110.00</span>
          <ArrowRight className="size-3 text-neutral-400" />
          €165.00
        </span>
      </div>

      <div className="mt-3 flex gap-2">
        <span className="rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white">
          Apply in Google Ads
        </span>
        <span className="rounded-full border border-neutral-200 px-3.5 py-1.5 text-xs font-medium text-neutral-600">
          Cancel
        </span>
      </div>
    </div>
  );
}
