import type { Metadata } from "next";
import { Constrained } from "@/components/layout/constrained";
import { ProjectNav } from "@/components/project/project-nav";
import { site } from "@/content/site";

/**
 * Layout for legal and policy pages. Children are plain HTML (headings,
 * paragraphs, lists, links) and get their typography from `.legal-prose`.
 */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  /** e.g. "November 3, 2020" */
  updated?: string;
  /** Optional lead paragraph shown under the title, outside the prose. */
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center gap-10 pb-24 sm:gap-14">
      <ProjectNav backLabel="Home" />

      <Constrained className="gap-0">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-medium tracking-tight text-neutral-800 sm:text-4xl">
            {title}
          </h1>
          {updated && (
            <p className="text-sm text-neutral-400">Last updated {updated}</p>
          )}
          {intro && (
            <p className="max-w-xl text-lg leading-relaxed text-neutral-500 text-balance">
              {intro}
            </p>
          )}
        </header>

        <article className="legal-prose mt-8 max-w-prose">{children}</article>
      </Constrained>
    </main>
  );
}

/** Metadata for a legal page: titled, and kept out of search results. */
export function legalMetadata(title: string, description?: string): Metadata {
  return {
    title: `${title} – ${site.name}`,
    description,
    robots: { index: false, follow: true },
  };
}
