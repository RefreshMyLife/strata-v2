interface IconProps {
  size?: number;
  className?: string;
}

export const ChevronDown = ({ size = 24, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    className={className}
  >
    <path
      d="M4.76675 6.6333L2.76668 3.96663C2.51946 3.63701 2.75465 3.16663 3.16668 3.16663H7.16668C7.5787 3.16663 7.81389 3.637 7.56668 3.96662L5.56674 6.63329C5.36675 6.89996 4.96675 6.89996 4.76675 6.6333Z"
      fill="#90A0AC"
      fill-opacity="0.8"
    />
  </svg>
);
