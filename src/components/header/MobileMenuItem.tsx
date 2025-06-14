
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuItemProps } from "./types";

const MobileMenuItem = ({ item, isActive, isHomePage, onSmoothScroll, onClose }: MenuItemProps) => {
  const location = useLocation();
  
  const baseClasses = "block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300";
  const activeClasses = isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-white/10";

  // For Home navigation
  if (item.name === "Home") {
    return (
      <Link
        to={item.href}
        className={`${baseClasses} ${activeClasses}`}
        onClick={onClose}
      >
        {item.name}
      </Link>
    );
  }

  // For Services page
  if (item.name === "Services") {
    return (
      <Link
        to={item.href}
        className={`${baseClasses} ${activeClasses}`}
        onClick={onClose}
      >
        {item.name}
      </Link>
    );
  }

  // For section links on home page
  if (isHomePage && item.href.startsWith("/#")) {
    return (
      <button
        onClick={() => {
          onSmoothScroll(item.href, item.section);
          onClose?.();
        }}
        className={`${baseClasses} ${activeClasses} w-full text-left`}
      >
        {item.name}
      </button>
    );
  }

  // For section links when not on home page
  return (
    <a
      href={item.href}
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClose}
    >
      {item.name}
    </a>
  );
};

export default MobileMenuItem;
