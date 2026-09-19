import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LegalPage, legalMetadata } from "@/components/legal/legal-page";

const POLICIES = [
  { href: "/browserprivacy/skip-silence", name: "Skip Silence" },
  { href: "/browserprivacy/dontbugme", name: "Don’t Bug Me" },
  { href: "/browserprivacy/bangs", name: "Bangs for Google" },
];

export const metadata = legalMetadata(
  "Privacy policies for browser extensions",
  "Privacy policies for the browser extensions built by Bennett Hollstein.",
);

export default function BrowserPrivacyPage() {
  return (
    <LegalPage
      title="Privacy policies for browser extensions"
      intro="Each extension has its own policy. Pick the one you are using."
    >
      <ul className="not-prose mt-2 flex list-none flex-col gap-3 pl-0">
        {POLICIES.map(({ href, name }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex items-center justify-between rounded-2xl bg-neutral-100 px-5 py-4 font-medium text-neutral-800 no-underline transition-colors hover:bg-neutral-200/70"
            >
              {name}
              <ArrowRight className="size-4 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
