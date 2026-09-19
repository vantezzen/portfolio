"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/** Size of one dither cell in CSS pixels. Larger is coarser and calmer. */
const CELL = 4;

const VERTEX = /* glsl */ `#version 300 es
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

/**
 * Drifting isolines: contour lines of a domain-warped noise field that fold
 * and flow like a weather chart, quantised through an 8x8 Bayer dither. The
 * middle of the hero is kept clear for the text; the pointer pushes the lines
 * aside where it moves.
 */
const FRAGMENT = /* glsl */ `#version 300 es
precision highp float;
out vec4 outColor;

uniform vec2 u_res;      // canvas size in cells
uniform float u_time;    // seconds
uniform vec2 u_pointer;  // smoothed pointer, in uv (0..1, y up)
uniform float u_scroll;  // 0 at the top, 1 once the hero has scrolled away

// Paper white, then neutral-200 / 300 / 400.
const vec3 SHADES[4] = vec3[4](
  vec3(1.0), vec3(0.898), vec3(0.83), vec3(0.72)
);
const float LINES = 9.0;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i), b = hash(i + vec2(1, 0));
  float c = hash(i + vec2(0, 1)), d = hash(i + vec2(1, 1));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * vnoise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

void main() {
  vec2 cell = gl_FragCoord.xy;
  vec2 uv = cell / u_res;
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2(uv.x * aspect, uv.y) * 2.2;
  float t = u_time * 0.05;

  // The pointer displaces the field around it, like a finger in water.
  vec2 toPointer = (uv - u_pointer) * vec2(aspect, 1.0);
  float near = exp(-dot(toPointer, toPointer) * 14.0);
  p += normalize(toPointer + 1e-4) * near * 0.05;

  // Domain warp, then the field itself. Scrolling slides everything upward.
  vec2 q = vec2(fbm(p + vec2(t, 0.0)), fbm(p + vec2(5.2, 1.3) - t * 0.7));
  float h = fbm(p + 1.4 * q + vec2(0.0, u_scroll * 2.0 + t * 0.4));

  // Crisp contour lines where the field crosses a level, a whisper of dots
  // between them so the paper is not dead flat.
  float level = h * LINES;
  float line = step(0.76, abs(fract(level) - 0.5) * 2.0);
  float between = smoothstep(0.4, 0.9, h) * 0.08;
  float ink = max(between, line * 0.7);

  // Clearing around the text: an ellipse just left of centre on wide screens,
  // the upper middle on phones.
  vec2 centre = aspect < 1.0 ? vec2(0.5, 0.62) : vec2(0.42, 0.55);
  vec2 d = (uv - centre) * (aspect < 1.0 ? vec2(1.0, 0.55) : vec2(aspect * 0.5, 1.0));
  float focus = smoothstep(0.3, 0.75, length(d));

  ink *= focus * (1.0 - u_scroll);

  int shade = int(floor(ink * 3.0 + bayer8(cell)));
  // Lines at the edges are drawn solid; toward the clearing they dissolve.
  if (line > 0.5 && bayer8(cell) < focus - 0.3) shade = 2;
  outColor = vec4(SHADES[clamp(shade, 0, 3)], 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "shader failed");
  }
  return shader;
}

/**
 * Live, pixelated isolines behind the hero. Renders one cell per `CELL` CSS
 * pixels and lets the browser upscale with nearest-neighbour, so the grain is
 * the look. The pointer is spring-smoothed; scrolling slides and fades it.
 */
export function DitherField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    let program: WebGLProgram;
    try {
      program = gl.createProgram()!;
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    } catch {
      return;
    }
    gl.useProgram(program);
    const uniforms = {
      res: gl.getUniformLocation(program, "u_res"),
      time: gl.getUniformLocation(program, "u_time"),
      pointer: gl.getUniformLocation(program, "u_pointer"),
      scroll: gl.getUniformLocation(program, "u_scroll"),
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Pointer target and spring-smoothed position, in uv with y up.
    const target = { x: -2, y: -2 }; // off-canvas until the pointer shows up
    const pointer = { x: -2, y: -2, vx: 0, vy: 0 };
    let width = 1;
    let height = 1;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = Math.max(1, Math.ceil(rect.width / CELL));
      height = Math.max(1, Math.ceil(rect.height / CELL));
      canvas!.width = width;
      canvas!.height = height;
      gl!.viewport(0, 0, width, height);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      target.x = (event.clientX - rect.left) / rect.width;
      target.y = 1 - (event.clientY - rect.top) / rect.height;
      if (pointer.x < -1) {
        pointer.x = target.x;
        pointer.y = target.y;
      }
    }

    const start = performance.now();
    let frame = 0;
    let visible = true;

    function render(now: number) {
      const k = 0.06;
      pointer.vx = (pointer.vx + (target.x - pointer.x) * k) * 0.78;
      pointer.vy = (pointer.vy + (target.y - pointer.y) * k) * 0.78;
      pointer.x += pointer.vx;
      pointer.y += pointer.vy;

      const scroll = Math.min(
        1,
        Math.max(0, window.scrollY / (height * CELL * 0.8)),
      );

      gl!.uniform2f(uniforms.res, width, height);
      gl!.uniform1f(uniforms.time, (now - start) / 1000);
      gl!.uniform2f(uniforms.pointer, pointer.x, pointer.y);
      gl!.uniform1f(uniforms.scroll, scroll);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
    }

    function loop(now: number) {
      render(now);
      frame = requestAnimationFrame(loop);
    }

    function setRunning(run: boolean) {
      cancelAnimationFrame(frame);
      if (run && !reduceMotion) frame = requestAnimationFrame(loop);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) render(performance.now());
    });
    resizeObserver.observe(canvas);
    resize();

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      setRunning(visible && document.visibilityState === "visible");
    });
    intersection.observe(canvas);

    const onVisibility = () =>
      setRunning(visible && document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduceMotion) window.addEventListener("pointermove", onPointerMove);

    render(performance.now());
    setRunning(true);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("size-full [image-rendering:pixelated]", className)}
    />
  );
}
