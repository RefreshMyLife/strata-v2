interface IconProps {
  size?: number;
  className?: string;
}

export const ArrowLeftLong = ({ size = 24, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3066 10.5832H4.69325M4.69325 10.5832L9.19325 6.08317M4.69325 10.5832L9.19325 15.0832"
      stroke="#D0D6D9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
