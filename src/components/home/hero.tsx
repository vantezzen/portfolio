import Image from "next/image";
import { MapPin } from "lucide-react";
import { Constrained } from "@/components/layout/constrained";
import { Section } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/content/site";
import headImage from "@/assets/head.jpeg";

export function Hero() {
  return (
    <Section id="home">
      <Constrained className="gap-0">
        <Stagger className="flex flex-col">
          <StaggerItem>
            <div className="flex items-center gap-3">
              <Image
                src={headImage}
                alt={`Portrait of ${site.name}`}
                className="size-9 rounded-full object-cover"
                preload
              />
              <h2 className="text-[15px] text-neutral-700">{site.name}</h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-7 max-w-2xl text-2xl leading-snug font-medium tracking-tight text-neutral-800 text-balance sm:text-[21px]">
              {site.tagline}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-5 inline-flex items-center gap-1 text-sm text-neutral-500 font-medium">
              <MapPin className="size-3.5" aria-hidden />
              {site.location}
            </div>
          </StaggerItem>

          <StaggerItem>
            <SocialLinks className="mt-8" />
          </StaggerItem>
        </Stagger>
      </Constrained>
    </Section>
  );
}
