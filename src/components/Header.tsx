
import { memo } from "react";
import HeaderContent from "./header/HeaderContent";
import MobileMenuOverlay from "./header/MobileMenuOverlay";
import { useHeaderEffects } from "./header/useHeaderEffects";

const Header = memo(() => {
  const {
    isMenuOpen,
    isScrolled,
    isHomePage,
    handleSmoothScroll,
    closeMenu,
    toggleMenu,
    isActive
  } = useHeaderEffects();

  const menuItems = [{
    name: "Home",
    href: "/",
    section: "home"
  }, {
    name: "About",
    href: "/#about",
    section: "about"
  }, {
    name: "Services",
    href: "/#services",
    section: "services"
  }, {
    name: "Portfolio",
    href: "/#portfolio",
    section: "portfolio"
  }, {
    name: "Why Us",
    href: "/#why-us",
    section: "why-us"
  }, {
    name: "FAQ",
    href: "/#faq",
    section: "faq"
  }, {
    name: "Contact",
    href: "/#contact",
    section: "contact"
  }];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-header' 
          : 'bg-transparent'
      }`}>
        <HeaderContent
          menuItems={menuItems}
          isActive={isActive}
          isHomePage={isHomePage}
          onSmoothScroll={handleSmoothScroll}
          isMenuOpen={isMenuOpen}
          onToggleMenu={toggleMenu}
        />
      </header>

      <MobileMenuOverlay
        isMenuOpen={isMenuOpen}
        onClose={closeMenu}
        menuItems={menuItems}
        isActive={isActive}
        isHomePage={isHomePage}
        onSmoothScroll={handleSmoothScroll}
      />
    </>
  );
});

Header.displayName = "Header";
export default Header;
