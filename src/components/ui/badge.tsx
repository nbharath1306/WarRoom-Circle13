import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex items-center justify-center rounded-sm px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-[0.12em] transition-all whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-status-info/15 text-status-info",
        active: "bg-status-active/15 text-status-active",
        deployed: "bg-status-info/15 text-status-info",
        pending: "bg-status-warning/15 text-status-warning",
        critical: "bg-status-error/15 text-status-error animate-pulse",
        classified: "bg-status-purple/15 text-status-purple",
        offline: "bg-text-tertiary/15 text-text-tertiary",
        scanning: "bg-c13-red/15 text-c13-red",
        outline: "border border-border-default text-text-secondary hover:text-text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
