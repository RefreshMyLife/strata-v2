import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  FilterChip,
  FilterBar,
  ChartContainer,
  ExternalLink,
  APYMetric,
  CollateralAssetsTable,
  type CollateralAsset,
} from "../components";
import {
  formatCurrencyShort,
  formatPercentage,
  formatDateShort,
} from "@/lib/formatters";

// Типы данных для фильтрации
type DataFilter = "collateralAssets" | "collateralApy";
type TimeFilter = "7D" | "30D" | "1Y" | "ALL";

// Структура данных для графика
interface ReservesDataPoint {
  date: Date;
  collateralAssets: number; // Стоимость залоговых активов
  collateralApy: number; // APY залога
  benchmarkApy: number; // APY бенчмарка для сравнения
}

/**
 * Генерация моковых данных для графиков
 * Вынесена за пределы компонента для избежания проблем с чистотой рендера
 */
const generateMockData = (): ReservesDataPoint[] => {
  const now = new Date();
  const data: ReservesDataPoint[] = [];

  // Генерируем данные за последние 365 дней
  for (let i = 365; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const index = 365 - i;

    // Collateral Assets: рост с вариациями
    const baseCollateral = 2000000000; // $2B base
    const trend = index * 1000000; // Растущий тренд
    const variation =
      Math.sin(index * 0.05) * 200000000 + Math.random() * 100000000;
    const collateralAssets = baseCollateral + trend + variation;

    // Collateral APY: около 3-5%
    const baseApyCollateral = 4.0;
    const apyVariation = Math.sin(index * 0.1) * 0.5 + Math.random() * 0.3;
    const collateralApy = baseApyCollateral + apyVariation;

    // Benchmark APY: около 3-4% (обычно немного ниже)
    const baseApyBenchmark = 3.5;
    const benchmarkVariation =
      Math.sin(index * 0.08) * 0.4 + Math.random() * 0.2;
    const benchmarkApy = baseApyBenchmark + benchmarkVariation;

    data.push({
      date,
      collateralAssets,
      collateralApy,
      benchmarkApy,
    });
  }

  return data;
};

/**
 * Интерфейс для пропсов кастомного тултипа
 */
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color?: string;
    name?: string;
  }>;
  label?: Date | string;
  dataFilter: DataFilter;
}

/**
 * Кастомный компонент тултипа для графиков
 */
function CustomTooltip({
  active,
  payload,
  label,
  dataFilter,
}: CustomTooltipProps) {
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
}

/**
 * Таб Reserves с графиками залоговых активов и APY
 */
export function ReservesTab() {
  const [dataFilter, setDataFilter] = useState<DataFilter>("collateralAssets");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("ALL");

  // Используем useMemo для генерации моковых данных один раз при монтировании
  const mockData = useMemo(() => generateMockData(), []);

  // Фильтрация данных по времени
  const filterDataByTime = (data: ReservesDataPoint[]): ReservesDataPoint[] => {
    const now = new Date();
    let filteredData = data;

    switch (timeFilter) {
      case "7D":
        filteredData = data.filter((item) => {
          const daysDiff = Math.floor(
            (now.getTime() - item.date.getTime()) / (1000 * 60 * 60 * 24)
          );
          return daysDiff <= 7;
        });
        break;
      case "30D":
        filteredData = data.filter((item) => {
          const daysDiff = Math.floor(
            (now.getTime() - item.date.getTime()) / (1000 * 60 * 60 * 24)
          );
          return daysDiff <= 30;
        });
        break;
      case "1Y":
        filteredData = data.filter((item) => {
          const daysDiff = Math.floor(
            (now.getTime() - item.date.getTime()) / (1000 * 60 * 60 * 24)
          );
          return daysDiff <= 365;
        });
        break;
      case "ALL":
        filteredData = data;
        break;
    }

    return filteredData;
  };

  // Агрегация данных для уменьшения количества точек
  const aggregateData = (
    data: ReservesDataPoint[],
    targetPoints: number
  ): ReservesDataPoint[] => {
    if (data.length <= targetPoints) return data;

    const result: ReservesDataPoint[] = [];
    const groupSize = Math.ceil(data.length / targetPoints);

    for (let i = 0; i < targetPoints; i++) {
      const start = i * groupSize;
      const end = Math.min(start + groupSize, data.length);
      const group = data.slice(start, end);

      if (group.length === 0) continue;

      // Вычисляем средние значения для группы
      const avgCollateralAssets =
        group.reduce((sum, item) => sum + item.collateralAssets, 0) /
        group.length;
      const avgCollateralApy =
        group.reduce((sum, item) => sum + item.collateralApy, 0) / group.length;
      const avgBenchmarkApy =
        group.reduce((sum, item) => sum + item.benchmarkApy, 0) / group.length;

      result.push({
        date: group[group.length - 1].date,
        collateralAssets: avgCollateralAssets,
        collateralApy: avgCollateralApy,
        benchmarkApy: avgBenchmarkApy,
      });
    }

    return result;
  };

  const getFilteredData = (): ReservesDataPoint[] => {
    const timeFiltered = filterDataByTime(mockData);

    // Определяем количество точек в зависимости от фильтра
    let targetPoints: number;
    switch (timeFilter) {
      case "7D":
        targetPoints = 7;
        break;
      case "30D":
        targetPoints = 7;
        break;
      case "1Y":
        targetPoints = 12;
        break;
      case "ALL":
        targetPoints = 12;
        break;
    }

    return aggregateData(timeFiltered, targetPoints);
  };

  const filteredData = getFilteredData();

  // Форматирование оси Y
  const formatYAxis = (value: number) => {
    if (dataFilter === "collateralAssets") {
      return formatCurrencyShort(value);
    } else {
      return formatPercentage(value, 1);
    }
  };

  // Получение текущего значения для отображения в заголовке
  const getCurrentValue = (): string => {
    if (filteredData.length === 0) return "$0.00";

    const latestData = filteredData[filteredData.length - 1];

    if (dataFilter === "collateralAssets") {
      const value = latestData.collateralAssets;
      return `$${value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } else {
      const value = latestData.collateralApy;
      return `${value.toFixed(2)}%`;
    }
  };

  // Моковые данные для таблицы залоговых активов
  const mockCollateralAssets: CollateralAsset[] = [
    {
      name: "srUSDe",
      iconUrl:
        "https://www.figma.com/api/mcp/asset/f8692a31-7232-4a13-9ba8-ce697d48a536",
      apy: 4.39,
      value: 2929131000,
      share: 84.39,
    },
    {
      name: "wstETH",
      iconUrl:
        "https://www.figma.com/api/mcp/asset/f8692a31-7232-4a13-9ba8-ce697d48a536",
      apy: 3.12,
      value: 542876000,
      share: 15.61,
    },
  ];

  return (
    <>
      {/* Фильтры */}
      <FilterBar
        leftFilters={
          <>
            <FilterChip
              label="COLLATERAL ASSETS"
              active={dataFilter === "collateralAssets"}
              onClick={() => setDataFilter("collateralAssets")}
            />
            <FilterChip
              label="COLLATERAL APY"
              active={dataFilter === "collateralApy"}
              onClick={() => setDataFilter("collateralApy")}
            />
          </>
        }
        rightFilters={
          <>
            <FilterChip
              label="7D"
              active={timeFilter === "7D"}
              onClick={() => setTimeFilter("7D")}
            />
            <FilterChip
              label="30D"
              active={timeFilter === "30D"}
              onClick={() => setTimeFilter("30D")}
            />
            <FilterChip
              label="1Y"
              active={timeFilter === "1Y"}
              onClick={() => setTimeFilter("1Y")}
            />
            <FilterChip
              label="ALL"
              active={timeFilter === "ALL"}
              onClick={() => setTimeFilter("ALL")}
            />
          </>
        }
      />

      {/* Заголовок */}
      {dataFilter === "collateralAssets" ? (
        // Для Collateral Assets - одно значение с ссылкой
        <div className="flex items-end justify-between mb-4">
          <h3 className="mono text-2xl leading-8 tracking-[-0.48px] text-white">
            {getCurrentValue()}
          </h3>
          <ExternalLink label="Etherscan" href="https://etherscan.io" />
        </div>
      ) : (
        // Для Collateral APY - два заголовка с метриками
        <div className="flex gap-3 mb-4 items-end">
          <APYMetric
            label="Collateral Pool APY"
            value={`${filteredData.length > 0 ? filteredData[filteredData.length - 1].collateralApy.toFixed(2) : "0.00"}%`}
            color="#2c6eff"
          />
          <APYMetric
            label="Benchmark APY"
            value={`${filteredData.length > 0 ? filteredData[filteredData.length - 1].benchmarkApy.toFixed(2) : "0.00"}%`}
            color="#ffa339"
          />
        </div>
      )}

      {/* График */}
      <ChartContainer height="sm">
          {dataFilter === "collateralAssets" ? (
            // График для Collateral Assets (area chart)
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
                tickFormatter={formatYAxis}
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
          ) : (
            // График для Collateral APY (два area графика)
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
                <linearGradient id="collateralApyGradient" x1="0" y1="0" x2="0" y2="1">
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
                tickFormatter={formatYAxis}
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
          )}
      </ChartContainer>

      {/* Таблица залоговых активов (отображается только для Collateral Assets) */}
      {dataFilter === "collateralAssets" && (
        <CollateralAssetsTable assets={mockCollateralAssets} className="mt-4" />
      )}
    </>
  );
}
