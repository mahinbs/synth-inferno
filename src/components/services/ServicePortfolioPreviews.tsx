
import { memo, useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface ServicePortfolioPreviewsProps {
  serviceId: string;
  projects: Project[];
}

const ServicePortfolioPreviews = memo(({ serviceId, projects }: ServicePortfolioPreviewsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Filter projects by service and limit to 2-3 featured projects
  const filteredProjects = projects.filter(project => 
    project.serviceId === serviceId
  ).slice(0, 3);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (filteredProjects.length === 0) {
    return null;
  }

  // Get project type based on service and project
  const getProjectType = (project: Project) => {
    if (project.industry) return project.industry;
    if (project.title.toLowerCase().includes('ecommerce') || project.title.toLowerCase().includes('retail')) return 'E-commerce';
    if (project.title.toLowerCase().includes('healthcare') || project.title.toLowerCase().includes('medical')) return 'Healthcare';
    if (project.title.toLowerCase().includes('education') || project.title.toLowerCase().includes('learning')) return 'EdTech';
    if (project.title.toLowerCase().includes('saas') || project.title.toLowerCase().includes('platform')) return 'SAAS Platform';
    return 'Enterprise';
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-200/30">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        🚀 Featured Projects
      </h4>
      
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`glassmorphic-portfolio-card group cursor-pointer transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
              willChange: 'transform, opacity',
              contain: 'layout style paint'
            }}
            onClick={() => window.open(`/case-study/${project.id}`, '_blank')}
          >
            {/* Project Type Badge */}
            <div className="absolute top-3 right-3 z-10">
              <Badge className="text-xs px-2 py-1 bg-white/90 text-gray-700 border border-gray-200/60 backdrop-blur-sm">
                {getProjectType(project)}
              </Badge>
            </div>

            {/* Project Image */}
            <div className="relative overflow-hidden rounded-xl mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                style={{
                  willChange: 'transform',
                  transform: 'translate3d(0, 0, 0)',
                  containIntrinsicSize: '1px 128px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="space-y-2">
              <h5 className="font-semibold text-gray-900 text-sm line-clamp-1 group-hover:text-blue-700 transition-colors duration-200">
                {project.title}
              </h5>
              
              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <Badge 
                    key={idx}
                    className="text-xs px-2 py-0.5 bg-blue-50/80 text-blue-700 border border-blue-200/60 hover:bg-blue-100/80 transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge className="text-xs px-2 py-0.5 bg-gray-50/80 text-gray-600 border border-gray-200/60">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>

              {/* View Project Button */}
              <Button
                size="sm"
                variant="ghost"
                className="w-full text-xs mt-2 h-7 text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 transition-all duration-200 group-hover:bg-blue-100/60"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                View Case Study
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

ServicePortfolioPreviews.displayName = 'ServicePortfolioPreviews';
export default ServicePortfolioPreviews;
