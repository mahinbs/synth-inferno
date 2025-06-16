
import { X } from "lucide-react";
import { useState, memo, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./header/Logo";
import DesktopNavigation from "./header/DesktopNavigation";
import DesktopCTA from "./header/DesktopCTA";
import MobileMenuButton from "./header/MobileMenuButton";
import MobileNavigation from "./header/MobileNavigation";
import MobileCTA from "./header/MobileCTA";

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

  const isActive = useCallback((item: any) => {
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
            <Logo />
            <DesktopNavigation 
              menuItems={menuItems}
              isActive={isActive}
              isHomePage={isHomePage}
              onSmoothScroll={handleSmoothScroll}
            />
            <DesktopCTA onSmoothScroll={handleSmoothScroll} />
            <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="lg:hidden fixed z-40 inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} aria-hidden="true" />

          {/* Mobile Menu with glassmorphism */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white/20 backdrop-blur-[12px] border-l border-white/30 shadow-xl transform transition-transform duration-300 z-[999]">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/20">
                <div className="font-heading text-xl font-bold text-cyan-500">
                  Dee&Cee Labs
                </div>
                <button onClick={closeMenu} aria-label="Close menu">
                  <X className="h-6 w-6 text-cyan-500" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <MobileNavigation 
                  menuItems={menuItems}
                  isActive={isActive}
                  isHomePage={isHomePage}
                  onSmoothScroll={handleSmoothScroll}
                  onClose={closeMenu}
                />
                <MobileCTA onSmoothScroll={handleSmoothScroll} onClose={closeMenu} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
});

Header.displayName = "Header";
export default Header;
