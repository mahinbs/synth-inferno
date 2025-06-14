
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
    <section
      id="reference-services"
      className="py-20 relative overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI and development solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {servicesData.map((service, index) => (
            <Suspense 
              key={service.id} 
              fallback={
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-48 flex items-center justify-center">
                  <span className="text-gray-500">Loading service...</span>
                </div>
              }
            >
              <ReferenceServiceCard
                service={service}
                index={index}
                isVisible={isVisible}
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
