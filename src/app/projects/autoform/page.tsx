import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import {
  Pipeline,
  ProjectFooter,
  ProjectHeader,
  ProjectNav,
  ProjectSection,
  ProjectShowcase,
  Prose,
  TagList,
  TechCard,
  TechText,
} from "@/components/project";
import { SchemaDemo } from "./_demo/schema-demo";
import { formatCompact } from "@/lib/format";
import { getAutoformStats } from "./stats";

const GITHUB_URL = "https://github.com/vantezzen/autoform";
const DOCS_URL = "https://autoform.vantezzen.io";

export const metadata: Metadata = {
  title: "AutoForm – Instant React forms for your schema",
  description:
    "An open source library that renders complete, validated React forms from Zod, Yup or Joi schemas, for any UI library.",
};

export default async function AutoFormPage() {
  const stats = await getAutoformStats();

  return (
    <main className="flex flex-col items-center gap-20 pb-24 sm:gap-24">
      <ProjectNav />

      <ProjectHeader
        title="AutoForm"
        tagline="Instant React forms for the schemas you already have. Pass a Zod schema, get labels, inputs, defaults and validation."
        meta={[
          { label: "Monthly downloads", value: formatCompact(stats.downloads) },
          { label: "GitHub stars", value: formatCompact(stats.stars) },
          { label: "Since", value: "2023" },
          { label: "Source", value: "GitHub", href: GITHUB_URL },
        ]}
      />

      <ProjectShowcase>
        <SchemaDemo className="max-w-5xl" />
      </ProjectShowcase>

      <ProjectSection title="About">
        <Prose>
          <p>
            AutoForm started as a single shadcn/ui component I wrote because I
            kept hand-wiring admin forms for schemas that already existed on the
            backend. It has since grown into a small open source library: the
            schema stays the source of truth, AutoForm turns it into a form, and
            you keep using your form and UI library the way you normally would.
          </p>
          <p>
            The form above is not a mock. It is the published package rendering
            the schema on the left, with a UI adapter I wrote for this page in
            about a hundred lines.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection title="Tech">
        <TechCard>
          <Pipeline
            steps={[
              {
                label: "Schema provider",
                detail:
                  "Walks a Zod, Yup or Joi schema into a plain field tree",
                runsOn: "@autoform/zod · yup · joi",
              },
              {
                label: "Core",
                detail:
                  "Labels, defaults and validation, without React or any UI",
                runsOn: "@autoform/core",
              },
              {
                label: "Form adapter",
                detail: "Binds every field to React Hook Form or TanStack Form",
                runsOn: "@autoform/react",
              },
              {
                label: "UI package",
                detail: "Maps field types to components of your design system",
                runsOn: "shadcn, MUI, ...",
              },
            ]}
          />
          <TechText>
            Each layer is its own package, so a project only ships the schema
            and UI adapters it needs. Adding a UI library means implementing a
            handful of components, which is exactly what the demo on this page
            does. The monorepo is built with Turborepo, tested with Cypress
            component tests and released with Changesets.
          </TechText>
          <TagList
            tone="dark"
            tags={[
              "TypeScript",
              "React",
              "Zod",
              "React Hook Form",
              "TanStack Form",
              "Turborepo",
            ]}
          />
        </TechCard>
      </ProjectSection>

      <ProjectFooter
        currentHref="/projects/autoform"
        githubHref={GITHUB_URL}
        cta={{
          title: "Use it in your project",
          description:
            "MIT licensed, with guides for React Hook Form and TanStack Form.",
          href: DOCS_URL,
          label: "Read the docs",
          icon: BookOpen,
        }}
      />
    </main>
  );
}
