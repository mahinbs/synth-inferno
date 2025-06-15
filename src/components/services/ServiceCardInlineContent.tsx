
import { memo } from 'react';
import { ServiceData } from './ServicesData';
import { Project } from '@/data/projects';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ServiceCardInlineContentProps {
  service: ServiceData;
  isExpanded: boolean;
  portfolioProjects: Project[];
}

const ServiceCardInlineContent = memo(({
  service,
  isExpanded,
  portfolioProjects
}: ServiceCardInlineContentProps) => {
  return (
    <div 
      className={`
        transition-all duration-300 ease-out overflow-hidden
        ${isExpanded 
          ? 'max-h-[800px] opacity-100 transform translate-y-0' 
          : 'max-h-0 opacity-0 transform -translate-y-2'
        }
      `}
      style={{
        willChange: isExpanded ? 'max-height, opacity, transform' : 'auto'
      }}
    >
      <div className="border-t border-gray-200 bg-gray-50/50">
        <div className="p-6 space-y-6">
          {/* About This Service */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              📋 About This Service
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {service.detailedDescription || service.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              ✨ Key Features
            </h4>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-3">
                  <span className="text-blue-600 mt-1 flex-shrink-0 font-medium">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              🛠️ Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, idx) => (
                <Badge 
                  key={idx} 
                  className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-all duration-200 font-medium text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Portfolio Preview */}
          {portfolioProjects.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                🎯 Recent Work
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {portfolioProjects.slice(0, 2).map((project) => (
                  <div key={project.id} className="p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <h5 className="font-medium text-gray-900 mb-1">{project.title}</h5>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <Button 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Learn More
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceCardInlineContent.displayName = 'ServiceCardInlineContent';
export default ServiceCardInlineContent;
