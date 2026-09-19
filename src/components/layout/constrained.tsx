import { cn } from "@/lib/utils";

/** Centered column that caps the content width and applies the page's horizontal padding. */
export function Constrained({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-4xl px-6 sm:px-10 md:px-18 grid gap-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
