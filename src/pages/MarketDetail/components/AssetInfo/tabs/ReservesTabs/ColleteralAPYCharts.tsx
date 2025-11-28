import { formatDateShort } from "@/lib/formatters";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatYAxis } from "./utils";
import { CustomTooltip } from "./CustomTooltip";
import type { DataFilter, ReservesDataPoint } from "./types";
interface ColleteralAPYCharts {
  filteredData: ReservesDataPoint[];
  dataFilter: DataFilter;
}

export const ColleteralAPYCharts = ({
  filteredData,
  dataFilter,
}: ColleteralAPYCharts) => {
  const handleFormatYAxis = (value: number) => formatYAxis(value, dataFilter);
  return (
    <div>
      <AreaChart
        data={filteredData}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          {/* Градиент для Benchmark APY (оранжевый) - рисуем первым (снизу) */}
          <linearGradient id="benchmarkApyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffa339" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#ffa339" stopOpacity={0} />
          </linearGradient>

          {/* Градиент для Collateral APY (синий) - рисуем вторым (сверху) */}
          <linearGradient
            id="collateralApyGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
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

        {/* Benchmark APY - нижний area (оранжевый) */}
        <Area
          type="monotone"
          dataKey="benchmarkApy"
          name="Benchmark APY"
          stroke="#ffa339"
          strokeWidth={2}
          fill="url(#benchmarkApyGradient)"
          activeDot={{
            r: 5,
            fill: "#D0D6D9",
            stroke: "#ffa339",
            strokeWidth: 2,
          }}
        />

        {/* Collateral APY - верхний area (синий) */}
        <Area
          type="monotone"
          dataKey="collateralApy"
          name="Collateral Pool APY"
          stroke="#2c6eff"
          strokeWidth={2}
          fill="url(#collateralApyGradient)"
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
