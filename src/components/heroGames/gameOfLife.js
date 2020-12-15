/**
 * p5.js Game of Life Sketch for vantezzen.io
 */
let grid = [];
let emptyGrid = [];
const GRID_SIZE = 30;
let touchUpdater = false;
// We need to queue the changes, otherwise they will be overdrawn by the step method
let changesQueue = [];

let GRID_COLUMNS = 0;
let GRID_ROWS = 0;
// Simulate one step in the Game of Life game
// Based on the generate function on https://p5js.org/examples/simulate-game-of-life.html
function step() {
  let next = emptyGrid;

  // Work the changes queue
  for(let change of changesQueue) {
    next[change.x][change.y] = grid[change.x][change.y] > 0 ? 0 : 1;
  }
  // Clear the changes queue
  changesQueue = [];

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
      } else if (!grid[x][y] && neighbors === 3) {
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
  for (let i = -2; i <= 4; i++) {
    for (let j = -2; j <= 4; j++) {
      if (next[centerX + i] && next[centerX + i][centerY + j]) {
        next[centerX + i][centerY + j] = 0;
      }
    }
  }

  grid = next;
}
/**
 * Update the value on the current mouse location
 * @param {p5} p5 
 */
function changeValue(p5) {
  const x = Math.floor(p5.mouseX / GRID_SIZE);
  const y = Math.floor(p5.mouseY / GRID_SIZE);

  // Make sure the value is inside of our boundaries
  if (
    grid.length > 0 &&
    x >= 0 && x < (grid.length - 1) &&
    y >= 0 && y < (grid[0].length - 1) &&
    // Not in the center
    !(
      x >= ((GRID_COLUMNS / 2) - 3) && x <= ((GRID_COLUMNS / 2) + 3) &&
      y >= ((GRID_ROWS / 2) - 3) && y <= ((GRID_ROWS / 2) + 3)
    )
  ) {
    // Update the canvas immediately so we get a feedback
    const xGrid = x * GRID_SIZE;
    const yGrid = y * GRID_SIZE;
    p5.fill(grid[x][y] ? 0xEB : 0x21);
    p5.rect(xGrid, yGrid, GRID_SIZE);

    // Add the change to the queue if it is not already in the queue
    if (!changesQueue.find((val) => (val.x === x && val.y === y))) {
      changesQueue.push({
        x,
        y,
      });
    }
  }
}

function initGrid(p5) {
  GRID_COLUMNS = Math.ceil(p5.windowWidth / GRID_SIZE) + 1;
  GRID_ROWS = Math.floor(p5.windowHeight / GRID_SIZE) - 1;
  
  // Initialize the grid
  for(let i = 0; i < GRID_COLUMNS; i++) {
    grid[i] = [];
    emptyGrid[i] = [];
    
    for(let j = 0; j < GRID_ROWS; j++) {
      // Fill the cells randomly with a chance of 15% of being alive
      grid[i][j] = Math.round(Math.random() - 0.35);

      emptyGrid[i][j] = 0;
    }
  }
}

const gameOfLife = {
  info: 'Game Of Life',
  setup: (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    
    initGrid(p5);

    p5.frameRate(5);
  },
  draw: (p5) => {
    // We only need to update the board when the board is actually in the view
    // Otherwise just skip drawing
    if (window.scrollY > 300) return;
    
    p5.background(0xEB);
    p5.noStroke();

    try {
      step();
    } catch(e) {
      console.log(e)
    }
    
    // Draw the grid
    let numAlive = 0;
    for(let i = 0; i < GRID_COLUMNS; i++) {
      for(let j = 0; j < GRID_ROWS; j++) {
        const x = i * GRID_SIZE;
        const y = j * GRID_SIZE;
        
        p5.fill(grid[i][j] ? 0x21 : 0xEB);
        
        p5.rect(x, y, GRID_SIZE);

        if (grid[i][j]) {
          numAlive++;
        }
      }
    }

    // Reinitialize our grid if there are only a few alive cells left
    if (numAlive < 8) {
      // Add some random cells
      console.log("Pushing some new alive cells");
      for(let i = 0; i < (GRID_COLUMNS * GRID_ROWS * 0.2); i++) {
        const x = Math.floor(Math.random() * GRID_COLUMNS);
        const y = Math.floor(Math.random() * GRID_ROWS);

        changesQueue.push({ x, y });
      }
    }
  },

  // Handle mouse movement
  mouseMoved: changeValue,

  // Handle touch movement
  touchStarted: (p5) => {
    changeValue(p5);
    touchUpdater = setInterval(() => {
      changeValue(p5);
    }, 10);
  },
  touchEnded: () => {
    if (touchUpdater) {
      clearInterval(touchUpdater);
    }
  },
};

export default gameOfLife;