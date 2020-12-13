import React, { useState } from "react";
import loadable from '@loadable/component';

import gameOfLife from './heroGames/gameOfLife';
import colorfulWaves from "./heroGames/colorfulWaves";

const Sketch = loadable(() => import('./p5'));

const backgrounds = [
  colorfulWaves,
  gameOfLife
];

const HeroBackground = (props) => {
  const [currentBackground, setBackground] = useState(Math.floor(Math.random() * backgrounds.length));
  const background = backgrounds[currentBackground];

  return (
    <div id="hero-background" style={{
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <Sketch {...background} />
    </div>
  );
};

export default HeroBackground;