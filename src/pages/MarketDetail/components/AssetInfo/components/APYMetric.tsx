import { InformationFill } from "@/components/ui/icons";

interface APYMetricProps {
  label: string;
  value: string;
  color: string; // Цвет вертикальной линии (#2c6eff или #ffa339)
  showIcon?: boolean;
}

/**
 * Компонент для отображения APY метрики
 * Используется в Reserves таб для Collateral Pool APY и Benchmark APY
 */
export function APYMetric({
  label,
  value,
  color,
  showIcon = true,
}: APYMetricProps) {
  return (
    <div className="flex flex-1 items-center gap-3">
      {/* Вертикальная цветная линия */}
      <div
        className="h-[-webkit-fill-available] w-[2px] shrink-0"
        style={{ backgroundColor: color }}
      />

      {/* Контент */}
      <div className="flex flex-col gap-2 flex-1 justify-end">
        {/* Заголовок с иконкой */}
        <div className="flex gap-1 items-center">
          <p className="text-sm leading-[1.4] tracking-[-0.14px] text-[#d0d6d9] opacity-60 font-medium">
            {label}
          </p>
          {showIcon && (
            <div className="opacity-40">
              <InformationFill size={16} />
            </div>
          )}
        </div>

        {/* Значение */}
        <p className="mono text-2xl leading-8 tracking-[-0.48px] text-white">
          {value}
        </p>
      </div>
    </div>
  );
}
