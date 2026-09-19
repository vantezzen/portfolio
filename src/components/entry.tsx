import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

export type Organization = {
  name: string;
  href: string;
  logo: StaticImageData;
};

/**
 * A single work or education entry: the role and where it was, when, and
 * what came out of it.
 */
export function Entry({
  title,
  organization,
  period,
  note,
  children,
}: {
  title: string;
  organization: Organization;
  /** e.g. "Oct 2025 – Present" */
  period: string;
  /** Muted addition after the period, e.g. the duration or a grade. */
  note?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="flex flex-wrap items-center gap-x-1.5 font-medium text-neutral-800">
        {title}
        <span className="font-normal text-neutral-400">at</span>
        <a
          href={organization.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5"
        >
          <Image
            src={organization.logo}
            alt=""
            className="size-4 rounded-sm object-cover"
          />
          {organization.name}
          <ArrowUpRight className="size-3.5 text-neutral-400 transition-colors group-hover:text-neutral-800" />
        </a>
      </h3>
      <p className="text-sm tabular-nums text-neutral-500">
        {period}
        {note && <span className="text-neutral-400"> · {note}</span>}
      </p>
      {children && (
        <p className="mt-1 max-w-prose text-sm leading-relaxed text-neutral-500">
          {children}
        </p>
      )}
    </div>
  );
}

export function EntryList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-8">{children}</div>;
}
