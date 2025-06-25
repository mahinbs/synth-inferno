
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useIsMobile } from "@/hooks/use-mobile";

export const useHeaderEffects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleSmoothScroll = useCallback((href: string, sectionId: string) => {
    if (isHomePage && href.startsWith("/#")) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        setIsMenuOpen(false);
        return;
      }
    } else if (href.startsWith("/#")) {
      // Navigate to home page first, then scroll to section
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, 100);
      setIsMenuOpen(false);
      return;
    } else if (href === "/") {
      // Navigate to home and scroll to top
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }
  }, [isHomePage, navigate]);

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

  return {
    isMenuOpen,
    isScrolled,
    isHomePage,
    activeSection,
    handleSmoothScroll,
    closeMenu,
    toggleMenu,
    isActive
  };
};
