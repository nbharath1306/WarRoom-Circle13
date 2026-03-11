import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-md border border-border-default bg-bg-void px-3 py-2 text-[13px] font-mono text-text-primary ring-offset-bg-void file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-tertiary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c13-red/50 focus-visible:border-c13-red transition-all disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
