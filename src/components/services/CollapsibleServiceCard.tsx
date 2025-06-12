
import { memo, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { getCategoryAccent } from './utils/categoryAccents';
import ServiceHoverDropdown from './ServiceHoverDropdown';
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
}

const CollapsibleServiceCard = memo(({
  service,
  index,
  isVisible
}: CollapsibleServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const accent = getCategoryAccent(service.category);

  return (
    <div 
      className={`group transform transition-all duration-500 ease-out ${
        isVisible 
          ? `animate-fade-in-up opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${Math.min(index * 100, 500)}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Hover Preview Dropdown */}
        {isHovered && !isOpen && (
          <ServiceHoverDropdown service={service} accent={accent} />
        )}

        {/* Main Card */}
        <div className={`relative bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg transition-all duration-300 overflow-hidden hover:shadow-xl hover:border-gray-200/60 ${
          isOpen ? 'ring-1 ring-gray-300/50' : ''
        }`}>
          
          <CollapsibleTrigger asChild>
            <div className="cursor-pointer p-6 hover:bg-gray-50/30 transition-colors duration-200">
              <ServiceCardHeader 
                service={service} 
                accent={accent} 
                isHovered={isHovered} 
                isOpen={isOpen} 
              />
            </div>
          </CollapsibleTrigger>

          {/* Collapsible Content */}
          <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <ServiceCardContent service={service} accent={accent} />
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
});

CollapsibleServiceCard.displayName = 'CollapsibleServiceCard';
export default CollapsibleServiceCard;
