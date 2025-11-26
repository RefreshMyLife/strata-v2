import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu";
import { ArrowFillDown } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

// Типы для значений сортировки
export type SortValue = "DEFAULT" | "POPULAR" | "TVL" | "APY" | "REWARDS";

interface SortByDropdownProps {
  value?: SortValue;
  onValueChange?: (value: SortValue) => void;
  className?: string;
}

const SORT_OPTIONS: { value: SortValue; label: string }[] = [
  { value: "DEFAULT", label: "DEFAULT" },
  { value: "POPULAR", label: "POPULAR" },
  { value: "TVL", label: "TVL" },
  { value: "APY", label: "APY" },
  { value: "REWARDS", label: "REWARDS" },
];

export function SortByDropdown({
  value = "DEFAULT",
  onValueChange,
  className,
}: SortByDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            // Базовые стили
            "mono relative flex items-center justify-center gap-2 rounded-[4px] border border-solid transition-all",
            // Mobile: меньше padding и шрифт
            "p-3 text-[12px] leading-4 tracking-[-0.24px]",
            // Desktop: больше padding и шрифт
            "md:px-3.5 md:py-3.5 md:text-[14px] md:leading-5 md:tracking-[-0.28px]",
            "font-medium",
            // Default состояние
            !isOpen && "bg-[#151617] border-[#272a30]",
            // Hover состояние (когда не открыто)
            !isOpen && "hover:bg-[#1e2021]",
            // Active состояние (когда открыто)
            isOpen && "bg-[#03153d] border-[#2c6eff]",
            // Hover + Active состояние
            isOpen && "hover:bg-[#05205c]",
            className
          )}
        >
          <div className="flex items-center gap-2">
            <span className="text-[#d0d6d9] opacity-60">SORT BY</span>
            <span className="text-[#d0d6d9]">{value}</span>
          </div>
          <ArrowFillDown
            width={7}
            height={4}
            className={cn(
              // Mobile: 16px, Desktop: 20px

              "text-[#d0d6d9] opacity-40 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          "mono min-w-[232px] w-[232px] bg-[#151617] border-[#272a30] rounded-[8px] p-1",
          "shadow-lg"
        )}
        side="bottom"
        align="start"
        sideOffset={4}
      >
        <DropdownMenuLabel className="px-2 pt-1 pb-0 text-[12px] leading-5 tracking-[-0.12px] text-[#d0d6d9] opacity-40">
          SORT BY
        </DropdownMenuLabel>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className={cn(
              "rounded-[4px] cursor-pointer",
              // Mobile: меньше padding и шрифт
              "p-3 text-[12px] leading-4 tracking-[-0.24px]",
              // Desktop: больше padding и шрифт
              "md:px-3.5 md:py-3.5 md:text-[14px] md:leading-5 md:tracking-[-0.28px]",
              "text-[#d0d6d9] font-medium",
              "focus:outline-none",
              // Выделение текущего элемента
              value === option.value && "bg-[#03153d] border border-[#2c6eff]",
              // Hover для всех элементов
              value !== option.value && "hover:bg-[#1e2021]"
            )}
            onClick={() => {
              onValueChange?.(option.value);
              setIsOpen(false);
            }}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
