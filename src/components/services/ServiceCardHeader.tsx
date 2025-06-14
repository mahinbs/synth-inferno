
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
      className={`p-6 transition-all duration-200 ease-out ${
        isTouchDevice ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={handleHeaderClick}
    >
      <div className="flex items-start justify-between">
        {/* Left Side - Service Image Thumbnail */}
        <div className="flex items-start space-x-4 flex-1">
          {/* Prominent Service Image */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
            <OptimizedImage
              src={service.image}
              alt={`${service.title} preview`}
              className="w-full h-full object-cover"
              onLoad={onImageLoad}
              priority={index < 2}
            />
            {/* Gradient overlay for better icon visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            
            {/* Service Icon Overlay */}
            <div className={`absolute bottom-2 right-2 p-2 rounded-lg transition-all duration-200 ${
              isExpanded 
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg' 
                : 'bg-white/90 text-gray-700 shadow-md'
            }`}>
              <Icon className="h-4 w-4" />
            </div>
          </div>
          
          {/* Service Info */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-xl font-bold transition-colors duration-200 ${
              isExpanded 
                ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text' 
                : 'text-gray-900 group-hover:text-blue-700'
            }`}>
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {service.description}
            </p>
            
            {/* Mobile Price/Timeline */}
            <div className="flex md:hidden items-center space-x-4 mt-3">
              <div className={`text-lg font-bold transition-colors duration-200 ${
                isExpanded ? 'text-blue-600' : 'text-gray-900'
              }`}>
                {service.startingPrice}
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {service.timeline}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Price/Timeline */}
        <div className="hidden md:flex items-center space-x-6 ml-6">
          <div className="text-right">
            <div className={`text-lg font-bold transition-colors duration-200 ${
              isExpanded ? 'text-blue-600' : 'text-gray-900'
            }`}>
              {service.startingPrice}
            </div>
            <div className="text-sm text-gray-500 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {service.timeline}
            </div>
          </div>
          
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isExpanded 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
              : 'bg-gray-200 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
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

      {/* Enhanced Background Image with Better Visibility */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={service.backgroundImage}
          alt={`${service.title} background`}
          className={`w-full h-full object-cover transition-all duration-300 ${
            imageLoaded ? 'opacity-20' : 'opacity-0'
          } ${isExpanded ? 'opacity-25 scale-105' : 'group-hover:opacity-20 group-hover:scale-102'}`}
          onLoad={onImageLoad}
          loading="lazy"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60" />
      </div>
    </div>
  );
});

ServiceCardHeader.displayName = 'ServiceCardHeader';
export default ServiceCardHeader;
