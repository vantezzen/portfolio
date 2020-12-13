/**
 * Random Color Cycling Sketch for vantezzen.io
 */
let startColor, endColor, status;

function randomColor(p5) {
  return p5.color(p5.random(100, 255), p5.random(100, 255), p5.random(100, 255))
}

function newColors(p5) {
  startColor = endColor;
  endColor = randomColor(p5);
  status = 0;
}

const randomColorCycling = {
  setup: (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    endColor = randomColor(p5);
    newColors(p5);
  },
  draw: (p5) => {
    try {
      p5.background(
        p5.lerpColor(startColor, endColor, status)
      );
    } catch(e) {
      newColors(p5);
      newColors(p5);
    }
    
    status += 0.004;
    if (status >= 1) {
      newColors(p5);
    }
  }
};

export default randomColorCycling;