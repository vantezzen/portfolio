"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { mergeProps } from "@base-ui/react/merge-props";
import { cn } from "cn";
import { LiquidGlass, GlassSurface } from "./liquid-glass";
import { useTabGestures } from "./tab-gestures";
import "./cupertino.css";

function TabBar({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tab-bar"
      className={cn("cupertino text-foreground", className)}
      {...props}
    />
  );
}

const listClass = "cupertino-tab-list relative flex min-h-16 items-stretch p-1";

/**
 * A floating glass bar. `className` shapes and positions the bar. The selection lens springs
 * between tabs and follows a drag. It refracts a highlighted copy of the tabs, so the item under the
 * lens appears selected and bent in every browser. The copy is inert and hidden from assistive
 * technology.
 */
function TabBarList({
  className,
  children,
  ...props
}: Omit<TabsPrimitive.List.Props, "className"> & { className?: string }) {
  const gestures = useTabGestures();
  return (
    <LiquidGlass variant="regular" interactive={false} className={className}>
      <TabsPrimitive.List
        activateOnFocus
        data-slot="tab-bar-list"
        className={listClass}
        {...mergeProps(gestures, props)}
      >
        <TabsPrimitive.Indicator
          renderBeforeHydration
          className="cupertino-tab-indicator"
        >
          <GlassSurface
            variant="clear"
            strength={0.9}
            rim={0.3}
            interactive={false}
            refract={
              <TabsPrimitive.Root
                aria-hidden="true"
                inert
                data-glass-copy=""
                className={cn("cupertino-tab-copy", listClass)}
                render={<TabsPrimitive.List />}
              >
                {children}
              </TabsPrimitive.Root>
            }
          />
        </TabsPrimitive.Indicator>
        {children}
      </TabsPrimitive.List>
    </LiquidGlass>
  );
}

function TabBarTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tab-bar-trigger"
      className={cn(
        "cupertino-tab-trigger relative z-1 flex min-w-14 flex-1 flex-col items-center justify-center gap-[3px] rounded-full px-2 text-[10px] leading-3 font-semibold data-disabled:opacity-40 [&_svg]:size-6",
        className,
      )}
      {...props}
    />
  );
}

function TabBarContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tab-bar-content"
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

export { TabBar, TabBarList, TabBarTrigger, TabBarContent };
