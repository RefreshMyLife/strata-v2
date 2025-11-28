import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  /** Текст бейджа */
  label: string;
  /** Вариант стиля бейджа */
  variant?: "default" | "success" | "warning" | "error";
  /** Дополнительные CSS классы */
  className?: string;
}

/**
 * Компонент статусного бейджа с фиксированным стилем
 * Используется для отображения рисков, уровней доходности и других статусов
 */
export function StatusBadge({
  label,
  variant = "default",
  className,
}: StatusBadgeProps) {
  return (
    <div
      className={cn(
        "bg-[#151617] border rounded-[4px] px-2.5 h-6 flex items-center justify-center",
        {
          "border-[#272a30]": variant === "default",
          "border-green-500/30 bg-green-500/10": variant === "success",
          "border-yellow-500/30 bg-yellow-500/10": variant === "warning",
          "border-red-500/30 bg-red-500/10": variant === "error",
        },
        className
      )}
    >
      <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9]">
        {label}
      </p>
    </div>
  );
}
