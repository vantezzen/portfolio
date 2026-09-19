import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import phoneImage from "@/assets/phone.png";

/**
 * Screen cutout of `phone.png`, measured from the file's alpha channel:
 * 697×1513 px at (36, 37) in a 770×1589 frame.
 */
const SCREEN = {
  left: "4.675%",
  top: "2.329%",
  width: "90.52%",
  height: "95.22%",
};

/**
 * A phone mockup. Children render on the screen, behind the bezel. The screen
 * is masked with the frame's own transparency, so it follows the bezel's
 * continuous corners exactly.
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
      <div
        className="absolute inset-0"
        style={{
          maskImage: `linear-gradient(#000 0 0), url(${phoneImage.src})`,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      >
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
