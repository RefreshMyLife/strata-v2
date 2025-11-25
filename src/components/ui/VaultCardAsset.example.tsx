/**
 * Примеры использования компонента VaultCardAsset
 *
 * Этот файл демонстрирует различные варианты использования компонента
 */

import { VaultCardAsset } from "./VaultCardAsset";

// Импорты иконок монет (с ?url для Vite)
import jrUSDeIcon from "@/assets/icons/coins/jrUSDe.svg?url";
import usdcIcon from "@/assets/icons/coins/usdc.svg?url";
import ethIcon from "@/assets/icons/coins/eth.svg?url";
import usdtIcon from "@/assets/icons/coins/usdt.svg?url";
import srUSDeIcon from "@/assets/icons/coins/srUSDe.svg?url";

// Импорты иконок сетей (маленькие иконки)
import strataPointsIcon from "@/assets/icons/coins/strataPoints.svg?url";
import ethenaIcon from "@/assets/icons/coins/ethena.svg?url";

export function VaultCardAssetExamples() {
  return (
    <div className="w-full max-w-[684px] mx-auto space-y-4 p-8 bg-background">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Примеры VaultCardAsset
      </h2>

      {/* Пример 1: jrUSDe (как в дизайне) */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          1. jrUSDe (основной пример из дизайна)
        </h3>
        <VaultCardAsset
          name="jrUSDe"
          fullName="JUNIOR USDe"
          coinIcon={jrUSDeIcon}
          price="$1.00"
          marketCap="$2.05B"
          apy="7"
          networks={[
            { src: strataPointsIcon, alt: "Strata Points" },
            { src: ethenaIcon, alt: "Ethena" },
            { src: jrUSDeIcon, alt: "jrUSDe" },
          ]}
        />
      </div>

      {/* Пример 2: USDC */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          2. USDC
        </h3>
        <VaultCardAsset
          name="USDC"
          fullName="USD Coin"
          coinIcon={usdcIcon}
          price="$1.00"
          marketCap="$45.2B"
          apy="12.5"
          networks={[
            { src: ethIcon, alt: "Ethereum" },
          ]}
        />
      </div>

      {/* Пример 3: ETH с hover */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          3. ETH (hover вариант)
        </h3>
        <VaultCardAsset
          name="ETH"
          fullName="Ethereum"
          coinIcon={ethIcon}
          price="$3,254.78"
          marketCap="$391.2B"
          apy="4.2"
          variant="hover"
          networks={[
            { src: ethIcon, alt: "Ethereum" },
          ]}
        />
      </div>

      {/* Пример 4: USDT */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          4. USDT
        </h3>
        <VaultCardAsset
          name="USDT"
          fullName="Tether USD"
          coinIcon={usdtIcon}
          price="$1.00"
          marketCap="$120.5B"
          apy="8.3"
          onClick={() => console.log("Clicked USDT")}
        />
      </div>

      {/* Пример 5: srUSDe */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          5. srUSDe
        </h3>
        <VaultCardAsset
          name="srUSDe"
          fullName="SENIOR USDe"
          coinIcon={srUSDeIcon}
          price="$1.02"
          marketCap="$1.85B"
          apy="9.7"
          networks={[
            { src: strataPointsIcon, alt: "Strata Points" },
            { src: ethenaIcon, alt: "Ethena" },
          ]}
        />
      </div>

      {/* Пример 6: Без сетей */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          6. Без иконок сетей
        </h3>
        <VaultCardAsset
          name="DAI"
          fullName="Dai Stablecoin"
          coinIcon={usdcIcon}
          price="$1.00"
          marketCap="$5.32B"
          apy="5.5"
        />
      </div>

      {/* Список карточек (как будет в реальном использовании) */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Список карточек активов
        </h3>
        <div className="border border-[#272a30] rounded-lg overflow-hidden">
          <VaultCardAsset
            name="jrUSDe"
            fullName="JUNIOR USDe"
            coinIcon={jrUSDeIcon}
            price="$1.00"
            marketCap="$2.05B"
            apy="7"
            networks={[
              { src: strataPointsIcon, alt: "Strata Points" },
              { src: ethenaIcon, alt: "Ethena" },
            ]}
          />
          <VaultCardAsset
            name="USDC"
            fullName="USD Coin"
            coinIcon={usdcIcon}
            price="$1.00"
            marketCap="$45.2B"
            apy="12.5"
            networks={[
              { src: ethIcon, alt: "Ethereum" },
            ]}
          />
          <VaultCardAsset
            name="ETH"
            fullName="Ethereum"
            coinIcon={ethIcon}
            price="$3,254.78"
            marketCap="$391.2B"
            apy="4.2"
          />
        </div>
      </div>
    </div>
  );
}
