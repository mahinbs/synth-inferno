
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
  backgroundImage: string;
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

  // Map service IDs to portfolio service IDs
  const servicePortfolioMapping = {
    'web-applications': 'web-apps',
    'saas-solutions': 'saas',
    'mobile-applications': 'mobile-apps',
    'ai-calling-agency': 'ai-calling',
    'ai-automation': 'ai-automation'
  };

  const portfolioServiceId = servicePortfolioMapping[service.id as keyof typeof servicePortfolioMapping] || service.id;

  return (
    <div 
      className="px-6 pb-6 space-y-6 border-t border-gray-200/30 relative overflow-hidden"
      style={{
        willChange: 'transform',
        contain: 'layout style paint'
      }}
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${service.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light',
          filter: 'blur(1px)',
          transform: 'scale(1.1)',
          willChange: 'auto'
        }}
      />
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
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
          serviceId={portfolioServiceId} 
          projects={allProjects}
        />

        {/* Single Action Button - Get Quote Only */}
        <div className="pt-6 border-t border-gray-200/30">
          <Button 
            className="w-full bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 font-medium shadow-sm"
          >
            💬 Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
});

ServiceCardContent.displayName = 'ServiceCardContent';
export default ServiceCardContent;
