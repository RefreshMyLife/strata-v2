import * as React from "react"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

function ButtonGoBack({
  className,
  children = "PREVIOUS PAGE",
  ...props
}: React.ComponentProps<"button"> & {
  children?: React.ReactNode
}) {
  return (
    <button
      data-slot="button-go-back"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center p-[14px] rounded-[4px]",
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
      <ArrowLeft className="size-[20px] text-[#d0d6d9] opacity-60 mr-[8px]" />
      <span className="flex items-center justify-center gap-[10px] px-[8px]">
        <span className="whitespace-nowrap">{children}</span>
      </span>
    </button>
  )
}

export { ButtonGoBack }
