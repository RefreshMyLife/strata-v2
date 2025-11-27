import sonicIcon from "@/assets/icons/network/sonic.svg?url";

interface SonicIconProps {
  className?: string;
  size?: number;
}

export function SonicIcon({ className = "", size = 16 }: SonicIconProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <img
        src={sonicIcon}
        alt="Sonic"
        className="block max-w-none size-full"
      />
    </div>
  );
}
