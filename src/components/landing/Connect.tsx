import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import SectionContainer from "../various/SectionContainer";
import ThreeLogo from "./ThreeLogo";

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="hover:text-fire-500 duration-200"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function Connect() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="font-bold text-3xl">Connect with me</h2>

        <div className="flex gap-12 mt-6">
          <SocialIcon href="https://github.com/vantezzen/">
            <GitHub className="w-8 h-8" />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/bennett-h/">
            <Linkedin className="w-8 h-8" />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/vantezzen/">
            <Twitter className="w-8 h-8" />
          </SocialIcon>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Connect;
