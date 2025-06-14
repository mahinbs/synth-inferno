
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuItemProps } from "./types";

const DesktopMenuItem = ({ item, isActive, isHomePage, onSmoothScroll }: MenuItemProps) => {
  const location = useLocation();
  
  const baseClasses = "transition-all duration-300 font-medium relative group";
  const activeClasses = isActive ? "text-primary" : "text-foreground hover:text-primary";
  
  const underlineClasses = `absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
    isActive ? "w-full" : "w-0 group-hover:w-full"
  }`;

  // For Home navigation
  if (item.name === "Home") {
    return (
      <Link
        to={item.href}
        className={`${baseClasses} ${activeClasses}`}
      >
        {item.name}
        <span className={underlineClasses}></span>
      </Link>
    );
  }

  // For Services page
  if (item.name === "Services") {
    return (
      <Link
        to={item.href}
        className={`${baseClasses} ${activeClasses}`}
      >
        {item.name}
        <span className={underlineClasses}></span>
      </Link>
    );
  }

  // For section links on home page
  if (isHomePage && item.href.startsWith("/#")) {
    return (
      <button
        onClick={() => onSmoothScroll(item.href, item.section)}
        className={`${baseClasses} ${activeClasses}`}
      >
        {item.name}
        <span className={underlineClasses}></span>
      </button>
    );
  }

  // For section links when not on home page
  return (
    <a
      href={item.href}
      className={`${baseClasses} ${activeClasses}`}
    >
      {item.name}
      <span className={underlineClasses}></span>
    </a>
  );
};

export default DesktopMenuItem;
