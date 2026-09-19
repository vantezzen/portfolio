import type { ProjectCardProps } from "@/components/project-card";

import fresnelImage from "@/assets/projects/fresnel/base.png";
import autoformImage from "@/assets/projects/autoform/icon.png";
import wrappedImage from "@/assets/projects/wrapped/wrapped-comments.png";

export const projects: ProjectCardProps[] = [
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
    image: autoformImage,
    href: "/projects/autoform",
    variant: "icon",
    tags: ["230k+ monthly downloads", "3.5k GitHub stars", "TypeScript"],
  },
  {
    title: "Wrapped for TikTok",
    description: "Year-in-review for TikTok",
    image: wrappedImage,
    href: "/projects/wrapped",
    tags: ["10M peak monthly users", "NextJS"],
  },
];

/** The project after `href` in the list above, wrapping around at the end. */
export function getNextProject(href: string) {
  const index = projects.findIndex((project) => project.href === href);
  return projects[(index + 1) % projects.length];
}
