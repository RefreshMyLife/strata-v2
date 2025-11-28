import { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FilterChip } from "../components/FilterChip";
import type {
  ChartDataPoint,
  CustomBarShapeProps,
  DataFilter,
  PeriodFilter,
} from "./ChartsTab/types";
import {
  formatXAxis,
  formatYAxisCurrency,
  formatYAxisPercent,
  generateMockData,
  getFilteredData,
} from "./ChartsTab/utils";
import { CustomTooltip } from "./ChartsTab/CustomTooltip";
import { CustomBarShape } from "./ChartsTab/CustomBarShape";

/**
 * Моковые данные графика (генерируются динамически)
 */
const MOCK_CHART_DATA: ChartDataPoint[] = generateMockData();

/**
 * Форматирует значения оси Y для price/marketCap в формат $X.XXB
 */

/**
 * Таб Charts с интерактивным графиком
 */
export function ChartsTab() {
  const [dataFilter, setDataFilter] = useState<DataFilter>("price");
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>("ALL");

  // Фильтрация и агрегация данных по периоду
  const filteredData = getFilteredData(periodFilter, MOCK_CHART_DATA);

  // Получение текущего значения (последняя точка данных)
  const currentValue =
    filteredData.length > 0
      ? filteredData[filteredData.length - 1][dataFilter]
      : 0;

  // Форматирование текущего значения
  const formatCurrentValue = (value: number): string => {
    if (dataFilter === "price" || dataFilter === "marketCap") {
      return `$${value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
    if (dataFilter === "apy" || dataFilter === "coverage") {
      return `${value.toFixed(2)}%`;
    }
    return value.toString();
  };

  // Определяем тип графика на основе выбранного фильтра
  const isBarChart = dataFilter === "apy" || dataFilter === "coverage";
  const yAxisFormatter = isBarChart ? formatYAxisPercent : formatYAxisCurrency;

  return (
    <div className="flex flex-col gap-4">
      {/* Фильтры */}

      <div className="flex items-center justify-between">
        {/* Фильтры данных (слева) */}
        <div className="flex gap-2">
          <FilterChip
            label="PRICE"
            active={dataFilter === "price"}
            onClick={() => setDataFilter("price")}
          />
          <FilterChip
            label="MARKET CAP"
            active={dataFilter === "marketCap"}
            onClick={() => setDataFilter("marketCap")}
          />
          <FilterChip
            label="APY"
            active={dataFilter === "apy"}
            onClick={() => setDataFilter("apy")}
          />
          <FilterChip
            label="COVERAGE"
            active={dataFilter === "coverage"}
            onClick={() => setDataFilter("coverage")}
          />
        </div>

        {/* Фильтры периода (справа) */}
        <div className="flex gap-2">
          <FilterChip
            label="7D"
            active={periodFilter === "7D"}
            onClick={() => setPeriodFilter("7D")}
          />
          <FilterChip
            label="30D"
            active={periodFilter === "30D"}
            onClick={() => setPeriodFilter("30D")}
          />
          <FilterChip
            label="1Y"
            active={periodFilter === "1Y"}
            onClick={() => setPeriodFilter("1Y")}
          />
          <FilterChip
            label="ALL"
            active={periodFilter === "ALL"}
            onClick={() => setPeriodFilter("ALL")}
          />
        </div>
      </div>

      {/* Текущее значение */}
      <div className="mono text-2xl text-[#d0d6d9] tracking-[-0.48px]">
        {formatCurrentValue(currentValue)}
      </div>

      {/* График */}
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          {isBarChart ? (
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
              <CartesianGrid
                strokeDasharray="0"
                stroke="#272a30"
                vertical={false}
              />

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
          ) : (
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
              <CartesianGrid
                strokeDasharray="0"
                stroke="#272a30"
                vertical={false}
              />

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
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
