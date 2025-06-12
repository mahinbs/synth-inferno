
import { memo } from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';
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

interface ServiceCardContentProps {
  service: Service;
  accent: CategoryAccent;
}

const ServiceCardContent = memo(({ service, accent }: ServiceCardContentProps) => {
  return (
    <div className="px-6 pb-6 border-t border-gray-200/40">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        
        {/* About This Service */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[#1c1c1e] flex items-center gap-2">
            🧾 About This Service
          </h4>
          <p className="text-[#1c1c1e]/80 text-sm leading-relaxed">
            {service.aboutService}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[#1c1c1e] flex items-center gap-2">
            ✅ Key Features
          </h4>
          <ul className="space-y-2">
            {service.keyFeatures.map((feature, idx) => (
              <li key={idx} className="text-[#1c1c1e]/80 text-sm flex items-start gap-2">
                <span className={`${accent.text} mt-1 flex-shrink-0`}>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[#1c1c1e] flex items-center gap-2">
            🧰 Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, idx) => (
              <Badge 
                key={idx} 
                className={`${accent.bg} ${accent.border} ${accent.text} hover:bg-opacity-80 transition-colors rounded-full px-3 py-1`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-200/40">
        <Button 
          className={`bg-gradient-to-r ${accent.gradient} text-white hover:opacity-90 transition-all duration-200 hover:scale-105 flex items-center gap-2 rounded-lg`}
        >
          <ExternalLink className="h-4 w-4" />
          🔘 View Details
        </Button>
        <Button 
          variant="outline" 
          className="border-gray-300 text-[#1c1c1e]/80 hover:bg-gray-100/60 hover:text-[#1c1c1e] transition-all duration-200 hover:scale-105 flex items-center gap-2 rounded-lg"
        >
          <MessageCircle className="h-4 w-4" />
          Get Quote
        </Button>
      </div>
    </div>
  );
});

ServiceCardContent.displayName = 'ServiceCardContent';
export default ServiceCardContent;
