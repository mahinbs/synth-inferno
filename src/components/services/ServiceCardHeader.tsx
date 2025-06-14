
import { memo } from 'react';
import { ChevronDown, Clock, DollarSign } from 'lucide-react';
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
  return (
    <div 
      className={`flex items-center ${isTouchDevice ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={onClick}
    >
      {/* Left Image Section */}
      <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-l-xl">
        <OptimizedImage 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={onImageLoad}
          priority={index < 2}
        />
        
        {/* Light Glassmorphic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-blue-600/20 backdrop-blur-sm" />
        
        {/* Icon Container */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md border border-blue-200/50 flex items-center justify-center shadow-lg">
          <service.icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Price and Timeline Badges */}
          <div className="hidden md:flex flex-col space-y-2 mr-6">
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <span>{service.startingPrice}</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
              <Clock className="h-4 w-4 text-purple-600" />
              <span>{service.timeline}</span>
            </div>
          </div>

          {/* Expand Icon */}
          <ChevronDown className={`h-6 w-6 text-blue-600 transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`} />
        </div>
      </div>
    </div>
  );
});

ServiceCardHeader.displayName = 'ServiceCardHeader';
export default ServiceCardHeader;
