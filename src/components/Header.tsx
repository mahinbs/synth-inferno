
import { useState, memo, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useIsMobile } from "@/hooks/use-mobile";
import DesktopMenu from "./header/DesktopMenu";
import MobileMenu from "./header/MobileMenu";
import MobileMenuButton from "./header/MobileMenuButton";
import { MenuItem } from "./header/types";

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMobile = useIsMobile();
  
  const activeSection = useScrollSpy({
    sectionIds: ["home", "about", "services", "portfolio", "why-us", "faq", "contact"],
    rootMargin: "-20% 0px -80% 0px"
  });

  // Handle scroll effect with glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isMobile]);

  const menuItems: MenuItem[] = [{
    name: "Home",
    href: "/",
    section: "home"
  }, {
    name: "About",
    href: "/#about",
    section: "about"
  }, {
    name: "Services",
    href: "/services",
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

  const handleSmoothScroll = useCallback((href: string, sectionId: string) => {
    if (isHomePage && href.startsWith("/#")) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
        setIsMenuOpen(false);
        return;
      }
    }
  }, [isHomePage]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const isActive = useCallback((item: MenuItem) => {
    if (item.name === "Home") {
      return location.pathname === "/" && (activeSection === "home" || !activeSection);
    }
    if (isHomePage && item.href.startsWith("/#")) {
      return activeSection === item.section;
    }
    return location.pathname === item.href;
  }, [isHomePage, activeSection, location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-[12px] border-b border-white/30 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50 relative">
              <div className="font-heading text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                Dee&Cee Labs
              </div>
            </Link>

            {/* Desktop Menu */}
            <DesktopMenu
              menuItems={menuItems}
              isActive={isActive}
              isHomePage={isHomePage}
              onSmoothScroll={handleSmoothScroll}
            />

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <button onClick={() => handleSmoothScroll('/#contact', 'contact')} className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        menuItems={menuItems}
        isActive={isActive}
        isHomePage={isHomePage}
        onSmoothScroll={handleSmoothScroll}
        isMobile={isMobile}
      />
    </>
  );
});

Header.displayName = "Header";
export default Header;
