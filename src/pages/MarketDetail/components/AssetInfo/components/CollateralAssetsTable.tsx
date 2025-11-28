import { cn } from "@/lib/utils";
import { formatCurrencyLong, formatPercentage } from "@/lib/formatters";

/**
 * Интерфейс для данных одного залогового актива
 */
export interface CollateralAsset {
  /** Название актива (например, "srUSDe") */
  name: string;
  /** URL иконки актива */
  iconUrl: string;
  /** APY актива в процентах (например, 4.39) */
  apy: number;
  /** Стоимость в долларах */
  value: number;
  /** Доля в процентах (например, 84.39) */
  share: number;
}

interface CollateralAssetsTableProps {
  /** Массив залоговых активов для отображения */
  assets: CollateralAsset[];
  /** Дополнительные CSS классы */
  className?: string;
}

/**
 * Компонент таблицы залоговых активов (Collateral Assets)
 * Отображает список активов с их характеристиками: иконка, название, APY, стоимость и доля
 */
export function CollateralAssetsTable({
  assets,
  className,
}: CollateralAssetsTableProps) {
  return (
    <div
      className={cn(
        "bg-[#151617] rounded-lg p-6 flex flex-col gap-3",
        className
      )}
    >
      {/* Заголовки таблицы */}
      <div className="flex gap-3 w-full">
        <div className="flex-1">
          <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] opacity-60">
            TYPE
          </p>
        </div>
        <div className="flex-1">
          <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] opacity-60">
            ASSET
          </p>
        </div>
        <div className="flex-1">
          <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] opacity-60">
            VALUE
          </p>
        </div>
        <div className="flex-1">
          <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9] opacity-60">
            SHARE
          </p>
        </div>
      </div>

      {/* Строки с данными */}
      <div className="flex flex-col">
        {assets.map((asset, index) => (
          <div
            key={`${asset.name}-${index}`}
            className={cn(
              "flex gap-3 items-center py-4",
              index !== assets.length - 1 &&
                "border-b border-[rgba(255,255,255,0.08)]"
            )}
          >
            {/* TYPE (иконка + название) */}
            <div className="flex-1 flex gap-2 items-center">
              <img
                src={asset.iconUrl}
                alt={asset.name}
                className="w-5 h-5 rounded-full"
              />
              <p className="mono text-sm leading-5 tracking-[-0.28px] text-white">
                {asset.name}
              </p>
            </div>

            {/* ASSET (APY) */}
            <div className="flex-1">
              <p className="mono text-sm leading-5 tracking-[-0.28px] text-white">
                {formatPercentage(asset.apy)}
              </p>
            </div>

            {/* VALUE */}
            <div className="flex-1">
              <p className="mono text-sm leading-5 tracking-[-0.28px] text-white">
                {formatCurrencyLong(asset.value)}
              </p>
            </div>

            {/* SHARE */}
            <div className="flex-1">
              <p className="mono text-sm leading-5 tracking-[-0.28px] text-white">
                {formatPercentage(asset.share)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
