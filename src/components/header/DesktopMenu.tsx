
import { MenuItem } from "./types";
import DesktopMenuItem from "./DesktopMenuItem";

interface DesktopMenuProps {
  menuItems: MenuItem[];
  isActive: (item: MenuItem) => boolean;
  isHomePage: boolean;
  onSmoothScroll: (href: string, sectionId: string) => void;
}

const DesktopMenu = ({ menuItems, isActive, isHomePage, onSmoothScroll }: DesktopMenuProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
      {menuItems.map((item) => (
        <DesktopMenuItem
          key={item.name}
          item={item}
          isActive={isActive(item)}
          isHomePage={isHomePage}
          onSmoothScroll={onSmoothScroll}
        />
      ))}
    </div>
  );
};

export default DesktopMenu;
