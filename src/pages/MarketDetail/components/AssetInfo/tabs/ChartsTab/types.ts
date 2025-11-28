export interface CustomBarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
}


export interface ChartDataPoint {
  date: string;
  price: number;
  marketCap: number;
  apy: number;
  coverage: number;
}

export type PeriodFilter = "7D" | "30D" | "1Y" | "ALL";
export type DataFilter = "price" | "marketCap" | "apy" | "coverage";
export type YAxisFormatter = (value: number) => string;
export type FormatXAxis = (value: string) => string;
