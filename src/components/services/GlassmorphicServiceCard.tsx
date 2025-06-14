
import { memo, useState } from 'react';
import { ServiceData } from './ServicesData';
import EnhancedOptimizedImage from '../ui/EnhancedOptimizedImage';

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
    <div className="glassmorphic-card service-card-horizontal">
      {/* Image Section */}
      <div className="service-card-image">
        <EnhancedOptimizedImage
          src={service.image}
          alt={`${service.title} service`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          priority={index < 2}
          onLoad={() => setImageLoaded(true)}
          quality={85}
        />
      </div>

      {/* Content Section */}
      <div className="service-card-content">
        {/* Service Info - Title and Description */}
        <div className="service-card-info">
          <h3 className="service-card-title">
            {service.title}
          </h3>
          
          <p className="service-card-description">
            {service.description}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="service-card-pricing">
          <div className="service-price">
            {service.startingPrice}
          </div>
          <div className="service-timeline">
            {service.timeline}
          </div>
        </div>
      </div>
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
