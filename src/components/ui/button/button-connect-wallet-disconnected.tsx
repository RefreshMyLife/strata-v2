import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonConnectWalletDisconnectedProps = React.ComponentProps<"button">;

function ButtonConnectWalletDisconnected({
  className,
  children,
  ...props
}: ButtonConnectWalletDisconnectedProps) {
  return (
    <button
      data-slot="button-connect-wallet"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center p-[14px] rounded-[4px]",
        "transition-colors duration-200",
        // Default состояние
        "bg-[#2c6eff]",
        // Hover состояние
        "hover:bg-[#598dff]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6eff] focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Текст */}
      <div className="flex items-center justify-center px-[8px]">
        <span className="font-mono text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#d0d6d9] whitespace-nowrap uppercase">
          {children || "CONNECT WALLET"}
        </span>
      </div>

      {/* Иконка плюса */}
      <div className="overflow-clip shrink-0 size-[20px]">
        <Plus className="size-full text-[#d0d6d9]" strokeWidth={2.5} />
      </div>
    </button>
  );
}

export { ButtonConnectWalletDisconnected };
