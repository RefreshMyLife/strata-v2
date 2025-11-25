import { cn } from "@/lib/utils";
import { VaultCardAsset } from "@/components/ui/VaultCardAsset";

interface Asset {
  name: string;
  fullName: string;
  coinIcon: string;
  price: string;
  marketCap: string;
  apy: string;
  networks?: { src: string; alt: string }[];
}

interface VaultCardProps {
  /** Иконка протокола */
  protocolIcon: string;
  /** Название протокола */
  protocolName: string;
  /** Описание протокола */
  description: string;
  /** Общий TVL */
  totalTvl: string;
  /** Название сети (например, "ETHEREUM") */
  networkName: string;
  /** Иконка сети */
  networkIcon: string;
  /** Список активов */
  assets: Asset[];
  /** Фоновое изображение */
  backgroundImage?: string;
  /** Класс для дополнительной стилизации */
  className?: string;
  /** Обработчик клика на кнопку "VIEW MARKET" */
  onViewMarket?: () => void;
}

export function VaultCard({
  protocolIcon,
  protocolName,
  description,
  totalTvl,
  networkName,
  networkIcon,
  assets,
  backgroundImage,
  className,
  onViewMarket,
}: VaultCardProps) {
  return (
    <div
      className={cn(
        "bg-[#1e2021] rounded-[4px] overflow-hidden flex flex-col w-full",
        className
      )}
    >
      {/* Верхняя часть с информацией о протоколе */}
      <div className="relative box-border flex flex-col items-start justify-between overflow-hidden p-[24px]">
        {/* Фоновое изображение */}
        {backgroundImage && (
          <div className="absolute flex h-full items-center justify-center  w-full pointer-events-none">
            <div className="flex-none  w-full h-full ">
              <img
                src={backgroundImage}
                alt=""
                className="block max-w-none w-full h-auto "
              />
            </div>
          </div>
        )}

        {/* Заголовок с логотипом и бейджем сети */}
        <div className="relative content-stretch flex items-start justify-between w-full mb-[44px]">
          {/* Логотип протокола */}
          <div className="overflow-hidden relative shrink-0 size-[40px]">
            <img
              src={protocolIcon}
              alt={protocolName}
              className="block w-full h-full object-cover"
            />
          </div>

          {/* Бейдж с сетью */}
          <div className="bg-[#1e2023] box-border content-stretch flex gap-[4px] items-center justify-center pl-[6px] pr-[10px] py-[5px] rounded-[100px] shrink-0">
            <div className="relative shrink-0 size-[12px]">
              <img
                src={networkIcon}
                alt={networkName}
                className="block w-full h-full object-cover"
              />
            </div>
            <p className="font-mono text-[12px] font-medium leading-[12px] tracking-[-0.12px] text-[#d0d6d9]">
              {networkName}
            </p>
          </div>
        </div>

        {/* Основная информация */}
        <div className="relative content-stretch flex flex-col gap-[24px] items-start w-full">
          {/* Название и описание */}
          <div className="content-stretch flex flex-col gap-[12px] items-start text-[#d0d6d9] w-[370px] whitespace-pre-wrap">
            <h3 className="font-sans text-[24px] font-semibold leading-[32px] tracking-[-0.24px]">
              {protocolName}
            </h3>
            <p className="font-sans text-[14px] font-medium leading-[1.4] tracking-[-0.14px] opacity-60">
              {description}
            </p>
          </div>

          {/* TVL */}
          <div className="content-stretch flex flex-col gap-[4px] items-start text-[#d0d6d9]">
            <p className="font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] opacity-60">
              TOTAL TVL
            </p>
            <p className="font-mono text-[24px] font-medium leading-[32px] tracking-[-0.48px]">
              {totalTvl}
            </p>
          </div>
        </div>
      </div>

      {/* Список активов */}
      <div className="content-stretch flex flex-col items-end w-full">
        {assets.map((asset, index) => (
          <VaultCardAsset
            key={index}
            name={asset.name}
            fullName={asset.fullName}
            coinIcon={asset.coinIcon}
            price={asset.price}
            marketCap={asset.marketCap}
            apy={asset.apy}
            networks={asset.networks}
          />
        ))}
      </div>

      {/* Кнопка VIEW MARKET */}
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[8px] w-full">
        <button
          onClick={onViewMarket}
          className="bg-[#2c6eff] box-border content-stretch flex items-center justify-center p-[14px] rounded-[4px] w-full hover:bg-[#2563eb] transition-colors"
        >
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px]">
            <span className="font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9]">
              VIEW MARKET
            </span>
          </div>
          <div className="overflow-hidden relative shrink-0 size-[20px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.69336 10.5832H15.3067M15.3067 10.5832L10.8067 6.08317M15.3067 10.5832L10.8067 15.0832"
                stroke="#D0D6D9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
