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
  TechText,
} from "@/components/project";
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

      <ProjectFooter currentHref="/projects/sidekick" />
    </main>
  );
}
