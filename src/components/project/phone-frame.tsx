import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import phoneImage from "@/assets/phone.png";
import phoneMask from "@/assets/phone-mask.png";

/** Screen area of `phone-mask.png`, measured from its white region. */
const FRAME = { width: 770, height: 1589 };
const CUTOUT = { x: 34, y: 36, width: 700, height: 1518 };

/**
 * Grow the screen a few source pixels past the mask so its antialiased edge
 * always has content behind it. The mask clips the overhang; without the
 * bleed a hairline of the page shows between the screen and the bezel.
 */
const BLEED = 4;

const SCREEN = {
  left: `${((CUTOUT.x - BLEED) / FRAME.width) * 100}%`,
  top: `${((CUTOUT.y - BLEED) / FRAME.height) * 100}%`,
  width: `${((CUTOUT.width + BLEED * 2) / FRAME.width) * 100}%`,
  height: `${((CUTOUT.height + BLEED * 2) / FRAME.height) * 100}%`,
};

/**
 * `phone-mask.png` is white over the screen and black everywhere else, so it
 * masks by luminance. It clips the screen to the glass exactly, including
 * outside the phone's rounded silhouette.
 */
const MASK: React.CSSProperties = {
  maskImage: `url(${phoneMask.src})`,
  maskMode: "luminance",
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskImage: `url(${phoneMask.src})`,
  WebkitMaskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
};

/**
 * A phone mockup. Children render on the screen, behind the bezel, clipped by
 * `phone-mask.png` so they follow the glass's continuous corners exactly.
 */
export function PhoneFrame({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("relative", className)}
      style={{
        aspectRatio: `${phoneImage.width} / ${phoneImage.height}`,
        ...style,
      }}
    >
      <div className="absolute inset-0" style={MASK}>
        <div className="absolute overflow-hidden bg-black" style={SCREEN}>
          {children}
        </div>
      </div>
      <Image
        src={phoneImage}
        alt=""
        aria-hidden
        draggable={false}
        sizes="300px"
        className="pointer-events-none absolute inset-0 size-full select-none"
      />
    </div>
  );
}

/**
 * A screenshot on a phone screen. Screens whose aspect ratio differs from
 * the frame are letterboxed onto a blurred copy of themselves, so the
 * colours stay continuous instead of showing black bars.
 */
export function PhoneScreenshot({
  image,
  alt,
  preload,
}: {
  image: StaticImageData;
  alt: string;
  preload?: boolean;
}) {
  return (
    <>
      <Image
        src={image}
        alt=""
        aria-hidden
        draggable={false}
        sizes="300px"
        className="absolute inset-0 size-full scale-125 object-cover blur-xl"
      />
      <Image
        src={image}
        alt={alt}
        draggable={false}
        preload={preload}
        sizes="300px"
        className="relative size-full object-contain"
      />
    </>
  );
}
