
import { memo } from 'react';
import { ServiceData } from './ServicesData';
import { Project } from '@/data/projects';
import { Button } from '../ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';

interface ServiceCardDropdownProps {
  service: ServiceData;
  portfolioProjects: Project[];
  isVisible: boolean;
}

const ServiceCardDropdown = memo(({ service, portfolioProjects, isVisible }: ServiceCardDropdownProps) => {
  // Get key features/bullet points for the service
  const getServiceFeatures = (serviceId: string) => {
    switch (serviceId) {
      case 'web-apps':
        return [
          'Custom web application development',
          'E-commerce and marketplace platforms',
          'Progressive Web Apps (PWA)',
          'Real-time data integration'
        ];
      case 'saas':
        return [
          'Multi-tenant architecture',
          'Subscription and billing systems',
          'Dashboard and analytics',
          'API development and integrations'
        ];
      case 'mobile-apps':
        return [
          'Native iOS and Android apps',
          'Cross-platform development',
          'Mobile-first user experience',
          'Push notifications and offline sync'
        ];
      case 'ai-automation':
        return [
          'Machine learning model integration',
          'Automated workflow systems',
          'Natural language processing',
          'Intelligent data analysis'
        ];
      case 'ai-calling':
        return [
          'Voice AI conversation systems',
          'Automated customer service',
          'Real-time speech processing',
          'Call analytics and insights'
        ];
      default:
        return [
          'Custom solution development',
          'Modern technology stack',
          'Scalable architecture',
          'Professional implementation'
        ];
    }
  };

  const features = getServiceFeatures(service.id);
  const relatedProjects = portfolioProjects.slice(0, 2); // Show max 2 projects

  return (
    <div 
      className={`absolute top-full left-0 right-0 z-50 mt-2 transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-[-10px] pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-xl shadow-lg p-6">
        {/* Service Overview */}
        <div className="mb-5">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Overview</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Related Work Section */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-gray-200/50 pt-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Portfolio Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {relatedProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group cursor-pointer"
                  onClick={() => window.open(`/case-study/${project.id}`, '_blank')}
                >
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50/80 transition-colors duration-200">
                    <div className="w-[60px] h-[40px] overflow-hidden rounded-md flex-shrink-0">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h5>
                      <p className="text-xs text-gray-600 line-clamp-1">
                        {project.client}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <Button
              variant="outline"
              size="sm"
              className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
              onClick={() => window.location.href = `/portfolio?filter=${service.id}`}
            >
              <span>View All {service.title} Projects</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});

ServiceCardDropdown.displayName = 'ServiceCardDropdown';
export default ServiceCardDropdown;
