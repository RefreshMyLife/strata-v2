import { InformationFill, ExternalLink } from "@/components/ui/icons";
import type { ReactNode } from "react";

interface MetricsRowProps {
  label: string;
  value: string | ReactNode;
  showIcon?: boolean;
  change?: string;
  link?: boolean;
}

/**
 * Компонент для отображения строки метрики
 */
export function MetricsRow({
  label,
  value,
  showIcon = false,
  change,
  link = false,
}: MetricsRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
      <div className="flex gap-1 items-center">
        <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
          {label}
        </p>
        {showIcon && <InformationFill size={16} />}
      </div>

      <div className="flex gap-1 items-center mono text-sm leading-5 tracking-[-0.28px] text-right">
        {change ? (
          <div className="flex gap-2 items-center">
            <p className="text-[#d0d6d9]">{value}</p>
            <p className="text-[#74cd55]">{change}</p>
          </div>
        ) : (
          <p className="text-[#d0d6d9]">{value}</p>
        )}
        {link && <ExternalLink size={16} />}
      </div>
    </div>
  );
}
