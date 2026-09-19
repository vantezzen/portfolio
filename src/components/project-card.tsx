import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TagList } from "./project/tag-list";

export type ProjectCardProps = {
  title: string;
  description: string;
  /** Screenshot or logo. Leave out when `art` renders the visual instead. */
  image?: StaticImageData;
  /** A small composition rendered live in place of an image. */
  art?: React.ReactNode;
  href: string;
  /**
   * `screenshot` bleeds the image off the right edge of the card,
   * `icon` centers a small logo.
   */
  variant?: "screenshot" | "icon";
  imageClassName?: string;
  tags?: string[];
};

export function ProjectCard({
  title,
  description,
  image,
  art,
  href,
  variant = "screenshot",
  imageClassName,
  tags = [],
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group flex w-72 shrink-0 snap-start flex-col outline-none transition-transform duration-150 ease-out active:scale-[0.99] motion-reduce:transition-none sm:w-80 md:w-96"
    >
      <div className="relative flex aspect-9/12 items-center justify-center overflow-hidden rounded-4xl bg-neutral-100 transition-colors duration-250 ease group-hover:bg-neutral-200/60 group-focus-visible:ring-2 group-focus-visible:ring-neutral-300 motion-reduce:transition-none">
        <div
          className={cn(
            "relative flex size-full items-center transition-transform duration-250 ease group-hover:scale-[1.03] motion-reduce:transition-none",
            variant === "screenshot" && !art ? "justify-end" : "justify-center",
          )}
        >
          {art ??
            (image && (
              <Image
                src={image}
                alt={title}
                className={cn(
                  variant === "screenshot" &&
                    "h-3/4 w-3/4 rounded-l-xl object-cover",
                  variant === "icon" && "w-1/3 object-contain",
                  imageClassName,
                )}
              />
            ))}
        </div>
      </div>

      <div className="mt-2 font-medium">
        <h3>{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>

      <TagList tags={tags} />
    </Link>
  );
}
