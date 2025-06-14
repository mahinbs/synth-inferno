
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
    <div 
      className="group relative overflow-hidden transition-all duration-300 ease-out bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Clean Card Content Layout */}
      <div className="flex flex-col md:flex-row h-auto">
        {/* Left: Image Section */}
        <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
          <div className="w-full h-full overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <EnhancedOptimizedImage
              src={service.image}
              alt={`${service.title} service`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority={index < 2}
              onLoad={() => setImageLoaded(true)}
              quality={85}
            />
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          {/* Service Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3">
              {service.description}
            </p>
          </div>

          {/* Pricing and Timeline - Bottom Section */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex space-x-4">
              <div className="bg-gray-50 px-3 py-1.5 rounded-lg">
                <span className="text-sm font-semibold text-gray-800">{service.startingPrice}</span>
              </div>
              <div className="bg-gray-50 px-3 py-1.5 rounded-lg">
                <span className="text-sm font-semibold text-gray-800">{service.timeline}</span>
              </div>
            </div>
            
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
