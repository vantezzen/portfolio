import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Constrained } from "@/components/layout/constrained";
import { LegalLinks } from "@/components/legal/legal-links";
import { TextLink } from "@/components/text-link";
import { getNextProject } from "@/content/projects";
import { site } from "@/content/site";
import { Github } from "@thesvg/react";

export type ProjectCta = {
  title: string;
  description: string;
  href: string;
  label: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
};

/**
 * Closes a project page: where to get the product, the next project, and a
 * way to get in touch.
 */
export function ProjectFooter({
  currentHref,
  cta,
  githubHref,
}: {
  currentHref: string;
  cta?: ProjectCta;
  githubHref?: string;
}) {
  const next = getNextProject(currentHref);

  return (
    <footer className="flex w-full justify-center">
      <Constrained className="gap-4">
        {cta && (
          <div className="flex flex-col gap-5 rounded-3xl bg-neutral-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex flex-col gap-1">
              <span className="text-xl font-medium tracking-tight text-neutral-800">
                {cta.title}
              </span>
              <span className="text-sm text-neutral-500">
                {cta.description}
              </span>
            </div>
            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full p-3 text-sm font-medium text-white transition-colors hover:bg-neutral-200 sm:self-auto"
              >
                <Github className="size-4" />
              </a>
            )}
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 sm:self-auto"
            >
              {cta.icon && <cta.icon className="size-4" />}
              {cta.label}
              <ArrowUpRight className="size-4 opacity-60" />
            </a>
          </div>
        )}

        <Link
          href={next.href}
          className="group flex items-center justify-between gap-6 rounded-3xl bg-neutral-100 p-6 transition-[background-color,transform] duration-150 ease-out hover:bg-neutral-200/70 active:scale-[0.99] sm:p-8"
        >
          <div className="flex flex-col gap-1">
            <span className="text-sm text-neutral-400">Next project</span>
            <span className="text-xl font-medium tracking-tight text-neutral-800">
              {next.title}
            </span>
            <span className="text-sm text-neutral-500">{next.description}</span>
          </div>
          <div className="flex items-center gap-4">
            {next.image && (
              <div className="hidden size-16 items-center justify-center overflow-hidden rounded-2xl bg-white sm:flex">
                <Image
                  src={next.image}
                  alt=""
                  className={
                    next.variant === "icon"
                      ? "size-8 object-contain"
                      : "size-full object-cover object-top-left"
                  }
                />
              </div>
            )}
            <ArrowRight className="size-5 text-neutral-400 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            Want to talk about this or something similar?{" "}
            <TextLink href={`mailto:${site.email}`}>Send me an email</TextLink>.
          </p>
          <LegalLinks />
        </div>
      </Constrained>
    </footer>
  );
}
