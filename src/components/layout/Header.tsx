import { ConnectWalletButton } from "@/components/web3/ConnectWalletButton";
import { Markets } from "@/components/icons/header/Markets";
import { Star } from "@/components/icons/header/Star";
import { PieChart } from "@/components/icons/header/PieChart";
import { ButtonBurgerMenu } from "@/components/ui/button/button-burger-menu";
import { Logo } from "@/components/ui/Logo";
import { TVLDisplay } from "@/components/ui/TVLDisplay";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DropDownBurgerMenu } from "../ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Определение активного раздела по pathname
  const activeSection =
    location.pathname === "/" ? "home" : location.pathname.slice(1); // убираем первый слеш

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background ">
      <div className="mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex h-[68px] items-center justify-between gap-2 sm:gap-6">
          {/* Left Section: Logo + Navigation */}
          <div className="flex items-center gap-3 sm:gap-8 min-w-0 flex-shrink">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <Logo className="h-7 w-auto text-foreground" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/markets"
                className={cn(
                  "flex items-center gap-2 h-[68px] border-b-2 transition-colors",
                  "font-mono text-[14px] font-medium tracking-[-0.28px] uppercase",
                  activeSection === "markets"
                    ? "border-primary text-foreground"
                    : "border-transparent text-[#949494] hover:text-foreground"
                )}
              >
                <Markets className="size-4" />
                <span>Markets</span>
              </Link>
              <Link
                to="/portfolio"
                className={cn(
                  "flex items-center gap-2 h-[68px] border-b-2 transition-colors",
                  "font-mono text-[14px] font-medium tracking-[-0.28px] uppercase",
                  activeSection === "portfolio"
                    ? "border-primary text-foreground"
                    : "border-transparent text-[#949494] hover:text-foreground"
                )}
              >
                <PieChart className="size-4" />
                <span>Portfolio</span>
              </Link>
              <Link
                to="/favorites"
                className={cn(
                  "flex items-center gap-2 h-[68px] border-b-2 transition-colors",
                  "font-mono text-[14px] font-medium tracking-[-0.28px] uppercase",
                  activeSection === "favorites"
                    ? "border-primary text-foreground"
                    : "border-transparent text-[#949494] hover:text-foreground"
                )}
              >
                <Star className="size-4" />
                <span>Favorites</span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="hidden lg:block">
              <TVLDisplay value="$124.5M" />
            </div>

            <div>
              <ConnectWalletButton />
            </div>
            <ButtonBurgerMenu
              isActive={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        {isMobileMenuOpen && (
          <DropDownBurgerMenu
            activeSection={activeSection}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
