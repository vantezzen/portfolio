import { cn } from "@/lib/utils";

export function StatRow({ children }: { children: React.ReactNode }) {
  return <dl className="grid gap-6 sm:grid-cols-3">{children}</dl>;
}

/** One headline number with a short label under it. */
export function Stat({
  value,
  label,
  tone = "light",
}: {
  value: React.ReactNode;
  label: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col gap-1">
      <dd
        className={cn(
          "text-3xl font-medium tracking-tight",
          tone === "light" ? "text-neutral-800" : "text-white",
        )}
      >
        {value}
      </dd>
      <dt
        className={cn(
          "text-sm",
          tone === "light" ? "text-neutral-500" : "text-neutral-400",
        )}
      >
        {label}
      </dt>
    </div>
  );
}
