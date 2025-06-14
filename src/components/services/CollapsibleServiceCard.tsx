
import { memo, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { getCategoryAccent } from './utils/categoryAccents';
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

// Local ServiceCardHeader component for CollapsibleServiceCard
const CollapsibleServiceCardHeader = memo(({ 
  service, 
  accent, 
  isHovered, 
  isOpen 
}: { 
  service: Service; 
  accent: any; 
  isHovered: boolean; 
  isOpen: boolean; 
}) => {
  const Icon = service.icon;
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4 flex-1">
        <div className={`p-3 rounded-xl transition-all duration-300 ${
          isHovered 
            ? `${accent.iconBg} ${accent.iconText} shadow-lg` 
            : 'bg-gray-100/80 text-gray-600'
        }`}>
          <Icon className="h-6 w-6" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-xl font-bold transition-colors duration-300 ${
            isHovered ? accent.text : 'text-gray-900'
          }`}>
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {service.intro}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 ml-4">
        <div className="text-right">
          <div className={`text-lg font-bold transition-colors duration-300 ${
            isHovered ? accent.text : 'text-gray-900'
          }`}>
            {service.price}
          </div>
          <div className="text-sm text-gray-500">
            {service.duration}
          </div>
        </div>
        
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? `${accent.bg} ${accent.text}` 
            : 'bg-gray-200 text-gray-500'
        }`}>
          <div className={`w-4 h-0.5 bg-current transition-transform duration-300 ${
            isOpen ? 'rotate-0' : 'rotate-0'
          }`} />
          <div className={`w-0.5 h-4 bg-current absolute transition-transform duration-300 ${
            isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
          }`} />
        </div>
      </div>
    </div>
  );
});

CollapsibleServiceCardHeader.displayName = 'CollapsibleServiceCardHeader';

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
              <CollapsibleServiceCardHeader 
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
