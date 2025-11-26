interface HyperliquidIconProps {
  className?: string;
  size?: number;
}

export function HyperliquidIcon({ className = "", size = 16 }: HyperliquidIconProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <img
        src="/src/assets/icons/network/hyperliquid.svg"
        alt="Hyperliquid"
        className="block max-w-none size-full"
      />
    </div>
  );
}
