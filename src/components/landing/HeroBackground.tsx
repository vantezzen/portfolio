import React from "react";
import Loadable from "@loadable/component";

const Sketch = Loadable(() => import("react-p5"));

let $: CanvasRenderingContext2D;
let t = 0;

const BASE_BRIGHTNESS = 200;
const MAX_BRIGHTNESS = 230;
const RED_BIAS = 1;
const ANTI_BRIGHTNESS = MAX_BRIGHTNESS - BASE_BRIGHTNESS;

const R = function (x: number, y: number, t: number) {
  return Math.floor(
    BASE_BRIGHTNESS + ANTI_BRIGHTNESS * Math.cos((x * x - y * y) / 300 + t)
  );
};

const G = function (x: number, y: number, t: number) {
  return Math.floor(
    BASE_BRIGHTNESS * RED_BIAS +
      ANTI_BRIGHTNESS *
        Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
  );
};

const B = function (x: number, y: number, t: number) {
  return Math.floor(
    BASE_BRIGHTNESS * RED_BIAS +
      ANTI_BRIGHTNESS *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
};

function HeroBackground({ onLoadDone }: { onLoadDone: () => void }) {
  return (
    <div className="absolute top-0 left-0">
      <Sketch
        setup={(p5, canvasParentRef) => {
          const cnv = p5.createCanvas(32, 32);
          cnv.parent(canvasParentRef);
          cnv.style("width", "100vw");
          cnv.style("height", "90vh");
          cnv.attribute("width", "32");
          cnv.attribute("height", "32");

          $ = cnv.elt.getContext("2d");
          onLoadDone();
        }}
        draw={(p5) => {
          // We only need to update the canvas when the canvas is actually in the view
          // Otherwise just skip drawing
          if (window.scrollY > 300) return;

          for (let x = 0; x <= 35; x++) {
            for (let y = 0; y <= 35; y++) {
              if ($) {
                // p5's rendering Engine will mess with the rendering of the colors
                // so we need to directly access the canvas instead
                const r = R(x, y, t);
                const g = G(x, y, t);
                const b = B(x, y, t);

                $.fillStyle = `rgb(${r},${g},${b})`;
                $.fillRect(x, y, 1, 1);
              }
            }
          }
          t += 0.01;
        }}
      />

      {/* <div className="absolute bottom-10 flex justify-center w-full text-brand-500 animate-bounce">
        Scroll down
      </div> */}
    </div>
  );
}

export default HeroBackground;
