import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";
import { formatDateShort } from "@/lib/formatters";
import { formatYAxis } from "./utils";
import type { DataFilter, ReservesDataPoint } from "./types";

interface CollateralAssetcCharts {
  filteredData: ReservesDataPoint[];
  dataFilter: DataFilter;
}
export const CollateralAssetcCharts = ({
  filteredData,
  dataFilter,
}: CollateralAssetcCharts) => {
  // обёртка для formatYAxis, которая использует dataFilter
  const handleFormatYAxis = (value: number) => formatYAxis(value, dataFilter);

  return (
    <div>
      <AreaChart
        data={filteredData}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="collateralGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c6eff" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#2c6eff" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="0" stroke="#272a30" vertical={false} />

        <XAxis
          dataKey="date"
          tickFormatter={formatDateShort}
          stroke="#d0d6d9"
          opacity={0.4}
          tick={{ fill: "#d0d6d9", fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          className="mono"
        />

        <YAxis
          tickFormatter={handleFormatYAxis}
          stroke="#d0d6d9"
          opacity={0.4}
          tick={{ fill: "#d0d6d9", fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          className="mono"
          width={40}
        />

        <Tooltip
          content={<CustomTooltip dataFilter={dataFilter} />}
          cursor={false}
        />

        <Area
          type="monotone"
          dataKey="collateralAssets"
          stroke="#2c6eff"
          strokeWidth={2}
          fill="url(#collateralGradient)"
          activeDot={{
            r: 5,
            fill: "#D0D6D9",
            stroke: "#2C6EFF",
            strokeWidth: 2,
          }}
        />
      </AreaChart>
    </div>
  );
};
