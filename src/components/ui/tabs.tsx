"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { GlassSurface } from "./liquid-glass";
import { useTabGestures } from "./tab-gestures";
import "./cupertino.css";

/** Drop-in for shadcn/ui Tabs, rendered as an iOS segmented control. */
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn("cupertino text-foreground", className)}
      {...props}
    />
  );
}

const listClass =
  "cupertino-segment-list relative flex min-h-8 items-stretch rounded-full p-0.5";

const tabsListVariants = cva(listClass, {
  variants: {
    variant: {
      /** A 32px capsule with a glass pill for the selected segment. */
      default: "bg-[var(--ios-fill-tertiary)]",
      /** Text tabs with an underline under the selected one. */
      line: "gap-1 bg-transparent",
    },
  },
  defaultVariants: { variant: "default" },
});

/**
 * The selected segment is a glass pill that follows a drag before committing. It refracts a bold
 * copy of the segments, so the label under the pill reads as selected.
 */
function TabsList({
  className,
  variant = "default",
  children,
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  const gestures = useTabGestures();
  return (
    <TabsPrimitive.List
      activateOnFocus
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...mergeProps(gestures, props)}
    >
      <TabsPrimitive.Indicator
        renderBeforeHydration
        className="cupertino-segment-indicator"
      >
        {variant === "default" && (
          <GlassSurface
            variant="regular"
            strength={1.0}
            rim={0.3}
            interactive={false}
            refract={
              <TabsPrimitive.Root
                aria-hidden="true"
                inert
                data-glass-copy=""
                className={cn("cupertino-segment-copy", listClass, className)}
                render={<TabsPrimitive.List />}
              >
                {children}
              </TabsPrimitive.Root>
            }
          />
        )}
      </TabsPrimitive.Indicator>
      {children}
    </TabsPrimitive.List>
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "cupertino-segment-trigger relative z-1 flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full px-3 text-[13px] leading-[18px] data-disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("mt-4 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
