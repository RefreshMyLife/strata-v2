import { ExternalLink as ExternalLinkIcon } from "@/components/ui/icons";

interface ExternalLinkProps {
  label: string;
  href?: string;
}

/**
 * Компонент внешней ссылки с иконкой
 * Используется для ссылок на внешние ресурсы (Etherscan и т.д.)
 */
export function ExternalLink({ label, href = "#" }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-1 items-center opacity-60 hover:opacity-100 transition-opacity"
    >
      <p className="mono text-sm leading-5 tracking-[-0.28px] text-[#d0d6d9]">
        {label}
      </p>
      <ExternalLinkIcon size={16} />
    </a>
  );
}
