import * as React from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

function ButtonPrimary({
  className,
  children,
  rightIcon = false,
  ...props
}: React.ComponentProps<"button"> & {
  rightIcon?: boolean
}) {
  return (
    <button
      data-slot="button-primary"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center p-[14px] rounded-[4px]",
        "transition-all",
        // Текст
        "font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9] uppercase",
        // Default состояние
        "bg-[#2c6eff]",
        // Hover состояние
        "hover:bg-[#598dff]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6eff] focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-[10px] px-[8px]">
        <span className="whitespace-nowrap">{children}</span>
      </span>
      {rightIcon && (
        <Plus className="size-[20px] text-[#d0d6d9]" />
      )}
    </button>
  )
}

export { ButtonPrimary }
