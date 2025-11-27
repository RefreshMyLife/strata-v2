import type { VaultAsset } from "@/pages/Markets/components/markets.types";
import {
  TabsUnderline,
  TabsUnderlineList,
  TabsUnderlineTrigger,
  TabsUnderlineContent,
} from "@/components/ui/tabs/tabs-underline";
import { InformationFill, ExternalLink } from "@/components/ui/icons";

interface AssetAboutProps {
  asset: VaultAsset;
  description: string;
}

/**
 * Компонент "About" с детальной информацией об активе
 * Показывает: Price, Market Cap, APY, Coverage, Contract Address, Benchmark, Base Asset, Yield Source
 */
export function AssetAbout({ asset, description }: AssetAboutProps) {
  return (
    <div className="bg-[#151617] rounded-lg p-6 flex flex-col gap-6">
      {/* Табы: About / Charts / Reserves */}
      <TabsUnderline defaultValue="about">
        <TabsUnderlineList className="border-b-2 border-[#272a30] w-full">
          <TabsUnderlineTrigger value="about">About</TabsUnderlineTrigger>
          <TabsUnderlineTrigger value="charts">Charts</TabsUnderlineTrigger>
          <TabsUnderlineTrigger value="reserves">Reserves</TabsUnderlineTrigger>
        </TabsUnderlineList>

        <TabsUnderlineContent value="about">
          {/* Описание и бейджи */}
          <div className="flex items-start justify-between mb-6">
            <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 max-w-[420px]">
              {description}
            </p>
            <div className="flex gap-2 items-center shrink-0">
              <div className="bg-[#151617] border border-[#272a30] rounded-[4px] px-2.5 h-6 flex items-center justify-center">
                <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9]">
                  LOW RISK
                </p>
              </div>
              <div className="bg-[#151617] border border-[#272a30] rounded-[4px] px-2.5 h-6 flex items-center justify-center">
                <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9]">
                  MODERATE RETURN
                </p>
              </div>
            </div>
          </div>

          {/* Метрики */}
          <div className="flex flex-col">
            {/* Price */}
            <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
              <div className="flex gap-1 items-center">
                <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
                  Price
                </p>
                <InformationFill size={16} />
              </div>
              <div className="flex gap-2 items-start mono text-sm leading-5 tracking-[-0.28px] text-right">
                <p className="text-[#d0d6d9]">{asset.price}</p>
                <p className="text-[#74cd55]">+1.29% 24h</p>
              </div>
            </div>

            {/* Market Cap */}
            <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
              <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
                Market Cap
              </p>
              <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] text-right">
                {asset.marketCap}
              </p>
            </div>

            {/* Current APY */}
            <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
              <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
                Current APY
              </p>
              <div className="flex gap-2 items-center mono text-sm leading-5 tracking-[-0.28px] text-right">
                <p className="text-[#d0d6d9]">{asset.apy}%</p>
                <p className="text-[#74cd55]">+1.29% 24h</p>
              </div>
            </div>

            {/* Coverage */}
            <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
              <div className="flex gap-1 items-center">
                <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
                  Coverage
                </p>
                <InformationFill size={16} />
              </div>
              <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] text-right">
                50%
              </p>
            </div>

            {/* Contract Address */}
            <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
              <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
                Contract Address
              </p>
              <div className="flex gap-1 items-center">
                <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] text-right">
                  0x2948fj...182
                </p>
                <ExternalLink size={16} />
              </div>
            </div>

            {/* Benchmark */}
            <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
              <div className="flex gap-1 items-center">
                <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
                  Benchmark
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] text-right">
                  Aave USDC/USDT Lending Rates
                </p>
                <InformationFill size={16} />
              </div>
            </div>

            {/* Base Asset */}
            <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
              <div className="flex gap-1 items-center">
                <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
                  Base Asset
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] text-right">
                  USDe
                </p>
                <ExternalLink size={16} />
              </div>
            </div>

            {/* Yield Source */}
            <div className="flex items-center justify-between py-3 border-b border-[#272a30]">
              <div className="flex gap-1 items-center">
                <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 font-medium">
                  Yield Source
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] text-right">
                  sUSDe
                </p>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>
        </TabsUnderlineContent>

        <TabsUnderlineContent value="charts">
          <p className="text-sm text-white opacity-60">
            Charts content coming soon...
          </p>
        </TabsUnderlineContent>

        <TabsUnderlineContent value="reserves">
          <p className="text-sm text-white opacity-60">
            Reserves content coming soon...
          </p>
        </TabsUnderlineContent>
      </TabsUnderline>
    </div>
  );
}
