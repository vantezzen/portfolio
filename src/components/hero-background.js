import React, { useState } from "react";
import loadable from '@loadable/component';
import tw from 'tailwind.macro'
import { RotateCw } from 'react-feather';

import gameOfLife from './heroGames/gameOfLife';
import colorfulWaves from "./heroGames/colorfulWaves";
import breathingColor from "./heroGames/breathingColor";
import randomColorCycling from "./heroGames/randomColorCycling";

const Sketch = loadable(() => import('./p5'));

const backgrounds = [
  colorfulWaves,
  gameOfLife,
  randomColorCycling,
  // breathingColor
];

const HeroBackground = (props) => {
  const [currentBackground, setBackground] = useState(Math.floor(Math.random() * backgrounds.length));
  const background = backgrounds[currentBackground];

  return (
    <>
      <div id="hero-background" style={{
        position: 'fixed',
        top: 0,
        left: 0,
      }}>
        <Sketch {...background} key={currentBackground} />
      </div>
      <button 
        style={{
          bottom: '1rem',
          right: '1rem',
          ...tw`bg-transparent fixed z-10 border-none outline-none cursor-pointer`
        }}
        onClick={() => {
          let newBackground = currentBackground + 1;
          if (newBackground >= backgrounds.length) {
            newBackground = 0;
          }

          setBackground(newBackground);
        }}
        title="Get new background"
      >
        <RotateCw />
      </button>
    </>
  );
};

export default HeroBackground;