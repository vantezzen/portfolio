import type { Metadata } from "next";
import { AppStore } from "@thesvg/react";
import {
  LookSwitcher,
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
import originalImage from "@/assets/projects/fresnel/1-compare.png";
import neonRimImage from "@/assets/projects/fresnel/1.png";
import candlelightImage from "@/assets/projects/fresnel/2.png";

// TODO: replace with the real Mac App Store listing
const APP_STORE_URL = "https://apps.apple.com/app/fresnel/id0000000000";

export const metadata: Metadata = {
  title: "Fresnel – Virtual relighting on macOS",
  description:
    "A macOS app that relights your webcam feed in real time with virtual lights, running fully on-device on the Neural Engine.",
};

export default function FresnelPage() {
  return (
    <main className="flex flex-col items-center gap-20 pb-24 sm:gap-24">
      <ProjectNav />

      <ProjectHeader
        title="Fresnel"
        tagline="Studio lighting for your webcam. Drag virtual lights around your face and watch the scene relight in real time."
        meta={[
          { label: "Platform", value: "macOS, Apple Silicon" },
          { label: "Stack", value: "SwiftUI, CoreML, Metal" },
          { label: "Get it", value: "Mac App Store", href: APP_STORE_URL },
        ]}
      />

      <ProjectShowcase>
        <LookSwitcher
          alt="Fresnel window showing a relit webcam feed with two draggable lights and a preset panel"
          className="max-w-6xl"
          looks={[
            { id: "original", label: "Original", image: originalImage },
            {
              id: "neon-rim",
              label: "Neon Rim",
              image: neonRimImage,
              lights: ["#e04fb3", "#3ec6e8"],
            },
            {
              id: "candlelight",
              label: "Candlelight",
              image: candlelightImage,
              lights: ["#f2a54a", "#e8862d"],
            },
          ]}
        />
      </ProjectShowcase>

      <ProjectSection title="About">
        <Prose>
          <p>
            Fresnel is a small macOS app I built that relights your webcam feed
            with virtual lights. It estimates how far every pixel is from the
            camera, so a light you drag around behaves like a real lamp: your
            face, shoulders and the wall behind you all respond to it.
            Everything runs on-device, in real time.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection title="Tech">
        <TechCard>
          <Pipeline
            steps={[
              { label: "Camera frame", detail: "AVFoundation", runsOn: "CPU" },
              {
                label: "Depth estimation",
                detail: "Depth Anything V2, small fp16 via CoreML",
                runsOn: "Neural Engine",
              },
              {
                label: "Relighting",
                detail: "Custom shader to relight",
                runsOn: "Metal (GPU)",
              },
              {
                label: "Virtual Camera",
                detail: "Kernel Extension to use it anywhere",
                runsOn: "macOS",
              },
            ]}
          />
          <TechText>
            The idea is based on a{" "}
            <a
              href="https://x.com/reczko_konrad/status/2089670934009413751"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebGPU demo by Konrad Reczko
            </a>
            . I rebuilt it as a native app so the depth model can run on the
            Neural Engine and the shading on the GPU, which keeps it fast enough
            to leave running during a call.
          </TechText>
          <TagList
            tone="dark"
            tags={["Swift", "SwiftUI", "CoreML", "Metal", "Depth Anything V2"]}
          />
        </TechCard>
      </ProjectSection>

      <ProjectFooter
        currentHref="/projects/fresnel"
        cta={{
          title: "Try it yourself",
          description: "Fresnel is available for Apple Silicon Macs.",
          href: APP_STORE_URL,
          label: "Mac App Store",
          icon: AppStore,
        }}
      />
    </main>
  );
}
