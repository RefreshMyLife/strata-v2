import { cn } from "@/lib/utils";
import { ArrowFillRight } from "./icons";

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
        "flex items-center gap-8 px-6 py-[18px] w-full",
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
      <div className="flex items-center gap-3 w-40 shrink-0">
        {/* Иконка монеты */}
        <div className="relative size-10 shrink-0 overflow-hidden">
          <img
            src={coinIcon}
            alt={name}
            className="block w-full h-full object-cover"
          />
        </div>

        {/* Название */}
        <div className="flex flex-col gap-0.5 shrink-0">
          <p className="font-mono text-[18px] font-medium leading-5 tracking-[-0.18px] text-[#d0d6d9]">
            {name}
          </p>
          <p className="font-mono text-[14px] font-medium leading-5 tracking-[-0.28px] text-[#d0d6d9] opacity-60">
            {fullName}
          </p>
        </div>
      </div>

      {/* Цена */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <p className="font-mono text-[18px] font-medium leading-5 tracking-[-0.18px] text-[#d0d6d9] whitespace-pre-wrap">
          {price}
        </p>
        <p className="font-mono text-[14px] font-medium leading-5 tracking-[-0.28px] text-[#d0d6d9] opacity-60">
          PRICE
        </p>
      </div>

      {/* Market Cap */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <p className="font-mono text-[18px] font-medium leading-5 tracking-[-0.18px] text-[#d0d6d9] whitespace-pre-wrap">
          {marketCap}
        </p>
        <p className="font-mono text-[14px] font-medium leading-5 tracking-[-0.28px] text-[#d0d6d9] opacity-60">
          MARKET CAP
        </p>
      </div>

      {/* APY и сети */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <div className="flex items-center gap-2 w-full">
          <p className="font-mono text-[18px] font-medium leading-5 tracking-[-0.18px] text-[#d0d6d9]">
            {apy}%
          </p>

          {/* Маленькие иконки сетей */}
          {networks.length > 0 && (
            <div className="flex items-end h-5 pr-2.5 relative shrink-0">
              {networks.map((network, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 -mr-2.5 relative shrink-0"
                >
                  <div className="relative size-5 shrink-0 overflow-hidden">
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
        <p className="font-mono text-[14px] font-medium leading-5 tracking-[-0.28px] text-[#d0d6d9] opacity-60 whitespace-pre-wrap">
          7D APY
        </p>
      </div>

      {/* Стрелка */}
      <div className={cn("size-3 shrink-0", isHover ? "" : "opacity-40")}>
        <ArrowFillRight width={6} height={12} className="text-[#d0d6d9]" />
      </div>
    </div>
  );
}
