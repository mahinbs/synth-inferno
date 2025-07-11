
import { Code, Cloud, Brain, Smartphone, Zap } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Service {
  id: string;
  title: string;
  color: 'slate' | 'gray' | 'stone' | 'zinc' | 'neutral';
  projects: any[];
}

interface ProjectGridProps {
  services: Service[];
  selectedService: string | null;
  isVisible: boolean;
  handleProjectClick: (projectId: string) => void;
}

const ProjectGrid = ({ services, selectedService, isVisible, handleProjectClick }: ProjectGridProps) => {
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'web-apps': return Code;
      case 'saas': return Cloud;
      case 'mobile-apps': return Smartphone;
      case 'ai-calling': return Brain;
      case 'ai-automation': return Zap;
      default: return Code;
    }
  };

  const colorClasses = {
    slate: {
      border: 'border-slate-400/30',
      gradient: 'from-slate-400/10 to-slate-600/10',
      icon: 'bg-slate-500/10 text-slate-400 border-slate-400/30',
      text: 'text-slate-400',
      button: 'bg-slate-500/20 border-slate-400/30 text-slate-400 hover:bg-slate-500/30',
      tag: 'bg-slate-500/20 text-slate-300 border-slate-500/30'
    },
    gray: {
      border: 'border-gray-400/30',
      gradient: 'from-gray-400/10 to-gray-600/10',
      icon: 'bg-gray-500/10 text-gray-400 border-gray-400/30',
      text: 'text-gray-400',
      button: 'bg-gray-500/20 border-gray-400/30 text-gray-400 hover:bg-gray-500/30',
      tag: 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    },
    stone: {
      border: 'border-stone-400/30',
      gradient: 'from-stone-400/10 to-stone-600/10',
      icon: 'bg-stone-500/10 text-stone-400 border-stone-400/30',
      text: 'text-stone-400',
      button: 'bg-stone-500/20 border-stone-400/30 text-stone-400 hover:bg-stone-500/30',
      tag: 'bg-stone-500/20 text-stone-300 border-stone-500/30'
    },
    zinc: {
      border: 'border-zinc-400/30',
      gradient: 'from-zinc-400/10 to-zinc-600/10',
      icon: 'bg-zinc-500/10 text-zinc-400 border-zinc-400/30',
      text: 'text-zinc-400',
      button: 'bg-zinc-500/20 border-zinc-400/30 text-zinc-400 hover:bg-zinc-500/30',
      tag: 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30'
    },
    neutral: {
      border: 'border-neutral-400/30',
      gradient: 'from-neutral-400/10 to-neutral-600/10',
      icon: 'bg-neutral-500/10 text-neutral-400 border-neutral-400/30',
      text: 'text-neutral-400',
      button: 'bg-neutral-500/20 border-neutral-400/30 text-neutral-400 hover:bg-neutral-500/30',
      tag: 'bg-neutral-500/20 text-neutral-300 border-neutral-500/30'
    }
  };

  return (
    <div className="space-y-16">
      {services
        .filter(service => service.projects.length > 0) // Only show services with projects
        .filter(service => !selectedService || service.id === selectedService)
        .map((service, serviceIndex) => {
          const colors = colorClasses[service.color];
          const ServiceIcon = getServiceIcon(service.id);
          
          return (
            <div key={service.id} className="space-y-8">
              <div className={`flex items-center space-x-4 mb-8 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${serviceIndex * 200 + 400}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${colors.icon} border flex items-center justify-center`}>
                  <ServiceIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black">{service.title}</h3>
                  <p className="text-gray-400 mt-1">{service.projects.length} featured projects</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {service.projects.map((project, projectIndex) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    service={service}
                    colors={colors}
                    ServiceIcon={ServiceIcon}
                    isVisible={isVisible}
                    handleProjectClick={handleProjectClick}
                    animationDelay={serviceIndex * 200 + projectIndex * 150 + 600}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectGrid;
