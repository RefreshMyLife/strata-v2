import {
  GitBook,
  Twitter,
  Discord,
  GitHub,
  Mirror,
} from "@/components/ui/icons/social";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:opacity-60 transition-opacity"
    >
      <p className="font-sans text-[14px] font-medium leading-5 tracking-[-0.14px] text-[#d0d6d9] opacity-40">
        {children}
      </p>
    </a>
  );
}

interface SocialIconLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialIconLink({ href, icon, label }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      className="relative shrink-0 size-5 hover:opacity-60 transition-opacity"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

interface FooterProps {
  /** Ссылки на социальные сети */
  socialLinks?: {
    gitbook?: string;
    twitter?: string;
    discord?: string;
    github?: string;
    mirror?: string;
  };
  /** Ссылка на Terms of Service */
  termsOfServiceUrl?: string;
  /** Ссылка на Privacy Policy */
  privacyPolicyUrl?: string;
  /** Дополнительные классы */
  className?: string;
}

export function Footer({
  socialLinks = {},
  termsOfServiceUrl = "#",
  privacyPolicyUrl = "#",
  className = "",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-[#0c0c0c] border-[#272a30] border-t border-solid box-border content-stretch flex items-center justify-between p-[8px] relative w-full ${className}`}
    >
      {/* Левая часть: Copyright и ссылки */}
      <div className="content-stretch flex gap-8 items-center relative shrink-0">
        <p className="font-sans text-[14px] font-medium leading-5 tracking-[-0.14px] text-[#d0d6d9]">
          © {currentYear} Strata Labs
        </p>
        <FooterLink href={termsOfServiceUrl}>Terms of Service</FooterLink>
        <FooterLink href={privacyPolicyUrl}>Privacy Policy</FooterLink>
      </div>

      {/* Правая часть: Социальные иконки */}
      <div className="content-stretch flex gap-4 items-center relative shrink-0">
        {socialLinks.gitbook && (
          <SocialIconLink
            href={socialLinks.gitbook}
            icon={<GitBook size={20} className="text-[#d0d6d9]" />}
            label="GitBook"
          />
        )}
        {socialLinks.twitter && (
          <SocialIconLink
            href={socialLinks.twitter}
            icon={<Twitter size={20} className="text-[#d0d6d9]" />}
            label="Twitter"
          />
        )}
        {socialLinks.discord && (
          <SocialIconLink
            href={socialLinks.discord}
            icon={<Discord size={20} className="text-[#d0d6d9]" />}
            label="Discord"
          />
        )}
        {socialLinks.github && (
          <SocialIconLink
            href={socialLinks.github}
            icon={<GitHub size={20} className="text-[#d0d6d9]" />}
            label="GitHub"
          />
        )}
        {socialLinks.mirror && (
          <SocialIconLink
            href={socialLinks.mirror}
            icon={<Mirror size={20} className="text-[#d0d6d9]" />}
            label="Mirror"
          />
        )}
      </div>
    </footer>
  );
}
