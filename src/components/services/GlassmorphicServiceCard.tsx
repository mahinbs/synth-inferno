
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
        {/* Service Info */}
        <div className="service-card-info">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <service.icon className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="glass-text-primary text-xl line-clamp-1">
              {service.title}
            </h3>
          </div>
          
          <p className="glass-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
            {service.description}
          </p>

          <div className="flex items-center space-x-4">
            <span className="service-tag">
              {service.startingPrice}
            </span>
            <span className="service-tag">
              {service.timeline}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="service-card-action">
          <button className="glass-button flex items-center space-x-2">
            <span>Learn More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
