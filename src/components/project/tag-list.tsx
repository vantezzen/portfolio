import { cn } from "@/lib/utils";

export function TagList({
  tags,
  tone = "light",
}: {
  tags: string[];
  /** `dark` for use inside the dark TechCard. */
  tone?: "light" | "dark";
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={cn(
            "rounded-lg px-2 py-1 text-xs",
            tone === "light"
              ? "bg-neutral-100 text-neutral-500"
              : "bg-neutral-800 text-neutral-400",
          )}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
