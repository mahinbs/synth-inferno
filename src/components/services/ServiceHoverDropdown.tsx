
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
    let classes = 'absolute z-[100] w-full max-w-lg bg-white border border-gray-200/80 rounded-xl shadow-xl transition-all duration-300 ease-out transform';
    
    // Enhanced animation classes
    classes += ' animate-fade-in-up';
    
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
    let classes = 'absolute w-3 h-3 bg-white border border-gray-200/80 transform rotate-45';
    
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
      
      <div className="p-6 space-y-5 relative z-10">
        {/* About This Service */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            📋 About This Service
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {service.aboutService.length > 150 
              ? `${service.aboutService.substring(0, 150)}...` 
              : service.aboutService
            }
          </p>
        </div>
        
        {/* Key Features */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            ✅ Key Features
          </h4>
          <ul className="space-y-2">
            {service.keyFeatures.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                <span className={`${accent.text} mt-0.5 flex-shrink-0 text-xs`}>•</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technologies Used */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            🔧 Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.slice(0, 5).map((tech, idx) => (
              <Badge 
                key={idx} 
                className={`text-xs px-2.5 py-1 rounded-full ${accent.bg} ${accent.text} border ${accent.border} hover:opacity-80 transition-opacity duration-200`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <Button 
            size="sm" 
            className={`flex-1 bg-gradient-to-r ${accent.gradient} text-white hover:opacity-90 text-xs px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-md font-medium`}
          >
            View Details
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 text-xs px-4 py-2.5 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02] hover:border-gray-400 font-medium"
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
