"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { GlassSurface } from "./liquid-glass";
import "./cupertino.css";

const buttonVariants = cva(
  "cupertino inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full text-[17px] leading-[22px] font-semibold select-none disabled:cursor-not-allowed disabled:opacity-40 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /** Prominent glass in the accent color. */
        default:
          "cupertino-press cupertino-material cupertino-button-prominent text-white",
        /** Gray fill, as in alerts and action sheets. */
        secondary:
          "cupertino-press bg-[var(--ios-fill-secondary)] text-foreground",
        /** Hairline capsule on a transparent fill. */
        outline:
          "cupertino-press bg-transparent text-foreground shadow-[inset_0_0_0_1px_var(--ios-separator)]",
        destructive:
          "cupertino-press cupertino-material cupertino-button-prominent cupertino-button-destructive text-white",
        /** Plain accent text. */
        ghost: "cupertino-dim bg-transparent text-primary",
        /** Accent text with an underline on hover, for inline actions. */
        link: "cupertino-dim bg-transparent px-0 text-primary underline-offset-3 hover:underline",
        /** cupertinocn only: accent text on a light accent fill. */
        tinted:
          "cupertino-press bg-[color-mix(in_srgb,var(--ios-blue)_15%,transparent)] text-primary",
        /** cupertinocn only: glass over the content behind it. */
        glass: "cupertino-press cupertino-material text-foreground",
      },
      size: {
        default: "min-h-11 px-5 py-2.5",
        xs: "min-h-7 px-3 py-0.5 text-[13px] leading-[18px] [&_svg]:size-3.5",
        sm: "min-h-8 px-3.5 py-1 text-[15px] leading-5 [&_svg]:size-4",
        lg: "min-h-[50px] px-6 py-3 text-[17px]",
        icon: "size-11 p-0 [&_svg]:size-[22px]",
        "icon-xs": "size-7 p-0 [&_svg]:size-4",
        "icon-sm": "size-8 p-0 [&_svg]:size-[18px]",
        "icon-lg": "size-[50px] p-0 [&_svg]:size-6",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant = "default",
  size,
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const material =
    variant === "glass" || variant === "default" || variant === "destructive";
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {material && <GlassSurface variant="regular" />}
      {children}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
