import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
  disabled?: boolean
} & React.ComponentProps<"button">

function PaginationLink({
  className,
  isActive,
  disabled,
  ...props
}: PaginationLinkProps) {
  return (
    <button
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center rounded border border-solid box-border transition-colors",
        "w-10 h-10 py-2.5",
        "font-['DM_Mono',monospace] font-medium text-base leading-5 tracking-[-0.16px] text-[#d0d6d9]",
        // Active state
        isActive && "bg-[#03153d] border-[#2c6eff]",
        // Default state
        !isActive && !disabled && "bg-[#1e2021] border-[#272a30]",
        // Hover state
        !isActive && !disabled && "hover:bg-[#252829] hover:border-[#32363d]",
        // Disabled state
        disabled && "opacity-40 cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  disabled,
  ...props
}: Omit<React.ComponentProps<"button">, "children"> & { disabled?: boolean }) {
  return (
    <button
      aria-label="Go to previous page"
      disabled={disabled}
      className={cn(
        "flex items-center justify-center rounded border border-solid box-border transition-colors",
        "px-3 py-2.5",
        "font-['DM_Sans',sans-serif] font-medium text-base leading-5 tracking-[-0.16px] text-[#d0d6d9]",
        !disabled && "bg-[#1e2021] border-[#272a30]",
        !disabled && "hover:bg-[#252829] hover:border-[#32363d]",
        disabled && "bg-[#1e2021] border-[#272a30] opacity-40 cursor-not-allowed",
        className
      )}
      {...props}
    >
      <ChevronLeft className="size-5" />
      <span className="px-2">Prev</span>
    </button>
  )
}

function PaginationNext({
  className,
  disabled,
  ...props
}: Omit<React.ComponentProps<"button">, "children"> & { disabled?: boolean }) {
  return (
    <button
      aria-label="Go to next page"
      disabled={disabled}
      className={cn(
        "flex items-center justify-center rounded border border-solid box-border transition-colors",
        "px-3 py-2.5",
        "font-['DM_Sans',sans-serif] font-medium text-base leading-5 tracking-[-0.16px] text-[#d0d6d9]",
        !disabled && "bg-[#1e2021] border-[#272a30]",
        !disabled && "hover:bg-[#252829] hover:border-[#32363d]",
        disabled && "bg-[#1e2021] border-[#272a30] opacity-40 cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span className="px-2">Next</span>
      <ChevronRight className="size-5" />
    </button>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex items-center justify-center w-10 h-10 py-2.5",
        "font-['DM_Mono',monospace] font-medium text-base leading-5 tracking-[-0.16px] text-[#d0d6d9]",
        "opacity-40",
        className
      )}
      {...props}
    >
      ...
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
