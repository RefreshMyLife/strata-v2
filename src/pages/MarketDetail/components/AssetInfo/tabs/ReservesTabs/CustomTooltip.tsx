import type { CustomTooltipProps } from "./types";
import { formatDateShort } from "@/lib/formatters";

export const CustomTooltip = ({
  active,
  payload,
  label,
  dataFilter,
}: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const month = formatDateShort(label || "");

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#d0d6d9] rounded px-2 py-1">
        {dataFilter === "collateralAssets" ? (
          <>
            <p className="text-sm leading-5 tracking-[-0.14px] text-[#0c0c0c] font-semibold">
              Collateral Assets
            </p>
            <p className="text-sm leading-5 tracking-[-0.14px] text-[#0c0c0c] font-medium">
              {month} ${(payload[0].value / 1000000000).toFixed(2)}B
            </p>
          </>
        ) : (
          <>
            <p className="text-sm leading-5 tracking-[-0.14px] text-[#0c0c0c] font-semibold">
              APY
            </p>
            {payload.map((entry, index) => (
              <p
                key={index}
                className="text-sm leading-5 tracking-[-0.14px] text-[#0c0c0c] font-medium"
              >
                {entry.name}: {entry.value.toFixed(2)}%
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
