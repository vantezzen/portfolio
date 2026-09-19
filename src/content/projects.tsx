import type { ProjectCardProps } from "@/components/project-card";
import { AutoFormArt } from "@/components/home/autoform-art";
import { SidekickArt } from "@/components/home/sidekick-art";
import { WrappedArt } from "@/components/home/wrapped-art";

import fresnelImage from "@/assets/projects/fresnel/base.png";

export const projects: ProjectCardProps[] = [
  {
    title: "WaveMetrics Sidekick",
    description: "AI teammate for Google Ads accounts",
    art: <SidekickArt />,
    href: "/projects/sidekick",
    tags: ["Vercel Eve", "MCP", "LangFuse", "Multi-agent"],
  },
  {
    title: "Fresnel",
    description: "Virtual relighting on macOS",
    image: fresnelImage,
    href: "/projects/fresnel",
    imageClassName: "object-top-left",
    tags: ["SwiftUI", "CoreML", "Metal", "AI"],
  },
  {
    title: "autoform",
    description: "Instant React form for your schema",
    art: <AutoFormArt />,
    href: "/projects/autoform",
    tags: ["230k+ monthly downloads", "3.5k GitHub stars", "TypeScript"],
  },
  {
    title: "Wrapped for TikTok",
    description: "Year-in-review for TikTok",
    art: <WrappedArt />,
    href: "/projects/wrapped",
    tags: ["10M peak monthly users", "NextJS"],
  },
];

/** The project after `href` in the list above, wrapping around at the end. */
export function getNextProject(href: string) {
  const index = projects.findIndex((project) => project.href === href);
  return projects[(index + 1) % projects.length];
}
