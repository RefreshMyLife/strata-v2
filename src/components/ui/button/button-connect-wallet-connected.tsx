import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Ethereum, Wallet } from "@/components/ui/icons/wallets";

type ButtonConnectWalletConnectedProps = React.ComponentProps<"button"> & {
  address?: string;
  isDropdownOpen?: boolean;
};

function ButtonConnectWalletConnected({
  className,
  address,
  isDropdownOpen = false,
  ...props
}: ButtonConnectWalletConnectedProps) {
  return (
    <button
      data-slot="button-connect-wallet-connected"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center  p-[12px] sm:p-[14px] rounded-[4px]",
        "transition-colors duration-200",
        // Border
        "border border-solid",
        // Состояние с открытым dropdown
        isDropdownOpen
          ? "bg-[#03153d] border-[#2c6eff] hover:bg-[#05205c]"
          : "bg-[#151617] border-[#272a30] hover:bg-[#1e2021]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6eff] focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Иконка кошелька с Ethereum badge */}
      <WalletIconGroup />

      {/* Адрес кошелька */}
      <div className="flex items-center justify-center px-[8px] shrink-0">
        <span className="font-mono text-[12px] sm:text-[14px] font-medium leading-[14px] sm:leading-[20px] tracking-[-0.28px] text-[#d0d6d9] whitespace-nowrap">
          {address || "0X0F...7AA4"}
        </span>
      </div>

      {/* Стрелка вниз/вверх */}
      <DropdownIndicator isOpen={isDropdownOpen} />
    </button>
  );
}

// Подкомпонент: Группа иконок кошелька
function WalletIconGroup() {
  return (
    <div className="flex items-end pl-0 pr-[4px] py-0 shrink-0">
      <div className="mr-[-4px] overflow-clip shrink-0 size-[20px]">
        <Wallet className="size-full text-[#d0d6d9]" />
      </div>
      <div className="relative bg-[#272a30] mr-[-4px] rounded-[99px] shrink-0 size-[15px] flex items-center justify-center">
        <Ethereum className="absolute left-1/2 r-[-4px] -translate-x-1/2 w-[10px] h-[12px]" />
      </div>
    </div>
  );
}

// Подкомпонент: Индикатор dropdown
function DropdownIndicator({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={cn(
        "overflow-clip shrink-0 size-[20px] transition-all duration-200",
        isOpen ? "opacity-100 rotate-180" : "opacity-40"
      )}
    >
      <ChevronDown className="size-full text-[#d0d6d9]" strokeWidth={2.5} />
    </div>
  );
}

export { ButtonConnectWalletConnected };
