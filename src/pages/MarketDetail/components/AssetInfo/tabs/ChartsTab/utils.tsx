import type { ChartDataPoint, DataFilter, PeriodFilter } from "./types";

export const generateMockData = (): ChartDataPoint[] => {
  const now = new Date();
  const data: ChartDataPoint[] = [];

  // Генерируем данные за последний год (365 дней) - по одной точке на день
  for (let i = 365; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    // Индекс для вариаций (от 0 до 365)
    const index = 365 - i;

    // Генерируем реалистичные данные с трендом и вариациями
    const basePrice = 2000;
    const trend = index * 1.5; // Небольшой восходящий тренд
    const priceVariation = Math.sin(index * 0.05) * 400 + Math.random() * 150;
    const price = basePrice + trend + priceVariation;

    const baseMarketCap = 1800000000;
    const marketCapTrend = index * 4000000;
    const marketCapVariation =
      Math.sin(index * 0.04) * 150000000 + Math.random() * 50000000;
    const marketCap = baseMarketCap + marketCapTrend + marketCapVariation;

    const baseApy = 5.0;
    const apyVariation =
      Math.sin(index * 0.03) * 0.5 + (Math.random() - 0.5) * 0.3;
    const apy = Math.max(3, Math.min(7, baseApy + apyVariation));

    const baseCoverage = 52;
    const coverageVariation =
      Math.sin(index * 0.025) * 2 + (Math.random() - 0.5) * 1;
    const coverage = Math.max(
      48,
      Math.min(55, baseCoverage + coverageVariation)
    );

    data.push({
      date: date.toISOString().split("T")[0],
      price: parseFloat(price.toFixed(2)),
      marketCap: Math.round(marketCap),
      apy: parseFloat(apy.toFixed(2)),
      coverage: parseFloat(coverage.toFixed(2)),
    });
  }

  return data;
};

export const aggregateData = (
  data: ChartDataPoint[],
  targetPoints: number
): ChartDataPoint[] => {
  if (data.length <= targetPoints) return data;

  const result: ChartDataPoint[] = [];
  const groupSize = Math.ceil(data.length / targetPoints);

  for (let i = 0; i < targetPoints; i++) {
    const start = i * groupSize;
    const end = Math.min(start + groupSize, data.length);
    const group = data.slice(start, end);

    if (group.length === 0) continue;

    // Вычисляем средние значения для группы
    const avgPrice =
      group.reduce((sum, item) => sum + item.price, 0) / group.length;
    const avgMarketCap =
      group.reduce((sum, item) => sum + item.marketCap, 0) / group.length;
    const avgApy =
      group.reduce((sum, item) => sum + item.apy, 0) / group.length;
    const avgCoverage =
      group.reduce((sum, item) => sum + item.coverage, 0) / group.length;

    // Используем последнюю дату в группе как представительную
    result.push({
      date: group[group.length - 1].date,
      price: parseFloat(avgPrice.toFixed(2)),
      marketCap: Math.round(avgMarketCap),
      apy: parseFloat(avgApy.toFixed(2)),
      coverage: parseFloat(avgCoverage.toFixed(2)),
    });
  }

  return result;
};

// Фильтрация и агрегация данных по периоду
export const getFilteredData = (
  periodFilter: PeriodFilter,
  MOCK_CHART_DATA: ChartDataPoint[]
) => {
  const now = new Date();
  let cutoffDate: Date;
  let targetPoints: number;

  switch (periodFilter) {
    case "7D":
      // 7 дней - 7 точек (по одной на день)
      cutoffDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      targetPoints = 7;
      break;
    case "30D":
      // 30 дней - 7 точек (средние за ~4-5 дней)
      cutoffDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      targetPoints = 7;
      break;
    case "1Y":
      // 1 год - 12 точек (средние за каждый месяц)
      cutoffDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      targetPoints = 12;
      break;
    case "ALL":
    default:
      // ALL - 12 точек (средние за каждый месяц)
      return aggregateData(MOCK_CHART_DATA, 12);
  }

  const filtered = MOCK_CHART_DATA.filter(
    (item) => new Date(item.date) >= cutoffDate
  );

  return aggregateData(filtered, targetPoints);
};

export const formatCurrentValue = (
  value: number,
  dataFilter: DataFilter
): string => {
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

export const formatYAxisCurrency = (value: number): string => {
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(2)}B`;
  }
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  return `$${value.toLocaleString()}`;
};

/**
 * Форматирует значения оси Y для apy/coverage в формат X.XX%
 */
export const formatYAxisPercent = (value: number): string => {
  return `${value.toFixed(2)}%`;
};

/**
 * Форматирует даты для оси X (краткий формат месяца)
 */
export const formatXAxis = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
};
