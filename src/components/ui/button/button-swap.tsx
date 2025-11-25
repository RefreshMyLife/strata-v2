import * as React from "react"
import { ArrowUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

function ButtonSwap({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button-swap"
      className={cn(
        // Базовые стили
        "inline-flex items-center gap-[4px] px-[12px] py-[4px] h-[24px] rounded-[4px]",
        "transition-all",
        // Default состояние
        "bg-[#1e2021]",
        // Hover состояние
        "hover:bg-[#252829]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <ArrowUpDown
        className={cn(
          "size-[20px] text-[#d0d6d9] transition-opacity",
          "opacity-60 group-hover:opacity-100"
        )}
      />
    </button>
  )
}

export { ButtonSwap }
