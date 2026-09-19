import Link from "next/link";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/legal/impressum", label: "Impressum" },
  { href: "/legal/privacy", label: "Datenschutz" },
];

/** Impressum and privacy links for footers. */
export function LegalLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex gap-4 text-sm text-neutral-400", className)}>
      {LINKS.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="transition-colors hover:text-neutral-700"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
