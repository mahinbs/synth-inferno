
import { memo } from 'react';
import { Clock, DollarSign } from 'lucide-react';
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
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-100 shadow-md border border-gray-200">
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
        
        {/* Right Side - Service Content */}
        <div className="flex-1 min-w-0">
          {/* Service Title */}
          <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-200 ${
            isExpanded 
              ? 'text-blue-700' 
              : 'text-gray-900 group-hover:text-blue-700'
          }`}>
            {service.title}
          </h3>
          
          {/* Service Description */}
          <p className="text-gray-700 text-sm md:text-base line-clamp-2 font-medium leading-relaxed mb-4">
            {service.description}
          </p>
          
          {/* Pricing and Timeline Row */}
          <div className="flex items-center justify-between">
            {/* Timeline Info */}
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span className="font-medium">{service.timeline}</span>
            </div>
            
            {/* Price Tag */}
            <div className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors duration-200 ${
              isExpanded 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-900 shadow-md border border-gray-200 hover:bg-blue-50 hover:text-blue-700'
            }`}>
              {service.startingPrice}
            </div>
          </div>
        </div>

        {/* Desktop Expand Indicator */}
        <div className="hidden md:flex items-center justify-center flex-shrink-0">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border-2 ${
            isExpanded 
              ? 'bg-blue-600 border-blue-600 text-white' 
              : 'bg-gray-100 border-gray-300 text-gray-600 group-hover:bg-blue-100 group-hover:border-blue-300 group-hover:text-blue-600'
          }`}>
            <div className={`w-4 h-0.5 bg-current transition-transform duration-200 ${
              isExpanded ? 'rotate-0' : 'rotate-0'
            }`} />
            <div className={`w-0.5 h-4 bg-current absolute transition-transform duration-200 ${
              isExpanded ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`} />
          </div>
        </div>
      </div>

      {/* Background Image - Very Subtle */}
      {service.backgroundImage && (
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <img
            src={service.backgroundImage}
            alt={`${service.title} background`}
            className={`w-full h-full object-cover transition-all duration-300 ${
              imageLoaded ? 'opacity-3' : 'opacity-0'
            } ${isExpanded ? 'opacity-5 scale-105' : 'group-hover:opacity-5 group-hover:scale-102'}`}
            onLoad={onImageLoad}
            loading="lazy"
          />
          
          {/* Clean overlay for text readability */}
          <div className="absolute inset-0 bg-white/95" />
        </div>
      )}
    </div>
  );
});

ServiceCardHeader.displayName = 'ServiceCardHeader';
export default ServiceCardHeader;
