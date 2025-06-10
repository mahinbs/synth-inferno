
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, memo, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMobile = useIsMobile();
  const activeSection = useScrollSpy({
    sectionIds: ["home", "about", "services", "why-us", "faq", "contact"],
    rootMargin: "-20% 0px -80% 0px"
  });

  // Handle scroll effect
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

  // Dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const menuItems = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Services", href: "/#services", section: "services" },
    { name: "Why Us", href: "/#why-us", section: "why-us" },
    { name: "FAQ", href: "/#faq", section: "faq" },
    { name: "Contact", href: "/#contact", section: "contact" }
  ];

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
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50 relative">
              <div className="font-heading text-2xl font-bold brand-gradient-text">
                Dee&Cee Labs
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {menuItems.map(item => {
                const active = isActive(item);
                
                if (item.name === "Home") {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`transition-all duration-300 font-medium relative group ${
                        active ? "text-brand-primary" : "text-foreground hover:text-brand-primary"
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </Link>
                  );
                } else if (isHomePage && item.href.startsWith("/#")) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleSmoothScroll(item.href, item.section)}
                      className={`transition-all duration-300 font-medium relative group ${
                        active ? "text-brand-primary" : "text-foreground hover:text-brand-primary"
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </button>
                  );
                } else {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`transition-all duration-300 font-medium relative group ${
                        active ? "text-brand-primary" : "text-foreground hover:text-brand-primary"
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </a>
                  );
                }
              })}
            </div>

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground" />
                )}
              </button>
              <button 
                onClick={() => handleSmoothScroll('/#contact', 'contact')}
                className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-primary/90 transition-colors duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground" />
                )}
              </button>
              <button 
                className="p-2 z-50 relative" 
                onClick={toggleMenu} 
                aria-label="Toggle menu" 
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed z-40 inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={closeMenu} 
            aria-hidden="true" 
          />

          {/* Mobile Menu */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-background border-l border-border shadow-xl transform transition-transform duration-300 z-[999]">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-border">
                <div className="font-heading text-xl font-bold brand-gradient-text">
                  Dee&Cee Labs
                </div>
                <button onClick={closeMenu} aria-label="Close menu">
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {menuItems.map(item => {
                    const active = isActive(item);
                    
                    if (item.name === "Home") {
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                            active 
                              ? "text-brand-primary bg-brand-primary/10" 
                              : "text-foreground hover:text-brand-primary hover:bg-accent"
                          }`}
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      );
                    } else if (isHomePage && item.href.startsWith("/#")) {
                      return (
                        <button
                          key={item.name}
                          onClick={() => handleSmoothScroll(item.href, item.section)}
                          className={`block w-full text-left text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                            active 
                              ? "text-brand-primary bg-brand-primary/10" 
                              : "text-foreground hover:text-brand-primary hover:bg-accent"
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    } else {
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                            active 
                              ? "text-brand-primary bg-brand-primary/10" 
                              : "text-foreground hover:text-brand-primary hover:bg-accent"
                          }`}
                          onClick={closeMenu}
                        >
                          {item.name}
                        </a>
                      );
                    }
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 pt-8 border-t border-border">
                  <button 
                    onClick={() => {
                      handleSmoothScroll('/#contact', 'contact');
                      closeMenu();
                    }}
                    className="w-full bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-primary/90 transition-colors duration-300"
                  >
                    Get Started
                  </button>
                </div>
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
