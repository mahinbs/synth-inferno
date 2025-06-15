
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

  return (
    <div 
      className="service-card-container relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="reference-service-card-enhanced bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-200 p-6 flex items-center gap-6">
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

      {/* Hover Dropdown */}
      {isHovered && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2">
          <ServiceCardDropdown
            service={service}
            portfolioProjects={serviceProjects}
            isVisible={true}
          />
        </div>
      )}
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
