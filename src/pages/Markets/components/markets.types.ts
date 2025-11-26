import React from "react";

/** Тип идентификатора сети */
export type NetworkId = "all" | "hyperliquid" | "ethereum" | "sonic" | "base";

/** Награды/баджи сети на карточке актива */
export interface AssetNetwork {
  src: string;
  alt: string;
}

/** Актив в хранилище (Senior/Junior транш) */
export interface VaultAsset {
  name: string;
  fullName: string;
  coinIcon: string;
  price: string;
  marketCap: string;
  apy: string;
  networks?: AssetNetwork[];
}

/** Полные данные карточки хранилища */
export interface VaultData {
  id: string;
  protocolIcon: string;
  protocolName: string;
  description: string;
  totalTvl: string;
  networkId: NetworkId;
  networkName: string;
  networkIcon: string;
  backgroundImage?: string;
  assets: VaultAsset[];
}

/** Конфигурация сети для фильтров */
export interface NetworkConfig {
  id: NetworkId;
  label: string;
  icon?: React.ReactNode;
  count?: string;
}
