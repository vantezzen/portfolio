import Image from "next/image";
import { ArrowDown, Check } from "lucide-react";
import logo from "@/assets/projects/autoform/icon.png";

/**
 * Card art for AutoForm: a schema goes in, the library turns it into a form.
 * Sizes are in container-query units so the art scales with the card. The
 * `@container` element itself must not use `cqw`, or the units resolve
 * against the viewport instead of the container.
 */
export function AutoFormArt() {
  return (
    <div className="@container w-[74%]">
      <div className="flex flex-col items-stretch gap-[3cqw]">
        <div className="flex flex-col gap-[1cqw] rounded-[4cqw] bg-white px-[5cqw] py-[4cqw] font-mono text-[4.2cqw] leading-[1.7] text-neutral-500 shadow-sm">
          <span>
            <span className="text-neutral-800">name</span>: z.string()
          </span>
          <span>
            <span className="text-neutral-800">agree</span>: z.boolean()
          </span>
        </div>

        <ArrowDown className="mx-auto size-[4.5cqw] text-neutral-400" />

        <Image
          src={logo}
          alt=""
          sizes="120px"
          className="mx-auto size-[16cqw] rounded-[4cqw] shadow-sm"
        />

        <ArrowDown className="mx-auto size-[4.5cqw] text-neutral-400" />

        <div className="flex flex-col gap-[3.5cqw] rounded-[4cqw] bg-white px-[5cqw] py-[4.5cqw] shadow-sm">
          <div className="flex flex-col gap-[2cqw]">
            <span className="text-[4cqw] font-medium text-neutral-700">
              Name
            </span>
            <span className="h-[9cqw] rounded-[2.5cqw] border border-neutral-200" />
          </div>
          <div className="flex items-center gap-[2.5cqw]">
            <span className="flex size-[4.5cqw] items-center justify-center rounded-[1.2cqw] bg-neutral-900 text-white">
              <Check className="size-[3cqw]" strokeWidth={3} />
            </span>
            <span className="text-[4cqw] text-neutral-700">Agree</span>
          </div>
        </div>
      </div>
    </div>
  );
}
