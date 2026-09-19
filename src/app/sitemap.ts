import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

/** Only pages meant to be found. Legal and policy pages carry noindex. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}${project.href}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
