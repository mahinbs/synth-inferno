
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
      
      {/* Main container with black glassmorphism effects */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-2xl border border-black/30 rounded-xl shadow-2xl shadow-black/20">
        <div className="flex justify-between items-center h-20 lg:h-24 relative overflow-hidden group">
          {/* Black glassmorphism background layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-black/10 backdrop-blur-3xl opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out" />
          
          {/* Animated dark gradient border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800/20 via-gray-900/20 to-black/20 opacity-0 group-hover:opacity-30 transition-all duration-700 ease-out animate-gradient" />
          
          {/* Floating particles effect with dark theme */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-500/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-gray-600/25 rounded-full animate-float" style={{ animationDelay: '4s' }} />
          </div>

          {/* Logo section with enhanced spacing and effects */}
          <div className="flex items-center flex-shrink-0 z-10 relative">
            <div className="p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-black/30 shadow-lg hover:bg-black/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Logo />
            </div>
          </div>

          {/* Desktop Navigation with advanced positioning and effects */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8 relative z-10">
            <div className="bg-black/15 backdrop-blur-md rounded-full px-6 py-2 border border-black/20 shadow-lg hover:bg-black/25 transition-all duration-300 hover:shadow-xl">
              <DesktopNavigation 
                menuItems={menuItems} 
                isActive={isActive} 
                isHomePage={isHomePage} 
                onSmoothScroll={onSmoothScroll} 
              />
            </div>
          </div>

          {/* CTA and Mobile Menu with enhanced styling and effects */}
          <div className="flex items-center space-x-4 z-10 relative">
            <div className="transform hover:scale-105 transition-all duration-300 hover:drop-shadow-lg">
              <DesktopCTA onSmoothScroll={onSmoothScroll} />
            </div>
            <div className="p-1 rounded-lg bg-black/20 backdrop-blur-sm border border-black/30 shadow-lg hover:bg-black/30 transition-all duration-300 hover:scale-105">
              <MobileMenuButton isOpen={isMenuOpen} onToggle={onToggleMenu} />
            </div>
          </div>

          {/* Dynamic dark glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800/10 via-gray-900/10 to-black/10 opacity-0 group-hover:opacity-50 transition-all duration-1000 ease-out blur-xl" />
        </div>
      </div>

      {/* Advanced bottom border with animated gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent animate-glow-pulse" />
    </nav>
  );
});

HeaderContent.displayName = "HeaderContent";
export default HeaderContent;
