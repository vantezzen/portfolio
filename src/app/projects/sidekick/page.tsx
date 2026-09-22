import type { Metadata } from "next";
import {
  Pipeline,
  ProjectFooter,
  ProjectHeader,
  ProjectNav,
  ProjectSection,
  ProjectShowcase,
  Prose,
  TagList,
  TechCard,
  TechCode,
  TechText,
} from "@/components/project";
import { PageContextDemo } from "./_components/page-context-demo";
import { SidekickDemo } from "./_components/sidekick-demo";

export const metadata: Metadata = {
  title: "WaveMetrics Sidekick",
  description:
    "An AI teammate for Google Ads accounts: it analyses performance, writes reports, and acts on the account with a human confirming every write.",
};

export default function SidekickPage() {
  return (
    <main className="flex flex-col items-center gap-20 pb-24 sm:gap-24">
      <ProjectNav />

      <ProjectHeader
        title="WaveMetrics Sidekick"
        tagline="An AI teammate inside the Google Ads dashboard. Ask it about the account, get analysis and reports, and let it act, with you confirming every write."
        meta={[
          { label: "Built at", value: "Smarketer" },
          { label: "Role", value: "Fullstack Developer" },
          { label: "Stack", value: "Vercel Eve, MCP, LangFuse" },
        ]}
      />

      <ProjectShowcase>
        <SidekickDemo className="max-w-3xl" />
      </ProjectShowcase>

      <ProjectSection title="About">
        <Prose>
          <p>
            WaveMetrics is Smarketer’s Google Ads dashboard that gives deeper
            insight into accounts. With Sidekick, we wanted to bring in an
            actually useful AI agent that helps you for daily tasks. You might
            ask things like “what are quick wins for my ROAS?” or “write me a
            30-day report that I can present in the team”, and it answers with
            real numbers from the account, charts, and, when asked, changes to
            the account itself.
          </p>
          <p>
            It is the most practical AI work I have done so far: an agent that
            can do everything the dashboard can, kept trustworthy by making
            every sensitive action wait for a person.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection title="Tech">
        <TechCard>
          <Pipeline
            steps={[
              {
                label: "Agent network",
                detail: "Main agent and specialized subagents answer",
                runsOn: "Vercel Eve",
              },
              {
                label: "Chat UI",
                detail:
                  "Answers render as dashboard components via json-render",
                runsOn: "Next.js",
              },
              {
                label: "Observability",
                detail: "Prompts and agent decisions are logged for analysis",
                runsOn: "LangFuse",
              },
              {
                label: "MCP server",
                detail: "Every dashboard read and write as a typed tool",
                runsOn: "WaveMetrics backend",
              },
              {
                label: "Account",
                detail: "Human-in-the-loop for sensitive actions",
                runsOn: "Google Ads",
              },
            ]}
          />
          <TechText>
            The agent talks to our backend through a custom MCP server, so it
            has the same reach as the dashboard, including creating custom
            alerts. Anything that changes the account goes through a
            human-in-the-loop confirmation first. Prompts live in LangFuse next
            to a library of skills the agent pulls in when a task needs them,
            which keeps the base prompt small.
          </TechText>
          <TechText>
            It remembers account context between conversations, like when a TV
            campaign started, and can save the current task as a template so the
            same report or check is one message away next month. For heavier
            work the main agent delegates: for example a Data Analysis Agent
            gathers and crunches the data and hands the result back for the main
            agent to present, with charts and tables rendered as native
            dashboard components.
          </TechText>
          <TagList
            tone="dark"
            tags={[
              "TypeScript",
              "Vercel Eve",
              "MCP",
              "LangFuse",
              "json-render",
              "Multi-agent",
            ]}
          />
        </TechCard>
      </ProjectSection>

      <ProjectSection title="Page context">
        <Prose>
          <p>
            Sidekick knows what is on your screen. It can reference the chart or
            table in front of you in its answers, and you can hand it a specific
            element with a picker that works like the one in Chrome DevTools.
          </p>
        </Prose>
        <PageContextDemo />
      </ProjectSection>

      <ProjectSection title="How page context works">
        <TechCard>
          <Pipeline
            steps={[
              {
                label: "ContextElement",
                detail:
                  "Wraps a chart, table or settings box together with an LLM-friendly JSON version of it",
                runsOn: "React",
              },
              {
                label: "Page provider",
                detail:
                  "Keeps the list of registered elements and drives the picker overlay",
                runsOn: "React context",
              },
              {
                label: "Request",
                detail:
                  "Compressed page context is sent when submitting a message",
                runsOn: "Eve SDK",
              },
              {
                label: "get_element_context",
                detail:
                  "The agent fetches an element's JSON only when it needs it",
                runsOn: "Eve tool",
              },
            ]}
          />
          <TechCode>{`<ContextElement title="ROAS daily chart" context={roasByDay}>
  <Chart data={roasByDay} />
</ContextElement>`}</TechCode>
          <TechText>
            The agent reads structured data instead of a rendered chart, which
            is both cheaper in tokens and more accurate, and the list of titles
            keeps the base prompt small until it actually needs an element.
            Non-data elements like a filter selector can register the same way,
            so the AI knows what you&apos;ve selected.
          </TechText>
        </TechCard>
      </ProjectSection>

      <ProjectFooter currentHref="/projects/sidekick" />
    </main>
  );
}
