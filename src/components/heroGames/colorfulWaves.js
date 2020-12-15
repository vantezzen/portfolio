/**
 * p5.js colorful waves sketch for vantezzen.io
 */
let curves = [];
let ctx;

const colorfulWaves = {
  info: 'Colorful Waves',
  setup: (p5, canvasParentRef) => {
    curves.push({
      height: 23,
      sin_width: 92,
      shift_up: 14,
      speed_divident: 40,
      color: '#FF8E00',
    });
    curves.push({
      height: 28,
      sin_width: 75,
      shift_up: 8,
      speed_divident: 25,
      color: '#FF6702',
    });
    curves.push({
      height: 30,
      sin_width: 60,
      shift_up: 4,
      speed_divident: 15,
      color: '#E54818',
    });

    const HEIGHT = p5.windowHeight;
    const WIDTH = p5.windowWidth;
    
    const renderer = p5.createCanvas(WIDTH, HEIGHT).parent(canvasParentRef);
    if (!ctx) {
      ctx = renderer.drawingContext;
    }
  },
  draw: (p5) => {
    // We only need to update the board when the board is actually in the view
    // Otherwise just skip drawing
    if (window.scrollY > 300) return;

    p5.background('#ffc800');

    for(let curve of curves) {
      p5.fill(curve.color);
      p5.noStroke();
      
      for(let i = 0; i < p5.width; i++) {
        const timeFactor = (p5.millis() / curve.speed_divident) - (p5.mouseX * (curve.sin_width / 100));
        const sinCurve = p5.sin((i + timeFactor) / curve.sin_width);
        const shiftedSin = sinCurve + curve.shift_up;
        const heightStrechedSin = curve.height * shiftedSin;
        
        p5.rect(i, p5.height, 1, -1 * heightStrechedSin)
      }
    }
  }
};

export default colorfulWaves;