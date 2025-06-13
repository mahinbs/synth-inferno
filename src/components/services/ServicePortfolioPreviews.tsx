
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface ServicePortfolioPreviewsProps {
  serviceId: string;
  projects: Project[];
}

const ServicePortfolioPreviews = memo(({ serviceId, projects }: ServicePortfolioPreviewsProps) => {
  // Filter projects by service and limit to 2-3 featured projects
  const filteredProjects = projects.filter(project => 
    project.serviceId === serviceId
  ).slice(0, 3);

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 pt-6 border-t border-gray-200/30">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        🚀 Featured Projects
      </h4>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glassmorphic-portfolio-card group cursor-pointer"
            onClick={() => window.open(`/case-study/${project.id}`, '_blank')}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-xl mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
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
