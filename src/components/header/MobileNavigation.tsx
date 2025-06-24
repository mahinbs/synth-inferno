
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
              className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${active ? "text-slate-600 bg-slate-100" : "text-slate-500 hover:text-slate-600 hover:bg-slate-50"}`} 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onClose();
              }}
            >
              {item.name}
            </Link>
          );
        } else if (item.href.startsWith("/#")) {
          return (
            <button 
              key={item.name} 
              onClick={() => onSmoothScroll(item.href, item.section)} 
              className={`block w-full text-left text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${active ? "text-slate-600 bg-slate-100" : "text-slate-500 hover:text-slate-600 hover:bg-slate-50"}`}
            >
              {item.name}
            </button>
          );
        } else {
          return (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${active ? "text-slate-600 bg-slate-100" : "text-slate-500 hover:text-slate-600 hover:bg-slate-50"}`} 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onClose();
              }}
            >
              {item.name}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default MobileNavigation;
