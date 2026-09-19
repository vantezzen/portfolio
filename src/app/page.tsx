import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Work } from "@/components/home/work";
import { Education } from "@/components/home/education";
import { Contact } from "@/components/home/contact";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-[22vh] pb-40 md:pt-[30vh]">
      <Hero />

      <div className="mt-32 flex w-full flex-col gap-28 md:mt-52 md:gap-40">
        <Projects />
        <Reveal className="w-full">
          <Work />
        </Reveal>
        <Reveal className="w-full">
          <Education />
        </Reveal>
        <Reveal className="w-full">
          <Contact />
        </Reveal>
      </div>
    </main>
  );
}
