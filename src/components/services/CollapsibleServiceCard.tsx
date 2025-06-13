
import { memo, useState, useCallback, useRef, useEffect } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { getCategoryAccent } from './utils/categoryAccents';
import ServiceCardHeader from './ServiceCardHeader';
import ServiceCardContent from './ServiceCardContent';

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
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const accent = getCategoryAccent(service.category);
  const collapseTimeoutRef = useRef<NodeJS.Timeout>();

  // Detect touch device on mount
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => {
      window.removeEventListener('resize', checkTouchDevice);
      if (collapseTimeoutRef.current) {
        clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  // Auto-expand on mouse enter (desktop only)
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    
    // Clear any pending collapse timeout
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
    
    // Immediately expand
    setIsOpen(true);
  }, [isTouchDevice]);

  // Delayed collapse on mouse leave (desktop only)
  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    
    // Set a 200ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, [isTouchDevice]);

  // Prevent collapse when hovering over expanded content
  const handleContentMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    
    // Cancel any pending collapse
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
  }, [isTouchDevice]);

  // Resume collapse timing when leaving expanded content
  const handleContentMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    
    // Set a 200ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, [isTouchDevice]);

  // Click handler for mobile/touch devices
  const handleClick = useCallback(() => {
    if (isTouchDevice) {
      setIsOpen(!isOpen);
    }
  }, [isTouchDevice, isOpen]);

  return (
    <div 
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
      <Collapsible open={isOpen} onOpenChange={isTouchDevice ? setIsOpen : undefined}>
        {/* Main Card with enhanced styling */}
        <div className={`relative bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg transition-all duration-300 overflow-hidden hover:shadow-xl hover:border-gray-200/70 hover:bg-white/80 ${
          isOpen ? 'ring-1 ring-gray-300/60 shadow-xl' : ''
        }`}>
          
          <CollapsibleTrigger asChild>
            <div 
              className={`p-6 transition-colors duration-200 rounded-xl ${
                isTouchDevice ? 'cursor-pointer hover:bg-gray-50/40' : 'cursor-default'
              }`}
              onClick={handleClick}
            >
              <ServiceCardHeader 
                service={service} 
                accent={accent} 
                isHovered={isOpen} 
                isOpen={isOpen} 
              />
            </div>
          </CollapsibleTrigger>

          {/* Collapsible Content with enhanced animations */}
          <CollapsibleContent 
            className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden transition-all duration-300 ease-out"
            onMouseEnter={handleContentMouseEnter}
            onMouseLeave={handleContentMouseLeave}
          >
            <ServiceCardContent service={service} accent={accent} />
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
});

CollapsibleServiceCard.displayName = 'CollapsibleServiceCard';
export default CollapsibleServiceCard;
