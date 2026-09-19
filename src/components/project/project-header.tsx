import { ArrowUpRight } from "lucide-react";
import { Constrained } from "@/components/layout/constrained";
import { Stagger, StaggerItem } from "@/components/motion";

export type ProjectMetaItem = {
  label: string;
  value: React.ReactNode;
  href?: string;
};

/** Title block of a project page: title, tagline and a row of key facts. */
export function ProjectHeader({
  title,
  tagline,
  meta,
}: {
  title: string;
  tagline: React.ReactNode;
  meta: ProjectMetaItem[];
}) {
  return (
    <div className="flex w-full justify-center">
      <Constrained className="gap-0">
        <Stagger className="flex flex-col gap-5">
          <StaggerItem>
            <h1 className="text-4xl font-medium tracking-tight text-neutral-800 sm:text-5xl">
              {title}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-xl text-lg leading-relaxed text-neutral-500 text-balance">
              {tagline}
            </p>
          </StaggerItem>

          <StaggerItem>
            <dl className="mt-3 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              {meta.map(({ label, value, href }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="text-neutral-400">{label}</dt>
                  <dd className="font-medium text-neutral-700">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 hover:underline"
                      >
                        {value}
                        <ArrowUpRight className="size-3.5 text-neutral-400" />
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </StaggerItem>
        </Stagger>
      </Constrained>
    </div>
  );
}
