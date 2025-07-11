import { Code, Cloud, Brain, Smartphone, Zap } from 'lucide-react';
interface Service {
  id: string;
  title: string;
  color: 'slate' | 'gray' | 'stone' | 'zinc' | 'neutral';
  projects: any[];
}
interface ServiceFilterProps {
  services: Service[];
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
  isVisible: boolean;
}
const ServiceFilter = ({
  services,
  selectedService,
  setSelectedService,
  isVisible
}: ServiceFilterProps) => {
  const colorClasses = {
    slate: {
      button: 'bg-slate-500/20 border-slate-400/30 text-slate-400 hover:bg-slate-500/30'
    },
    gray: {
      button: 'bg-gray-500/20 border-gray-400/30 text-gray-400 hover:bg-gray-500/30'
    },
    stone: {
      button: 'bg-stone-500/20 border-stone-400/30 text-stone-400 hover:bg-stone-500/30'
    },
    zinc: {
      button: 'bg-zinc-500/20 border-zinc-400/30 text-zinc-400 hover:bg-zinc-500/30'
    },
    neutral: {
      button: 'bg-neutral-500/20 border-neutral-400/30 text-neutral-400 hover:bg-neutral-500/30'
    }
  };
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'web-apps':
        return Code;
      case 'saas':
        return Cloud;
      case 'mobile-apps':
        return Smartphone;
      case 'ai-calling':
        return Brain;
      case 'ai-automation':
        return Zap;
      default:
        return Code;
    }
  };
  return <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex flex-wrap justify-center gap-4">
        
        {services
          .filter(service => service.projects.length > 0) // Only show services with projects
          .map((service, index) => {
            const colors = colorClasses[service.color];
            const ServiceIcon = getServiceIcon(service.id);
            return <button 
              key={service.id} 
              onClick={() => setSelectedService(service.id)} 
              className={`px-6 py-3 rounded-xl border transition-all duration-300 font-medium flex items-center space-x-2 ${
                selectedService === service.id 
                  ? colors.button 
                  : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
              }`} 
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <ServiceIcon className="h-4 w-4" />
              <span>{service.title}</span>
            </button>;
          })
        }
      </div>
    </div>;
};
export default ServiceFilter;