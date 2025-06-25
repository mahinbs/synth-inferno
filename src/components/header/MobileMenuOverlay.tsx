
import { memo } from "react";
import { X } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import MobileCTA from "./MobileCTA";
import { MenuItem } from "./types";

interface MobileMenuOverlayProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  isActive: (item: MenuItem) => boolean;
  isHomePage: boolean;
  onSmoothScroll: (href: string, sectionId: string) => void;
}

const MobileMenuOverlay = memo(({
  isMenuOpen,
  onClose,
  menuItems,
  isActive,
  isHomePage,
  onSmoothScroll
}: MobileMenuOverlayProps) => {
  if (!isMenuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="lg:hidden fixed z-40 inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Mobile Menu with glassmorphism */}
      <div className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm glass-content border-l border-white/30 shadow-xl transform transition-transform duration-300 z-[999]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/20">
            <div className="font-heading text-xl font-bold text-slate-600">
              Dee&Cee Labs
            </div>
            <button onClick={onClose} aria-label="Close menu">
              <X className="h-6 w-6 text-slate-600" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-6">
            <MobileNavigation 
              menuItems={menuItems}
              isActive={isActive}
              isHomePage={isHomePage}
              onSmoothScroll={onSmoothScroll}
              onClose={onClose}
            />
            <MobileCTA onSmoothScroll={onSmoothScroll} onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
});

MobileMenuOverlay.displayName = "MobileMenuOverlay";
export default MobileMenuOverlay;
