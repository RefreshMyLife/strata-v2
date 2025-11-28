import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { formatXAxis } from "./utils";
import { CustomBarShape } from "./CustomBarShape";
import { CustomTooltip } from "./CustomTooltip";
import type {
  ChartDataPoint,
  CustomBarShapeProps,
  DataFilter,
  YAxisFormatter,
} from "./types";

interface BarChartsProps {
  filteredData: ChartDataPoint[];
  dataFilter: DataFilter;
  yAxisFormatter: YAxisFormatter;
}

export const BarCharts = ({
  filteredData,
  dataFilter,
  yAxisFormatter,
}: BarChartsProps) => {
  return (
    <div>
      <BarChart
        data={filteredData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        {/* Градиент для столбцов */}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(44, 110, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(44, 110, 255, 0.1)" />
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

        {/* Ось Y (проценты) */}
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
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          wrapperStyle={{ outline: "none" }}
        />

        {/* Столбцы */}
        <Bar
          dataKey={dataFilter}
          fill="url(#barGradient)"
          radius={[0, 0, 0, 0]}
          maxBarSize={70}
          shape={<CustomBarShape />}
          activeBar={(props: unknown) => {
            const { x, y, width, height } = props as CustomBarShapeProps;
            // Проверка на undefined и установка значений по умолчанию
            const xPos = x ?? 0;
            const yPos = y ?? 0;
            const barWidth = width ?? 0;
            const barHeight = height ?? 0;
            // Точка на середине столбца
            const cx = xPos + barWidth / 2;
            const cy = yPos;
            return (
              <g>
                {/* Сам столбец с синей линией сверху */}
                <rect
                  x={xPos}
                  y={yPos}
                  width={barWidth}
                  height={barHeight}
                  fill="url(#barGradient)"
                />
                {/* Синяя линия сверху */}
                <rect
                  x={xPos}
                  y={yPos}
                  width={barWidth}
                  height={2}
                  fill="#2c6eff"
                />
                {/* Точка на верху столбца */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={5}
                  fill="#D0D6D9"
                  stroke="#2C6EFF"
                  strokeWidth={2}
                />
              </g>
            );
          }}
        />
      </BarChart>
    </div>
  );
};
