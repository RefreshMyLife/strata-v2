import { cn } from "@/lib/utils";
import { ChevronRight } from "@/components/icons/ChevronRight";

interface NetworkIcon {
  src: string;
  alt: string;
}

interface VaultCardAssetProps {
  /** Название актива (например, "jrUSDe") */
  name: string;
  /** Полное название (например, "JUNIOR USDe") */
  fullName: string;
  /** Путь к иконке монеты */
  coinIcon: string;
  /** Цена актива */
  price: string;
  /** Рыночная капитализация */
  marketCap: string;
  /** APY в процентах */
  apy: string;
  /** Маленькие иконки сетей */
  networks?: NetworkIcon[];
  /** Вариант отображения */
  variant?: "default" | "hover";
  /** Класс для дополнительной стилизации */
  className?: string;
  /** Обработчик клика */
  onClick?: () => void;
}

export function VaultCardAsset({
  name,
  fullName,
  coinIcon,
  price,
  marketCap,
  apy,
  networks = [],
  variant = "default",
  className,
  onClick,
}: VaultCardAssetProps) {
  const isHover = variant === "hover";

  return (
    <div
      onClick={onClick}
      className={cn(
        // Базовые стили
        "flex items-center gap-[32px] px-[24px] py-[18px] w-full",
        "border-t border-solid border-[#272a30]",
        "box-border cursor-pointer transition-colors",
        // Фон в зависимости от варианта
        isHover ? "bg-[#272a30]" : "bg-[#1e2021]",
        // Hover эффект
        "hover:bg-[#272a30]",
        className
      )}
    >
      {/* Лого и название */}
      <div className="flex items-center gap-[12px] w-[160px] shrink-0">
        {/* Иконка монеты */}
        <div className="relative size-[40px] shrink-0 overflow-hidden">
          <img
            src={coinIcon}
            alt={name}
            className="block w-full h-full object-cover"
          />
        </div>

        {/* Название */}
        <div className="flex flex-col gap-[2px] shrink-0">
          <p className="font-mono text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-[#d0d6d9]">
            {name}
          </p>
          <p className="font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9] opacity-60">
            {fullName}
          </p>
        </div>
      </div>

      {/* Цена */}
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        <p className="font-mono text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-[#d0d6d9] whitespace-pre-wrap">
          {price}
        </p>
        <p className="font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9] opacity-60">
          PRICE
        </p>
      </div>

      {/* Market Cap */}
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        <p className="font-mono text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-[#d0d6d9] whitespace-pre-wrap">
          {marketCap}
        </p>
        <p className="font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9] opacity-60">
          MARKET CAP
        </p>
      </div>

      {/* APY и сети */}
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        <div className="flex items-center gap-[8px] w-full">
          <p className="font-mono text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-[#d0d6d9]">
            {apy}%
          </p>

          {/* Маленькие иконки сетей */}
          {networks.length > 0 && (
            <div className="flex items-end h-[20px] pr-[10px] relative shrink-0">
              {networks.map((network, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[10px] -mr-[10px] relative shrink-0"
                >
                  <div className="relative size-[20px] shrink-0 overflow-hidden">
                    <img
                      src={network.src}
                      alt={network.alt}
                      className="block w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9] opacity-60 whitespace-pre-wrap">
          7D APY
        </p>
      </div>

      {/* Стрелка */}
      <div className={cn("size-[12px] shrink-0", isHover ? "" : "opacity-40")}>
        <ChevronRight size={12} height={26} className="text-[#d0d6d9]" />
      </div>
    </div>
  );
}
