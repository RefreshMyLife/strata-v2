import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  /** Фильтры слева (обычно фильтры типа данных) */
  leftFilters?: ReactNode;
  /** Фильтры справа (обычно фильтры периода) */
  rightFilters?: ReactNode;
  /** Дополнительные CSS классы */
  className?: string;
}

/**
 * Контейнер для фильтров с двухсторонней раскладкой
 * Левая сторона для фильтров типа данных, правая для фильтров периода
 */
export function FilterBar({
  leftFilters,
  rightFilters,
  className,
}: FilterBarProps) {
  return (
    <div className={cn("flex items-center justify-between mb-4", className)}>
      {/* Левые фильтры (тип данных) */}
      {leftFilters && <div className="flex gap-2">{leftFilters}</div>}

      {/* Правые фильтры (период) */}
      {rightFilters && <div className="flex gap-2">{rightFilters}</div>}
    </div>
  );
}
