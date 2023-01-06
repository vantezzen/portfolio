import React from "react";
import SectionContainer from "../various/SectionContainer";
import Button from "../various/Button";
import Project from "../various/Project";
import { StaticImage } from "gatsby-plugin-image";

function Projects() {
  return (
    <SectionContainer>
      <h1 className="font-bold text-3xl" id="projects">
        Projects
      </h1>

      <Project
        title="Smarketer Jobs"
        description={
          <>
            <p className="mt-2">
              A job board for Smarketer, a marketing agency based in Berlin.
              With its <span className="text-fire-500">relaunch in 2022</span>,
              the job board was completely overhauled and built from the ground
              up for Core Web Vitals.
            </p>
            <p className="mt-2">
              The backend is built with Laravel and{" "}
              <span className="text-fire-500">
                follows clean code principles
              </span>{" "}
              to allow for easy maintenance and extensibility. It is deployed to
              AWS using AWS Elastic Beanstalk while the frontend is deployed to
              Vercel.
            </p>
          </>
        }
        buildWith="Next.js, Laravel, Tailwind CSS, and TypeScript"
        buttons={
          <a href="https://smarketer.jobs" target="_blank" rel="noreferrer">
            <Button className="mt-3" highlighted>
              Visit Website
            </Button>
          </a>
        }
        image={
          <StaticImage
            src="../../images/screenshots/smarketer-jobs.png"
            alt="Screenshot of Smarketer Jobs"
            className="rounded-lg ml-auto"
          />
        }
      />

      <Project
        title="Skip silence"
        description={
          <>
            <p className="mt-2">
              During the pandemic, I had to watch hours of video lectures that
              my professors recorded. While some of these lectures can have a
              very good pace, a lot of these videos are also very slow and the
              lecturers can take very long to write something down.
            </p>
            <p className="mt-2">
              This extension{" "}
              <span className="text-fire-500">analyzes audio</span> playing in
              the browser to automatically speed up the video when the lecturer
              is silent.
            </p>
            <p className="mt-2">
              The extension has been rewritten for{" "}
              <span className="text-fire-500">
                the Plasmo extension framework
              </span>{" "}
              to allow for easier development and maintenance. It has been
              installed over 10.000 times across Chrome and Firefox.
            </p>
          </>
        }
        buildWith="React, TypeScript, JavaScript Media API and Plasmo"
        buttons={
          <>
            <a
              href="https://chrome.google.com/webstore/detail/skip-silence/fhdmkhbefcbhakffdihhceaklaigdllh"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="mt-3" highlighted>
                Visit Chrome WebStore
              </Button>
            </a>
            <a
              href="https://github.com/vantezzen/skip-silence"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="mt-3">Visit source</Button>
            </a>
          </>
        }
        image={
          <StaticImage
            src="../../images/screenshots/skip-silence.png"
            alt="Screenshot of Skip Silence"
            className="rounded-lg ml-auto"
          />
        }
      />

      <Project
        title="blymp.io"
        description={
          <>
            <p className="mt-2">
              blymp.io is a service that allows{" "}
              <span className="text-fire-500">
                transferring files between devices
              </span>{" "}
              without the need for a cloud service. Files are transferred
              peer-to-peer to ensure privacy and security.
            </p>
            <p className="mt-2">
              The service is build with{" "}
              <span className="text-fire-500">WebRTC and WebSockets</span> to
              create direct connections between devices and is deployed to
              fly.io.
            </p>
          </>
        }
        buildWith="React, TypeScript, WebRTC and WebSockets"
        buttons={
          <>
            <a href="https://blymp.io" target="_blank" rel="noreferrer">
              <Button className="mt-3" highlighted>
                Visit website
              </Button>
            </a>
            <a
              href="https://github.com/vantezzen/blymp-io"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="mt-3">Visit source</Button>
            </a>
          </>
        }
        image={
          <StaticImage
            src="../../images/screenshots/blymp.io.png"
            alt="Screenshot of blymp.io"
            className="rounded-lg ml-auto"
          />
        }
      />

      <Project
        title="More projects on GitHub"
        description={
          <>
            <p className="mt-2">
              You can find more projects, including libraries and extensions, on
              my <span className="text-fire-500">GitHub profile</span>.
            </p>
          </>
        }
        buildWith="React, TypeScript and more"
        buttons={
          <>
            <a
              href="https://github.com/vantezzen"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="mt-3" highlighted>
                Visit GitHub
              </Button>
            </a>
          </>
        }
        image={
          <StaticImage
            src="../../images/screenshots/github.png"
            alt="Screenshot of GitHub profile"
            className="rounded-lg ml-auto"
          />
        }
      />
    </SectionContainer>
  );
}

export default Projects;
