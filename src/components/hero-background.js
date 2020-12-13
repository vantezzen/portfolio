/**
 * Hero Background with a random p5 Sketch
 */

// react-p5 uses "window." which is not available during the build-step
// Due to this we need to only import the real library when in the browser and can
// use a dummy function when in SSR
const React = require('react');
const {useState} = React;
let Sketch = () => (<div></div>);
if (typeof window !== `undefined`) {
  Sketch = require('react-p5');
}
 
// Colorful Waves
let curves = [];

// Game of Life
let grid = [];
let emptyGrid = [];
const GRID_SIZE = 30;

let GRID_COLUMNS = 0;
let GRID_ROWS = 0;
// Simulate one step in the Game of Life game
// Based on the generate function on https://p5js.org/examples/simulate-game-of-life.html
function gameOfLife_step() {
  let next = emptyGrid;
  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 1; x < GRID_COLUMNS - 1; x++) {
    for (let y = 1; y < GRID_ROWS - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += grid[x+i][y+j];
        }
      }

      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= grid[x][y];
      // Rules of Life
      if (grid[x][y] && neighbors < 2) {
        next[x][y] = 0;
      } else if (grid[x][y] && neighbors >  3) {
        next[x][y] = 0;
      } else if (!grid[x][y] && neighbors == 3) {
        next[x][y] = 1;
      } else {
        next[x][y] = grid[x][y];
      }
    }
  }

  // Squares in the middle should always be white so we can see the logo
  const centerX = Math.floor((grid.length - 2) / 2);
  let centerY = 0;
  if(grid.length > 0) {
    centerY = Math.floor((grid[0].length - 2) / 2);
  }
  for (let i = -3; i <= 3; i++) {
    for (let j = -3; j <= 3; j++) {
      next[centerX + i][centerY + j] = 0;
    }
  }

  grid = next;
}

// General
let ctx;

const backgrounds = [
  // Colorful waves
  {
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
      p5.background('#ffc800');
  
      for(let curve of curves) {
        p5.fill(curve.color);
        p5.noStroke();
        
        for(let i = 0; i < p5.width; i++) {
          const timeFactor = p5.millis() / curve.speed_divident;
          const sinCurve = p5.sin((i + timeFactor) / curve.sin_width);
          const shiftedSin = sinCurve + curve.shift_up;
          const heightStrechedSin = curve.height * shiftedSin;
          
          p5.rect(i, p5.height, 1, -1 * heightStrechedSin)
        }
      }
    }
  },
  // Game of Life
  {
    setup: (p5, canvasParentRef) => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  
      GRID_COLUMNS = Math.ceil(p5.windowWidth / GRID_SIZE) + 1;
      GRID_ROWS = Math.ceil(p5.windowHeight / GRID_SIZE) + 1;
      
      for(let i = 0; i < GRID_COLUMNS; i++) {
        grid[i] = [];
        emptyGrid[i] = [];
        
        for(let j = 0; j < GRID_ROWS; j++) {
          // Fill the cells randomly with a chance of 15% of being alive
          grid[i][j] = Math.round(Math.random() - 0.35);

          emptyGrid[i][j] = 0;
        }
      }
      
      p5.frameRate(5);
    },
    draw: (p5) => {
      // We only need to update the board when the board is actually in the view
      // Otherwise just skip drawing
      if (window.scrollY > 300) return;
      
      p5.background(0xEB);
      p5.noStroke();

      try {
        gameOfLife_step();
      } catch(e) {}
      
      for(let i = 0; i < GRID_COLUMNS; i++) {
        for(let j = 0; j < GRID_ROWS; j++) {
          const x = i * GRID_SIZE;
          const y = j * GRID_SIZE;
          
          p5.fill(grid[i][j] ? 0x21 : 0xEB);
          
          p5.rect(x, y, x + GRID_SIZE, y + GRID_SIZE);
        }
      }
    },
    mouseMoved: (p5) => {
      const x = Math.floor(p5.mouseX / GRID_SIZE);
      const y = Math.floor(p5.mouseY / GRID_SIZE);
      
      try {
        grid[x][y] = grid[x][y] ? 0 : 1;
      } catch(e) {}
    }
  }
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