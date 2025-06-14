
import { memo, useState } from 'react';
import { ServiceData } from './ServicesData';
import EnhancedOptimizedImage from '../ui/EnhancedOptimizedImage';
import { Button } from '../ui/button';

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

  return (
    <div className="reference-service-card">
      {/* Small Image Section */}
      <div className="service-card-image-small">
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
      <div className="service-card-content-center">
        <h3 className="service-card-title-compact">
          {service.title}
        </h3>
        
        <p className="service-card-description-compact">
          {service.description}
        </p>
      </div>

      {/* Right Section - Pricing and Action */}
      <div className="service-card-actions-right">
        <div className="service-pricing-compact">
          <div className="service-price-text">
            {service.startingPrice}
          </div>
          <div className="service-timeline-text">
            {service.timeline}
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="learn-more-button"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
