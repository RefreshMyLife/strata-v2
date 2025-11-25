import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"

interface SearchInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  className?: string
  /**
   * Размер компонента
   * @default "md"
   */
  size?: "sm" | "md"
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, size = "md", ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)

    return (
      <div
        className={cn(
          "flex items-center border border-solid box-border rounded transition-colors",
          // Default state
          "border-[#272a30]",
          // Hover state
          "hover:border-[#32363d]",
          // Focus state
          isFocused && "border-[#2c6eff]",
          // Размеры для md (desktop)
          size === "md" && "gap-3 p-3.5 h-12",
          // Размеры для sm (mobile)
          size === "sm" && "gap-2 px-3 py-2.5 h-10",
          className
        )}
      >
        {/* Иконка поиска */}
        <Search
          className={cn(
            "shrink-0 text-[#d0d6d9] transition-opacity",
            isFocused ? "opacity-100" : "opacity-40",
            size === "md" && "size-5",
            size === "sm" && "size-4"
          )}
        />

        {/* Input */}
        <input
          ref={ref}
          type="text"
          onFocus={(e) => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
          placeholder="Search"
          className={cn(
            "flex-1 bg-transparent border-0 outline-none text-[#d0d6d9]",
            "font-['DM_Sans',sans-serif] font-medium leading-5 placeholder:opacity-40",
            size === "md" && "text-base tracking-[-0.16px]",
            size === "sm" && "text-sm tracking-[-0.14px]",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          {...props}
        />
      </div>
    )
  }
)

SearchInput.displayName = "SearchInput"

export { SearchInput }
export type { SearchInputProps }
