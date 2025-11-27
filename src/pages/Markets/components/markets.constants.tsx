import type { VaultData, NetworkConfig, NetworkId } from "./markets.types";
import {
  HyperliquidIcon,
  EthereumIcon,
  SonicIcon,
  BaseIcon,
} from "@/components/ui/icons";

// Иконки монет
import usdeIcon from "@/assets/icons/coins/USDe.svg?url";
import srUSDeIcon from "@/assets/icons/coins/srUSDe.svg?url";
import jrUSDeIcon from "@/assets/icons/coins/jrUSDe.svg?url";
import ethIcon from "@/assets/icons/coins/eth.svg?url";
import strataPointsIcon from "@/assets/icons/coins/strataPoints.svg?url";
import ethenaIcon from "@/assets/icons/coins/ethena.svg?url";
import vaultBgImageEthena from "@/assets/images/markets/vault-card-ethena-bg.svg?url";
import vaultBgImageHuperliquid from "@/assets/images/markets/vault-card-hyperliquid-bg.svg";
import huperliquidIcon from "@/assets/icons/coins/huperliquid.svg?url";

/** Конфигурация фильтров по сетям */
export const NETWORK_FILTERS: NetworkConfig[] = [
  { id: "all", label: "ALL NETWORKS" },
  {
    id: "hyperliquid",
    label: "HYPERLIQUID",
    icon: <HyperliquidIcon size={16} />,
    count: "2",
  },
  {
    id: "ethereum",
    label: "ETHEREUM",
    icon: <EthereumIcon size={16} />,
    count: "1",
  },
  {
    id: "sonic",
    label: "SONIC",
    icon: <SonicIcon size={16} />,
    count: "3",
  },
  {
    id: "base",
    label: "BASE",
    icon: <BaseIcon size={16} />,
    count: "1",
  },
];

/** Список всех хранилищ */
export const VAULTS_DATA: VaultData[] = [
  {
    id: "ethena-usde",
    protocolIcon: usdeIcon,
    protocolName: "Ethena USDe",
    description:
      "Ethena is a synthetic dollar protocol built on Ethereum that provides a crypto-native solution for money.",
    detailDescription:
      "USDe is the synthetic dollar from Ethena, a protocol that combines yield from staked ETH and basis spread from perps and futures to create on-chain money solution. There will be no vesting requirements for Sats earned from this pool.",
    totalTvl: "$875.12M",
    networkId: "ethereum",
    networkName: "ETHEREUM",
    networkIcon: ethIcon,
    backgroundImage: vaultBgImageEthena,
    assets: [
      {
        name: "srUSDe",
        fullName: "Senior USDe",
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
        fullName: "Junior USDe",
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
    ],
  },
  {
    id: "hyperliquid-lp",
    protocolIcon: huperliquidIcon,
    protocolName: "Hyperliquid LP",
    description:
      "Ethena is a synthetic dollar protocol built on Ethereum that provides a crypto-native solution for money.",
    detailDescription:
      "USDe is the synthetic dollar from Ethena, a protocol that combines yield from staked ETH and basis spread from perps and futures to create on-chain money solution. There will be no vesting requirements for Sats earned from this pool.",
    totalTvl: "$2.05B",
    networkId: "ethereum",
    networkName: "ETHEREUM",
    networkIcon: ethIcon,
    backgroundImage: vaultBgImageHuperliquid,
    assets: [
      {
        name: "srUSDe",
        fullName: "Senior USDe",
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
        fullName: "Junior USDe",
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
    ],
  },
];

/** Получить хранилища по ID сети */
export function getVaultsByNetwork(networkId: NetworkId): VaultData[] {
  if (networkId === "all") return VAULTS_DATA;
  return VAULTS_DATA.filter((vault) => vault.networkId === networkId);
}

/** Общее количество хранилищ */
export const TOTAL_VAULTS_COUNT = VAULTS_DATA.length;
