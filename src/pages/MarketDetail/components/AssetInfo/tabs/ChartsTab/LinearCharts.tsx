import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";
import type {
  ChartDataPoint,
  DataFilter,
  FormatXAxis,
  YAxisFormatter,
} from "./types";

interface LinearChartsProps {
  filteredData: ChartDataPoint[];
  dataFilter: DataFilter;
  yAxisFormatter: YAxisFormatter;
  formatXAxis: FormatXAxis;
}

export const LinearCharts = ({
  filteredData,
  formatXAxis,
  yAxisFormatter,
  dataFilter,
}: LinearChartsProps) => {
  return (
    <div>
      <AreaChart
        data={filteredData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        {/* Градиент для заливки области */}
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c6eff" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#2c6eff" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Сетка */}
        <CartesianGrid strokeDasharray="0" stroke="#272a30" vertical={false} />

        {/* Ось X (месяцы) */}
        <XAxis
          dataKey="date"
          tickFormatter={formatXAxis}
          stroke="#d0d6d9"
          style={{
            fontSize: "12px",
            fontFamily: "DM Mono, monospace",
            opacity: 0.4,
          }}
          tickLine={false}
          axisLine={false}
        />

        {/* Ось Y (значения) */}
        <YAxis
          tickFormatter={yAxisFormatter}
          stroke="#d0d6d9"
          style={{
            fontSize: "12px",
            fontFamily: "DM Mono, monospace",
            opacity: 0.4,
          }}
          tickLine={false}
          axisLine={false}
        />

        {/* Тултип */}
        <Tooltip content={<CustomTooltip />} cursor={false} />

        {/* Область графика */}
        <Area
          type="monotone"
          dataKey={dataFilter}
          stroke="#2c6eff"
          strokeWidth={2}
          fill="url(#areaGradient)"
          dot={false}
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
