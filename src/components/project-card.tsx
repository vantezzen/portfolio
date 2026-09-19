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
      className="group flex w-72 shrink-0 snap-start flex-col sm:w-80 md:w-96"
    >
      <div
        className={cn(
          "flex aspect-9/12 items-center overflow-hidden rounded-4xl bg-neutral-100",
          variant === "screenshot" && !art ? "justify-end" : "justify-center",
        )}
      >
        {art ??
          (image && (
            <Image
              src={image}
              alt={title}
              className={cn(
                "transition-transform duration-300 group-hover:scale-[1.02]",
                variant === "screenshot" &&
                  "h-3/4 w-3/4 rounded-l-xl object-cover",
                variant === "icon" && "w-1/3 object-contain",
                imageClassName,
              )}
            />
          ))}
      </div>

      <div className="mt-2 font-medium">
        <h3>{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>

      <TagList tags={tags} />
    </Link>
  );
}
