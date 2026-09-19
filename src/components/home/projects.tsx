import { Constrained } from "@/components/layout/constrained";
import { Section, SectionTitle } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

/** Horizontally scrolling gallery of project cards, edge to edge. */
export function Projects() {
  return (
    <Section id="projects" className="flex-col items-center">
      <Constrained className="gap-0">
        <SectionTitle>Selected projects</SectionTitle>
      </Constrained>
      <div className="flex w-full snap-x gap-6 overflow-x-auto overflow-y-clip px-6 pb-2 scroll-px-6 sm:px-10 sm:scroll-px-10 md:gap-8 md:px-24 md:scroll-px-24 xl:justify-center">
        {projects.map((project, index) => (
          <Reveal
            key={project.href}
            delay={index * 0.08}
            className="flex shrink-0"
          >
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
