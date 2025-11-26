import { cn } from "@/lib/utils";

interface IconProps {
  size?: number;
  className?: string;
}

export const InformationFill = ({ size = 24, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={cn("opacity-40 hover:opacity-100 transition-opacity duration-200", className)}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667ZM7.33337 7.33337V11.3334H8.66671V7.33337H7.33337ZM7.33337 4.66671V6.00004H8.66671V4.66671H7.33337Z"
        fill="#D0D6D9"
      />
    </g>
  </svg>
);
