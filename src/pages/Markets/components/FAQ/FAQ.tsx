import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonPrimary } from "@/components/ui/button/button-primary";
import { ButtonSecondary } from "@/components/ui/button/button-secondary";
import { FAQItem } from "./FAQItem";
import { FAQ_ITEMS } from "./faq.constants";
import { ArrowFillRight } from "@/components/icons";

export const FAQ = () => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <Card className="bg-[#151617] rounded-lg border-none shadow-none p-0 w-full">
      <CardContent className="flex flex-col gap-8 p-6">
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          {/* Title with highlighted "Maximize" */}
          <div className="flex items-start gap-2">
            <div className="flex items-center pb-1">
              <h2 className="font-['DM_Sans_36pt',sans-serif] text-[40px] font-semibold leading-[40px] tracking-[-0.4px] text-[#d0d6d9]">
                Deposit.
              </h2>
            </div>
            <div className="flex items-center pb-1">
              <h2 className="font-['DM_Sans_36pt',sans-serif] text-[40px] font-semibold leading-[40px] tracking-[-0.4px] text-[#d0d6d9]">
                Earn.
              </h2>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute bg-[#2c6eff] rounded bottom-[-2px] left-[-4px] w-[186px] h-[46px]" />
              <h2 className="relative font-['DM_Sans_36pt',sans-serif] text-[40px] font-semibold leading-[40px] tracking-[-0.4px] text-white">
                Maximize.
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="font-['DM_Sans_36pt',sans-serif] text-[18px] font-medium leading-[24px] tracking-[-0.18px] text-[#d0d6d9] opacity-80">
            Unlock even greater rewards by using Senior & Junior tokens
            <br />
            across partner DeFi protocols in the Strata ecosystem.
          </p>

          {/* View Opportunities Button */}
          <ButtonPrimary className="py-3.5 flex items-center justify-center self-start">
            VIEW OPPORTUNITIES
          </ButtonPrimary>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-['DM_Sans_36pt',sans-serif] text-[24px] font-semibold leading-[32px] tracking-[-0.24px] text-[#d0d6d9]">
            Everything You Need To Know
          </h3>

          {/* FAQ Items */}
          <div className="flex flex-col">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItemIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* All FAQs Button */}
          <ButtonSecondary
            className="self-start"
            rightIcon={
              <ArrowFillRight
                width={6}
                height={12}
                className="text-[#d0d6d9]"
              />
            }
          >
            ALL FAQs
          </ButtonSecondary>
        </div>
      </CardContent>
    </Card>
  );
};
