
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

const ServiceHoverDropdown = memo(({
  service,
  accent,
  position
}: ServiceHoverDropdownProps) => {
  const getPositionClasses = () => {
    let classes = 'absolute z-[100] w-full max-w-lg bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-xl shadow-xl transition-all duration-300 ease-out transform';

    // Enhanced animation classes with slide effect
    classes += ' animate-in fade-in-0 slide-in-from-bottom-2 duration-300';
    
    if (position.shouldPositionAbove) {
      classes += ' bottom-full mb-3';
    } else {
      classes += ' top-full mt-3';
    }
    
    if (position.shouldPositionLeft) {
      classes += ' right-0';
    } else {
      classes += ' left-0';
    }
    
    return classes;
  };

  const getArrowClasses = () => {
    let classes = 'absolute w-3 h-3 bg-white/95 border border-gray-200/80 transform rotate-45 z-[99]';
    
    if (position.shouldPositionAbove) {
      classes += ' top-full -mt-1.5 border-t-0 border-l-0';
    } else {
      classes += ' bottom-full -mb-1.5 border-b-0 border-r-0';
    }
    
    if (position.shouldPositionLeft) {
      classes += ' right-6';
    } else {
      classes += ' left-6';
    }
    
    return classes;
  };

  return (
    <div className={getPositionClasses()}>
      {/* Enhanced arrow with better styling */}
      <div className={getArrowClasses()} />
      
      {/* Dropdown Content */}
      <div className="p-6 space-y-6">
        {/* About Service */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            📋 About This Service
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm">
            {service.aboutService}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            ✅ Key Features
          </h4>
          <ul className="space-y-2">
            {service.keyFeatures.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="text-gray-700 flex items-start gap-3 text-sm">
                <span className={`${accent.text} mt-1 flex-shrink-0`}>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            🔧 Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.slice(0, 6).map((tech, idx) => (
              <Badge 
                key={idx} 
                className={`px-2 py-1 text-xs rounded-full ${accent.bg} ${accent.text} border ${accent.border} hover:bg-opacity-80 transition-colors`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button 
            size="sm"
            className={`bg-gradient-to-r ${accent.gradient} text-white hover:opacity-90 transition-all duration-200 hover:scale-105 flex-1`}
          >
            View Details
          </Button>
          <Button 
            size="sm"
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200 hover:scale-105 flex-1"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
});

ServiceHoverDropdown.displayName = 'ServiceHoverDropdown';
export default ServiceHoverDropdown;
