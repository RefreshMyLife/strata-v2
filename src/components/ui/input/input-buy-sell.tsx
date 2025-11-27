import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  tokenPrice?: number; // Цена монеты в долларах
  onValueChange?: (value: string, usdValue: string) => void;
}

const InputBuySell = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, tokenPrice = 0, onValueChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [usdValue, setUsdValue] = React.useState("$0.00");

    // Функция валидации - разрешаем только цифры и одну точку
    const validateNumericInput = (value: string): boolean => {
      if (value === "") return true;

      const regex = /^\d*\.?\d*$/;
      if (!regex.test(value)) return false;

      const dotCount = (value.match(/\./g) || []).length;
      return dotCount <= 1;
    };

    // Функция для вычисления и форматирования USD значения
    const calculateUsdValue = (value: string): string => {
      const numericValue = parseFloat(value) || 0;
      const usdAmount = numericValue * tokenPrice;

      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(usdAmount);
    };

    // Обработчик изменения значения
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (validateNumericInput(value)) {
        setInputValue(value);

        const formattedUsd = calculateUsdValue(value);
        setUsdValue(formattedUsd);

        if (onValueChange) {
          onValueChange(value, formattedUsd);
        }
      }
    };

    // Обработчик вставки текста - разрешаем только цифры
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedText = e.clipboardData.getData('text');

      const cleanedText = pastedText.replace(/[^\d.]/g, '');

      if (validateNumericInput(cleanedText)) {
        setInputValue(cleanedText);

        const formattedUsd = calculateUsdValue(cleanedText);
        setUsdValue(formattedUsd);

        if (onValueChange) {
          onValueChange(cleanedText, formattedUsd);
        }
      }
    };

    // Обработчик нажатия клавиш - блокируем недопустимые символы
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        e.key === 'Backspace' ||
        e.key === 'Delete' ||
        e.key === 'Tab' ||
        e.key === 'Escape' ||
        e.key === 'Enter' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight' ||
        e.key === 'Home' ||
        e.key === 'End' ||
        (e.key === '.' && !inputValue.includes('.')) ||
        (e.key >= '0' && e.key <= '9')
      ) {
        return;
      }

      if (e.ctrlKey || e.metaKey) {
        return;
      }

      e.preventDefault();
    };

    const getBorderColor = () => {
      if (isFocused) return "border-[#2c6eff]";
      if (isHovered) return "border-[#32363d]";
      return "border-[#272a30]";
    };

    return (
      <div
        className={cn(
          "relative w-[285px] h-[140px] bg-[#151617] border border-solid rounded-[4px] flex flex-col items-end justify-between p-[24px] gap-[32px] transition-colors",
          getBorderColor(),
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-end w-full">
          <p className="font-['DM_Mono',monospace] font-medium text-[14px] leading-[20px] tracking-[-0.28px] text-[#d0d6d9] opacity-60 text-right">
            {usdValue}
          </p>
        </div>
        <input
          type="text"
          className={cn(
            "w-full bg-transparent border-none outline-none",
            "font-['DM_Mono',monospace] font-medium text-[48px] leading-[48px] tracking-[-0.96px]",
            "text-[#d0d6d9] text-right",
            "placeholder:text-[#d0d6d9]"
          )}
          ref={ref}
          value={inputValue}
          onChange={handleInputChange}
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="0"
          inputMode="decimal"
          {...props}
        />
      </div>
    );
  }
);

InputBuySell.displayName = "InputBuySell";

export { InputBuySell };
