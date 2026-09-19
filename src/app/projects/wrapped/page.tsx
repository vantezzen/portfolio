import type { Metadata } from "next";
import { Tiktok } from "@thesvg/react";
import {
  ProjectFooter,
  ProjectHeader,
  ProjectNav,
  ProjectSection,
  ProjectShowcase,
  Prose,
  Stat,
  StatRow,
  TagList,
  TechCard,
  TechText,
} from "@/components/project";
import { formatCompact } from "@/lib/format";
import { StoryPlayer } from "./_components/story-player";
import { TrafficChart } from "./_components/traffic-chart";
import { screens } from "./_components/screens";
import access from "./access.json";

const WRAPPED_URL = "https://wrapped.vantezzen.io";

const peak = access.reduce((best, month) =>
  month.uniqueVisits > best.uniqueVisits ? month : best,
);
const totalVisitors = access.reduce(
  (sum, month) => sum + month.uniqueVisits,
  0,
);

export const metadata: Metadata = {
  title: "Wrapped for TikTok – Your year on TikTok",
  description:
    "A Spotify-Wrapped-style year in review for TikTok, built from your own data export and processed entirely in the browser. 10 million visitors in a single month.",
};

export default function WrappedPage() {
  return (
    <main className="flex flex-col items-center gap-20 pb-24 sm:gap-24">
      <ProjectNav />

      <ProjectHeader
        title="Wrapped for TikTok"
        tagline="Your year on TikTok, told back to you. Sixteen screens built from your own data export, processed entirely in your browser."
        meta={[
          {
            label: "Peak month",
            value: `${formatCompact(peak.uniqueVisits, 1)} visitors`,
          },
          {
            label: "Since 2023",
            value: `${formatCompact(totalVisitors, 0)}+ visitors`,
          },
          { label: "Stack", value: "Next.js, Vercel, ClickHouse" },
          { label: "Try it", value: "wrapped.vantezzen.io", href: WRAPPED_URL },
        ]}
      />

      <ProjectShowcase>
        <StoryPlayer screens={screens} className="max-w-5xl" />
      </ProjectShowcase>

      <ProjectSection title="About">
        <Prose>
          <p>
            TikTok lets you download everything it knows about you, but the
            export is a pile of JSON nobody opens. Wrapped turns it into the
            story Spotify tells every December: how many videos you scrolled
            past, how many days you spent watching, who you kept coming back to,
            and a slightly rude commentary on all of it.
          </p>
          <p>
            I launched it as a side project in 2023. A few TikToks about it went
            viral, and it has been a December ritual since.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection title="Traffic">
        <Prose>
          <p>
            Unique visitors per month. Wrapped lives on one month a year: the
            rest of the time it idles at a few tens of thousands, then December
            arrives.
          </p>
        </Prose>
        <TrafficChart />
      </ProjectSection>

      <ProjectSection title="Tech">
        <TechCard>
          <StatRow>
            <Stat tone="dark" value="~10M" label="visits in December 2024" />
            <Stat
              tone="dark"
              value="~$20"
              label="infrastructure cost for that"
            />
            <Stat tone="dark" value="460M+" label="video views analysed" />
          </StatRow>
          <TechText>
            Wrapped is a Next.js app on Vercel. The first December taught me
            what a viral consumer site does to bandwidth limits, and I moved the
            heavy assets to Cloudflare mid-spike with a few minutes of downtime.
            The bigger change came after: I redesigned the processing to run
            entirely on the visitor’s device. The export zip is unpacked and
            parsed with browser APIs, so nothing is uploaded, results appear
            instantly, and the whole thing costs about twenty dollars to run.
          </TechText>
          <TechText>
            For the aggregate view of how people actually use TikTok I used
            ClickHouse to analyse donated datasets covering more than 460
            million video views and 60 million likes.
          </TechText>
          <TagList
            tone="dark"
            tags={[
              "Next.js",
              "TypeScript",
              "Framer Motion",
              "JSZip",
              "Vercel",
              "Cloudflare",
              "ClickHouse",
            ]}
          />
        </TechCard>
      </ProjectSection>

      <ProjectFooter
        currentHref="/projects/wrapped"
        cta={{
          title: "Get your own Wrapped",
          description:
            "Free, no account, and your data never leaves your device.",
          href: WRAPPED_URL,
          label: "Open Wrapped for TikTok",
          icon: Tiktok,
        }}
      />
    </main>
  );
}
