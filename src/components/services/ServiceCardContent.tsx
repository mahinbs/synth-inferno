
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ServicePortfolioPreviews from './ServicePortfolioPreviews';
import { projectsData } from '@/data/projects';

interface Service {
  aboutService: string;
  keyFeatures: string[];
  technologies: string[];
  highlights: string[];
  id: string;
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
  // Get all projects for portfolio previews
  const allProjects = projectsData.flatMap(serviceData => serviceData.projects);

  return (
    <div className="px-6 pb-6 space-y-6 border-t border-gray-200/30">
      {/* About Service */}
      <div className="pt-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          📋 About This Service
        </h4>
        <p className="text-gray-700 leading-relaxed">
          {service.aboutService}
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          ✨ Key Features
        </h4>
        <ul className="space-y-2">
          {service.keyFeatures.map((feature, idx) => (
            <li key={idx} className="text-gray-700 flex items-start gap-3">
              <span className={`${accent.text} mt-1 flex-shrink-0 font-medium`}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          🛠️ Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, idx) => (
            <Badge 
              key={idx} 
              className="px-3 py-1.5 rounded-full bg-gray-100/80 text-gray-700 border border-gray-200/60 hover:bg-gray-200/60 transition-all duration-200 font-medium text-sm"
            >
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
              <span className={`${accent.text} mt-1 flex-shrink-0 font-medium`}>→</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Portfolio Previews */}
      <ServicePortfolioPreviews 
        serviceId={service.id} 
        projects={allProjects}
      />

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button 
          className="flex-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200/60 hover:from-purple-200 hover:to-blue-200 hover:text-purple-800 transition-all duration-200 hover:scale-[1.02] transform font-medium shadow-sm"
          style={{ backgroundColor: '#f4efff' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e5dcff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f4efff';
          }}
        >
          📖 View Details
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-[1.02] transform font-medium shadow-sm"
        >
          💬 Get Quote
        </Button>
      </div>
    </div>
  );
});

ServiceCardContent.displayName = 'ServiceCardContent';
export default ServiceCardContent;
