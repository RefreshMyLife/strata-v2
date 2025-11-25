interface BaseIconProps {
  className?: string;
  size?: number;
}

export function BaseIcon({ className = "", size = 16 }: BaseIconProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <img
        src="/src/assets/icons/network/base.svg"
        alt="Base"
        className="block max-w-none size-full"
      />
    </div>
  );
}
