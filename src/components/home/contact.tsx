import { Constrained } from "@/components/layout/constrained";
import { Section, SectionTitle } from "@/components/layout/section";
import { LegalLinks } from "@/components/legal/legal-links";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact">
      <Constrained className="gap-0">
        <SectionTitle>Let’s talk</SectionTitle>
        <p className="max-w-md leading-relaxed text-neutral-500">
          You can reach me via email at
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 w-fit text-lg font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-800"
        >
          {site.email}
        </a>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
            <LegalLinks />
          </div>
          <SocialLinks />
        </footer>
      </Constrained>
    </Section>
  );
}
