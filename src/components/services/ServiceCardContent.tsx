
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Service {
  aboutService: string;
  keyFeatures: string[];
  technologies: string[];
  highlights: string[];
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
    <div className="px-6 pb-6 space-y-6 border-t border-gray-200/40">
      {/* About Service */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          🧾 About This Service
        </h4>
        <p className="text-gray-700 leading-relaxed">
          {service.aboutService}
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          ✅ Key Features
        </h4>
        <ul className="space-y-2">
          {service.keyFeatures.map((feature, idx) => (
            <li key={idx} className="text-gray-700 flex items-start gap-3">
              <span className={`${accent.text} mt-1 flex-shrink-0`}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          🧰 Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, idx) => (
            <Badge key={idx} className={`px-3 py-1 rounded-full ${accent.bg} ${accent.text} border ${accent.border} hover:bg-opacity-80 transition-colors`}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          🎯 Service Highlights
        </h4>
        <ul className="space-y-2">
          {service.highlights.map((highlight, idx) => (
            <li key={idx} className="text-gray-700 flex items-start gap-3">
              <span className={`${accent.text} mt-1 flex-shrink-0`}>→</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button className={`bg-gradient-to-r ${accent.gradient} text-white hover:opacity-90 transition-all duration-200 hover:scale-105`}>
          🔘 View Details
        </Button>
        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200 hover:scale-105">
          Get Quote
        </Button>
      </div>
    </div>
  );
});

ServiceCardContent.displayName = 'ServiceCardContent';
export default ServiceCardContent;
