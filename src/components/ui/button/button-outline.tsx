import * as React from "react"
import { cn } from "@/lib/utils"

function ButtonOutline({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button-outline"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center p-[14px] rounded-[4px]",
        "border border-solid transition-all",
        // Текст
        "font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9] uppercase",
        // Default состояние - прозрачный фон
        "bg-transparent border-[#272a30]",
        // Hover состояние
        "hover:border-[#32363d]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-[10px] px-[8px]">
        <span className="whitespace-nowrap">{children}</span>
      </span>
    </button>
  )
}

export { ButtonOutline }
