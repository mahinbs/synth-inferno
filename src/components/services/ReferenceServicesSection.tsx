
import { useState, useEffect, memo, Suspense, lazy } from 'react';
import { servicesData } from './ServicesData';

// Lazy load the service card for better performance
const ReferenceServiceCard = lazy(() => import('./ReferenceServiceCard'));

const ReferenceServicesSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.05,
      rootMargin: '50px'
    });

    const section = document.getElementById('reference-services');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="reference-services" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions with professional design excellence and enhanced performance.
          </p>
        </div>

        <div className="space-y-6">
          {servicesData.map((service, index) => (
            <Suspense key={service.id} fallback={<div className="h-40 bg-gray-100 rounded-xl animate-pulse" />}>
              <ReferenceServiceCard 
                service={service}
                index={index}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
});

ReferenceServicesSection.displayName = 'ReferenceServicesSection';
export default ReferenceServicesSection;
