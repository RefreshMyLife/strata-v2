import { cn } from "@/lib/utils";
import { ChevronRight } from "@/components/ui/icons/ChevronRight";
import { TVLDisplay } from "../TVLDisplay";
import { Link } from "react-router-dom";
import {
  Book,
  CheckBox,
  Discord,
  Eye,
  GitBook,
  GitHub,
  Markets,
  Mirror,
  NewsPaper,
  PieChart,
  Questionnaire,
  Star,
  Twitter,
} from "@/components/ui/icons";

interface DropDownBurgerMenu {
  activeSection?: string;
  onClose: () => void;
}

export function DropDownBurgerMenu({ onClose }: DropDownBurgerMenu) {
  const navigationItems = [
    { id: "markets", label: "MARKETS", icon: Markets, href: "/markets" },
    { id: "portfolio", label: "PORTFOLIO", icon: PieChart, href: "/portfolio" },
    { id: "favorites", label: "FAVORITES", icon: Star, href: "/favorites" },
  ];

  const menuItems = [
    { id: "docs", label: "DOCUMENTATION", icon: Book, href: "#" },
    { id: "analytics", label: "ANALYTICS", icon: Eye, href: "#" },
    { id: "audits", label: "AUDITS", icon: CheckBox, href: "#" },
    { id: "blog", label: "BLOG", icon: NewsPaper, href: "#" },
    { id: "faq", label: "FAQ", icon: Questionnaire, href: "#" },
  ];

  return (
    <>
      {/* Backdrop для закрытия меню при клике вне его */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dropdown Menu */}
      <div className="absolute min-h-[90vh] sm:min-h-full  flex  flex-col justify-between left-0 right-0 top-[68px] z-50 w-full md:left-auto md:right-4 md:w-60 border-t md:border border-border md:rounded-xl bg-background md:bg-card shadow-lg">
        {/* TVL Display - показывается на sm (скрыто на lg+ где оно в Header) */}
        <div>
          <div className="lg:hidden">
            <TVLDisplay value="$124.5M" className="w-full rounded-none" />
          </div>

          {/* Divider after TVL */}
          <div className="h-px bg-border lg:hidden" />

          {/* Navigation Items (Markets, Portfolio, Favorites) */}
          <div className=" px-3 py-1 md:p-1 md:hidden">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "flex items-center justify-between  py-4 md:px-3.5 md:h-12 md:py-0 rounded-[4px] md:rounded-xl transition-colors group"
                )}
                onClick={onClose}
              >
                <div className="flex items-center gap-3 md:gap-3">
                  <item.icon className="size-6 md:size-5 text-[#d0d6d9] group-hover:text-foreground transition-colors" />
                  <span className="font-mono text-[20px] md:text-[14px] font-medium leading-7 md:leading-normal tracking-[-0.4px] md:tracking-[-0.28px] text-[#d0d6d9] group-hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </div>
                <ChevronRight
                  size={7}
                  className="text-[#949494] opacity-40 md:opacity-0 md:group-hover:opacity-100 transition-opacity -rotate-90 md:rotate-0"
                />
              </Link>
            ))}
          </div>

          {/* Divider between navigation and menu items */}
          <div className="h-px bg-border md:hidden" />

          {/* Menu Items */}
          <div className="px-0 py-0 md:p-1">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-4 py-4 md:px-3.5 md:h-12 md:py-0 rounded-[4px] md:rounded-xl transition-colors group",
                  "hover:bg-accent/50"
                )}
                onClick={onClose}
              >
                <div className="flex items-center gap-3 md:gap-3">
                  <item.icon className="size-6 md:size-5 text-[#d0d6d9] group-hover:text-foreground transition-colors" />
                  <span className="font-mono text-[20px] md:text-[14px] font-medium leading-7 md:leading-normal tracking-[-0.4px] md:tracking-[-0.28px] text-[#d0d6d9] group-hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </div>
                <ChevronRight
                  size={7}
                  className="text-[#949494] opacity-40 md:opacity-0 md:group-hover:opacity-100 transition-opacity -rotate-90 md:rotate-0"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Social Links - Original Layout for Desktop */}
        <div className="hidden md:flex h-12 items-center justify-center gap-[25px] px-4">
          <a
            href="https://discord.gg/strata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#949494] hover:text-foreground transition-colors"
            aria-label="Discord"
          >
            <Discord size={20} />
          </a>
          <a
            href="https://twitter.com/strata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#949494] hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com/strata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#949494] hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GitHub size={20} />
          </a>
          <a
            href="https://gitbook.com/strata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#949494] hover:text-foreground transition-colors"
            aria-label="GitBook"
          >
            <GitBook size={20} />
          </a>
          <a
            href="https://mirror.xyz/strata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#949494] hover:text-foreground transition-colors"
            aria-label="Mirror"
          >
            <Mirror size={20} />
          </a>
        </div>

        <div>
          <div className="flex w-full md:hidden">
            <a
              href="https://gitbook.com/strata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-[78px] border-t border-r border-border opacity-40 hover:opacity-100 transition-opacity"
              aria-label="GitBook"
            >
              <GitBook size={32} />
            </a>
            <a
              href="https://twitter.com/strata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-[78px] border-t border-r border-border opacity-40 hover:opacity-100 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter size={32} />
            </a>
            <a
              href="https://discord.gg/strata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-[78px] border-t border-r border-border opacity-40 hover:opacity-100 transition-opacity"
              aria-label="Discord"
            >
              <Discord size={32} />
            </a>
            <a
              href="https://github.com/strata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-[78px] border-t border-r border-border opacity-40 hover:opacity-100 transition-opacity"
              aria-label="GitHub"
            >
              <GitHub size={32} />
            </a>
            <a
              href="https://mirror.xyz/strata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-[78px] border-t border-border opacity-40 hover:opacity-100 transition-opacity"
              aria-label="Mirror"
            >
              <Mirror size={32} />
            </a>
          </div>

          {/* Footer - Mobile Only */}
          <div className="md:hidden border-t border-border bg-background px-2 py-3 w-full">
            <div className="flex items-center gap-3 text-[12px] font-medium leading-4 tracking-[-0.12px]">
              <span className="text-foreground whitespace-nowrap">
                © 2025 Strata Labs
              </span>
              <a
                href="#"
                className="text-foreground opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-foreground opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
