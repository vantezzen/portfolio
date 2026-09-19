import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** GitHub and LinkedIn as a row of icons. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-5", className)}>
      {site.socials.map(({ label, href, icon: Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="block text-neutral-700 transition-opacity hover:opacity-70"
          >
            <Icon className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
