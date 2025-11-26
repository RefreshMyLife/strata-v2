interface IconProps {
  size?: number;
  className?: string;
}

export const ArrowRightLong = ({ size = 24, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.69336 10.5832H15.3067M15.3067 10.5832L10.8067 6.08317M15.3067 10.5832L10.8067 15.0832"
      stroke="#D0D6D9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
