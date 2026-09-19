export type LensGeometry = {
  /** Shape width in CSS pixels. */
  width: number
  /** Shape height in CSS pixels. */
  height: number
  /** Corner radius in CSS pixels. Clamped to half of the shorter side. */
  radius: number
}

export type LensOptions = {
  /** Width of the refracting rim in CSS pixels. Defaults to `lensDepth(width, height)`. */
  depth?: number
  /** Neutral padding around the shape in CSS pixels. Defaults to half of `lensScale` plus 2. */
  pad?: number
}

export type LensMap = {
  width: number
  height: number
  pixels: Uint8ClampedArray<ArrayBuffer>
  /** Padding in CSS pixels on every side of the shape. */
  pad: number
  /** Map pixels per CSS pixel. */
  ratio: number
}

/** Most map pixels per CSS pixel. Four keeps the bend smooth on 3× displays. */
const OVERSAMPLE = 4
/** Longest edge of the generated bitmap. Larger shapes are stretched by the filter. */
const MAX_SIZE = 512
/** Encoded lens maps kept by geometry. */
const CACHE_SIZE = 48

/**
 * Width of the edge window in CSS pixels. Inside this band the dome slope takes effect; the center
 * stays flat. Small controls get a narrow window so most of the thumb acts as one bubble.
 */
export function lensDepth(width: number, height: number) {
  const shorter = Math.min(width, height)
  return Math.max(3, Math.min(16, shorter * 0.24))
}

/** Displacement strength in CSS pixels for a shape. The map saturates near the edge, so the rim shifts by half of this. */
export function lensScale(width: number, height: number) {
  const shorter = Math.min(width, height)
  return Math.max(8, Math.min(72, shorter * 0.9))
}

/**
 * Height of the spherical dome as a fraction of the shorter half-size. Near 1 the dome is a
 * hemisphere: flat across the middle with a sharp bend at the rim.
 */
const LENS_DOME = 0.8

/** Light direction in degrees, measured from the positive x axis. 45° lights the top-left and bottom-right of the rim. */
const LIGHT_ANGLE = 45

/** Specular terms encoded in the blue channel and drawn by the rim layer. */
const SPECULAR = {
  /** Broad light across the lens where it faces the light. */
  glow: 0.06,
  /** Highlight band along the edge, `edgeWidth` CSS pixels wide, brightest where the rim faces the light. */
  edge: 0.7,
  edgeWidth: 2.2,
  /** Hairline along the whole edge so the shape reads even where it faces away from the light. */
  line: 0.26,
  lineWidth: 1,
}

function erf(x: number) {
  return Math.tanh(1.7724538509 * x)
}

/**
 * Sphere radii for a cap of height `height` over each half-size, and a scale per axis so the mean
 * slope across the half-size is 0.5. This is the dome from Aave's glass.
 */
function domeConstants(height: number, halfWidth: number, halfHeight: number) {
  const a = Math.max(0.01, Math.min(height, Math.min(halfWidth, halfHeight) - 1))
  const radiusX = (halfWidth * halfWidth + a * a) / (2 * a)
  const radiusY = (halfHeight * halfHeight + a * a) / (2 * a)
  // Mean of x / sqrt(R² − x²) over [0, half], integrated in closed form.
  const mean = (radius: number, half: number) =>
    (radius - Math.sqrt(radius * radius - half * half)) / half
  const meanX = mean(radiusX, halfWidth)
  const meanY = mean(radiusY, halfHeight)
  return {
    radiusX,
    radiusY,
    scaleX: meanX > 0 ? 0.5 / meanX : 1,
    scaleY: meanY > 0 ? 0.5 / meanY : 1,
  }
}

function domeSlope(x: number, radius: number, scale: number) {
  const clamped = Math.min(x, 0.999 * radius)
  return (clamped / Math.sqrt(radius * radius - clamped * clamped)) * scale
}

/** Signed distance from a rounded rectangle centered at the origin. */
function roundedDistance(px: number, py: number, halfW: number, halfH: number, radius: number) {
  const qx = Math.abs(px) - halfW + radius
  const qy = Math.abs(py) - halfH + radius
  const ox = Math.max(qx, 0)
  const oy = Math.max(qy, 0)
  return Math.hypot(ox, oy) + Math.min(Math.max(qx, qy), 0) - radius
}

export function createLensMap(geometry: LensGeometry, options: LensOptions = {}): LensMap {
  const width = Math.max(1, geometry.width)
  const height = Math.max(1, geometry.height)
  const depth = options.depth ?? lensDepth(width, height)
  // Half the displacement plus a margin keeps every displaced sample inside the filter region.
  const pad = options.pad ?? Math.ceil(lensScale(width, height) / 2) + 2
  const ratio = Math.min(OVERSAMPLE, MAX_SIZE / (Math.max(width, height) + pad * 2))

  const w = Math.max(2, Math.round((width + pad * 2) * ratio))
  const h = Math.max(2, Math.round((height + pad * 2) * ratio))
  const halfW = (width / 2) * ratio
  const halfH = (height / 2) * ratio
  const r = Math.max(0.5, Math.min(geometry.radius * ratio, halfW, halfH))
  const band = Math.max(0.5, depth * ratio)
  // Inner rectangle where the edge window starts.
  const innerW = Math.max(0, halfW - band)
  const innerH = Math.max(0, halfH - band)
  const innerR = Math.max(0, Math.min(r, innerW, innerH))
  const window = 1 / (band * Math.SQRT2)
  const dome = domeConstants(LENS_DOME * Math.min(halfW, halfH), halfW, halfH)
  const light = (LIGHT_ANGLE * Math.PI) / 180
  const lightX = Math.cos(light)
  const lightY = Math.sin(light)
  const edgeWidth = Math.max(1, SPECULAR.edgeWidth * ratio)
  const lineWidth = Math.max(0.75, SPECULAR.lineWidth * ratio)
  const pixels = new Uint8ClampedArray(new ArrayBuffer(w * h * 4))
  const cx = w / 2
  const cy = h / 2

  // Light hitting a point of the rim whose normalized position along the light axis is `facing`.
  const specular = (facing: number, gain: number, sdf: number) => {
    const glow = SPECULAR.glow * Math.pow(Math.min(1, facing / Math.SQRT2), 1.5) * gain
    if (sdf >= 0) return glow
    const edge = SPECULAR.edge * Math.max(0, 1 + sdf / edgeWidth) * Math.pow(facing, 1.5)
    const line = SPECULAR.line * Math.max(0, 1 + sdf / lineWidth) * (0.15 + 0.85 * facing)
    return Math.min(1, glow + edge + line)
  }

  for (let y = 0; y < Math.ceil(h / 2); y++) {
    for (let x = 0; x < Math.ceil(w / 2); x++) {
      // Distances from the shape center for the top-left quadrant, both positive.
      const px = cx - (x + 0.5)
      const py = cy - (y + 0.5)
      const u = domeSlope(px, dome.radiusX, dome.scaleX)
      const v = domeSlope(py, dome.radiusY, dome.scaleY)
      const edge = roundedDistance(px, py, innerW, innerH, innerR)
      const gain = 0.5 * (1 + erf(edge * window))
      const dx = Math.round(Math.max(-1, Math.min(1, u * gain)) * 127)
      const dy = Math.round(Math.max(-1, Math.min(1, v * gain)) * 127)
      // Specular is only point-symmetric: the top-left and bottom-right quadrants face the light,
      // the other two face away.
      const sdf = roundedDistance(px, py, halfW, halfH, r)
      const nx = Math.min(1, px / halfW)
      const ny = Math.min(1, py / halfH)
      const lit = Math.round(specular(Math.abs(nx * lightX + ny * lightY), gain, sdf) * 127) + 128
      const unlit = Math.round(specular(Math.abs(nx * lightX - ny * lightY), gain, sdf) * 127) + 128
      const mirrorX = w - 1 - x
      const mirrorY = h - 1 - y
      // The top-left quadrant samples toward positive x and y; the mirrors flip the signs.
      write(pixels, w, x, y, 128 + dx, 128 + dy, lit)
      write(pixels, w, mirrorX, y, 128 - dx, 128 + dy, unlit)
      write(pixels, w, x, mirrorY, 128 + dx, 128 - dy, unlit)
      write(pixels, w, mirrorX, mirrorY, 128 - dx, 128 - dy, lit)
    }
  }
  return { width: w, height: h, pixels, pad, ratio }
}

function write(
  pixels: Uint8ClampedArray<ArrayBuffer>,
  w: number,
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
) {
  const i = (y * w + x) * 4
  pixels[i] = r
  pixels[i + 1] = g
  pixels[i + 2] = b
  pixels[i + 3] = 255
}

/**
 * The specular channel of a lens map as a white image with alpha, cropped to the shape, for use as
 * a CSS background on the rim layer.
 */
export function createSpecularImage(map: LensMap) {
  const left = Math.round(map.pad * map.ratio)
  const top = left
  const width = Math.max(1, map.width - left * 2)
  const height = Math.max(1, map.height - top * 2)
  const pixels = new Uint8ClampedArray(new ArrayBuffer(width * height * 4))
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const from = ((y + top) * map.width + x + left) * 4 + 2
      const to = (y * width + x) * 4
      pixels[to] = 255
      pixels[to + 1] = 255
      pixels[to + 2] = 255
      pixels[to + 3] = Math.round(((map.pixels[from] - 128) / 127) * 255)
    }
  }
  return { width, height, pixels }
}

export type LensAssets = {
  /** Displacement map as a PNG data URL, covering the shape plus padding. */
  map: string
  /** Specular highlight as a PNG data URL, covering the shape. */
  specular: string
}

const assetCache = new Map<string, LensAssets>()
let scratch: HTMLCanvasElement | undefined

function encode(width: number, height: number, pixels: Uint8ClampedArray<ArrayBuffer>) {
  scratch ??= document.createElement("canvas")
  scratch.width = width
  scratch.height = height
  const context = scratch.getContext("2d")
  if (!context) return
  context.putImageData(new ImageData(pixels, width, height), 0, 0)
  return scratch.toDataURL("image/png")
}

/** Encodes the lens map and its specular image as PNG data URLs. Results are cached by geometry. */
export function createLensAssets(geometry: LensGeometry, options: LensOptions = {}) {
  if (typeof document === "undefined") return
  const key = [
    geometry.width.toFixed(1),
    geometry.height.toFixed(1),
    geometry.radius.toFixed(1),
    options.depth?.toFixed(1) ?? "",
    options.pad?.toFixed(1) ?? "",
  ].join(":")
  const cached = assetCache.get(key)
  if (cached) return cached
  const lens = createLensMap(geometry, options)
  const highlight = createSpecularImage(lens)
  const map = encode(lens.width, lens.height, lens.pixels)
  const specular = encode(highlight.width, highlight.height, highlight.pixels)
  if (!map || !specular) return
  const assets = { map, specular }
  if (assetCache.size >= CACHE_SIZE) assetCache.delete(assetCache.keys().next().value!)
  assetCache.set(key, assets)
  return assets
}

/**
 * Whether the engine is Blink, read from the user agent. Only Blink applies
 * `backdrop-filter: url(#filter)` to a live backdrop; WebKit and Gecko drop the whole declaration,
 * including any blur listed with it, and there is no feature query for the difference. Blink
 * engines carry a Chrome token; Chrome and Edge on iOS are WebKit and use CriOS/EdgiOS.
 */
export function isBlink() {
  const agent = typeof navigator === "undefined" ? "" : navigator.userAgent
  return /Chrome\/|Chromium\//.test(agent) && !/CriOS|EdgiOS|FxiOS/.test(agent)
}
