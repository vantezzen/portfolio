import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Constrained } from "@/components/layout/constrained";
import { site } from "@/content/site";
import headImage from "@/assets/head.jpeg";

/** Slim top bar on subpages: a way back and a reminder whose site this is. */
export function ProjectNav({
  backHref = "/",
  backLabel = "All projects",
}: {
  backHref?: string;
  backLabel?: string;
} = {}) {
  return (
    <header className="flex w-full justify-center pt-6 sm:pt-10">
      <Constrained className="flex items-center justify-between">
        <Link
          href={backHref}
          className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-800"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          {backLabel}
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={headImage}
            alt=""
            className="size-6 rounded-full object-cover"
          />
          <span className="text-sm text-neutral-600">{site.name}</span>
        </Link>
      </Constrained>
    </header>
  );
}
