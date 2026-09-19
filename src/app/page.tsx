import { FloatingNav } from "@/components/floating-nav";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Work } from "@/components/home/work";
import { Education } from "@/components/home/education";
import { Contact } from "@/components/home/contact";
import { DitherField } from "@/components/home/dither-field";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <main className="relative isolate flex flex-col items-center pt-[22vh] pb-40 md:pt-[30vh]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[90vh] [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
      >
        {/*<DitherField />*/}
      </div>

      <Hero />

      <div className="mt-32 flex w-full flex-col gap-28 md:mt-80 md:gap-40">
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
