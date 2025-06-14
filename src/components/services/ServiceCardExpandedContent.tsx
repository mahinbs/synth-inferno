
import { memo } from 'react';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';
import { ServiceData } from './ServicesData';
import { Project } from '@/data/projects';
import ServicePortfolioPreviews from './ServicePortfolioPreviews';
import ServiceCardActionButtons from './ServiceCardActionButtons';

interface ServiceCardExpandedContentProps {
  service: ServiceData;
  isExpanded: boolean;
  onContentMouseEnter: () => void;
  onContentMouseLeave: () => void;
  allProjects: Project[];
}

// Map service IDs to their route paths
const getServiceRoute = (serviceId: string): string => {
  const routeMap: Record<string, string> = {
    'web-apps': '/services/web-applications',
    'saas': '/services/saas',
    'mobile-apps': '/services/mobile-apps',
    'ai-calling': '/services/ai-calling',
    'ai-automation': '/services/ai-automation',
    'sales-force': '/services/sales-force'
  };
  
  return routeMap[serviceId] || '/services/web-applications';
};

const ServiceCardExpandedContent = memo(({
  service,
  isExpanded,
  onContentMouseEnter,
  onContentMouseLeave,
  allProjects
}: ServiceCardExpandedContentProps) => {
  const serviceRoute = getServiceRoute(service.id);

  return (
    <div 
      className={`overflow-hidden transition-all duration-500 ease-out ${
        isExpanded 
          ? "max-h-[1000px] opacity-100 transform translate-y-0" 
          : "max-h-0 opacity-0 transform -translate-y-2"
      }`}
      style={{
        contentVisibility: isExpanded ? 'visible' : 'hidden'
      }}
      onMouseEnter={onContentMouseEnter}
      onMouseLeave={onContentMouseLeave}
    >
      <div className="glassmorphic-content mt-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold glass-text-primary mb-3">
                About This Service
              </h4>
              <p className="glass-text-secondary leading-relaxed">
                {service.detailedDescription}
              </p>
            </div>

            {/* Mobile Price/Timeline */}
            <div className="md:hidden flex space-x-4">
              <div className="glass-tag px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-blue-600" />
                <span className="glass-text-accent">{service.startingPrice}</span>
              </div>
              <div className="glass-tag px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <Clock className="h-4 w-4 text-purple-600" />
                <span className="glass-text-accent">{service.timeline}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Key Features */}
            <div>
              <h4 className="text-lg font-semibold glass-text-primary mb-4">
                Key Features
              </h4>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="glass-text-secondary flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold glass-text-primary mb-4">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="glass-tag px-3 py-1 rounded-full text-sm transition-colors duration-200 hover:bg-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons with glassmorphic styling */}
            <div className="flex space-x-4 pt-4">
              <ServiceCardActionButtons 
                learnMorePath={serviceRoute}
                serviceTitle={service.title}
              />
            </div>
          </div>
        </div>

        {/* Project Previews Section */}
        {isExpanded && (
          <div className="mt-8">
            <ServicePortfolioPreviews 
              serviceId={service.id} 
              projects={allProjects} 
            />
          </div>
        )}

        {/* See All Projects Link */}
        {isExpanded && (
          <div className="mt-6 pt-4 border-t border-white/20 text-center">
            <a 
              href={`/portfolio?service=${service.id}`} 
              className="inline-flex items-center glass-text-accent hover:glass-text-primary font-medium transition-colors duration-200"
            >
              See All {service.title} Projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
});

ServiceCardExpandedContent.displayName = 'ServiceCardExpandedContent';
export default ServiceCardExpandedContent;
