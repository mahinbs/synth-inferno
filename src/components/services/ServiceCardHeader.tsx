
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
        {/* Left Side - Enhanced Service Image Thumbnail */}
        <div className="flex items-start space-x-4 flex-1">
          {/* Enlarged Prominent Service Image */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-md">
            <OptimizedImage
              src={service.image}
              alt={`${service.title} preview`}
              className="w-full h-full object-cover"
              onLoad={onImageLoad}
              priority={index < 2}
            />
            {/* Much lighter gradient overlay for better icon visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
            
            {/* Service Icon Overlay - Simplified */}
            <div className={`absolute bottom-2 right-2 p-2 rounded-lg transition-all duration-200 ${
              isExpanded 
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg' 
                : 'bg-white/95 text-gray-700 shadow-md'
            }`}>
              <Icon className="h-4 w-4" />
            </div>
          </div>
          
          {/* Service Info with Enhanced Text Contrast */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-xl font-bold transition-colors duration-200 ${
              isExpanded 
                ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text' 
                : 'text-gray-950 group-hover:text-blue-700'
            }`}>
              {service.title}
            </h3>
            <p className="text-gray-800 text-sm mt-1 line-clamp-2 font-medium">
              {service.description}
            </p>
            
            {/* Mobile Price/Timeline with Enhanced Contrast */}
            <div className="flex md:hidden items-center space-x-4 mt-3">
              <div className={`text-lg font-bold transition-colors duration-200 ${
                isExpanded ? 'text-blue-600' : 'text-gray-950'
              }`}>
                {service.startingPrice}
              </div>
              <div className="text-sm text-gray-700 flex items-center font-medium">
                <Clock className="h-3 w-3 mr-1" />
                {service.timeline}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Price/Timeline with Enhanced Contrast */}
        <div className="hidden md:flex items-center space-x-6 ml-6">
          <div className="text-right">
            <div className={`text-lg font-bold transition-colors duration-200 ${
              isExpanded ? 'text-blue-600' : 'text-gray-950'
            }`}>
              {service.startingPrice}
            </div>
            <div className="text-sm text-gray-700 flex items-center font-medium">
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

      {/* Significantly Reduced Background Image Opacity for Better Text Readability */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={service.backgroundImage}
          alt={`${service.title} background`}
          className={`w-full h-full object-cover transition-all duration-300 ${
            imageLoaded ? 'opacity-5' : 'opacity-0'
          } ${isExpanded ? 'opacity-8 scale-105' : 'group-hover:opacity-6 group-hover:scale-102'}`}
          onLoad={onImageLoad}
          loading="lazy"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Strengthened gradient overlay for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/90" />
      </div>
    </div>
  );
});

ServiceCardHeader.displayName = 'ServiceCardHeader';
export default ServiceCardHeader;
