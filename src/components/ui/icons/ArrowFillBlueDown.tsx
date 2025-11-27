interface IconProps {
  size?: number;
  height?: number;
  width?: number;
  className?: string;
}

export const ArrowFillBlueDown = ({
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
      <path
        d="M4.66663 6.66675L7.99996 11.1112L11.3333 6.66675H4.66663Z"
        fill="#2C6EFF"
      />
    </svg>
  );
};
