interface IconProps {
  size?: number;
  className?: string;
}

export const Mirror = ({ size = 20, className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 12 16"
    fill="none"
  >
    <path
      d="M5.99414 0.416992C9.07449 0.416992 11.5713 2.91379 11.5713 5.99414V15.5674H0.416992V5.99414C0.416992 2.91379 2.91379 0.416992 5.99414 0.416992Z"
      fill="url(#paint0_linear_12875_1881)"
      stroke="#D0D6D9"
      stroke-width="0.833333"
    />
    <defs>
      <linearGradient
        id="paint0_linear_12875_1881"
        x1="2.62244"
        y1="1.52232"
        x2="12.1954"
        y2="15.8459"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#0F1114" />
      </linearGradient>
    </defs>
  </svg>
);
