
import { memo } from 'react';
import { ChevronDown } from 'lucide-react';

interface Service {
  icon: any;
  title: string;
  intro: string;
  price: string;
  duration: string;
}

interface CategoryAccent {
  gradient: string;
}

interface ServiceCardHeaderProps {
  service: Service;
  accent: CategoryAccent;
  isHovered: boolean;
  isOpen: boolean;
}

const ServiceCardHeader = memo(({ service, accent, isHovered, isOpen }: ServiceCardHeaderProps) => {
  return (
    <div className="flex items-center gap-6">
      {/* Icon */}
      <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${accent.gradient} flex items-center justify-center transition-all duration-300 transform ${
        isHovered ? 'scale-105 rotate-3' : 'scale-100 rotate-0'
      }`}>
        <service.icon className="h-7 w-7 text-white" />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <h3 className="text-xl font-bold text-[#1c1c1e] mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-[#1c1c1e]/80 text-sm leading-relaxed group-hover:text-[#1c1c1e] transition-colors duration-200">
          {service.intro}
        </p>
      </div>

      {/* Price & Duration */}
      <div className="flex-shrink-0 flex flex-col items-end gap-3">
        <div className={`px-4 py-2 bg-gradient-to-r ${accent.gradient} rounded-lg shadow-lg`}>
          <span className="text-white font-bold text-lg">
            {service.price}
          </span>
        </div>
        
        <div className="px-3 py-1.5 bg-gray-100/80 backdrop-blur-sm text-[#1c1c1e]/80 rounded-lg border border-gray-200/50">
          <span className="text-sm font-medium">
            {service.duration}
          </span>
        </div>

        {/* Chevron */}
        <ChevronDown className={`h-5 w-5 text-[#1c1c1e]/60 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`} />
      </div>
    </div>
  );
});

ServiceCardHeader.displayName = 'ServiceCardHeader';
export default ServiceCardHeader;
