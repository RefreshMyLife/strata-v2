import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

function TabsFilledBuySell({
  value,
  onValueChange,
  className,
}: {
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs-buy-sell"
      value={value}
      onValueChange={onValueChange}
      className={cn("inline-flex", className)}
    >
      <TabsPrimitive.List className="inline-flex bg-transparent">
        <TabsPrimitive.Trigger
          value="buy"
          className={cn(
            // Базовые стили
            "flex items-center justify-center px-[20px] py-[8px] h-[44px] w-[257px]",
            "font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-center uppercase",
            "transition-all",
            // Default состояние
            "text-[#d0d6d9] opacity-60",
            // Hover состояние
            "hover:bg-[#272a30] hover:opacity-100",
            // Active состояние
            "data-[state=active]:bg-[#74cd55] data-[state=active]:text-[#0c0c0c] data-[state=active]:opacity-100 data-[state=active]:rounded-[2px]",
            // Focus состояние
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74cd55] focus-visible:ring-offset-2"
          )}
        >
          BUY
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger
          value="sell"
          className={cn(
            // Базовые стили
            "flex items-center justify-center px-[20px] py-[8px] h-[44px] w-[257px]",
            "font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-center uppercase",
            "transition-all",
            // Default состояние
            "text-[#d0d6d9] opacity-60",
            // Hover состояние
            "hover:bg-[#272a30] hover:opacity-100",
            // Active состояние
            "data-[state=active]:bg-[#ea511d] data-[state=active]:text-[#0c0c0c] data-[state=active]:opacity-100",
            // Focus состояние
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea511d] focus-visible:ring-offset-2"
          )}
        >
          SELL
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
}

export { TabsFilledBuySell }
