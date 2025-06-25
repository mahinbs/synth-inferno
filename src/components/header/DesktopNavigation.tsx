
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
  const handleItemClick = (item: MenuItem) => {
    console.log(`Desktop Navigation - Clicked: ${item.name}, href: ${item.href}, section: ${item.section}`);
    
    if (item.name === "Home") {
      // For home, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.href.startsWith("/#")) {
      // For section links, use the smooth scroll function
      onSmoothScroll(item.href, item.section);
    }
  };

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
              onClick={() => handleItemClick(item)}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-slate-500 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          );
        } else if (item.href.startsWith("/#")) {
          return (
            <button 
              key={item.name} 
              onClick={() => handleItemClick(item)}
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
