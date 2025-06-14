
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
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-48 group">
      <div className="flex h-full">
        {/* Left: Image Section - Fixed Width */}
        <div className="w-48 h-full flex-shrink-0">
          <EnhancedOptimizedImage
            src={service.image}
            alt={`${service.title} service`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority={index < 2}
            onLoad={() => setImageLoaded(true)}
            quality={85}
          />
        </div>

        {/* Right: Content Section */}
        <div className="flex-1 p-6 flex items-center justify-between">
          {/* Left Content: Service Info */}
          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <service.icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                {service.title}
              </h3>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
              {service.description}
            </p>

            <div className="flex items-center space-x-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                {service.startingPrice}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                {service.timeline}
              </span>
            </div>
          </div>

          {/* Right: Learn More Button */}
          <div className="flex-shrink-0">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stack Vertically */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex {
            flex-direction: column;
          }
          .w-48 {
            width: 100%;
            height: 50%;
          }
          .flex-1 {
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .justify-between {
            justify-content: flex-start;
          }
          .pr-6 {
            padding-right: 0;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
