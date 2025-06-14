
import { memo } from 'react';
import { servicesData } from '../services/ServicesData';
import ServicePageCard from '../services/ServicePageCard';

interface ServicesOverviewProps {
  isVisible: boolean;
}

const ServicesOverview = memo(({ isVisible }: ServicesOverviewProps) => {
  return (
    <div className={`mb-16 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
      <div className="text-center mb-12">
        <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Our Services
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive digital solutions with professional design excellence and enhanced performance.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        {servicesData.map((service, index) => (
          <ServicePageCard 
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  );
});

ServicesOverview.displayName = 'ServicesOverview';
export default ServicesOverview;
