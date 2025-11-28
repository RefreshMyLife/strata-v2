import type { ReactNode } from "react";
import { ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import { CHART_HEIGHTS } from "@/lib/chartConstants";

interface ChartContainerProps {
  /** Высота контейнера: sm (230px), md (300px), lg (400px) */
  height?: keyof typeof CHART_HEIGHTS;
  /** Дочерние элементы (обычно компонент графика из recharts) */
  children: ReactNode;
  /** Дополнительные CSS классы */
  className?: string;
}

/**
 * Контейнер для графиков Recharts с единообразной высотой и ResponsiveContainer
 */
export function ChartContainer({
  height = "lg",
  children,
  className,
}: ChartContainerProps) {
  return (
    <div
      className={cn("w-full", className)}
      style={{ height: CHART_HEIGHTS[height] }}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}
