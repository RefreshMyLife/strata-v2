import * as React from "react"

import { cn } from "@/lib/utils"

interface PercentageInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  className?: string
}

const PercentageInput = React.forwardRef<HTMLInputElement, PercentageInputProps>(
  ({ className, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)
    const hasValue = props.value !== undefined && props.value !== "" && props.value !== "0"

    const getBorderColor = () => {
      if (isFocused) return "border-[#2c6eff]"
      if (isHovered || hasValue) return "border-[#32363d]"
      return "border-[#272a30]"
    }

    return (
      <div
        className={cn(
          "flex items-center gap-3 border border-solid box-border rounded p-3.5 transition-colors w-[254px] h-12",
          getBorderColor(),
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Input поле */}
        <input
          ref={ref}
          type="text"
          inputMode="decimal"
          placeholder="Custom"
          onFocus={(e) => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
          className={cn(
            "flex-1 bg-transparent border-0 outline-none text-[#d0d6d9] min-w-0",
            "font-['DM_Sans',sans-serif] font-medium text-base leading-5 tracking-[-0.16px]",
            "placeholder:opacity-40",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          {...props}
        />

        {/* Символ процента */}
        <div className="font-['DM_Mono',monospace] font-medium text-base leading-5 text-[#d0d6d9] shrink-0">
          %
        </div>
      </div>
    )
  }
)

PercentageInput.displayName = "PercentageInput"

export { PercentageInput }
export type { PercentageInputProps }
