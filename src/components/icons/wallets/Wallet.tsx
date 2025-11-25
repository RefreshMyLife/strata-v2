export function Wallet({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.66699 5.83333V14.1667C1.66699 15.5474 2.78628 16.6667 4.16699 16.6667H15.8337C17.2144 16.6667 18.3337 15.5474 18.3337 14.1667V7.5C18.3337 6.11929 17.2144 5 15.8337 5H4.16699C2.78628 5 1.66699 3.88071 1.66699 2.5V5.83333ZM1.66699 5.83333C1.66699 4.45262 2.78628 3.33333 4.16699 3.33333H13.3337"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.167" cy="11.6667" r="1.25" fill="currentColor" />
    </svg>
  );
}
