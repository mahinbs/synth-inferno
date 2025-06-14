
import { MenuItem } from "./types";
import MobileMenuItem from "./MobileMenuItem";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  isActive: (item: MenuItem) => boolean;
  isHomePage: boolean;
  onSmoothScroll: (href: string, sectionId: string) => void;
  isMobile: boolean;
}

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  menuItems, 
  isActive, 
  isHomePage, 
  onSmoothScroll,
  isMobile 
}: MobileMenuProps) => {
  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed z-40 inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={onClose} 
            aria-hidden="true" 
          />

          {/* Mobile Menu with glassmorphism */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white/20 backdrop-blur-[12px] border-l border-white/30 shadow-xl transform transition-transform duration-300 z-[999]">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/20">
                <div className="font-heading text-xl font-bold text-foreground">
                  Dee&Cee Labs
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <MobileMenuItem
                      key={item.name}
                      item={item}
                      isActive={isActive(item)}
                      isHomePage={isHomePage}
                      onSmoothScroll={onSmoothScroll}
                      onClose={onClose}
                    />
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <button 
                    onClick={() => {
                      onSmoothScroll('/#contact', 'contact');
                      onClose();
                    }} 
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
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
};

export default MobileMenu;
