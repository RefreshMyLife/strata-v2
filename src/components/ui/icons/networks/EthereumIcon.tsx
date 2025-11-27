import ethereumIcon from "@/assets/icons/network/ethereum.svg?url";

interface EthereumIconProps {
  className?: string;
  size?: number;
}

export function EthereumIcon({ className = "", size = 16 }: EthereumIconProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <img
        src={ethereumIcon}
        alt="Ethereum"
        className="block max-w-none size-full"
      />
    </div>
  );
}
