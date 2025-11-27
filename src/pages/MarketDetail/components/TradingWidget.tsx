import { useState } from "react";
import type { VaultAsset } from "@/pages/Markets/components/markets.types";
import { TabsFilledBuySell } from "@/components/ui/tabs/tabs-filled-buy-sell";
import { InputBuySell } from "@/components/ui/input/input-buy-sell";
import { ButtonSettings, ButtonSwap } from "@/components/ui/button/index";
import usdeIcon from "@/assets/icons/coins/USDe.svg?url";
import { ArrowFillBlueDown } from "@/components/ui/icons/ArrowFillBlueDown";
import { ConnectWalletButton } from "@/components/web3/ConnectWalletButton";
import { ConversionRateAccordion } from "./ConversionRateAccordion";

interface TradingWidgetProps {
  asset: VaultAsset;
}

/**
 * Виджет для торговли активом
 */
export function TradingWidget({ asset }: TradingWidgetProps) {
  const [activeTab, setActiveTab] = useState<string>("buy");

  return (
    <div className="bg-[#151617] rounded-lg p-6 space-y-4">
      {/* Табы BUY/SELL с настройками */}
      <div className="flex items-center gap-2">
        <TabsFilledBuySell
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1"
        />
        <ButtonSettings />
      </div>

      {/* Первая секция: USDe */}
      <div className="flex gap-1 items-start">
        {/* Левая часть: Balance и Token selector */}
        <div className="bg-[#1e2021] rounded-[4px] p-6 flex-1 space-y-6">
          {/* Balance и MAX */}
          <div className="flex items-baseline gap-1">
            <span className="mono font-sans text-sm text-[#d0d6d9] opacity-60 tracking-[-0.14px]">
              Balance:
            </span>
            <span className="mono text-sm text-[#d0d6d9] opacity-60 tracking-[-0.28px] uppercase">
              500
            </span>
            <button className="ml-auto font-mono text-sm text-[#2c6eff] tracking-[-0.28px] hover:text-[#4d82ff] transition-colors">
              MAX
            </button>
          </div>

          {/* Token selector */}
          <div className="flex items-center gap-2">
            <div className="font-sans font-semibold text-[48px] leading-[40px] tracking-[-0.48px] text-[#d0d6d9]">
              USDe
            </div>
            <div className="size-6 rounded-full overflow-hidden self-end">
              <img
                src={usdeIcon}
                alt="usde"
                className="size-full object-cover"
              />
            </div>
            <button className="ml-auto">
              <ArrowFillBlueDown size={16} />
            </button>
          </div>
        </div>

        {/* Правая часть: Input */}
        <InputBuySell tokenPrice={1.0} />
      </div>

      {/* Кнопка swap */}
      <div className="flex justify-center">
        <ButtonSwap />
      </div>

      {/* Вторая секция: srUSDe/asset */}
      <div className="flex gap-1 items-start">
        {/* Левая часть: Balance и Token selector */}
        <div className="bg-[#1e2021] rounded-[4px] p-6 flex-1 space-y-8">
          {/* Balance */}
          <div className="flex items-baseline gap-1">
            <span className="mono text-sm text-[#d0d6d9] opacity-60 tracking-[-0.14px]">
              Balance:
            </span>
            <span className="mono text-sm text-[#d0d6d9] opacity-60 tracking-[-0.28px] uppercase">
              500
            </span>
          </div>

          {/* Token selector */}
          <div className="flex items-baseline gap-2">
            <div className="font-sans font-semibold text-[48px] leading-10 tracking-[-0.48px] text-[#d0d6d9]">
              {asset.name}
            </div>
            <div className="size-6 rounded-full overflow-hidden">
              <img
                src={asset.coinIcon}
                alt={asset.name}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Правая часть: Input */}
        <InputBuySell tokenPrice={parseFloat(asset.price) || 0} />
      </div>

      {/* CONNECT WALLET кнопка */}
      <ConnectWalletButton className="w-full" hideWhenConnected />

      {/* Разделитель */}
      <div className="h-px bg-[#272a30]" />

      {/* Конвертер с аккордеоном */}
      <ConversionRateAccordion
        fromToken="USDe"
        toToken={asset.name}
        rate="1.006"
      />
    </div>
  );
}
