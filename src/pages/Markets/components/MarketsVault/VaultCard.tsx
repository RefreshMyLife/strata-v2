import { cn } from "@/lib/utils";
import { VaultCardAsset } from "@/components/ui/VaultCardAsset";
import { ButtonPrimary } from "@/components/ui/button/index";
import { ArrowRightLong } from "@/components/ui/icons/ArrowRightLong";

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

  /** Обработчик клика на кнопку "VIEW MARKET"  */
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
}: VaultCardProps) {
  return (
    <div
      className={cn(
        "bg-[#1e2021] rounded-[4px] overflow-hidden flex flex-col w-full",
        className
      )}
    >
      {/* Верхняя часть с информацией о протоколе */}
      <div className="relative box-border flex flex-col items-start justify-between overflow-hidden p-6">
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
        <div className="relative content-stretch flex items-start justify-between w-full mb-11">
          {/* Логотип протокола */}
          <div className="overflow-hidden relative shrink-0 size-10">
            <img
              src={protocolIcon}
              alt={protocolName}
              className="block w-full h-full object-cover"
            />
          </div>

          {/* Бейдж с сетью */}
          <div className="bg-[#1e2023] box-border content-stretch flex gap-1 items-center justify-center pl-1.5 pr-2.5 py-[5px] rounded-[100px] shrink-0">
            <div className="relative shrink-0 size-3">
              <img
                src={networkIcon}
                alt={networkName}
                className="block w-full h-full object-cover"
              />
            </div>
            <p className="font-mono text-[12px] font-medium leading-3 tracking-[-0.12px] text-[#d0d6d9]">
              {networkName}
            </p>
          </div>
        </div>

        {/* Основная информация */}
        <div className="relative content-stretch flex flex-col gap-6 items-start w-full">
          {/* Название и описание */}
          <div className="content-stretch flex flex-col gap-3 items-start text-[#d0d6d9] w-[370px] whitespace-pre-wrap">
            <h3 className="font-sans text-[24px] font-semibold leading-8 tracking-[-0.24px]">
              {protocolName}
            </h3>
            <p className="font-sans text-[14px] font-medium leading-[1.4] tracking-[-0.14px] opacity-60">
              {description}
            </p>
          </div>

          {/* TVL */}
          <div className="content-stretch flex flex-col gap-1 items-start text-[#d0d6d9]">
            <p className="font-mono text-[14px] font-medium leading-5 tracking-[-0.28px] opacity-60">
              TOTAL TVL
            </p>
            <p className="font-mono text-[24px] font-medium leading-8 tracking-[-0.48px]">
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

      <div className="box-border content-stretch flex flex-col gap-2.5 items-start p-2 w-full">
        <ButtonPrimary
          children="VIEW MARKET"
          className=" w-full font-mono text-[14px] font-medium leading-5"
          rightIcon={<ArrowRightLong size={20} />}
        />
      </div>
    </div>
  );
}
