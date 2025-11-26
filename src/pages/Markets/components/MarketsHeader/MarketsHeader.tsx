import bgImage from "@/assets/images/markets/bg.svg?url";

interface MarketsHeaderProps {
  marketsCount: number;
  children?: React.ReactNode;
}

/** Заголовок страницы Markets с фоном */
export function MarketsHeader({ marketsCount, children }: MarketsHeaderProps) {
  return (
    <div className="relative bg-[#151617] rounded-lg p-6 w-full overflow-hidden flex flex-col gap-6">
      {/* Фоновое изображение */}
      <div className="absolute -left-0.5 top-[-9px] w-full h-[204px] pointer-events-none z-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Заголовок */}
      <div className="relative z-10 flex items-start gap-2 font-['DM_Sans_36pt',sans-serif] text-[40px] leading-10 tracking-[-0.4px] font-semibold text-[#d0d6d9]">
        <h1>Markets</h1>
        <span className="opacity-40">{marketsCount}</span>
      </div>

      {/* Контент (табы и сортировка) */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
