import { Constrained } from "@/components/layout/constrained";
import { Section, SectionTitle } from "@/components/layout/section";
import { Entry, EntryList } from "@/components/entry";
import { smarketer } from "@/content/organizations";
import { formatDuration } from "@/lib/date";

export function Work() {
  return (
    <Section id="work">
      <Constrained>
        <SectionTitle>Work experience</SectionTitle>

        <EntryList>
          <Entry
            organization={smarketer}
            title="Fullstack Developer"
            period="Oct 2025 – Present"
            note={formatDuration(new Date("2025-10-01"))}
          >
            Build AI-native product features and agent workflows using
            TypeScript, Python and modern LLM tooling, including subagents, MCP
            integrations, memory and durable execution across Next.js,
            Django/Laravel, PostgreSQL, Redis, AWS and Vercel
          </Entry>
          <Entry
            organization={smarketer}
            title="Working Student Fullstack Developer"
            period="May 2020 – Sep 2025"
            note={formatDuration(
              new Date("2020-05-01"),
              new Date("2025-09-01"),
            )}
          >
            Helped develop a scalable conversion measurement and attribution
            platform, including asynchronous processing and AWS-based ingestion
            infrastructure
          </Entry>
        </EntryList>
      </Constrained>
    </Section>
  );
}
