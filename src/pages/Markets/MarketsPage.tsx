import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  TabsFilledNetwork,
  TabsFilledNetworkContent,
} from "@/components/ui/tabs/tabs-filled-network";
import type { SortValue } from "@/components/SortByDropdown";
import {
  MarketsHeader,
  NetworkFilters,
  VaultsGrid,
  FAQ,
} from "./components";
import {
  NETWORK_FILTERS,
  getVaultsByNetwork,
  TOTAL_VAULTS_COUNT,
} from "./components/markets.constants";
import type { NetworkId } from "./components/markets.types";

export function MarketsPage() {
  const navigate = useNavigate();
  const [activeNetwork, setActiveNetwork] = useState<NetworkId>("all");
  const [sortBy, setSortBy] = useState<SortValue>("DEFAULT");

  // Фильтрация хранилищ
  const filteredVaults = useMemo(
    () => getVaultsByNetwork(activeNetwork),
    [activeNetwork]
  );

  // Обработчик клика на "VIEW MARKET"
  const handleViewMarket = (vaultId: string) => {
    navigate(`/markets/${vaultId}`);
  };

  return (
    <div className="flex flex-col gap-2.5 px-2">
      <TabsFilledNetwork
        value={activeNetwork}
        onValueChange={(value) => setActiveNetwork(value as NetworkId)}
      >
        <div className="flex flex-col gap-2.5 items-start pb-0 pt-2 w-full">
          {/* Заголовок с фильтрами */}
          <MarketsHeader marketsCount={TOTAL_VAULTS_COUNT}>
            <NetworkFilters sortBy={sortBy} onSortChange={setSortBy} />
          </MarketsHeader>

          {/* Контент для каждой сети */}
          {NETWORK_FILTERS.map((network) => (
            <TabsFilledNetworkContent
              key={network.id}
              className="w-full"
              value={network.id}
            >
              <VaultsGrid
                vaults={network.id === activeNetwork ? filteredVaults : []}
                onViewMarket={handleViewMarket}
              />
            </TabsFilledNetworkContent>
          ))}
        </div>
      </TabsFilledNetwork>

      <FAQ />
    </div>
  );
}
