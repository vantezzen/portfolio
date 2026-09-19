"use client";

import type * as React from "react";
import { cn } from "cn";
import { ChevronLeft } from "lucide-react";
import { Button } from "./button";
import "./cupertino.css";

function NavigationBar({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="navigation-bar"
      className={cn(
        "cupertino flex min-h-14 items-center justify-between gap-3 px-4 text-foreground",
        className,
      )}
      {...props}
    />
  );
}

/** A glass back button. Without children it renders as a 44px circle. */
function NavigationBarBack({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="glass"
      size={children ? "default" : "icon"}
      aria-label={children ? undefined : "Back"}
      className={cn(children ? "gap-0.5 pl-3" : undefined, className)}
      {...props}
    >
      <ChevronLeft aria-hidden="true" strokeWidth={2.5} />
      {children}
    </Button>
  );
}

function NavigationBarTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="navigation-bar-title"
      className={cn(
        "min-w-0 flex-1 truncate text-center text-[17px] leading-[22px] font-semibold",
        className,
      )}
      {...props}
    />
  );
}

function LargeTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="large-title"
      className={cn(
        "cupertino px-4 pt-1 pb-2 text-[34px] leading-[41px] font-bold tracking-[-0.4px] text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { NavigationBar, NavigationBarBack, NavigationBarTitle, LargeTitle };
