import { useState } from "react";
import { useDisconnect, useChainId } from "wagmi";
import { Copy, ExternalLink, Power } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu";
import { toast } from "@/lib/toast";
import { ButtonConnectWallet } from "@/components/ui/button/";
import { cn } from "@/lib/utils";

interface WalletMenuProps {
  address: `0x${string}`;
}

export function WalletMenu({ address }: WalletMenuProps) {
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const [isOpen, setIsOpen] = useState(false);

  // Функция для сокращения адреса: 0x1234...5678
  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // Копирование адреса в буфер обмена
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      toast.success("Address copied to clipboard");
      setIsOpen(false);
    } catch {
      toast.error("Failed to copy address");
    }
  };

  // Получение URL для explorer в зависимости от сети
  const getExplorerUrl = () => {
    const explorers: Record<number, string> = {
      1: "https://etherscan.io",
      137: "https://polygonscan.com",
      42161: "https://arbiscan.io",
      8453: "https://basescan.org",
      10: "https://optimistic.etherscan.io",
    };
    return explorers[chainId] || "https://etherscan.io";
  };

  const openInExplorer = () => {
    window.open(`${getExplorerUrl()}/address/${address}`, "_blank");
    setIsOpen(false);
  };

  const handleDisconnect = () => {
    disconnect();
    toast.info("Wallet disconnected");
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <ButtonConnectWallet
          connected={true}
          address={shortenAddress(address).toUpperCase()}
          isDropdownOpen={isOpen}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-[240px] bg-card border-border rounded-[8px] p-1 shadow-lg"
      >
        <DropdownMenuItem
          onClick={copyAddress}
          className={cn(
            "flex items-center justify-between h-[48px] px-[14px] rounded-[4px] transition-colors group cursor-pointer",
            "hover:bg-[#1c1e1f] focus:bg-[#1c1e1f]"
          )}
        >
          <span className="font-mono text-[14px] font-medium tracking-[-0.28px] text-[#949494] group-hover:text-foreground transition-colors uppercase">
            Copy Wallet
          </span>
          <Copy className="size-[18px] text-[#949494] group-hover:text-foreground transition-colors" />
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={openInExplorer}
          className={cn(
            "flex items-center justify-between h-[48px] px-[14px] rounded-[4px] transition-colors group cursor-pointer",
            "hover:bg-[#1c1e1f] focus:bg-[#1c1e1f]"
          )}
        >
          <span className="font-mono text-[14px] font-medium tracking-[-0.28px] text-[#949494] group-hover:text-foreground transition-colors uppercase">
            View Etherscan
          </span>
          <ExternalLink className="size-[18px] text-[#949494] group-hover:text-foreground transition-colors" />
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleDisconnect}
          className={cn(
            "flex items-center justify-between border-t border-border h-[48px] px-[14px] rounded-[4px] transition-colors group cursor-pointer",
            "hover:bg-[#1c1e1f] focus:bg-[#1c1e1f]"
          )}
        >
          <span className="font-mono text-[14px] font-medium tracking-[-0.28px] text-[#949494] group-hover:text-foreground transition-colors uppercase">
            Disconnect Wallet
          </span>
          <Power className="size-[18px] text-[#949494] group-hover:text-foreground transition-colors" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
