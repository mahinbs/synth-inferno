
import { memo, useState, useCallback } from 'react';
import { ServiceData } from './ServicesData';
import { projectsData } from '@/data/projects';
import EnhancedOptimizedImage from '../ui/EnhancedOptimizedImage';
import { Button } from '../ui/button';
import ServiceCardInlineContent from './ServiceCardInlineContent';

interface GlassmorphicServiceCardProps {
  service: ServiceData;
  isExpanded: boolean;
  onExpand: (serviceId: string) => void;
  onCollapse: () => void;
  index: number;
}

const GlassmorphicServiceCard = memo(({
  service,
  index
}: GlassmorphicServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  // Get portfolio projects for this service
  const serviceProjects = projectsData
    .find(projectService => projectService.id === service.id)
    ?.projects || [];

  const handleMouseEnter = useCallback(() => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    setIsHovered(true);
    setIsExpanded(true);
  }, [hoverTimer]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Add delay before collapsing to prevent flickering
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 150);
    setHoverTimer(timer);
  }, []);

  const handleTouchStart = useCallback(() => {
    // Mobile touch behavior
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div 
      className="service-card-container relative group transition-all duration-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <div className={`
        reference-service-card-enhanced bg-white rounded-xl border-2 shadow-lg 
        transition-all duration-200 overflow-hidden
        ${isExpanded ? 'border-blue-400 shadow-xl' : 'border-gray-200 hover:border-blue-400 hover:shadow-xl'}
      `}>
        {/* Main Card Header */}
        <div className="p-6 flex items-center gap-6">
          {/* Enhanced Image Section */}
          <div className="w-20 h-20 flex-shrink-0">
            <EnhancedOptimizedImage
              src={service.image}
              alt={`${service.title} service`}
              className="w-full h-full object-cover rounded-lg"
              priority={index < 2}
              onLoad={() => setImageLoaded(true)}
              quality={85}
            />
          </div>

          {/* Content Section - Title and Description */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3">
              {service.description}
            </p>

            {/* Features list */}
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Right Section - Enhanced Pricing and Action */}
          <div className="flex flex-col items-end gap-3">
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">
                {service.startingPrice}
              </div>
              <div className="text-sm text-gray-500">
                {service.timeline}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Inline Expandable Content */}
        <ServiceCardInlineContent 
          service={service}
          isExpanded={isExpanded}
          portfolioProjects={serviceProjects}
        />
      </div>
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
