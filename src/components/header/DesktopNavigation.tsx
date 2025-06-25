
import { Link } from "react-router-dom";

interface MenuItem {
  name: string;
  href: string;
  section: string;
}

interface DesktopNavigationProps {
  menuItems: MenuItem[];
  isActive: (item: MenuItem) => boolean;
  isHomePage: boolean;
  onSmoothScroll: (href: string, sectionId: string) => void;
}

const DesktopNavigation = ({ menuItems, isActive, isHomePage, onSmoothScroll }: DesktopNavigationProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
      {menuItems.map(item => {
        const active = isActive(item);
        
        if (item.name === "Home") {
          return (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`transition-all duration-300 font-medium relative group ${active ? "text-slate-600" : "text-slate-500 hover:text-slate-600"}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-slate-500 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          );
        } else if (item.href.startsWith("/#")) {
          return (
            <button 
              key={item.name} 
              onClick={() => onSmoothScroll(item.href, item.section)} 
              className={`transition-all duration-300 font-medium relative group ${active ? "text-slate-600" : "text-slate-500 hover:text-slate-600"}`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-slate-500 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </button>
          );
        } else {
          return (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`transition-all duration-300 font-medium relative group ${active ? "text-slate-600" : "text-slate-500 hover:text-slate-600"}`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-slate-500 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default DesktopNavigation;
