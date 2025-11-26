import * as React from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

function ButtonSecondary({
  className,
  children,
  rightIcon,
  ...props
}: React.ComponentProps<"button"> & {
  rightIcon?: React.ReactNode | boolean
}) {
  return (
    <button
      data-slot="button-secondary"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center rounded-[4px]",
        // Адаптивный padding (мобильный: 12px, десктоп: 14px)
        "p-[12px] md:p-[14px]",
        "border border-solid transition-all",
        // Текст
        "font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9] uppercase",
        // Default состояние
        "bg-[#1e2021] border-[#272a30]",
        // Hover состояние
        "hover:bg-[#252829] hover:border-[#32363d]",
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
      {rightIcon && (
        <span className="ml-[10px]">
          {typeof rightIcon === "boolean" ? (
            <Plus className="size-[20px] text-[#d0d6d9]" />
          ) : (
            rightIcon
          )}
        </span>
      )}
    </button>
  )
}

export { ButtonSecondary }
