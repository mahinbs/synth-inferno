
import { Link } from "react-router-dom";

interface MenuItem {
  name: string;
  href: string;
  section: string;
}

interface MobileNavigationProps {
  menuItems: MenuItem[];
  isActive: (item: MenuItem) => boolean;
  isHomePage: boolean;
  onSmoothScroll: (href: string, sectionId: string) => void;
  onClose: () => void;
}

const MobileNavigation = ({ menuItems, isActive, isHomePage, onSmoothScroll, onClose }: MobileNavigationProps) => {
  return (
    <div className="space-y-4">
      {menuItems.map(item => {
        const active = isActive(item);
        if (item.name === "Home") {
          return (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${active ? "text-cyan-500 bg-cyan-500/10" : "text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5"}`} 
              onClick={onClose}
            >
              {item.name}
            </Link>
          );
        } else if (isHomePage && item.href.startsWith("/#")) {
          return (
            <button 
              key={item.name} 
              onClick={() => onSmoothScroll(item.href, item.section)} 
              className={`block w-full text-left text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${active ? "text-cyan-500 bg-cyan-500/10" : "text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5"}`}
            >
              {item.name}
            </button>
          );
        } else {
          return (
            <a 
              key={item.name} 
              href={item.href} 
              className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${active ? "text-cyan-500 bg-cyan-500/10" : "text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5"}`} 
              onClick={onClose}
            >
              {item.name}
            </a>
          );
        }
      })}
    </div>
  );
};

export default MobileNavigation;
