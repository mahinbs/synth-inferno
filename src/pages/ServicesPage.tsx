
import { memo } from 'react';
import { servicesData } from '@/components/services/ServicesData';
import ServicePageCard from '@/components/services/ServicePageCard';

const ServicesPage = memo(() => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      {/* Header Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-gray-900">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide px-4">
              Comprehensive digital solutions with professional design excellence and enhanced performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Services Grid - Single Column */}
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
      </section>
    </div>
  );
});

ServicesPage.displayName = 'ServicesPage';
export default ServicesPage;
