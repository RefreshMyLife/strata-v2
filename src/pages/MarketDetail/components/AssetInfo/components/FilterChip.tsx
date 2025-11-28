import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

/**
 * Компонент кнопки-фильтра (чип) для графиков
 * Используется для переключения между типами данных и периодами
 */
export function FilterChip({ label, active = false, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Базовые стили
        "px-2.5 h-6 rounded-[4px] border transition-all",
        "mono text-sm leading-5 tracking-[-0.28px]",
        "hover:border-[#2c6eff] hover:text-white",
        // Активное состояние
        active
          ? "bg-[#03153d] border-[#2c6eff] text-[#d0d6d9]"
          : "bg-[#151617] border-[#272a30] text-[#d0d6d9] opacity-60"
      )}
    >
      {label}
    </button>
  );
}
