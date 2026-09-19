import Image from "next/image";
import { PhoneFrame } from "@/components/project/phone-frame";
import screen from "@/assets/projects/wrapped/flow/2.png";

/** Card art for Wrapped: a phone rising into the card, showing one story screen. */
export function WrappedArt() {
  return (
    <div className="absolute inset-0 flex justify-center">
      <PhoneFrame className="absolute bottom-0 w-[70%] translate-y-[36%]">
        <Image
          src={screen}
          alt=""
          sizes="(min-width: 768px) 280px, 220px"
          className="size-full object-contain object-top"
        />
      </PhoneFrame>
    </div>
  );
}
