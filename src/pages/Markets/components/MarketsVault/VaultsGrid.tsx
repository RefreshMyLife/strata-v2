import { VaultCard } from "./VaultCard";
import type { VaultData } from "../markets.types";

interface VaultsGridProps {
  vaults: VaultData[];
  onViewMarket?: (vaultId: string) => void;
}

/** Грид с карточками */
export function VaultsGrid({ vaults, onViewMarket }: VaultsGridProps) {
  if (vaults.length === 0) {
    return (
      <div className="grid grid-cols-[1fr_1fr] p-6 gap-4 w-full bg-card rounded-[8px]">
        <p className="col-span-2 text-center text-[#d0d6d9] opacity-60 py-8">
          No vaults available for this network
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[1fr_1fr] p-6 gap-4 w-full bg-card rounded-[8px]">
      {vaults.map((vault) => (
        <VaultCard
          key={vault.id}
          protocolIcon={vault.protocolIcon}
          protocolName={vault.protocolName}
          description={vault.description}
          totalTvl={vault.totalTvl}
          networkName={vault.networkName}
          networkIcon={vault.networkIcon}
          backgroundImage={vault.backgroundImage}
          assets={vault.assets}
          onViewMarket={() => onViewMarket?.(vault.id)}
        />
      ))}
    </div>
  );
}
