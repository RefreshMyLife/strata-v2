interface IconProps {
  size?: number;
  className?: string;
}

export const Star = ({ size = 24, className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M8.00007 12.1734L3.29777 14.8055L4.34799 9.51997L0.391602 5.86124L5.74296 5.22675L8.00007 0.333374L10.2571 5.22675L15.6085 5.86124L11.6521 9.51997L12.7023 14.8055L8.00007 12.1734ZM8.00007 10.6454L10.8312 12.2301L10.1989 9.04784L12.5809 6.84497L9.35901 6.46293L8.00007 3.51672L6.6411 6.46293L3.41915 6.84497L5.80121 9.04784L5.16889 12.2301L8.00007 10.6454Z"
      fill="currentColor"
    />
  </svg>
);
