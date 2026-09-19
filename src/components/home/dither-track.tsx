"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/** Size of one dither cell in CSS pixels. Larger is coarser and calmer. */
const CELL = 4;

const VERTEX = /* glsl */ `#version 300 es
void main() {
  // One triangle covering the clip space.
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

/**
 * A pseudo-3D road in the spirit of 80s driving toys: rumble strips and a
 * dashed centre line receding to a fogged horizon, drawn through an 8x8 Bayer
 * dither in four shades of gray.
 */
const FRAGMENT = /* glsl */ `#version 300 es
precision highp float;
out vec4 outColor;

uniform vec2 u_res;   // canvas size in cells
uniform float u_dist; // distance travelled, in road half-widths
uniform float u_cam;  // lateral camera offset from steering
uniform float u_fade; // 1 at the top of the page, 0 once scrolled away

// Paper white, then neutral-200 / 300 / 400.
const vec3 SHADES[4] = vec3[4](
  vec3(1.0), vec3(0.898), vec3(0.83), vec3(0.72)
);

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

// Lateral position of the road centre at distance d, in half-widths.
float track(float d) {
  return 1.1 * sin(d * 0.085) + 0.6 * sin(d * 0.029 + 1.7);
}

void main() {
  vec2 cell = gl_FragCoord.xy;
  vec2 uv = cell / u_res;
  float aspect = u_res.x / u_res.y;
  bool portrait = aspect < 1.0;

  float horizon = portrait ? 0.88 : 0.72;
  // Camera height in road half-widths: sets how wide the road is up close.
  float camHeight = portrait ? 4.0 : 1.8;
  float nearZ = camHeight / horizon;
  // Vanishing point: pushed right on landscape so the road clears the text.
  float vanish = portrait ? 0.5 : 0.62;

  float ink = 0.0;
  bool solid = false;

  if (uv.y < horizon) {
    // Ground plane: depth from the row, then project this pixel onto it.
    float pz = camHeight / max(horizon - uv.y, 0.002);
    float d = u_dist + pz;
    // Centre the camera on the road at the nearest visible row, so the
    // bottom of the road always sits under the vanishing point.
    float camLat = track(u_dist + nearZ) + u_cam;
    float worldX = (uv.x - vanish) * aspect * pz + camLat;
    float lat = worldX - track(d);
    float a = abs(lat);
    float fog = exp(-(pz / nearZ - 1.0) * 0.5);
    float seg = step(0.5, fract(d * 0.75)); // alternating road segments

    if (a < 1.0) {
      ink = 0.2 * fog;                                    // asphalt
      if (a < 0.04 && seg > 0.5) ink = 0.75 * fog;        // centre dashes
    } else if (a < 1.2) {
      ink = (seg > 0.5 ? 1.0 : 0.35) * fog;               // rumble strips
      solid = seg > 0.5 && fog > 0.35;
    } else {
      // Sparse posts in the ground, fixed to the world so they stream past.
      vec2 g = vec2(worldX * 2.5, d * 2.5);
      vec2 gi = floor(g), gf = fract(g);
      float post = step(0.9, hash(gi)) * step(gf.x, 0.18) * step(gf.y, 0.18);
      ink = 0.6 * post * fog;
    }
  }

  // Under the text column (left on landscape, top on portrait) hold the road
  // to sparse dots of the lightest shade, with no solid marks.
  float clear = portrait
    ? smoothstep(0.42, 0.3, uv.y)
    : smoothstep(0.35, 0.72, uv.x);
  float cap = portrait ? 0.0 : 0.28;
  ink = min(clamp(ink, 0.0, 1.0), mix(cap, 1.0, clear)) * u_fade;

  int shade = int(floor(ink * 3.0 + bayer8(cell)));
  if (solid && clear > 0.5 && bayer8(cell) < u_fade) shade = 3;
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
 * Live, pixelated road. Currently unused: kept as an alternative hero backdrop. Renders one cell per `CELL` CSS
 * pixels and lets the browser upscale with nearest-neighbour, so the grain is
 * the look. It cruises on its own, scrolling adds a speed boost that decays,
 * and the pointer steers the camera a little.
 */
export function DitherTrack({ className }: { className?: string }) {
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
      dist: gl.getUniformLocation(program, "u_dist"),
      cam: gl.getUniformLocation(program, "u_cam"),
      fade: gl.getUniformLocation(program, "u_fade"),
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Steering: pointer x maps to a lateral camera offset, spring-smoothed.
    let steerTarget = 0;
    const steer = { x: 0, v: 0 };
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
      steerTarget = (event.clientX / window.innerWidth - 0.5) * 0.9;
    }

    // Driving: a base cruise, plus a boost that scrolling tops up and time
    // bleeds off again.
    const BASE_SPEED = 1.4; // half-widths per second
    let distance = 0;
    let boost = 0;
    let lastScrollY = window.scrollY;
    let lastNow = performance.now();
    let frame = 0;
    let visible = true;

    function onScroll() {
      const delta = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      boost = Math.min(boost + delta * 0.02, 8);
    }

    function render(now: number) {
      const dt = Math.min((now - lastNow) / 1000, 0.1);
      lastNow = now;

      boost *= Math.pow(0.2, dt);
      distance += (BASE_SPEED + boost) * dt;

      const k = 0.03;
      steer.v = (steer.v + (steerTarget - steer.x) * k) * 0.85;
      steer.x += steer.v;

      const fade =
        1 - Math.min(1, Math.max(0, window.scrollY / (height * CELL * 0.8)));

      gl!.uniform2f(uniforms.res, width, height);
      gl!.uniform1f(uniforms.dist, distance);
      gl!.uniform1f(uniforms.cam, steer.x);
      gl!.uniform1f(uniforms.fade, fade);
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
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    render(performance.now());
    setRunning(true);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
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
