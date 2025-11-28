/**
 * Константы для стилизации графиков Recharts
 */

/**
 * Стили для осей графиков (XAxis, YAxis)
 */
export const CHART_AXIS_STYLE = {
  stroke: "#d0d6d9",
  opacity: 0.4,
  fontSize: 10,
  fontFamily: "DM Mono, monospace",
} as const;

/**
 * Стили для сетки графиков
 */
export const CHART_GRID_STYLE = {
  strokeDasharray: "0",
  stroke: "#272a30",
  vertical: false,
} as const;

/**
 * Цветовая палитра для графиков
 */
export const CHART_COLORS = {
  primary: "#2c6eff",
  secondary: "#ffa339",
  text: "#d0d6d9",
  textDark: "#0c0c0c",
  grid: "#272a30",
  background: "#151617",
  activeDot: "#D0D6D9",
} as const;

/**
 * Настройки активной точки на графике
 */
export const ACTIVE_DOT_PROPS = {
  r: 5,
  fill: CHART_COLORS.activeDot,
  stroke: CHART_COLORS.primary,
  strokeWidth: 2,
} as const;

/**
 * Настройки активной точки для вторичного графика (оранжевый)
 */
export const ACTIVE_DOT_SECONDARY_PROPS = {
  r: 5,
  fill: CHART_COLORS.activeDot,
  stroke: CHART_COLORS.secondary,
  strokeWidth: 2,
} as const;

/**
 * Стандартные отступы для графиков
 */
export const CHART_MARGINS = {
  default: { top: 10, right: 0, left: 0, bottom: 0 },
  compact: { top: 5, right: 0, left: 0, bottom: 0 },
  extended: { top: 20, right: 10, left: 10, bottom: 10 },
} as const;

/**
 * Высоты контейнеров графиков
 */
export const CHART_HEIGHTS = {
  sm: "230px",
  md: "300px",
  lg: "400px",
} as const;
