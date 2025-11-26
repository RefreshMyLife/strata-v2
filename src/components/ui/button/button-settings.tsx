import * as React from "react";
import { cn } from "@/lib/utils";
import { Settings } from "@/components/ui/icons/Settings";

function ButtonSettings({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button-settings"
      className={cn(
        // Базовые стили
        "inline-flex items-center justify-center  py-[14px] w-[48px] rounded-[4px]",
        "transition-all",
        // Default состояние
        "bg-[#1e2021]",
        // Hover состояние
        "hover:bg-[#252829]",
        // Focus состояние
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // Disabled состояние
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <Settings
        size={20}
        className={cn(
          "text-[#d0d6d9] transition-opacity",
          "opacity-60 hover:opacity-100"
        )}
      />
    </button>
  );
}

export { ButtonSettings };
