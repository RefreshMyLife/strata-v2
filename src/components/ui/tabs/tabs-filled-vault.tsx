import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

function TabsFilledVault({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs-vault"
      className={cn("w-full", className)}
      {...props}
    />
  )
}

function TabsFilledVaultList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn("inline-flex flex-col gap-2 w-full", className)}
      {...props}
    />
  )
}

function TabsFilledVaultTrigger({
  className,
  children,
  logo,
  label,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  logo?: React.ReactNode
  label?: string
}) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        // Базовые стили
        "flex items-center gap-[8px] px-[20px] py-[14px] h-[64px] rounded-[4px]",
        "font-sans text-[18px] font-medium leading-[24px] tracking-[-0.18px] text-[#d0d6d9]",
        "border border-[#272a30] transition-all w-full",
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
      {logo && <span className="shrink-0 size-[14.4px]">{logo}</span>}
      <div className="flex items-center justify-between flex-1 min-w-0">
        <span className="whitespace-nowrap">{children}</span>
        {label && (
          <span className="text-[#d0d6d9] opacity-60 whitespace-nowrap ml-2">
            {label}
          </span>
        )}
      </div>
    </TabsPrimitive.Trigger>
  )
}

function TabsFilledVaultContent({
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
  TabsFilledVault,
  TabsFilledVaultList,
  TabsFilledVaultTrigger,
  TabsFilledVaultContent
}
