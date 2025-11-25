interface IconProps {
  size?: number;
  className?: string;
}

export const CheckboxCircleFill = ({ size = 20, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39758 14.6023 1.66663 9.99996 1.66663C5.39758 1.66663 1.66663 5.39758 1.66663 9.99996C1.66663 14.6023 5.39758 18.3333 9.99996 18.3333ZM14.5475 7.88088L9.16663 13.2618L5.6607 9.75588L6.83922 8.57738L9.16663 10.9048L13.369 6.70237L14.5475 7.88088Z"
      fill="#3BEF80"
    />
  </svg>
);
