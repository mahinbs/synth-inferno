
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuButton = ({ isOpen, onToggle }: MobileMenuButtonProps) => {
  return (
    <div className="lg:hidden">
      <button 
        className="p-2 z-50 relative" 
        onClick={onToggle} 
        aria-label="Toggle menu" 
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>
    </div>
  );
};

export default MobileMenuButton;
