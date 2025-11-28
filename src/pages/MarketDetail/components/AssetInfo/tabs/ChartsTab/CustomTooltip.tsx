import { formatDateShort } from "@/lib/formatters";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
  }>;
  label?: string;
}

export const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const value = payload[0].value;
  const dataKey = payload[0].dataKey;

  // Форматирование значения в зависимости от типа данных
  let formattedValue: string;
  if (dataKey === "price" || dataKey === "marketCap") {
    formattedValue = `$${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  } else {
    formattedValue = `${value.toFixed(2)}%`;
  }

  // Название типа данных
  const title =
    dataKey === "price"
      ? "Price"
      : dataKey === "marketCap"
      ? "Market Cap"
      : dataKey === "apy"
      ? "APY"
      : "Coverage";

  // Форматирование месяца из label
  const month = formatDateShort(label || "");

  return (
    <div className="flex flex-col items-center">
      {/* Основной блок тултипа */}
      <div className="bg-[#d0d6d9] rounded px-2 py-1 overflow-hidden">
        <p className="text-sm leading-5 tracking-[-0.14px] text-[#0c0c0c] font-semibold max-w-[160px]">
          {title}
        </p>
        <p className="text-sm leading-5 tracking-[-0.14px] text-[#0c0c0c] font-medium max-w-[160px]">
          {month} {formattedValue}
        </p>
      </div>
      {/* Стрелка внизу */}
      {/* <div className="w-2 h-[5px] relative">
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0"
        >
          <path d="M4 5L0 0H8L4 5Z" fill="#d0d6d9" />
        </svg>
      </div> */}
    </div>
  );
};
