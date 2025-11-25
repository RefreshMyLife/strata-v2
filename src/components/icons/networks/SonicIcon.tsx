interface SonicIconProps {
  className?: string;
  size?: number;
}

export function SonicIcon({ className = "", size = 16 }: SonicIconProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <img
        src="/src/assets/icons/network/sonic.svg"
        alt="Sonic"
        className="block max-w-none size-full"
      />
    </div>
  );
}
