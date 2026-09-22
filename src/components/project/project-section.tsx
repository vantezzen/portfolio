import { Constrained } from "@/components/layout/constrained";
import { Reveal } from "@/components/motion";

/** A titled content section of a project page. */
export function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full justify-center">
      <Constrained className="gap-0">
        <Reveal className="flex min-w-0 flex-col gap-5">
          <h2 className="text-xl font-medium tracking-tight text-neutral-800">
            {title}
          </h2>
          {children}
        </Reveal>
      </Constrained>
    </section>
  );
}

/** Body copy with a comfortable reading measure. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-prose flex-col gap-4 text-base leading-relaxed text-neutral-600 [&_strong]:font-medium [&_strong]:text-neutral-800">
      {children}
    </div>
  );
}
