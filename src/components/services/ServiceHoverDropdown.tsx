
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Service {
  aboutService: string;
  keyFeatures: string[];
  technologies: string[];
}

interface CategoryAccent {
  gradient: string;
  border: string;
  bg: string;
  text: string;
}

interface DropdownPosition {
  shouldPositionAbove: boolean;
  shouldPositionLeft: boolean;
}

interface ServiceHoverDropdownProps {
  service: Service;
  accent: CategoryAccent;
  position: DropdownPosition;
}

const ServiceHoverDropdown = memo(({ service, accent, position }: ServiceHoverDropdownProps) => {
  const getPositionClasses = () => {
    let classes = 'absolute z-[100] w-full max-w-lg bg-white border border-gray-300 rounded-xl p-6 shadow-2xl transition-all duration-300 ease-in-out';
    
    if (position.shouldPositionAbove) {
      classes += ' bottom-full mb-2';
    } else {
      classes += ' top-full mt-2';
    }
    
    if (position.shouldPositionLeft) {
      classes += ' right-0';
    } else {
      classes += ' left-0';
    }
    
    return classes;
  };

  return (
    <div className={getPositionClasses()}>
      {/* Position indicator arrow */}
      <div className={`absolute w-3 h-3 bg-white border transform rotate-45 ${
        position.shouldPositionAbove 
          ? 'top-full -mt-1.5 border-t-0 border-l-0' 
          : 'bottom-full -mb-1.5 border-b-0 border-r-0'
      } ${
        position.shouldPositionLeft ? 'right-6' : 'left-6'
      } border-gray-300`} />
      
      <div className="space-y-4 relative z-10">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            🧾 About This Service
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {service.aboutService.substring(0, 120)}...
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            ✅ Key Features
          </h4>
          <ul className="space-y-1">
            {service.keyFeatures.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                <span className={`${accent.text} mt-1 flex-shrink-0`}>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            🧰 Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.slice(0, 4).map((tech, idx) => (
              <Badge key={idx} className={`text-xs px-3 py-1 rounded-full ${accent.bg} ${accent.text} border ${accent.border} hover:bg-opacity-80 transition-colors`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 pt-3 border-t border-gray-200">
          <Button size="sm" className={`bg-gradient-to-r ${accent.gradient} text-white hover:opacity-90 text-xs px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105`}>
            🔘 View Details
          </Button>
          <Button size="sm" variant="outline" className="text-xs px-4 py-2 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200 hover:scale-105">
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
});

ServiceHoverDropdown.displayName = 'ServiceHoverDropdown';
export default ServiceHoverDropdown;
