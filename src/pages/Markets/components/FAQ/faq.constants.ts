import type { FAQItemData } from "./faq.types";

export const FAQ_ITEMS: FAQItemData[] = [
  {
    question: "What's the difference between Senior and Junior tranches?",
    answer:
      "Senior tranches have priority in earning yields and recovering principal, while Junior tranches take on more risk but may earn higher returns.",
  },
  {
    question: "How is the yield (7D APY) generated?",
    answer:
      "The yield is generated through various DeFi strategies including lending, liquidity provision, and yield farming across our partner protocols.",
  },
  {
    question: "Is my deposit safe? What are the risks?",
    answer:
      "Your deposits are protected by smart contract audits and insurance mechanisms. However, DeFi carries inherent risks including smart contract vulnerabilities and market volatility.",
  },
  {
    question: "Can I withdraw anytime?",
    answer:
      "Yes, you can withdraw your funds at any time. However, please note that there may be a short processing period depending on network conditions.",
  },
  {
    question: "What happens to my rewards? Do they auto-compound?",
    answer:
      "Yes, your rewards automatically compound, meaning they are reinvested to generate additional yields without any action required from you.",
  },
];
