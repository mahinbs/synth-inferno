
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Service } from '@/data/projects';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface PortfolioProjectsGridProps {
  services: Service[];
  selectedService: string | null;
  handleProjectClick: (projectId: string) => void;
}

const PortfolioProjectsGrid = ({ 
  services, 
  selectedService, 
  handleProjectClick 
}: PortfolioProjectsGridProps) => {
  const colorClasses = {
    cyan: {
      border: 'border-cyan-200',
      gradient: 'from-cyan-50 to-cyan-100',
      icon: 'bg-cyan-100 text-cyan-600 border-cyan-200',
      text: 'text-cyan-600',
      button: 'bg-cyan-100 border-cyan-200 text-cyan-700 hover:bg-cyan-200',
      tag: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    },
    blue: {
      border: 'border-blue-200',
      gradient: 'from-blue-50 to-blue-100',
      icon: 'bg-blue-100 text-blue-600 border-blue-200',
      text: 'text-blue-600',
      button: 'bg-blue-100 border-blue-200 text-blue-700 hover:bg-blue-200',
      tag: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    purple: {
      border: 'border-purple-200',
      gradient: 'from-purple-50 to-purple-100',
      icon: 'bg-purple-100 text-purple-600 border-purple-200',
      text: 'text-purple-600',
      button: 'bg-purple-100 border-purple-200 text-purple-700 hover:bg-purple-200',
      tag: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    pink: {
      border: 'border-pink-200',
      gradient: 'from-pink-50 to-pink-100',
      icon: 'bg-pink-100 text-pink-600 border-pink-200',
      text: 'text-pink-600',
      button: 'bg-pink-100 border-pink-200 text-pink-700 hover:bg-pink-200',
      tag: 'bg-pink-50 text-pink-700 border-pink-200'
    },
    green: {
      border: 'border-green-200',
      gradient: 'from-green-50 to-green-100',
      icon: 'bg-green-100 text-green-600 border-green-200',
      text: 'text-green-600',
      button: 'bg-green-100 border-green-200 text-green-700 hover:bg-green-200',
      tag: 'bg-green-50 text-green-700 border-green-200'
    },
  };

  return (
    <div className="space-y-20">
      {services
        .filter(service => !selectedService || service.id === selectedService)
        .map((service) => {
          const colors = colorClasses[service.color];
          
          return (
            <div key={service.id} className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-xl ${colors.icon} border flex items-center justify-center shadow-sm`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{service.projects.length} projects completed</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {service.projects.map((project) => (
                  <div
                    key={project.id}
                    className={`group relative rounded-2xl bg-white/90 backdrop-blur-sm border ${colors.border} hover:bg-white transition-all duration-500 overflow-hidden cursor-pointer hover:transform hover:scale-105 hover:shadow-xl`}
                    onClick={() => handleProjectClick(project.id)}
                    style={{
                      willChange: 'transform, opacity',
                      contentVisibility: 'auto'
                    }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-40`}></div>
                      <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg ${colors.icon} border flex items-center justify-center shadow-sm`}>
                        <service.icon className="h-5 w-5" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded text-xs ${colors.tag} border shadow-sm`}>
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:${colors.text} transition-colors duration-300`}>
                            {project.title}
                          </h3>
                          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <Link 
                          to={`/case-study/${project.id}`}
                          className={`px-3 py-1 rounded-lg text-xs ${colors.tag} border font-medium hover:scale-105 transition-transform duration-200 shadow-sm`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Study
                        </Link>
                      </div>

                      {/* Quick Metrics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                          <span key={key} className={`px-3 py-1 rounded-full text-xs ${colors.tag} border shadow-sm`}>
                            {key}: {String(value)}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <Link 
                        to={`/case-study/${project.id}`}
                        className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl ${colors.button} border font-medium transition-all duration-300 hover:transform hover:scale-105 mt-4 shadow-sm`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View Full Case Study</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PortfolioProjectsGrid;
