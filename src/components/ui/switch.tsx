import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Базовые стили
        "relative inline-flex w-[64px] h-[32px] shrink-0 cursor-pointer items-center rounded-[99px] border transition-colors",
        "p-[6px]",
        // Состояние disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Неактивное состояние (по умолчанию)
        "bg-[#151617] border-[#272a30]",
        // Неактивное состояние при hover
        "hover:bg-[#1e2021]",
        // Активное состояние (checked)
        "data-[state=checked]:bg-[#03153d] data-[state=checked]:border-[#2c6eff]",
        // Активное состояние при hover
        "data-[state=checked]:hover:bg-[#05205c]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6eff] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          // Базовые стили для toggle
          "pointer-events-none block size-[20px] rounded-[99px] shadow-lg transition-transform",
          // Неактивное состояние
          "bg-[rgba(208,214,217,0.4)]",
          // Активное состояние - синий цвет
          "data-[state=checked]:bg-[#2c6eff]",
          // Позиция toggle
          "translate-x-0",
          // Позиция в активном состоянии (сдвиг вправо)
          "data-[state=checked]:translate-x-[32px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
