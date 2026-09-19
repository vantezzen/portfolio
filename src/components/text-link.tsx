import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Inline text link. External URLs open in a new tab automatically. */
export function TextLink({
  href,
  children,
  className,
  arrow = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Append a small outward arrow, for links that leave the site. */
  arrow?: boolean;
}) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-0.5 text-neutral-800 underline decoration-neutral-300 underline-offset-[3px] transition-colors hover:decoration-neutral-800",
        className,
      )}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {arrow && (
        <ArrowUpRight className="size-3.5 text-neutral-400" aria-hidden />
      )}
    </a>
  );
}
