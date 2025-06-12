
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

interface ServiceHoverDropdownProps {
  service: Service;
  accent: CategoryAccent;
  isLastCard?: boolean;
}

const ServiceHoverDropdown = memo(({ service, accent, isLastCard = false }: ServiceHoverDropdownProps) => {
  return (
    <div className={`absolute top-full z-50 mt-2 w-full max-w-lg bg-white border border-gray-300 rounded-xl p-6 shadow-2xl animate-fade-in-up transition-all duration-300 ease-in-out ${
      isLastCard ? 'right-0 left-auto' : 'left-0 right-0'
    }`}>
      <div className="space-y-4">
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
