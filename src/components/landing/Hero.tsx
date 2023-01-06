import React, { useEffect } from "react";
import uisGrid from "../../images/uis-grid.png";
import logo from "../../images/logo.svg";
import HeroBackground from "./HeroBackground";
import ThreeLogo from "./ThreeLogo";
import Balancer from "react-wrap-balancer";
import { Loader } from "react-feather";

function Hero() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  return (
    <section
      className="min-h-[90vh] w-full flex items-center justify-center text-center relative"
      id="top"
    >
      <HeroBackground
        onLoadDone={() => {
          setIsLoaded(true);
        }}
      />

      {!isLoaded && (
        <div className="fixed top-0 left-0 w-full h-full bg-brand-500 z-20 flex items-center justify-center">
          <Loader className="animate-spin text-brand-50" />
        </div>
      )}

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
