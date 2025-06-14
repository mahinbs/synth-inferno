
import { memo } from 'react';
import { servicesData } from '@/components/services/ServicesData';
import ServicePageCard from '@/components/services/ServicePageCard';

const ServicesPage = memo(() => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      {/* Header Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-gray-900">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed tracking-wide px-4">
              Comprehensive digital solutions with professional design excellence and enhanced performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Services Grid - Single Column with Enhanced Spacing */}
          <div className="space-y-8">
            {servicesData.map((service, index) => (
              <ServicePageCard 
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

ServicesPage.displayName = 'ServicesPage';
export default ServicesPage;
