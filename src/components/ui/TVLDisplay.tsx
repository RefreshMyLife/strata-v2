import { cn } from "@/lib/utils";

interface TVLDisplayProps {
  value?: string;
  change?: string;
  className?: string;
}

export function TVLDisplay({
  value = "$12.32B",
  change = "+4.23% 24H",
  className,
}: TVLDisplayProps) {
  // Определяем цвет изменения (зеленый для положительных, красный для отрицательных)
  const isPositive = change.startsWith("+");
  const changeColor = isPositive ? "text-success" : "text-destructive";

  return (
    <div
      className={cn(
        "flex items-center bg-background",
        // Mobile styles (< lg)
        "gap-[10px] p-[16px] leading-[16px] tracking-[-0.24px]",
        // Desktop styles (lg+)
        "lg:gap-[8px] lg:px-[10px] lg:py-[5px] lg:leading-[12px] lg:tracking-[-0.12px]",
        "rounded-[100px] md:bg-[#1e2023]",
        "font-mono text-[12px] font-medium",
        className
      )}
    >
      <span className="text-[#d0d6d9] whitespace-nowrap">TVL: {value}</span>
      <span className={cn(changeColor, "whitespace-nowrap")}>{change}</span>
    </div>
  );
}
