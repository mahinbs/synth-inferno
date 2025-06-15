
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

  // Get portfolio projects for this service
  const serviceProjects = projectsData
    .find(projectService => projectService.id === service.id)
    ?.projects || [];

  console.log(`Service ${service.id} found ${serviceProjects.length} projects`);

  const handleMouseEnter = () => {
    console.log(`Mouse enter on service: ${service.id}`);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log(`Mouse leave on service: ${service.id}`);
    setIsHovered(false);
  };

  const handleClick = () => {
    // Toggle on mobile/touch devices
    setIsHovered(!isHovered);
  };

  return (
    <div 
      className="service-card-container relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="reference-service-card-enhanced" onClick={handleClick}>
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
