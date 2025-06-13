
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
  const [isAnimating, setIsAnimating] = useState(false);
  const accent = getCategoryAccent(service.category);
  const collapseTimeoutRef = useRef<NodeJS.Timeout>();
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect touch device on mount
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    
    const handleResize = () => {
      checkTouchDevice();
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (collapseTimeoutRef.current) {
        clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  // Auto-expand on mouse enter (desktop only)
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice || isAnimating) return;
    
    // Clear any pending collapse timeout
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
    
    // Immediately expand
    setIsAnimating(true);
    setIsOpen(true);
    
    // Reset animation flag after transition
    setTimeout(() => setIsAnimating(false), 300);
  }, [isTouchDevice, isAnimating]);

  // Delayed collapse on mouse leave (desktop only)
  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice || isAnimating) return;
    
    // Set a 200ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
      setIsOpen(false);
      
      // Reset animation flag after transition
      setTimeout(() => setIsAnimating(false), 300);
    }, 200);
  }, [isTouchDevice, isAnimating]);

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
      setIsAnimating(true);
      setIsOpen(false);
      
      // Reset animation flag after transition
      setTimeout(() => setIsAnimating(false), 300);
    }, 200);
  }, [isTouchDevice]);

  // Click handler for mobile/touch devices
  const handleClick = useCallback(() => {
    if (isTouchDevice) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
      
      // Reset animation flag after transition
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isTouchDevice, isOpen]);

  // Handle touch outside to close on mobile
  useEffect(() => {
    if (!isTouchDevice || !isOpen) return;

    const handleTouchOutside = (event: TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener('touchstart', handleTouchOutside, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isTouchDevice, isOpen]);

  return (
    <div 
      ref={cardRef}
      className={`group transform transition-all duration-500 ease-out relative service-card ${
        isVisible 
          ? `animate-fade-in-up opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${Math.min(index * 100, 500)}ms`,
        willChange: isAnimating ? 'transform, opacity' : 'auto'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Collapsible open={isOpen} onOpenChange={isTouchDevice ? setIsOpen : undefined}>
        {/* Main Card with enhanced styling */}
        <div className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'service-card-expanded bg-gradient-to-b from-white to-gray-50/30 border border-gray-200/60 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.04)]' 
            : 'service-card-collapsed bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl hover:border-gray-200/70 hover:bg-white/80'
        }`}>
          
          <CollapsibleTrigger asChild>
            <div 
              className={`p-6 transition-all duration-300 ease-in-out rounded-xl ${
                isTouchDevice ? 'cursor-pointer hover:bg-gray-50/40' : 'cursor-default'
              } ${isOpen ? 'bg-transparent' : ''}`}
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
            className={`service-card-content transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen 
                ? 'opacity-100 translate-y-0 max-h-[2000px]' 
                : 'opacity-0 translate-y-3 max-h-0'
            }`}
            style={{
              willChange: isAnimating ? 'transform, opacity, max-height' : 'auto'
            }}
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
