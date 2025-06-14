
import { memo } from 'react';
import { ServiceData } from './ServicesData';
import EnhancedOptimizedImage from '../ui/EnhancedOptimizedImage';
import { Badge } from '../ui/badge';
import { useNavigate } from 'react-router-dom';

interface ServicePageCardProps {
  service: ServiceData;
  index: number;
}

const ServicePageCard = memo(({
  service,
  index
}: ServicePageCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const serviceRoutes: Record<string, string> = {
      'web-applications': '/web-apps',
      'saas-solutions': '/saas',
      'mobile-applications': '/mobile-apps',
      'ai-calling-agency': '/ai-calling',
      'ai-automation': '/ai-automation'
    };
    
    const route = serviceRoutes[service.id];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div 
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 relative min-h-[140px] service-page-card cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Layout Container */}
      <div className="flex items-start gap-4 h-full">
        {/* Left Image Section - 96x96px Square Thumbnail */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-xl overflow-hidden">
            <EnhancedOptimizedImage
              src={service.image}
              alt={`${service.title} service`}
              className="w-full h-full object-cover"
              priority={index < 3}
              quality={90}
            />
          </div>
        </div>

        {/* Center Content Section */}
        <div className="flex-1 min-w-0 pr-32">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
            {service.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>
      </div>

      {/* Bottom-Right Pricing Section - Positioned Absolutely */}
      <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1">
        <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200 font-bold px-3 py-1 text-sm">
          {service.startingPrice}
        </Badge>
        <span className="text-orange-700 text-xs font-medium">
          {service.timeline}
        </span>
      </div>
    </div>
  );
});

ServicePageCard.displayName = 'ServicePageCard';
export default ServicePageCard;
