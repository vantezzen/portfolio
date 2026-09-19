"use client";

import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Firefox, Github, GoogleChrome, MicrosoftEdge } from "@thesvg/react";
import { LegalPage } from "./legal-page";

export type StoreLinks = {
  chrome?: string;
  firefox?: string;
  edge?: string;
  github?: string;
};

const STORES: Record<
  keyof StoreLinks,
  { label: string; icon: React.ComponentType<{ className?: string }> }
> = {
  chrome: { label: "Chrome Web Store", icon: GoogleChrome },
  firefox: { label: "Firefox Add-ons", icon: Firefox },
  edge: { label: "Microsoft Edge Add-ons", icon: MicrosoftEdge },
  github: { label: "GitHub", icon: Github },
};

/** Picks the store matching the visitor's browser, if we have a listing for it. */
function storeForBrowser(links: StoreLinks): string | undefined {
  const ua = navigator.userAgent;
  if (/Firefox\//.test(ua)) return links.firefox;
  if (/Edg\//.test(ua)) return links.edge ?? links.chrome;
  if (/Chrome\//.test(ua)) return links.chrome;
  return undefined;
}

/**
 * Landing page for a browser extension. Forwards straight to the visitor's
 * store when it can, and lists every store as a fallback.
 */
export function ExtensionGetPage({
  name,
  links,
}: {
  name: string;
  links: StoreLinks;
}) {
  useEffect(() => {
    const target = storeForBrowser(links);
    if (target) window.location.replace(target);
  }, [links]);

  return (
    <LegalPage
      title={`Get ${name}`}
      intro="You should be forwarded to the store for your browser in a moment. If nothing happens, pick one below."
    >
      <ul className="not-prose mt-2 flex list-none flex-col gap-3 pl-0">
        {(Object.keys(STORES) as (keyof StoreLinks)[])
          .filter((store) => links[store])
          .map((store) => {
            const { label, icon: Icon } = STORES[store];
            return (
              <li key={store}>
                <a
                  href={links[store]}
                  className="group flex items-center justify-between rounded-2xl bg-neutral-100 px-5 py-4 font-medium text-neutral-800 no-underline transition-colors hover:bg-neutral-200/70"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon className="size-5" />
                    {label}
                  </span>
                  <ArrowUpRight className="size-4 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            );
          })}
      </ul>
    </LegalPage>
  );
}
