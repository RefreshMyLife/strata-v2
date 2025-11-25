interface IconProps {
  size?: number;
  height?: number;
  className?: string;
}

export const ChevronRight = ({
  size = 24,
  height,
  className = "",
}: IconProps) => {
  const finalSize = height || size;

  return (
    <svg
      width={size}
      height={finalSize}
      className={className}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.79993 5.39986L4.13326 7.39993C3.80364 7.64715 3.33325 7.41196 3.33325 6.99993L3.33325 2.99993C3.33325 2.58791 3.80363 2.35272 4.13325 2.59993L6.79991 4.59987C7.06658 4.79986 7.06659 5.19986 6.79993 5.39986Z"
        fill="currentColor"
      />
    </svg>
  );
};
