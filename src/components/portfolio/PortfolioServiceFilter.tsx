
import { Service } from '@/data/projects';

interface PortfolioServiceFilterProps {
  services: Service[];
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
  totalProjects: number;
}

const PortfolioServiceFilter = ({ 
  services, 
  selectedService, 
  setSelectedService, 
  totalProjects 
}: PortfolioServiceFilterProps) => {
  const colorClasses = {
    cyan: 'bg-cyan-100 border-cyan-300 text-cyan-700',
    blue: 'bg-blue-100 border-blue-300 text-blue-700',
    purple: 'bg-purple-100 border-purple-300 text-purple-700',
    pink: 'bg-pink-100 border-pink-300 text-pink-700',
    green: 'bg-green-100 border-green-300 text-green-700',
  };

  return (
    <div className="mb-16">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setSelectedService(null)}
          className={`px-6 py-3 rounded-xl border transition-all duration-300 font-medium ${
            selectedService === null
              ? 'bg-blue-100 border-blue-300 text-blue-700 shadow-md'
              : 'border-gray-300 text-gray-600 bg-white hover:border-gray-400 hover:text-gray-700 hover:shadow-sm'
          }`}
        >
          All Projects ({totalProjects})
        </button>
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`px-6 py-3 rounded-xl border transition-all duration-300 font-medium flex items-center space-x-2 ${
              selectedService === service.id
                ? `${colorClasses[service.color]} shadow-md`
                : 'border-gray-300 text-gray-600 bg-white hover:border-gray-400 hover:text-gray-700 hover:shadow-sm'
            }`}
          >
            <service.icon className="h-4 w-4" />
            <span>{service.title} ({service.projects.length})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioServiceFilter;
