import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

function TabsFilledNetwork({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs-network"
      className={cn("w-full", className)}
      {...props}
    />
  )
}

function TabsFilledNetworkList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn("inline-flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsFilledNetworkTrigger({
  className,
  children,
  icon,
  count,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  icon?: React.ReactNode
  count?: string | number
}) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        // Базовые стили
        "flex items-center justify-center gap-[8px] rounded-[4px]",
        // Адаптивный padding (мобильный: 12px, десктоп: 20px/14px)
        "p-[12px] md:px-[20px] md:py-[14px]",
        // Адаптивный шрифт (мобильный: 12px/16px, десктоп: 14px/20px)
        "font-mono text-[12px] md:text-[14px] font-medium leading-[16px] md:leading-[20px] tracking-[-0.14px] text-[#d0d6d9] uppercase",
        "border border-[#272a30] transition-all",
        // Default состояние
        "bg-[#151617]",
        // Hover состояние
        "hover:bg-[#1e2021]",
        // Active состояние
        "data-[state=active]:bg-[#03153d] data-[state=active]:border-[#2c6eff]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6eff] focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {count !== undefined && <span className="opacity-60">{count}</span>}
    </TabsPrimitive.Trigger>
  )
}

function TabsFilledNetworkContent({
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

export {
  TabsFilledNetwork,
  TabsFilledNetworkList,
  TabsFilledNetworkTrigger,
  TabsFilledNetworkContent
}
