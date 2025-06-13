
import { memo, useState, useCallback, useRef } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { getCategoryAccent } from './utils/categoryAccents';
import ServiceHoverDropdown from './ServiceHoverDropdown';
import ServiceCardHeader from './ServiceCardHeader';
import ServiceCardContent from './ServiceCardContent';
import { useSmartDropdownPosition } from '@/hooks/useSmartDropdownPosition';

interface Service {
  id: string;
  icon: any;
  title: string;
  category: string;
  intro: string;
  aboutService: string;
  keyFeatures: string[];
  technologies: string[];
  highlights: string[];
  price: string;
  duration: string;
}

interface CollapsibleServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
  isLastCard?: boolean;
}

const CollapsibleServiceCard = memo(({
  service,
  index,
  isVisible,
  isLastCard = false
}: CollapsibleServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const accent = getCategoryAccent(service.category);
  const { elementRef, position } = useSmartDropdownPosition();
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();

  // Enhanced hover handlers with proper timeout management
  const handleMouseEnter = useCallback(() => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Set a delay before hiding dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    // Cancel hide timeout when hovering over dropdown
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    // Hide dropdown when leaving dropdown area
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`group transform transition-all duration-500 ease-out relative ${
        isVisible 
          ? `animate-fade-in-up opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${Math.min(index * 100, 500)}ms`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Enhanced Hover Preview Dropdown with proper event handling */}
        {isHovered && !isOpen && (
          <div
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <ServiceHoverDropdown 
              service={service} 
              accent={accent} 
              position={position}
            />
          </div>
        )}

        {/* Main Card with enhanced styling */}
        <div className={`relative bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg transition-all duration-300 overflow-visible hover:shadow-xl hover:border-gray-200/70 hover:bg-white/80 ${
          isOpen ? 'ring-1 ring-gray-300/60 shadow-xl' : ''
        }`}>
          
          <CollapsibleTrigger asChild>
            <div className="cursor-pointer p-6 hover:bg-gray-50/40 transition-colors duration-200 rounded-xl">
              <ServiceCardHeader 
                service={service} 
                accent={accent} 
                isHovered={isHovered} 
                isOpen={isOpen} 
              />
            </div>
          </CollapsibleTrigger>

          {/* Collapsible Content */}
          <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-visible">
            <ServiceCardContent service={service} accent={accent} />
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
});

CollapsibleServiceCard.displayName = 'CollapsibleServiceCard';
export default CollapsibleServiceCard;
