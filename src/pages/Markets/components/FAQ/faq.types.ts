export interface FAQItemData {
  question: string;
  answer: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}
