import React from "react";
import uisGrid from "../../images/uis-grid.png";
import logo from "../../images/logo.svg";
import HeroBackground from "./HeroBackground";
import ThreeLogo from "./ThreeLogo";
import Balancer from "react-wrap-balancer";

function Hero() {
  return (
    <section
      className="min-h-[90vh] w-full flex items-center justify-center text-center relative"
      id="top"
    >
      <HeroBackground />

      <div className="flex flex-col">
        <ThreeLogo />
        <h1 className="font-bold text-brand-700 text-4xl lg:text-6xl md:max-w-4xl z-10 p-6 mix-blend-overlay">
          <Balancer>Crafting beautiful websites and web applications</Balancer>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
