
import { memo } from "react";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import DesktopCTA from "./DesktopCTA";
import MobileMenuButton from "./MobileMenuButton";
import { MenuItem } from "./types";

interface HeaderContentProps {
  menuItems: MenuItem[];
  isActive: (item: MenuItem) => boolean;
  isHomePage: boolean;
  onSmoothScroll: (href: string, sectionId: string) => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const HeaderContent = memo(({
  menuItems,
  isActive,
  isHomePage,
  onSmoothScroll,
  isMenuOpen,
  onToggleMenu
}: HeaderContentProps) => {
  return (
    <nav className="relative">
      {/* Advanced backdrop with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-900/5" />
      
      {/* Main container with advanced layout */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo section with enhanced spacing */}
          <div className="flex items-center flex-shrink-0 z-10">
            <Logo />
          </div>

          {/* Desktop Navigation with advanced positioning */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <DesktopNavigation 
              menuItems={menuItems}
              isActive={isActive}
              isHomePage={isHomePage}
              onSmoothScroll={onSmoothScroll}
            />
          </div>

          {/* CTA and Mobile Menu with enhanced styling */}
          <div className="flex items-center space-x-4 z-10">
            <DesktopCTA onSmoothScroll={onSmoothScroll} />
            <MobileMenuButton isOpen={isMenuOpen} onToggle={onToggleMenu} />
          </div>
        </div>
      </div>

      {/* Advanced bottom border with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
    </nav>
  );
});

HeaderContent.displayName = "HeaderContent";
export default HeaderContent;
