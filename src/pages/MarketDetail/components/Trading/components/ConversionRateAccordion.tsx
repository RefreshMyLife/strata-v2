import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ConversionRateAccordionProps {
  fromToken: string;
  toToken: string;
  rate: string;
}

/**
 * Аккордеон для отображения курса конверсии и дополнительных деталей
 */
export function ConversionRateAccordion({
  fromToken,
  toToken,
  rate,
}: ConversionRateAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1e2021] rounded-[4px] overflow-hidden">
      {/* Кнопка-триггер */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3.5 py-2.5 hover:bg-[#252729] transition-colors"
      >
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 mono font-medium text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9]">
            <span>1</span>
            <span>{fromToken}</span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[#d0d6d9]"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex items-center gap-1 font-medium mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9]">
            <span>{rate}</span>
            <span>{toToken}</span>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-[#d0d6d9] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Раскрывающийся контент */}
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-[14px] pb-[10px] pt-2 space-y-3">
          {/* Детали конверсии */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="mono text-sm text-[#d0d6d9] opacity-60">
                Method
              </span>
              <span className="mono text-smtext-[#d0d6d9]">Mint</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="mono text-smtext-[#d0d6d9] opacity-60">
                Reaceive at list
              </span>
              <span className="mono text-sm text-[#d0d6d9]">22.94</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="mono text-smtext-[#d0d6d9] opacity-60">
                Max Slippage
              </span>
              <span className="mono text-sm tеxt-[#d0d6d9]">0.03%</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="mono text-sm text-[#d0d6d9] opacity-60">
                Gas Fee
              </span>
              <span className="mono text-sm text-[#d0d6d9]">$0.15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
