import type { VaultAsset } from "@/pages/Markets/components/markets.types";
import { InformationFill } from "@/components/ui/icons";
import { MetricsRow, StatusBadge } from "../components";

interface AboutTabProps {
  asset: VaultAsset;
  description: string;
}

/**
 * Таб About с информацией об активе
 */
export function AboutTab({ asset, description }: AboutTabProps) {
  return (
    <div className="bg-[#151617] rounded-lg p-6 flex flex-col gap-6">
      {/* Описание и бейджи */}
      <div className="flex items-start justify-between">
        <p className="text-sm leading-5 tracking-[-0.14px] text-white opacity-60 max-w-[420px]">
          {description}
        </p>
        <div className="flex gap-2 items-center shrink-0">
          <StatusBadge label="LOW RISK" />
          <StatusBadge label="MODERATE RETURN" />
        </div>
      </div>

      {/* Метрики */}
      <div className="flex flex-col">
        <MetricsRow
          label="Price"
          value={asset.price}
          showIcon
          change="+1.29% 24h"
        />

        <MetricsRow label="Market Cap" value={asset.marketCap} />

        <MetricsRow
          label="Current APY"
          value={`${asset.apy}%`}
          change="+1.29% 24h"
        />

        <MetricsRow label="Coverage" value="50%" showIcon />

        <MetricsRow label="Contract Address" value="0x2948fj...182" link />

        <MetricsRow
          label="Benchmark"
          value={
            <div className="flex gap-1 items-center">
              <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] text-right">
                Aave USDC/USDT Lending Rates
              </p>
              <InformationFill size={16} />
            </div>
          }
        />

        <MetricsRow label="Base Asset" value="USDe" link />

        <MetricsRow label="Yield Source" value="sUSDe" link />
      </div>
    </div>
  );
}
