import React from "react";
import ThreeLogo from "./ThreeLogo";
import uisGrid from "../../images/uis-grid.png";
import { ExternalLink } from "react-feather";
import SectionContainer from "../various/SectionContainer";

function About() {
  return (
    <SectionContainer>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12" id="about">
        <img src={uisGrid} className="rounded-lg h-full object-cover w-full" />

        <div className="lg:max-w-2xl bg-brand-900 rounded-lg p-6 md:p-12 font-medium leading-relaxed">
          <p className="mb-3">
            Web applications allow us to access{" "}
            <span className="text-fire-500">
              powerful tools and information
            </span>{" "}
            on any device and without the need for installation.
          </p>
          <p className="mb-3">
            As a web developer, I have the opportunity to create{" "}
            <span className="text-fire-500">beautiful and easy-to-use</span>{" "}
            websites and web applications that not only look great, but also
            provide value and functionality for the users. I believe that a
            great web design{" "}
            <span className="text-fire-500">goes beyond just aesthetics</span>,
            but also considers the needs and goals of the users.
          </p>
          <p className="mb-3">
            In my current role as a web developer and project manager at{" "}
            <a
              href="https://smarketer.de"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Smarketer
            </a>
            , I have the chance to bring this philosophy to life and{" "}
            <span className="text-fire-500">
              create websites that make a meaningful impact
            </span>
            . With a bachelor degree in applied computer science from HTW
            Berlin, I have the skills and knowledge to turn my ideas into
            reality and contribute to the constantly evolving field of web
            development. Additionally, I am currently studying{" "}
            <span className="text-fire-500">
              International Digital Business
            </span>{" "}
            at HWR Berlin to expand my knowledge of economics and project
            management.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
