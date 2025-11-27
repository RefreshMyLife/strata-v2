import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { ArrowLeftLong } from "@/components/ui/icons";
import type { VaultData } from "@/pages/Markets/components/markets.types";
import marketDetailHeaderBg from "@/assets/images/markets/markets-detail/bg-header.svg";
interface MarketDetailHeaderProps {
  vault: VaultData;
}

export function MarketDetailHeader({ vault }: MarketDetailHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#151617] box-border content-stretch flex flex-col items-start justify-between overflow-clip p-6 relative rounded-lg">
      {/* Кнопка "MARKETS" для возврата */}
      <button
        onClick={() => navigate("/markets")}
        className="bg-[#1e2021] border border-[#272a30] border-solid box-border content-stretch flex items-center justify-center p-[14px] relative rounded-[4px] shrink-0 mb-6 hover:bg-[#252829] hover:border-[#32363d] transition-colors"
      >
        <ArrowLeftLong className="opacity-60 overflow-clip relative shrink-0 size-5" />
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-2 py-0 relative shrink-0">
          <div className="flex flex-col mono justify-center leading-0 not-italic relative shrink-0 text-[#d0d6d9] text-sm text-center tracking-[-0.28px] whitespace-nowrap">
            <p className="leading-5">MARKETS</p>
          </div>
        </div>
      </button>

      {/* Основной контент */}
      <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full max-w-[490px]">
        {/* Логотип и инфо */}
        <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
          {/* Логотип протокола */}
          <div className="overflow-clip relative shrink-0 size-10">
            <img
              src={vault.protocolIcon}
              alt={vault.protocolName}
              className="block w-full h-full object-cover"
            />
          </div>

          {/* Название и описание */}
          <div className="content-stretch flex flex-col gap-3 items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
            <h1 className="font-sans font-semibold leading-8 relative shrink-0 text-[#d0d6d9] text-2xl tracking-[-0.24px] w-full">
              {vault.protocolName}
            </h1>
            <p className="font-sans font-medium leading-5 opacity-60 relative shrink-0 text-sm text-white tracking-[-0.14px] w-full">
              {vault.detailDescription}
            </p>
          </div>
        </div>

        {/* Метрики: TOTAL TVL, NETWORK, BUILT ON */}
        <div className="content-stretch flex gap-8 items-start relative shrink-0 w-full flex-wrap">
          {/* TOTAL TVL */}
          <div className="content-stretch flex flex-col mono gap-1 items-start not-italic relative shrink-0 text-[#d0d6d9]">
            <p className="leading-5 opacity-60 relative shrink-0 text-sm tracking-[-0.28px]">
              TOTAL TVL
            </p>
            <p className="leading-8 relative shrink-0 text-2xl tracking-[-0.48px]">
              {vault.totalTvl}
            </p>
          </div>

          {/* NETWORK */}
          <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0">
            <p className="mono leading-5 not-italic opacity-60 relative shrink-0 text-[#d0d6d9] text-sm tracking-[-0.28px]">
              NETWORK
            </p>
            <div className="content-stretch flex gap-2 items-center relative shrink-0">
              <div className="relative shrink-0 size-6">
                <img
                  src={vault.networkIcon}
                  alt={vault.networkName}
                  className="block max-w-none size-full"
                />
              </div>
              <p className="mono leading-8 not-italic relative shrink-0 text-[#d0d6d9] text-2xl tracking-[-0.48px]">
                {vault.networkName.charAt(0) +
                  vault.networkName.slice(1).toLowerCase()}
              </p>
            </div>
          </div>

          {/* BUILT ON - использует протокол из данных */}
          {vault.protocolName && (
            <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0">
              <p className="mono leading-5 not-italic opacity-60 relative shrink-0 text-[#d0d6d9] text-sm tracking-[-0.28px]">
                BUILT ON
              </p>
              <div className="content-stretch flex gap-2 items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <img
                    src={vault.protocolIcon}
                    alt={vault.protocolName}
                    className="block max-w-none size-full"
                  />
                </div>
                <div className="content-stretch flex gap-1 items-center relative shrink-0">
                  <p className="mono leading-8 not-italic relative shrink-0 text-[#d0d6d9] text-2xl tracking-[-0.48px]">
                    {vault.protocolName.split(" ")[0]}
                  </p>
                  <ExternalLink className="opacity-40 overflow-clip relative shrink-0 size-[16.667px] text-[#d0d6d9]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Декоративный фон (если есть backgroundImage) */}
      {vault.backgroundImage && (
        <div className="absolute flex h-full items-center justify-center right-0 top-0 w-full pointer-events-none ">
          <div className="flex-none w-full h-full">
            <img
              src={marketDetailHeaderBg}
              alt=""
              className="block max-w-none absolute right-0  h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
