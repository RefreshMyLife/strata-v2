import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

function ButtonClose({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button-close"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center gap-[8px] p-[10px] rounded-[4px]",
        "transition-all",
        // Default состояние - прозрачный фон
        "bg-transparent",
        // Hover состояние
        "hover:bg-[rgba(208,214,217,0.05)]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <X
        className={cn(
          "size-[24px] text-[#d0d6d9] transition-opacity",
          "opacity-40 hover:opacity-100"
        )}
      />
    </button>
  )
}

export { ButtonClose }
