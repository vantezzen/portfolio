/**
 * Circles Sketch for vantezzen.io
 */
const CIRCLES = 20;
 
const circles = {
  info: 'Circles',
  setup: (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  },
  draw: (p5) => {
    // We only need to update the board when the board is actually in the view
    // Otherwise just skip drawing
    if (window.scrollY > 300) return;

    p5.background(220);
    p5.fill(0x21);
    p5.stroke(0x21);

    const GRID_SIZE = Math.max(p5.windowWidth, p5.windowHeight) / CIRCLES;
    const GRID_COLUMNS = Math.floor(p5.windowWidth / GRID_SIZE) + 1;
    const GRID_ROWS = Math.floor(p5.windowHeight / GRID_SIZE) + 1;

    const CENTER_X = (GRID_COLUMNS / 2) - 1;
    const CENTER_Y = (GRID_ROWS / 2) - 1;
    
    for(let i = 0; i < GRID_COLUMNS; i++) {
      for(let j = 0; j < GRID_ROWS; j++) {
        if (
          // Don't draw the center circles as to keep the logo visible
          p5.dist(i, j, CENTER_X, CENTER_Y) < 3 ||
          // Don't draw the last circle as to keep the new background button visible
          (i >= (GRID_COLUMNS - 3) && j >= (GRID_ROWS - 2)) ||
          // Don't draw circles bottom center as to keep the "Scroll down" Text visible
          (j >= (GRID_ROWS - 2) && i >= ((CENTER_X) - 2) && i <= ((CENTER_X) + 2))
        ) continue;

        // The circles use a sinus wave to smoothly grow and shrink in waves
        let size = (p5.sin(((j * 400) + p5.millis()) / 700) + 3) * (GRID_SIZE / 10);
        
        const x = i * GRID_SIZE + (GRID_SIZE / 2);
        const y = j * GRID_SIZE + (GRID_SIZE / 2);
        
        // Circles should grow bigger when they are near the mouse
        let distanceToMouse = Math.round(p5.dist(p5.mouseX, p5.mouseY, x, y));
        let mouseSize = 20 - (distanceToMouse / 10);
        if (mouseSize > 0 && !(p5.mouseX === 0 && p5.mouseY === 0)) {
          size += mouseSize; 
        }
        
        p5.circle(x, y, size);
      }
    }
  }
};

export default circles;