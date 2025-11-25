import { useState } from "react";
import {
  TabsFilledNetwork,
  TabsFilledNetworkList,
  TabsFilledNetworkTrigger,
  TabsFilledNetworkContent,
} from "@/components/ui/tabs/tabs-filled-network";
import { SortByDropdown, type SortValue } from "@/components/SortByDropdown";
import {
  HyperliquidIcon,
  EthereumIcon,
  SonicIcon,
  BaseIcon,
} from "@/components/icons";
import bgImage from "@/assets/images/markets/bg.svg?url";
import { VaultCard } from "./components";

// Импорты иконок для примера
import usdeIcon from "@/assets/icons/coins/USDe.svg?url";
import srUSDeIcon from "@/assets/icons/coins/srUSDe.svg?url";
import jrUSDeIcon from "@/assets/icons/coins/jrUSDe.svg?url";
import ethIcon from "@/assets/icons/coins/eth.svg?url";
import strataPointsIcon from "@/assets/icons/coins/strataPoints.svg?url";
import ethenaIcon from "@/assets/icons/coins/ethena.svg?url";
import vaultBgImageEthena from "@/assets/images/markets/vault-card-ethena-bg.svg?url";
import vaultBgImageHuperliquid from "@/assets/images/markets/vault-card-hyperliquid-bg.svg";
import huperliquidIcon from "@/assets/icons/coins/huperliquid.svg?url";

export function MarketsPage() {
  const [activeNetwork, setActiveNetwork] = useState("all");
  const [sortBy, setSortBy] = useState<SortValue>("DEFAULT");

  return (
    <TabsFilledNetwork value={activeNetwork} onValueChange={setActiveNetwork}>
      <div className="flex flex-col gap-2.5 items-start pb-0 pt-2 px-2 w-full">
        {/* Серый контейнер с заголовком и табами */}
        <div className="relative bg-[#151617] rounded-lg p-6 w-full overflow-hidden flex flex-col gap-6">
          {/* Фоновое изображение */}
          <div className="absolute left-[-2px] top-[-9px] w-full h-[204px] pointer-events-none z-0">
            <img src={bgImage} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Заголовок */}
          <div className="relative z-10 flex items-start gap-2 font-['DM_Sans_36pt',sans-serif] text-[40px] leading-[40px] tracking-[-0.4px] font-semibold text-[#d0d6d9]">
            <h1>Markets</h1>
            <span className="opacity-40">8</span>
          </div>

          {/* Контейнер для табов и сортировки */}
          <div className="relative z-10 flex items-center align-baseline justify-between w-full">
            {/* Табы сетей */}
            <TabsFilledNetworkList className="flex flex-row gap-2 flex-1">
              <TabsFilledNetworkTrigger value="all">
                ALL NETWORKS
              </TabsFilledNetworkTrigger>

              <TabsFilledNetworkTrigger
                value="hyperliquid"
                icon={<HyperliquidIcon size={16} />}
                count="2"
              >
                HYPERLIQUID
              </TabsFilledNetworkTrigger>

              <TabsFilledNetworkTrigger
                value="ethereum"
                icon={<EthereumIcon size={16} />}
                count="1"
              >
                ETHEREUM
              </TabsFilledNetworkTrigger>

              <TabsFilledNetworkTrigger
                value="sonic"
                icon={<SonicIcon size={16} />}
                count="3"
              >
                SONIC
              </TabsFilledNetworkTrigger>

              <TabsFilledNetworkTrigger
                value="base"
                icon={<BaseIcon size={16} />}
                count="1"
              >
                BASE
              </TabsFilledNetworkTrigger>
            </TabsFilledNetworkList>

            {/* Сортировка */}
            <SortByDropdown value={sortBy} onValueChange={setSortBy} />
          </div>
        </div>

        {/* Контент для каждой сети - ВНЕ серого контейнера */}
        <TabsFilledNetworkContent className="w-full" value="all">
          <div className="grid grid-cols-[1fr_1fr] p-6 gap-4 w-full bg-card ">
            <VaultCard
              protocolIcon={usdeIcon}
              protocolName="Ethena USDe"
              description="Ethena is a synthetic dollar protocol built on Ethereum that provides a crypto-native solution for money."
              totalTvl="$875.12M"
              networkName="ETHEREUM"
              networkIcon={ethIcon}
              backgroundImage={vaultBgImageEthena}
              assets={[
                {
                  name: "srUSDe",
                  fullName: "SENIOR USDe",
                  coinIcon: srUSDeIcon,
                  price: "$1.00",
                  marketCap: "$2.05B",
                  apy: "11",
                  networks: [
                    { src: strataPointsIcon, alt: "Strata Points" },
                    { src: ethenaIcon, alt: "Ethena" },
                    { src: usdeIcon, alt: "USDe" },
                  ],
                },
                {
                  name: "jrUSDe",
                  fullName: "JUNIOR USDe",
                  coinIcon: jrUSDeIcon,
                  price: "$1.00",
                  marketCap: "$2.05B",
                  apy: "7",
                  networks: [
                    { src: strataPointsIcon, alt: "Strata Points" },
                    { src: ethenaIcon, alt: "Ethena" },
                    { src: usdeIcon, alt: "USDe" },
                  ],
                },
              ]}
              onViewMarket={() => console.log("View Ethena market")}
            />

            <VaultCard
              protocolIcon={huperliquidIcon}
              protocolName="Hyperliquid LP"
              description="Ethena is a synthetic dollar protocol built on Ethereum that provides a crypto-native solution for money."
              totalTvl="$2.05B"
              networkName="ETHEREUM"
              networkIcon={ethIcon}
              backgroundImage={vaultBgImageHuperliquid}
              assets={[
                {
                  name: "srUSDe",
                  fullName: "SENIOR USDe",
                  coinIcon: srUSDeIcon,
                  price: "$1.00",
                  marketCap: "$2.05B",
                  apy: "11",
                  networks: [
                    { src: strataPointsIcon, alt: "Strata Points" },
                    { src: ethenaIcon, alt: "Ethena" },
                    { src: usdeIcon, alt: "USDe" },
                  ],
                },
                {
                  name: "jrUSDe",
                  fullName: "JUNIOR USDe",
                  coinIcon: jrUSDeIcon,
                  price: "$1.00",
                  marketCap: "$2.05B",
                  apy: "7",
                  networks: [
                    { src: strataPointsIcon, alt: "Strata Points" },
                    { src: ethenaIcon, alt: "Ethena" },
                    { src: usdeIcon, alt: "USDe" },
                  ],
                },
              ]}
              onViewMarket={() => console.log("View Hyperliquid market")}
            />
          </div>
        </TabsFilledNetworkContent>

        <TabsFilledNetworkContent value="hyperliquid">
          <div className="flex flex-col gap-2.5 w-full">
            {/* Здесь будет контент для Hyperliquid */}
          </div>
        </TabsFilledNetworkContent>

        <TabsFilledNetworkContent value="ethereum">
          <div className="flex flex-col gap-2.5 w-full">
            {/* Здесь будет контент для Ethereum */}
          </div>
        </TabsFilledNetworkContent>

        <TabsFilledNetworkContent value="sonic">
          <div className="flex flex-col gap-2.5 w-full">
            {/* Здесь будет контент для Sonic */}
          </div>
        </TabsFilledNetworkContent>

        <TabsFilledNetworkContent value="base">
          <div className="flex flex-col gap-2.5 w-full">
            {/* Здесь будет контент для Base */}
          </div>
        </TabsFilledNetworkContent>
      </div>
    </TabsFilledNetwork>
  );
}
