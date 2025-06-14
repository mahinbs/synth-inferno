
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

// Map service categories to their route paths
const getServiceRoute = (category: string): string => {
  const routeMap: Record<string, string> = {
    'web': '/services/web-applications',
    'saas': '/services/saas',
    'mobile': '/services/mobile-apps',
    'ai': '/services/ai-calling',
    'automation': '/services/ai-automation'
  };
  
  return routeMap[category] || '/services/web-applications';
};

const ServiceCardExpandedContent = memo(({
  service,
  isExpanded,
  onContentMouseEnter,
  onContentMouseLeave,
  allProjects
}: ServiceCardExpandedContentProps) => {
  const serviceRoute = getServiceRoute(service.category);

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
      <div className="px-6 pb-6 border-t border-gray-200/50 mt-4 pt-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                About This Service
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {service.detailedDescription}
              </p>
            </div>

            {/* Mobile Price/Timeline */}
            <div className="md:hidden flex space-x-4">
              <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
                <DollarSign className="h-4 w-4 text-blue-600" />
                <span>{service.startingPrice}</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
                <Clock className="h-4 w-4 text-purple-600" />
                <span>{service.timeline}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Key Features */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Key Features
              </h4>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-full text-sm bg-gray-100/80 border border-gray-200/80 text-gray-700 hover:bg-gray-200/60 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <ServiceCardActionButtons 
              learnMorePath={serviceRoute}
              serviceTitle={service.title}
            />
          </div>
        </div>

        {/* Project Previews Section */}
        {isExpanded && (
          <ServicePortfolioPreviews 
            serviceId={service.id} 
            projects={allProjects} 
          />
        )}

        {/* See All Projects Link */}
        {isExpanded && (
          <div className="mt-6 pt-4 border-t border-gray-200/30 text-center">
            <a 
              href={`/portfolio?service=${service.id}`} 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
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
