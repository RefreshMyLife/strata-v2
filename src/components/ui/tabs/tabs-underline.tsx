import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

function TabsUnderline({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs-underline"
      className={cn("w-full", className)}
      {...props}
    />
  )
}

function TabsUnderlineList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn("inline-flex items-center gap-6", className)}
      {...props}
    />
  )
}

function TabsUnderlineTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        // Базовые стили
        "inline-flex items-center pb-[16px] h-[32px] gap-[8px]",
        "font-sans text-[18px] font-medium leading-[24px] tracking-[-0.18px]",
        "text-[#d0d6d9] transition-all",
        "border-b-2 border-transparent",
        // Hover состояние
        "hover:text-white",
        // Active состояние
        "data-[state=active]:border-[#2c6eff] data-[state=active]:text-white",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6eff] focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function TabsUnderlineContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6eff] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
}

export { TabsUnderline, TabsUnderlineList, TabsUnderlineTrigger, TabsUnderlineContent }
