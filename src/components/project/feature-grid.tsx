import type { LucideIcon } from "lucide-react";

export function FeatureGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>;
}

/** One capability of the product: an icon, a short name and one sentence. */
export function Feature({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-neutral-100 p-5">
      <span className="flex size-8 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm">
        <Icon className="size-4" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-neutral-800">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-500">{children}</p>
      </div>
    </div>
  );
}
