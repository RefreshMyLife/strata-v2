interface IconProps {
  size?: number;
  height?: number;
  width?: number;
  className?: string;
}

export const ArrowFillDown = ({
  size = 24,
  height,
  width,
  className = "",
}: IconProps) => {
  const finalHeight = height || size;
  const finalWidth = width || size;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      className={className}
      viewBox={`0 0 ${finalWidth} ${finalHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.33333 3.33333L0 0H6.66667L3.33333 3.33333Z" fill="#D0D6D9" />
    </svg>
  );
};
