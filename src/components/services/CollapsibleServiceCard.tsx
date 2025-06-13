
import { memo, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { getCategoryAccent } from './utils/categoryAccents';
import ServiceCardHeader from './ServiceCardHeader';
import ServiceCardContent from './ServiceCardContent';
import ServiceCardWrapper from './ServiceCardWrapper';
import { useServiceCardInteractions } from './hooks/useServiceCardInteractions';
import { useTouchOutside } from './hooks/useTouchOutside';

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
  backgroundImage: string;
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
  const [isAnimating, setIsAnimating] = useState(false);
  const accent = getCategoryAccent(service.category);

  const {
    isTouchDevice,
    cardRef,
    handleMouseEnter,
    handleMouseLeave,
    handleContentMouseEnter,
    handleContentMouseLeave,
    handleClick
  } = useServiceCardInteractions({
    isAnimating,
    setIsAnimating,
    setIsOpen
  });

  // Handle touch outside to close on mobile
  useTouchOutside({
    isTouchDevice,
    isOpen,
    cardRef,
    setIsOpen
  });

  return (
    <ServiceCardWrapper
      isVisible={isVisible}
      index={index}
      isAnimating={isAnimating}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      cardRef={cardRef}
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
    </ServiceCardWrapper>
  );
});

CollapsibleServiceCard.displayName = 'CollapsibleServiceCard';
export default CollapsibleServiceCard;
