
import { memo } from 'react';
import { ServiceData } from './ServicesData';
import EnhancedOptimizedImage from '../ui/EnhancedOptimizedImage';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServicePageCardProps {
  service: ServiceData;
  index: number;
}

const ServicePageCard = memo(({
  service,
  index
}: ServicePageCardProps) => {
  const navigate = useNavigate();

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Navigate to the specific service page based on service ID
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
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex items-center gap-8 min-h-[160px] service-page-card cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Left Image Section - 120x120px Image */}
      <div className="flex-shrink-0">
        <div className="w-30 h-30 rounded-xl overflow-hidden">
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
      <div className="flex-1 min-w-0">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-1">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
          {service.description}
        </p>
      </div>

      {/* Right Section - Enhanced Pricing and Action */}
      <div className="flex flex-col items-end gap-6 flex-shrink-0 min-w-[160px]">
        <div className="flex flex-col items-end gap-3">
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200 font-bold px-4 py-2 text-base">
            {service.startingPrice}
          </Badge>
          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 font-medium text-sm px-4 py-1">
            {service.timeline}
          </Badge>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400 px-6 py-2 rounded-full font-medium flex items-center gap-2"
          onClick={handleLearnMore}
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
});

ServicePageCard.displayName = 'ServicePageCard';
export default ServicePageCard;
