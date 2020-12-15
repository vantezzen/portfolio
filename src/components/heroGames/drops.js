/**
 * Drops hero for vantezzen.io
 */
let drops = [];
let round = 0;
const COLORS = [
  "#5C257F",
  "#D697FF",
  "#B84BFF",
  "#6B4C7F",
  "#933CCC"
];
const MAX_SIZE = 50;

function addNewRandomDrop(p5) {
  drops.push({
    x: p5.random(0, p5.width),
    y: p5.random(0, p5.height),
    size: 0,
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  });
}
function addMousePositionAsDrop(p5) {
  drops.push({
    x: p5.mouseX,
    y: p5.mouseY,
    size: 0,
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  });
}

const dropsSketch = {
  info: 'Drops',
  setup: (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    addNewRandomDrop(p5);
  },
  draw: (p5) => {
    p5.noFill();
  
    for(let drop of drops) {
      if (drop.size > MAX_SIZE) continue;
      
      const dropColor = p5.color(drop.color);
      dropColor.setAlpha(((MAX_SIZE - drop.size) / MAX_SIZE) * 255);
      p5.stroke(dropColor);
      p5.circle(drop.x, drop.y, drop.size);
      drop.size++;
    }
    
    // Filter out big drops
    drops = drops.filter((drop) => drop.size < MAX_SIZE);
    
    round++;
    if (round >= 30) {
      addNewRandomDrop(p5);
      round = 0;
    }
  },
  mouseMoved: (p5) => {
    if((round % 10) === 0) {
      addMousePositionAsDrop(p5);
    }
  },
  mousePressed: (p5) => {
    addMousePositionAsDrop(p5);
  }
};

export default dropsSketch;