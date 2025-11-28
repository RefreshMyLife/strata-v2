import { useParams, Navigate } from "react-router-dom";
import { VAULTS_DATA } from "@/pages/Markets/components/markets.constants";
import { MarketDetailHeader, AssetAbout, TradingWidget } from "./components";

export function MarketDetailPage() {
  const { marketId } = useParams<{ marketId: string }>();

  // Найти vault по ID
  const vault = VAULTS_DATA.find((v) => v.id === marketId);

  // Если маркет не найден - редирект на /markets
  if (!vault) {
    return <Navigate to="/markets" replace />;
  }

  // берем первый актив
  const asset = vault.assets[0];

  return (
    <div className="flex flex-col gap-2.5 px-2 py-2">
      {/* Header секция */}
      <MarketDetailHeader vault={vault} />

      {/* Основной контент */}
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-2.5">
        {/* Левая колонка - информация об активе */}
        <AssetAbout
          asset={asset}
          description={vault.detailDescription || vault.description}
        />

        {/* Правая колонка - виджет торговли */}
        <TradingWidget asset={asset} />
      </div>
    </div>
  );
}
