
import { memo } from 'react';
import { Clock, DollarSign } from 'lucide-react';
import { ServiceData } from './ServicesData';

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
      style={{ pointerEvents: 'auto' }}
    >
      <div className="flex items-start justify-between">
        {/* Service Icon and Info */}
        <div className="flex items-start space-x-4 flex-1">
          <div className={`p-3 rounded-xl transition-all duration-200 ${
            isExpanded 
              ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg' 
              : 'bg-gray-100/80 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
          }`}>
            <Icon className="h-6 w-6" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className={`text-xl font-bold transition-colors duration-200 ${
              isExpanded 
                ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text' 
                : 'text-gray-900 group-hover:text-blue-700'
            }`}>
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {service.shortDescription}
            </p>
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

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={service.backgroundImage}
          alt={`${service.title} background`}
          className={`w-full h-full object-cover transition-all duration-300 ${
            imageLoaded ? 'opacity-5' : 'opacity-0'
          } ${isExpanded ? 'opacity-10 scale-105' : 'group-hover:opacity-8 group-hover:scale-102'}`}
          onLoad={onImageLoad}
          loading="lazy"
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
});

ServiceCardHeader.displayName = 'ServiceCardHeader';
export default ServiceCardHeader;
