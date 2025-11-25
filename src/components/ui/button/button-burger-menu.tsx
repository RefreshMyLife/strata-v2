import * as React from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

function ButtonBurgerMenu({
  className,
  isActive = false,
  ...props
}: React.ComponentProps<"button"> & {
  isActive?: boolean
}) {
  return (
    <button
      data-slot="button-burger-menu"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center p-[14px] rounded-[4px]",
        "border border-solid transition-all",
        // Default состояние (неактивный)
        !isActive && "bg-[#151617] border-[#272a30]",
        // Hover состояние (неактивный)
        !isActive && "hover:bg-[#1e2021]",
        // Active состояние
        isActive && "bg-[#03153d] border-[#2c6eff]",
        // Hover состояние (активный)
        isActive && "hover:bg-[#05205c]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6eff] focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {isActive ? (
        <X className="size-[20px] text-[#d0d6d9]" />
      ) : (
        <Menu className="size-[20px] text-[#d0d6d9]" />
      )}
    </button>
  )
}

export { ButtonBurgerMenu }
