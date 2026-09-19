import { cn } from "@/lib/utils";

/**
 * A full-width landing page section. The `id` doubles as the anchor for the
 * floating navigation's scroll spy.
 */
export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-section={id}
      className={cn("w-full flex justify-center scroll-mt-8", className)}
    >
      {children}
    </section>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-xl font-medium tracking-tight text-neutral-800">
      {children}
    </h2>
  );
}
