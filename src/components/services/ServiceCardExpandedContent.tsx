
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

const getServiceRoute = (serviceId: string): string => {
  const routeMap: Record<string, string> = {
    'web-apps': '/web-apps',
    'ar-vr-development': '/ar-vr-development',
    'saas': '/saas',
    'mobile-apps': '/mobile-apps',
    'ai-calling': '/ai-calling',
    'ai-automation': '/ai-automation',
    'chatbot-development': '/chatbot-development',
    'sales-force': '/sales-force',
    'game-development': '/game-development',
    'gaming-ar-vr': '/gaming-ar-vr',
    'ui-ux-design': '/ui-ux-design',
    'iot': '/iot'
  };
  
  return routeMap[serviceId] || '/web-apps';
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
      className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isExpanded 
          ? "max-h-[1000px] overflow-y-auto opacity-100 transform translate-y-0 animate-accordion-down" 
          : "max-h-0 opacity-0 transform -translate-y-4 animate-accordion-up"
      }`}
      style={{
        contentVisibility: isExpanded ? 'visible' : 'hidden',
        transformOrigin: 'top',
        willChange: 'transform, opacity, max-height'
      }}
      onMouseEnter={onContentMouseEnter}
      onMouseLeave={onContentMouseLeave}
    >
      <div className={`px-6 pb-6 border-t border-gray-200/50 mt-4 pt-6 transition-all duration-500 ease-out ${
        isExpanded ? 'animate-fade-in opacity-100' : 'opacity-0'
      }`}>
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
            {/* <div className="md:hidden flex space-x-4">
              <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
                <DollarSign className="h-4 w-4 text-blue-600" />
                <span>{service.startingPrice}</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
                <Clock className="h-4 w-4 text-purple-600" />
                <span>{service.timeline}</span>
              </div>
            </div> */}
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
                  <li 
                    key={idx} 
                    className={`text-gray-700 flex items-center transition-all duration-300 ease-out ${
                      isExpanded ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ 
                      animationDelay: `${idx * 100 + 200}ms`,
                      transitionDelay: `${idx * 50}ms`
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 transition-transform duration-300 hover:scale-125" />
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
                    className={`px-3 py-1 rounded-full text-sm bg-gray-100/80 border border-gray-200/80 text-gray-700 hover:bg-gray-200/60 transition-all duration-300 hover:scale-105 hover:shadow-sm ${
                      isExpanded ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ 
                      animationDelay: `${idx * 50 + 400}ms`,
                      transitionDelay: `${idx * 30}ms`
                    }}
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
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <ServicePortfolioPreviews 
              serviceId={service.id} 
              projects={allProjects} 
            />
          </div>
        )}

        {/* See All Projects Link */}
        {isExpanded && (
          <div className="mt-6 pt-4 border-t border-gray-200/30 text-center animate-fade-in" style={{ animationDelay: '700ms' }}>
            <a 
              href={`/portfolio?service=${service.id}`} 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105 hover:translate-x-1"
            >
              See All {service.title} Projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
});

ServiceCardExpandedContent.displayName = 'ServiceCardExpandedContent';
export default ServiceCardExpandedContent;
