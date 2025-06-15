
import { memo, useState } from 'react';
import { ServiceData } from './ServicesData';
import { projectsData } from '@/data/projects';
import EnhancedOptimizedImage from '../ui/EnhancedOptimizedImage';
import { Button } from '../ui/button';
import ServiceCardDropdown from './ServiceCardDropdown';

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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Get portfolio projects for this service
  const serviceProjects = projectsData
    .find(projectService => projectService.id === service.id)
    ?.projects || [];

  // Detect touch device
  const handleTouchStart = () => {
    setIsTouchDevice(true);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isTouchDevice) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      <div className="reference-service-card-enhanced">
        {/* Enhanced Image Section */}
        <div className="service-card-image-enhanced">
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
        <div className="service-card-content-enhanced">
          <h3 className="service-card-title-enhanced">
            {service.title}
          </h3>
          
          <p className="service-card-description-enhanced">
            {service.description}
          </p>
        </div>

        {/* Right Section - Enhanced Pricing and Action */}
        <div className="service-card-actions-enhanced">
          <div className="service-pricing-enhanced">
            <div className="service-price-enhanced">
              {service.startingPrice}
            </div>
            <div className="service-timeline-badge">
              {service.timeline}
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            className="learn-more-button-enhanced"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Hover Dropdown */}
      <ServiceCardDropdown
        service={service}
        portfolioProjects={serviceProjects}
        isVisible={isHovered}
      />
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
