/**
 * Утилиты для форматирования чисел, дат и валют
 */

/**
 * Форматирует число в краткий формат валюты ($1.5B, $250M, $1.5K)
 * @param value - числовое значение
 * @returns отформатированная строка
 */
export function formatCurrencyShort(value: number): string {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(2)}K`;
  }
  return `$${value.toFixed(2)}`;
}

/**
 * Форматирует число в полный формат валюты с разделителями ($2,929,131,000)
 * @param value - числовое значение
 * @param decimals - количество знаков после запятой (по умолчанию 0)
 * @returns отформатированная строка
 */
export function formatCurrencyLong(value: number, decimals = 0): string {
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

/**
 * Форматирует число в процент
 * @param value - числовое значение
 * @param decimals - количество знаков после запятой (по умолчанию 2)
 * @returns отформатированная строка (например, "4.39%")
 */
export function formatPercentage(value: number, decimals = 2): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Форматирует дату в короткий формат месяца (JAN, FEB, MAR)
 * @param date - дата или строка с датой
 * @returns отформатированная строка с месяцем в верхнем регистре
 */
export function formatDateShort(date: Date | string): string {
  if (typeof date === "string") {
    // Если это уже отформатированная строка, вернуть как есть
    if (date.length <= 4 && date === date.toUpperCase()) {
      return date;
    }
    date = new Date(date);
  }
  return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
}

/**
 * Форматирует дату в полный формат (January 15, 2025)
 * @param date - дата или строка с датой
 * @returns отформатированная строка
 */
export function formatDateFull(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Форматирует число для оси Y графика в зависимости от типа данных
 * @param value - числовое значение
 * @param type - тип данных ('currency' | 'percentage')
 * @returns отформатированная строка
 */
export function formatYAxis(
  value: number,
  type: "currency" | "percentage"
): string {
  if (type === "currency") {
    return formatCurrencyShort(value);
  }
  return formatPercentage(value, 1);
}
