import { useState } from "react";
import { ResponsiveContainer } from "recharts";
import type {
  ChartDataPoint,
  DataFilter,
  PeriodFilter,
} from "./ChartsTab/types";
import {
  formatCurrentValue,
  formatXAxis,
  formatYAxisCurrency,
  formatYAxisPercent,
  generateMockData,
  getFilteredData,
} from "./ChartsTab/utils";
import { BarCharts } from "./ChartsTab/BarCharts";
import { LinearCharts } from "./ChartsTab/LinearCharts";
import { CustomFilterBar } from "./ChartsTab/CustomFilterBar";

/**
 * Моковые данные графика (генерируются динамически)
 */
const MOCK_CHART_DATA: ChartDataPoint[] = generateMockData();

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

  // Определяем тип графика на основе выбранного фильтра
  const isBarChart = dataFilter === "apy" || dataFilter === "coverage";
  const yAxisFormatter = isBarChart ? formatYAxisPercent : formatYAxisCurrency;
  console.log(yAxisFormatter, "yAxisFormatter");
  return (
    <div className="bg-[#151617] rounded-lg p-6 flex flex-col gap-4">
      {/* Фильтры */}

      <CustomFilterBar
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
        periodFilter={periodFilter}
        setPeriodFilter={setPeriodFilter}
      />

      {/* Текущее значение */}
      <div className="mono text-2xl text-[#d0d6d9] tracking-[-0.48px]">
        {formatCurrentValue(currentValue, dataFilter)}
      </div>

      {/* График */}
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          {isBarChart ? (
            <BarCharts
              filteredData={filteredData}
              dataFilter={dataFilter}
              yAxisFormatter={yAxisFormatter}
            />
          ) : (
            <LinearCharts
              filteredData={filteredData}
              dataFilter={dataFilter}
              yAxisFormatter={yAxisFormatter}
              formatXAxis={formatXAxis}
            />
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
