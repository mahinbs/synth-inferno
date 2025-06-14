
import { memo } from 'react';
import { ServiceData } from './ServicesData';
import EnhancedOptimizedImage from '../ui/EnhancedOptimizedImage';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ReferenceServiceCardProps {
  service: ServiceData;
  index: number;
  isVisible: boolean;
}

const ReferenceServiceCard = memo(({
  service,
  index,
  isVisible
}: ReferenceServiceCardProps) => {
  return (
    <div className="reference-service-card">
      {/* Left Image Section */}
      <div className="service-card-image">
        <EnhancedOptimizedImage
          src={service.image}
          alt={`${service.title} service`}
          className="w-full h-full object-cover rounded-lg"
          priority={index < 2}
          quality={85}
        />
      </div>

      {/* Center Content Section */}
      <div className="service-card-content">
        <h3 className="service-card-title">
          {service.title}
        </h3>
        
        <p className="service-card-description">
          {service.description}
        </p>
      </div>

      {/* Right Section - Pricing and Action */}
      <div className="service-card-actions">
        <div className="service-pricing">
          <Badge variant="secondary" className="service-price-badge">
            {service.startingPrice}
          </Badge>
          <Badge variant="outline" className="service-timeline-badge">
            {service.timeline}
          </Badge>
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

ReferenceServiceCard.displayName = 'ReferenceServiceCard';
export default ReferenceServiceCard;
