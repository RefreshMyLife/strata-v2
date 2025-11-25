interface EthereumIconProps {
  className?: string;
  size?: number;
}

export function EthereumIcon({ className = "", size = 16 }: EthereumIconProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <img
        src="/src/assets/icons/network/ethereum.svg"
        alt="Ethereum"
        className="block max-w-none size-full"
      />
    </div>
  );
}
