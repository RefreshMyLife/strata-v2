

// Типы данных для фильтрации
export type DataFilter = "collateralAssets" | "collateralApy";
export type TimeFilter = "7D" | "30D" | "1Y" | "ALL";

// Структура данных для графика
export interface ReservesDataPoint {
  date: Date;
  collateralAssets: number; // Стоимость залоговых активов
  collateralApy: number; // APY залога
  benchmarkApy: number; // APY бенчмарка для сравнения
}


/**
 * Интерфейс для пропсов кастомного тултипа
 */
export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color?: string;
    name?: string;
  }>;
  label?: Date | string;
  dataFilter?: DataFilter;
}
