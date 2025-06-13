import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface Service {
  aboutService: string;
  keyFeatures: string[];
  technologies: string[];
}
interface CategoryAccent {
  gradient: string;
  border: string;
  bg: string;
  text: string;
}
interface DropdownPosition {
  shouldPositionAbove: boolean;
  shouldPositionLeft: boolean;
}
interface ServiceHoverDropdownProps {
  service: Service;
  accent: CategoryAccent;
  position: DropdownPosition;
}
const ServiceHoverDropdown = memo(({
  service,
  accent,
  position
}: ServiceHoverDropdownProps) => {
  const getPositionClasses = () => {
    let classes = 'absolute z-[100] w-full max-w-lg bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-xl shadow-xl transition-all duration-300 ease-out transform';

    // Enhanced animation classes with slide effect
    classes += ' animate-in fade-in-0 slide-in-from-bottom-2 duration-300';
    if (position.shouldPositionAbove) {
      classes += ' bottom-full mb-3';
    } else {
      classes += ' top-full mt-3';
    }
    if (position.shouldPositionLeft) {
      classes += ' right-0';
    } else {
      classes += ' left-0';
    }
    return classes;
  };
  const getArrowClasses = () => {
    let classes = 'absolute w-3 h-3 bg-white/95 border border-gray-200/80 transform rotate-45 z-[99]';
    if (position.shouldPositionAbove) {
      classes += ' top-full -mt-1.5 border-t-0 border-l-0';
    } else {
      classes += ' bottom-full -mb-1.5 border-b-0 border-r-0';
    }
    if (position.shouldPositionLeft) {
      classes += ' right-6';
    } else {
      classes += ' left-6';
    }
    return classes;
  };
  return <div className={getPositionClasses()}>
      {/* Enhanced arrow with better styling */}
      <div className={getArrowClasses()} />
      
      {/* Dropdown Content */}
      
    </div>;
});
ServiceHoverDropdown.displayName = 'ServiceHoverDropdown';
export default ServiceHoverDropdown;