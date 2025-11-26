interface IconProps {
  size?: number;
  height?: number;
  width?: number;
  className?: string;
}

export const ArrowFillRight = ({
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
      <path d="M6 6L5.24537e-07 12L0 0L6 6Z" fill="#D0D6D9" />
    </svg>
  );
};
