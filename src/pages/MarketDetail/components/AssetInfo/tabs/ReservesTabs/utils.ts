import { formatCurrencyShort, formatPercentage } from "@/lib/formatters";
import type { DataFilter, ReservesDataPoint, TimeFilter } from "./types";

/**
 * Генерация моковых данных для графиков
 * Вынесена за пределы компонента для избежания проблем с чистотой рендера
 */
export const generateMockData = (): ReservesDataPoint[] => {
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

export const filterDataByTime = (data: ReservesDataPoint[], timeFilter:TimeFilter): ReservesDataPoint[] => {
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
  
export const aggregateData = (
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
  

export const getFilteredData = (mockData:ReservesDataPoint[], timeFilter:TimeFilter): ReservesDataPoint[] => {
    const timeFiltered = filterDataByTime(mockData, timeFilter);

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


export const getCurrentValue = (filteredData: ReservesDataPoint[], dataFilter: DataFilter): string => {
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
}    

  export const formatYAxis = (value: number, dataFilter:DataFilter) => {
    if (dataFilter === "collateralAssets") {
      return formatCurrencyShort(value);
    } else {
      return formatPercentage(value, 1);
    }
  };