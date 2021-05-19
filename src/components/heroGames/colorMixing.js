/**
 * Color mixing hero for vantezzen.io
 * Source: https://codepen.io/tmrDevelops/pen/vOPZBv
 */

const R = function(x, y, t) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

const G = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

const B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

let $;

let t = 0;

const colorMixing = {
  info: 'Color Mixing',
  setup: (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(32, 32);
    cnv.parent(canvasParentRef);
    cnv.style("width", "100vw");
    cnv.style("height", "100vh");
    cnv.attribute("width", "32");
    cnv.attribute("height", "32");

    $ = cnv.elt.getContext('2d');
  },
  draw: (p5) => {
    // We only need to update the canvas when the canvas is actually in the view
    // Otherwise just skip drawing
    if (window.scrollY > 300) return;

    for(let x = 0; x <= 35; x++) {
      for(let y = 0; y<= 35; y++) {
        if ($) {
          // p5's rendering Engine will mess with the rendering of the colors
          // so we need to directly access the canvas instead
          $.fillStyle = "rgb(" + R(x,y,t) + "," + G(x,y,t) + "," + B(x,y,t) + ")";
          $.fillRect(x, y, 1,1);
        }
      }
    }
    t += 0.03;
  }
};

export default colorMixing;