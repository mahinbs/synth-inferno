
import { memo } from 'react';
import { ServiceData } from './ServicesData';
import OptimizedImage from '../ui/OptimizedImage';

interface ServiceCardHeaderProps {
  service: ServiceData;
  imageLoaded: boolean;
  onImageLoad: () => void;
  isExpanded: boolean;
  isTouchDevice: boolean;
  onClick: () => void;
  index: number;
}

const ServiceCardHeader = memo(({
  service,
  imageLoaded,
  onImageLoad,
  isExpanded,
  isTouchDevice,
  onClick,
  index
}: ServiceCardHeaderProps) => {
  const Icon = service.icon;

  const handleHeaderClick = () => {
    if (isTouchDevice) {
      onClick();
    }
  };

  return (
    <div 
      className={`relative p-6 transition-all duration-200 ease-out ${
        isTouchDevice ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={handleHeaderClick}
    >
      <div className="flex items-start space-x-6 relative z-10">
        {/* Left Side - Enlarged Service Image */}
        <div className="flex-shrink-0">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden bg-gray-100 shadow-md border border-gray-200">
            <OptimizedImage
              src={service.image}
              alt={`${service.title} preview`}
              className="w-full h-full object-cover"
              onLoad={onImageLoad}
              priority={index < 2}
            />
            
            {/* Service Icon Overlay */}
            <div className={`absolute bottom-2 right-2 p-2 rounded-md transition-all duration-200 ${
              isExpanded 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-800 shadow-md border border-gray-200'
            }`}>
              <Icon className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        {/* Center - Service Content */}
        <div className="flex-1 min-w-0 pr-4">
          {/* Service Title */}
          <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-200 ${
            isExpanded 
              ? 'text-blue-700' 
              : 'text-gray-900 group-hover:text-blue-700'
          }`}>
            {service.title}
          </h3>
          
          {/* Service Description */}
          <p className="text-gray-700 text-sm md:text-base line-clamp-3 font-medium leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Right Side - Stacked Price and Duration Tags */}
        {/* <div className="flex-shrink-0 flex flex-col space-y-3">
         
          <div className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-colors duration-200 text-center min-w-[100px] ${
            isExpanded 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-900 shadow-md border border-gray-200 hover:bg-blue-50 hover:text-blue-700'
          }`}>
            {service.startingPrice}
          </div>
          
          
          <div className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 text-center min-w-[100px] ${
            isExpanded 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-orange-100 text-orange-800 border border-orange-200 hover:bg-orange-50'
          }`}>
            {service.timeline}
          </div>
        </div> */}
      </div>

      {/* Background Image - Very Subtle */}
      {service.backgroundImage && (
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <img
            src={service.backgroundImage}
            alt={`${service.title} background`}
            className={`w-full h-full object-cover transition-all duration-300 ${
              imageLoaded ? 'opacity-20' : 'opacity-0'
            } ${isExpanded ? 'opacity-30 scale-105' : 'group-hover:opacity-25 group-hover:scale-102'}`}
            onLoad={onImageLoad}
            loading="lazy"
          />
          
          {/* Clean overlay for text readability */}
          <div className="absolute inset-0 bg-white/90" />
        </div>
      )}
    </div>
  );
});

ServiceCardHeader.displayName = 'ServiceCardHeader';
export default ServiceCardHeader;
