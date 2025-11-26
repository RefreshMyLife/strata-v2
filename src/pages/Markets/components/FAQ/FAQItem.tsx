import { cn } from "@/lib/utils";
import type { FAQItemProps } from "./faq.types";
import { ArrowRight } from "@/components/ui/icons";

export const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) => {
  return (
    <div className="border-b border-[#272a30] py-3.5">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-8 text-left group"
      >
        <p className="font-['DM_Sans_36pt',sans-serif] text-[14px] font-medium leading-5 tracking-[-0.14px] text-[#d0d6d9] flex-1">
          {question}
        </p>
        <div
          className={cn(
            "opacity-40 transition-all duration-300 ease-in-out shrink-0 group-hover:opacity-60",
            isOpen && "rotate-90 opacity-100"
          )}
        >
          <ArrowRight width={8} height={13} className="text-[#d0d6d9]" />
        </div>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-2 font-['DM_Sans_36pt',sans-serif] text-[14px] font-normal leading-5 tracking-[-0.14px] text-[#d0d6d9] opacity-70">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};
