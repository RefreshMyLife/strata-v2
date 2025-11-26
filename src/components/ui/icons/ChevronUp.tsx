interface IconProps {
  size?: number;
  className?: string;
}

export const ChevronUp = ({ size = 24, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.76675 3.36662L2.76668 6.03329C2.51946 6.3629 2.75465 6.83329 3.16668 6.83329H7.16668C7.5787 6.83329 7.81389 6.36292 7.56668 6.0333L5.56674 3.36663C5.36675 3.09996 4.96675 3.09996 4.76675 3.36662Z"
      fill="#90A0AC"
      fill-opacity="0.8"
    />
  </svg>
);
