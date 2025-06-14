
import { memo, useState, useRef } from 'react';
import { ServiceData } from './ServicesData';
import { Service } from '@/data/projects';
import ServiceCardHeader from './ServiceCardHeader';
import ServiceCardExpandedContent from './ServiceCardExpandedContent';
import { useServiceHover } from './hooks/useServiceHover';

interface EnhancedServiceCardProps {
  service: ServiceData;
  isExpanded: boolean;
  onExpand: (serviceId: string) => void;
  onCollapse: () => void;
  index: number;
  projects: Service[];
}

const EnhancedServiceCard = memo(({
  service,
  isExpanded,
  onExpand,
  onCollapse,
  index,
  projects
}: EnhancedServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const {
    isTouchDevice,
    handleMouseEnter,
    handleMouseLeave,
    handleContentMouseEnter,
    handleContentMouseLeave,
    handleClick
  } = useServiceHover({
    onExpand,
    onCollapse,
    serviceId: service.id,
    isExpanded
  });

  // Get all projects from all services and flatten them
  const allProjects = projects.flatMap(serviceData => serviceData.projects);

  return (
    <div 
      ref={cardRef}
      className={`group relative overflow-hidden transition-all duration-300 ease-out ${
        isExpanded 
          ? 'bg-white/95 backdrop-blur-xl border border-blue-200/40 rounded-2xl shadow-2xl shadow-blue-500/10' 
          : 'bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl hover:border-blue-300/50 shadow-lg hover:shadow-xl hover:bg-white/90'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        willChange: isExpanded ? 'transform, opacity' : 'auto',
        contain: 'layout style paint',
        transform: 'translate3d(0, 0, 0)'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-blue-50/30 opacity-50" />
      
      {/* Main Card Content */}
      <div className="relative z-10">
        <ServiceCardHeader
          service={service}
          imageLoaded={imageLoaded}
          onImageLoad={() => setImageLoaded(true)}
          isExpanded={isExpanded}
          isTouchDevice={isTouchDevice}
          onClick={handleClick}
          index={index}
        />

        <ServiceCardExpandedContent
          service={service}
          isExpanded={isExpanded}
          onContentMouseEnter={handleContentMouseEnter}
          onContentMouseLeave={handleContentMouseLeave}
          allProjects={allProjects}
        />
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </div>
  );
});

EnhancedServiceCard.displayName = 'EnhancedServiceCard';
export default EnhancedServiceCard;
