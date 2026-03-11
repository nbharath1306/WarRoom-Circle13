"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-[13px] font-mono font-semibold uppercase tracking-widest whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-c13-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-void active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-c13-red text-white hover:bg-c13-red/90 hover:shadow-[0_0_20px_var(--c13-red-glow)]",
        outline:
          "border-border-default bg-transparent text-text-primary hover:border-c13-red hover:text-c13-red",
        secondary:
          "bg-c13-blue text-text-primary hover:bg-c13-blue-light",
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-bg-elevated/50",
        destructive:
          "bg-status-error text-white hover:bg-status-error/90",
        link: "text-text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-6 px-2 text-[10px]",
        sm: "h-8 px-3 text-[11px]",
        lg: "h-11 px-6",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
