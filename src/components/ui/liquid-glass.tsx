"use client";

import * as React from "react";
import { cn } from "cn";
import {
  createLensAssets,
  isBlink,
  lensDepth,
  lensScale,
} from "./glass-optics";
import "./cupertino.css";

/**
 * `opaque` frosts the content behind it, for panels that need legibility. `regular` keeps the
 * content visible through a light wash and bends it at the rim. `clear` is bare glass.
 */
type GlassVariant = "opaque" | "regular" | "clear";

type GlassSurfaceProps = {
  /** Defaults to `regular`. */
  variant?: GlassVariant;
  /**
   * Content to refract instead of the live backdrop. Pass an aligned copy of the layer under the
   * surface (a track fill, highlighted options) to get refraction in every browser.
   */
  refract?: React.ReactNode;
  /** Multiplies the refraction strength. Defaults to 1. */
  strength?: number;
  /** Multiplies the rim width. Lower values keep more of the center flat. Defaults to 1. */
  rim?: number;
  /** Splits the bend per color channel. Defaults to `true` except for `opaque`. Disable over text. */
  chroma?: boolean;
  /**
   * Whether presses on the parent pull and stretch it toward the pointer and light the glass from
   * the touch point. Defaults to `true`. Disable on thumbs and indicators that have their own
   * gesture, and on surfaces that never take a press.
   */
  interactive?: boolean;
  className?: string;
};

type LiquidGlassProps = React.ComponentProps<"div"> &
  Pick<GlassSurfaceProps, "variant" | "strength" | "interactive">;

/** Largest backdrop area in CSS pixels that receives edge refraction. Larger panels keep blur only. */
const MAX_REFRACTION_AREA = 150_000;
/**
 * Gain of the 3×3 Sobel kernels that turn the blurred backdrop shape into the map, per device pixel
 * of edge blur. Calibrated so the map saturates at the rim like the bitmap lens.
 */
const SOBEL_GAIN = 5;
/** Blur that rounds the flooded rectangle into the shape, as a fraction of the corner radius. */
const CORNER_BLUR = 0.54;
/**
 * Linear transfer that steps the blurred rectangle back into a hard rounded shape: coverage below
 * 0.4875 (where slope × x + intercept crosses zero) becomes black, above it white.
 */
const THRESHOLD_SLOPE = 40;
const THRESHOLD_INTERCEPT = -19.5;
/**
 * Color fringe: red bends `1 + 0.2 × CHROMA` times as far as blue and green `1 + 0.1 × CHROMA`,
 * the split Aave's glass uses. Keep it faint; a wide split reads as a dirty halo on hard edges.
 */
const CHROMA = 0.6;
/**
 * Backdrop lenses keep the edge window narrow and the shift strong: the compressed reflection in
 * a thin band along the rim is what reads as thick glass over live content.
 */
const BACKDROP_EDGE = 0.3;
const BACKDROP_SCALE = 1.25;
/** Fraction of the pointer travel that a pressed surface follows. */
const PULL = 0.08;
const ACCESSIBILITY_QUERY =
  "(prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)";

function readRadius(element: HTMLElement, width: number, height: number) {
  const value = getComputedStyle(element).borderTopLeftRadius;
  const number = parseFloat(value) || 0;
  if (value.endsWith("%")) return (Math.min(width, height) * number) / 100;
  return Math.min(number, width / 2, height / 2);
}

/** Rubber band: follows freely at first, then approaches `limit` asymptotically. */
function rubberBand(distance: number, limit: number) {
  const magnitude = Math.abs(distance) * PULL;
  return Math.sign(distance) * limit * (1 - 1 / (1 + magnitude / limit));
}

/** Writes the displacement to every pass. Red bends most, blue least, as in Aave's glass. */
function setDisplacement(node: SVGFilterElement, scale: number) {
  const passes = node.querySelectorAll("feDisplacementMap");
  passes.forEach((pass, index) => {
    const spread = passes.length > 1 ? 1 + CHROMA * 0.1 * (2 - index) : 1;
    pass.setAttribute("scale", (scale * spread).toFixed(2));
  });
}

type Shape = {
  width: number;
  height: number;
  radius: number;
  depth: number;
  pad: number;
};

/**
 * Points the filter at a bitmap lens map. The copy layer matches the shape; the filter region grows
 * by the padding baked into the map. WebKit renders nothing for an `feImage` that carries its own
 * `x`, `y`, `width`, or `height`, so the region is set on the filter in percentages instead.
 */
function applyLensFilter(
  node: SVGFilterElement,
  image: SVGFEImageElement,
  map: string,
  width: number,
  height: number,
  pad: number,
) {
  node.setAttribute("x", `${(-pad / width) * 100}%`);
  node.setAttribute("y", `${(-pad / height) * 100}%`);
  node.setAttribute("width", `${((width + pad * 2) / width) * 100}%`);
  node.setAttribute("height", `${((height + pad * 2) / height) * 100}%`);
  image.setAttribute("href", map);
}

/**
 * Rebuilds the backdrop lens from filter primitives. Blink renders nothing for feImage inside
 * backdrop-filter, resolves objectBoundingBox subregions against the wrong box, drops the whole
 * backdrop-filter under an ancestor clip-path, and loses a reference filter combined with blur().
 * So the map is built in user-space pixels, the filter region extends past the element instead of
 * the element growing, and blur and saturation run inside the filter. The map is a flooded
 * rectangle, blurred and thresholded into the rounded shape, blurred again for the edge window,
 * then differentiated with Sobel kernels. The Sobel runs on device pixels, so its gain follows the
 * device pixel ratio.
 */
function applyBackdropFilter(
  node: SVGFilterElement,
  { width, height, radius, depth, pad }: Shape,
  { dpr, blur, saturate }: { dpr: number; blur: number; saturate: number },
) {
  const cornerBlur = Math.max(0.5, radius * CORNER_BLUR);
  const edgeBlur = Math.max(1, depth * BACKDROP_EDGE);
  const region = Math.max(pad, Math.ceil(cornerBlur), Math.ceil(edgeBlur * 2));
  node.setAttribute("x", `${-region}`);
  node.setAttribute("y", `${-region}`);
  node.setAttribute("width", `${width + region * 2}`);
  node.setAttribute("height", `${height + region * 2}`);
  for (const rect of node.querySelectorAll(
    "[data-lens-shape], [data-lens-clip]",
  )) {
    rect.setAttribute("x", "0");
    rect.setAttribute("y", "0");
    rect.setAttribute("width", `${width}`);
    rect.setAttribute("height", `${height}`);
  }
  node
    .querySelector("[data-lens-corner]")
    ?.setAttribute("stdDeviation", cornerBlur.toFixed(2));
  node
    .querySelector("[data-lens-edge]")
    ?.setAttribute("stdDeviation", edgeBlur.toFixed(2));
  for (const kernel of node.querySelectorAll("feConvolveMatrix"))
    kernel.setAttribute("divisor", (SOBEL_GAIN / (edgeBlur * dpr)).toFixed(4));
  node
    .querySelector("[data-lens-blur]")
    ?.setAttribute("stdDeviation", blur.toFixed(2));
  node
    .querySelector("[data-lens-saturate]")
    ?.setAttribute("values", saturate.toFixed(2));
}

/**
 * Decorative glass layers for a positioned parent with `border-radius`. The parent supplies the
 * shape; the surface supplies blur, refraction, rim light, and press response.
 */
function GlassSurface({
  variant = "regular",
  refract,
  strength = 1,
  rim = 1,
  chroma = variant !== "opaque",
  interactive = true,
  className,
}: GlassSurfaceProps) {
  const surface = React.useRef<HTMLSpanElement>(null);
  const backdrop = React.useRef<HTMLSpanElement>(null);
  const layer = React.useRef<HTMLSpanElement>(null);
  const filter = React.useRef<SVGFilterElement>(null);
  const image = React.useRef<SVGFEImageElement>(null);
  // WebKit caches filter output by id, so every new map gets a new id. The counter outlives the
  // effect: a rerun with a reset counter would hand WebKit an id it already cached.
  const version = React.useRef(0);
  const baseId = `glass-${React.useId()}`;
  const lens = refract !== undefined;

  // Lens map and specular image: regenerated only when the surface changes shape. The specular
  // image lights the rim in every browser; the map drives the filter where refraction runs.
  React.useEffect(() => {
    const element = surface.current;
    if (!element) return;
    // Opaque panels keep the native blur: at 20px the bend is invisible, and a reference filter
    // would read pixels past the element that Chrome leaves stale after a route change.
    const refracts = lens || (isBlink() && variant !== "opaque");
    const reduced = matchMedia(ACCESSIBILITY_QUERY);
    let frame = 0;
    let previous = "";
    let baseScale = 0;
    let bendFrame = 0;

    // Displacement follows --glass-bend (0..1), a registered custom property the host animates.
    // While it transitions, the value is sampled every frame and written to the passes.
    const applyBend = () => {
      const node = filter.current;
      if (!node) return;
      const value = parseFloat(
        getComputedStyle(element).getPropertyValue("--glass-bend"),
      );
      const bend = Number.isFinite(value) ? Math.max(0, value) : 1;
      setDisplacement(node, baseScale * bend);
    };
    const followBend = (event: TransitionEvent) => {
      if (event.propertyName !== "--glass-bend") return;
      cancelAnimationFrame(bendFrame);
      const step = () => {
        applyBend();
        bendFrame = requestAnimationFrame(step);
      };
      bendFrame = requestAnimationFrame(step);
    };
    const settleBend = (event: TransitionEvent) => {
      if (event.propertyName !== "--glass-bend") return;
      cancelAnimationFrame(bendFrame);
      applyBend();
    };

    const clearRefraction = () => {
      backdrop.current?.style.removeProperty("--glass-refraction");
      backdrop.current?.removeAttribute("data-refraction");
      layer.current?.style.removeProperty("filter");
    };
    const clear = () => {
      previous = "";
      clearRefraction();
      element.style.removeProperty("--glass-specular");
      element.removeAttribute("data-specular");
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reduced.matches) return clear();
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        if (!width || !height) return;
        const radius = readRadius(element, width, height);
        const dpr = window.devicePixelRatio || 1;
        const key = `${width}:${height}:${radius.toFixed(1)}:${dpr}`;
        if (key === previous) return;
        previous = key;
        const scale = lensScale(width, height) * strength;
        const depth = lensDepth(width, height) * rim;
        const pad = Math.ceil(scale / 2) + 2;
        const assets = createLensAssets(
          { width, height, radius },
          { depth, pad },
        );
        if (!assets) return;
        element.style.setProperty(
          "--glass-specular",
          `url("${assets.specular}")`,
        );
        element.setAttribute("data-specular", "");
        // Large panels keep blur only: the bend is invisible on them and the filter is costly.
        if (!refracts || (!lens && width * height > MAX_REFRACTION_AREA))
          return clearRefraction();
        const node = filter.current;
        if (!node) return;
        const id = `${baseId}-${++version.current}`;
        node.setAttribute("id", id);
        if (lens) {
          if (!image.current) return;
          baseScale = scale;
          applyLensFilter(node, image.current, assets.map, width, height, pad);
          applyBend();
          layer.current?.style.setProperty("filter", `url(#${id})`);
          return;
        }
        const style = getComputedStyle(element);
        baseScale = scale * BACKDROP_SCALE;
        applyBackdropFilter(
          node,
          { width, height, radius, depth, pad },
          {
            dpr,
            blur: parseFloat(style.getPropertyValue("--_blur")) || 0,
            saturate: parseFloat(style.getPropertyValue("--_saturate")) || 1,
          },
        );
        applyBend();
        backdrop.current?.style.setProperty(
          "--glass-refraction",
          `url(#${id})`,
        );
        backdrop.current?.setAttribute("data-refraction", "");
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    reduced.addEventListener("change", update);
    // Zoom changes the device pixel ratio without resizing the element.
    window.addEventListener("resize", update);
    element.addEventListener("transitionrun", followBend);
    element.addEventListener("transitionend", settleBend);
    element.addEventListener("transitioncancel", settleBend);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", update);
      window.removeEventListener("resize", update);
      element.removeEventListener("transitionrun", followBend);
      element.removeEventListener("transitionend", settleBend);
      element.removeEventListener("transitioncancel", settleBend);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(bendFrame);
    };
  }, [baseId, lens, strength, rim, variant]);

  // Press response: the host follows the pointer on a rubber band, stretches along the pull, and
  // lights up from the touch point. Everything is written as custom properties on the host.
  React.useEffect(() => {
    const element = surface.current;
    const host = element?.parentElement;
    if (!interactive || !element || !host) return;
    host.setAttribute("data-glass-host", "");
    let frame = 0;
    let press: {
      id: number;
      x: number;
      y: number;
      width: number;
      height: number;
    } | null = null;

    const light = (clientX: number, clientY: number, rect: DOMRect) => {
      element.style.setProperty(
        "--glass-light-x",
        `${((clientX - rect.left) / rect.width) * 100}%`,
      );
      element.style.setProperty(
        "--glass-light-y",
        `${((clientY - rect.top) / rect.height) * 100}%`,
      );
    };
    const release = () => {
      if (!press) return;
      press = null;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      host.removeAttribute("data-glass-pressed");
      host.removeAttribute("data-glass-dragging");
      for (const name of [
        "--glass-pull-x",
        "--glass-pull-y",
        "--glass-stretch-x",
        "--glass-stretch-y",
      ])
        host.style.removeProperty(name);
    };
    const move = (event: PointerEvent) => {
      const current = press;
      if (!current || event.pointerId !== current.id) return;
      // A host that opened a popup hands the interaction to it.
      if (host.getAttribute("aria-expanded") === "true") return release();
      const { clientX, clientY } = event;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const dx = clientX - current.x;
        const dy = clientY - current.y;
        if (Math.hypot(dx, dy) < 2 && !host.hasAttribute("data-glass-dragging"))
          return;
        host.setAttribute("data-glass-dragging", "");
        const pullX = rubberBand(dx, Math.min(current.width * 0.12, 10));
        const pullY = rubberBand(dy, Math.min(current.height * 0.18, 8));
        host.style.setProperty("--glass-pull-x", `${pullX.toFixed(2)}px`);
        host.style.setProperty("--glass-pull-y", `${pullY.toFixed(2)}px`);
        host.style.setProperty(
          "--glass-stretch-x",
          (1 + (Math.abs(pullX) / current.width) * 0.2).toFixed(4),
        );
        host.style.setProperty(
          "--glass-stretch-y",
          (1 + (Math.abs(pullY) / current.height) * 0.2).toFixed(4),
        );
        const rect = host.getBoundingClientRect();
        light(clientX, clientY, rect);
      });
    };
    const down = (event: PointerEvent) => {
      if (press || event.button !== 0) return;
      if (host.matches(":disabled, [data-disabled], [aria-disabled='true']"))
        return;
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      press = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        width: rect.width,
        height: rect.height,
      };
      light(event.clientX, event.clientY, rect);
      host.setAttribute("data-glass-pressed", "");
      window.addEventListener("pointermove", move, { passive: true });
      window.addEventListener("pointerup", release);
      window.addEventListener("pointercancel", release);
    };
    host.addEventListener("pointerdown", down);
    return () => {
      release();
      host.removeEventListener("pointerdown", down);
      host.removeAttribute("data-glass-host");
    };
  }, [interactive]);

  const source = lens ? "SourceGraphic" : "lensSource";
  return (
    <span
      ref={surface}
      aria-hidden="true"
      data-slot="glass-surface"
      data-variant={variant}
      data-lens={lens ? "" : undefined}
      className={cn("cupertino-glass-surface", className)}
    >
      {lens ? (
        <span ref={layer} className="cupertino-glass-refract">
          {refract}
        </span>
      ) : (
        <span ref={backdrop} className="cupertino-glass-backdrop" />
      )}
      <span className="cupertino-glass-wash" />
      <span className="cupertino-glass-rim" />
      {interactive && <span className="cupertino-glass-light" />}
      <svg
        aria-hidden="true"
        focusable="false"
        className="cupertino-glass-defs"
      >
        <filter
          ref={filter}
          colorInterpolationFilters="sRGB"
          filterUnits={lens ? undefined : "userSpaceOnUse"}
          primitiveUnits={lens ? undefined : "userSpaceOnUse"}
        >
          {lens ? (
            <feImage ref={image} preserveAspectRatio="none" result="map" />
          ) : (
            <BackdropLensPrimitives />
          )}
          <feDisplacementMap
            in={source}
            in2="map"
            xChannelSelector="R"
            yChannelSelector="G"
            result="red"
          />
          {chroma && <ChromaPasses source={source} />}
        </filter>
      </svg>
    </span>
  );
}

/**
 * Builds `map` and `lensSource` from the live backdrop for Blink. `applyBackdropFilter` sizes the
 * flood rectangles and blurs at runtime.
 */
function BackdropLensPrimitives() {
  return (
    <>
      {/*
        The backdrop is cropped to the element before it is blurred: past the element Chrome
        supplies no backdrop and may hand back a stale texture. The blur fades at that crop,
        so the sharp crop sits under it.
      */}
      <feFlood data-lens-clip="" floodColor="#000" result="lensClip" />
      <feComposite
        in="SourceGraphic"
        in2="lensClip"
        operator="in"
        result="lensCropped"
      />
      <feGaussianBlur
        data-lens-blur=""
        in="lensCropped"
        stdDeviation="0"
        result="lensBlurred"
      />
      <feComposite
        in="lensBlurred"
        in2="lensCropped"
        operator="over"
        result="lensBlurredSafe"
      />
      <feColorMatrix
        data-lens-saturate=""
        in="lensBlurredSafe"
        type="saturate"
        values="1"
        result="lensSource"
      />
      <feFlood floodColor="#000" result="lensBg" />
      <feFlood data-lens-shape="" floodColor="#fff" result="lensRect" />
      <feComposite
        in="lensRect"
        in2="lensBg"
        operator="over"
        result="lensMask"
      />
      <feGaussianBlur
        data-lens-corner=""
        in="lensMask"
        stdDeviation="1"
        result="lensSoft"
      />
      <feComponentTransfer in="lensSoft" result="lensShape">
        <feFuncR
          type="linear"
          slope={THRESHOLD_SLOPE}
          intercept={THRESHOLD_INTERCEPT}
        />
        <feFuncG
          type="linear"
          slope={THRESHOLD_SLOPE}
          intercept={THRESHOLD_INTERCEPT}
        />
        <feFuncB
          type="linear"
          slope={THRESHOLD_SLOPE}
          intercept={THRESHOLD_INTERCEPT}
        />
        <feFuncA type="linear" slope="0" intercept="1" />
      </feComponentTransfer>
      <feGaussianBlur
        data-lens-edge=""
        in="lensShape"
        stdDeviation="1"
        result="lensEdgeSoft"
      />
      <feComponentTransfer in="lensEdgeSoft" result="lensEdge">
        <feFuncA type="linear" slope="0" intercept="1" />
      </feComponentTransfer>
      <feConvolveMatrix
        in="lensEdge"
        order="3"
        kernelMatrix="1 0 -1 2 0 -2 1 0 -1"
        divisor="1"
        bias="0.5"
        preserveAlpha="true"
        edgeMode="duplicate"
        result="lensGX"
      />
      <feConvolveMatrix
        in="lensEdge"
        order="3"
        kernelMatrix="1 2 1 0 0 0 -1 -2 -1"
        divisor="1"
        bias="0.5"
        preserveAlpha="true"
        edgeMode="duplicate"
        result="lensGY"
      />
      <feColorMatrix
        in="lensGX"
        values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
        result="lensR"
      />
      <feColorMatrix
        in="lensGY"
        values="0 0 0 0 0  1 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
        result="lensG"
      />
      <feComposite
        in="lensR"
        in2="lensG"
        operator="arithmetic"
        k2="1"
        k3="1"
        result="map"
      />
    </>
  );
}

/**
 * Two more displacement passes at slightly different scales (set by `setDisplacement`), one color
 * channel kept from each, recombined with the `red` pass for a prismatic fringe on the folds.
 */
function ChromaPasses({ source }: { source: string }) {
  return (
    <>
      <feDisplacementMap
        in={source}
        in2="map"
        xChannelSelector="R"
        yChannelSelector="G"
        result="green"
      />
      <feDisplacementMap
        in={source}
        in2="map"
        xChannelSelector="R"
        yChannelSelector="G"
        result="blue"
      />
      <feColorMatrix
        in="red"
        values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
        result="r"
      />
      <feColorMatrix
        in="green"
        values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
        result="g"
      />
      <feColorMatrix
        in="blue"
        values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
        result="b"
      />
      {/*
        Recombine as an average, then scale the colors back up: summing three passes adds
        their alpha too, which turns a translucent copy into an opaque gray slab.
      */}
      <feComposite
        in="r"
        in2="g"
        operator="arithmetic"
        k2="0.5"
        k3="0.5"
        result="rg"
      />
      <feComposite
        in="rg"
        in2="b"
        operator="arithmetic"
        k2="0.6667"
        k3="0.3333"
        result="rgb"
      />
      <feComponentTransfer in="rgb">
        <feFuncR type="linear" slope="3" />
        <feFuncG type="linear" slope="3" />
        <feFuncB type="linear" slope="3" />
      </feComponentTransfer>
    </>
  );
}

/** A glass container over live page content. Shape and layout come from `className` and `style`. */
function LiquidGlass({
  variant = "regular",
  strength,
  interactive = true,
  className,
  children,
  ...props
}: LiquidGlassProps) {
  return (
    <div
      data-slot="liquid-glass"
      data-variant={variant}
      data-interactive={interactive || undefined}
      className={cn(
        "cupertino cupertino-glass relative isolate rounded-full text-foreground shadow-[var(--glass-shadow)]",
        interactive && "cursor-pointer",
        className,
      )}
      {...props}
    >
      <GlassSurface
        variant={variant}
        strength={strength}
        interactive={interactive}
      />
      {children}
    </div>
  );
}

export { LiquidGlass, GlassSurface };
export type { LiquidGlassProps, GlassSurfaceProps, GlassVariant };
