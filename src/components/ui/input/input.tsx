import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  usdValue?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", usdValue = "$0.00", ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const getBorderColor = () => {
      if (isFocused) return "border-[#2c6eff]";
      if (isHovered) return "border-[#32363d]";
      return "border-[#272a30]";
    };

    return (
      <div
        className={cn(
          "relative w-[285px] h-[140px] bg-[#151617] border border-solid rounded-[4px] flex flex-col items-end justify-between p-[24px] gap-[32px] transition-colors",
          getBorderColor(),
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-end w-full">
          <p className="font-['DM_Mono',monospace] font-medium text-[14px] leading-[20px] tracking-[-0.28px] text-[#d0d6d9] opacity-60 text-right">
            {usdValue}
          </p>
        </div>
        <input
          type={type}
          className={cn(
            "w-full bg-transparent border-none outline-none",
            "font-['DM_Mono',monospace] font-medium text-[48px] leading-[48px] tracking-[-0.96px]",
            "text-[#d0d6d9] text-right",
            "placeholder:text-[#d0d6d9]"
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="0"
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
