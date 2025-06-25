
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
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <Logo />
        <DesktopNavigation 
          menuItems={menuItems}
          isActive={isActive}
          isHomePage={isHomePage}
          onSmoothScroll={onSmoothScroll}
        />
        <DesktopCTA onSmoothScroll={onSmoothScroll} />
        <MobileMenuButton isOpen={isMenuOpen} onToggle={onToggleMenu} />
      </div>
    </nav>
  );
});

HeaderContent.displayName = "HeaderContent";
export default HeaderContent;
