import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * Full-width stage under the header for the interactive centrepiece. Enters
 * just after the header text has settled.
 */
export function ProjectShowcase({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex w-full justify-center px-4 sm:px-6">
      <Reveal
        delay={0.25}
        className={cn("flex w-full justify-center", className)}
      >
        {children}
      </Reveal>
    </div>
  );
}
