
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ServicePortfolioPreviews from './ServicePortfolioPreviews';
import { projectsData } from '@/data/projects';
import { openZohoForm } from '@/utils/zohoForm';

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
        className="absolute inset-0 opacity-10 pointer-events-none"
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
        {/* Mobile Scrollable Container */}
        <div className="md:space-y-6">
          <div className="md:hidden max-h-[220px] overflow-y-auto space-y-6 pr-2 scrollbar-none hover:scrollbar-thin hover:scrollbar-thumb-blue-400/60 hover:scrollbar-track-transparent scroll-smooth" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* About Service */}
            <div className="pt-6">
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
                ✨ Key Features
              </h4>
              <ul className="space-y-2">
                {service.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-3 text-sm">
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
                    className="px-2.5 py-1 rounded-full bg-gray-100/80 text-gray-700 border border-gray-200/60 hover:bg-gray-200/60 transition-all duration-200 font-medium text-xs"
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
                  <li key={idx} className="text-gray-700 flex items-start gap-3 text-sm">
                    <span className={`${accent.text} mt-1 flex-shrink-0 font-medium`}>→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio Previews */}
            <div className="pb-4">
              <ServicePortfolioPreviews 
                serviceId={portfolioServiceId} 
                projects={allProjects}
              />
            </div>
          </div>

          {/* Desktop Non-Scrollable Content */}
          <div className="hidden md:block space-y-6">
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
          </div>
        </div>

        {/* Single Action Button - Always Visible */}
        <div className="pt-4 border-t border-gray-200/30 sticky bottom-0 bg-white/95 backdrop-blur-sm -mx-6 px-6 pb-6 mt-6">
          <Button 
            onClick={() => openZohoForm(`services-${service.id}`)}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-400 hover:to-blue-500 transition-all duration-200 font-medium shadow-sm"
            aria-label={`Get quote for service`}
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
