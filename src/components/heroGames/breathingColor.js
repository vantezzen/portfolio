/**
 * Breathing color hero for vantezzen.io
 */

const breathingColor = {
  info: 'Breathing Color',
  setup: (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  },
  draw: (p5) => {
    p5.background((p5.sin(p5.millis() / 1000) + 10) * 20);  
  }
};

export default breathingColor;