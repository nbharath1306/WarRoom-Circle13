import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-border-default bg-bg-void px-3 py-2 text-[13px] font-mono text-text-primary ring-offset-bg-void placeholder:text-text-tertiary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c13-red/50 focus-visible:border-c13-red transition-all disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
