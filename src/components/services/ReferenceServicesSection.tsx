
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
      className="py-16 md:py-20 relative min-h-screen"
      style={{ backgroundColor: '#f5f7fa' }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-gray-900 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our Services
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide px-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{
            animationDelay: '0.2s'
          }}>
            Comprehensive digital solutions with professional design excellence and enhanced performance.
          </p>
        </div>

        {/* Services Grid - Single Column */}
        <div className="space-y-0">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className={`transform transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} 
              style={{
                animationDelay: `${0.4 + index * 0.1}s`,
                willChange: isVisible ? 'auto' : 'transform, opacity'
              }}
            >
              <Suspense 
                fallback={
                  <div className="bg-white rounded-xl shadow-sm h-32 flex items-center justify-center mb-6">
                    <span className="text-gray-500">Loading service...</span>
                  </div>
                }
              >
                <ReferenceServiceCard 
                  service={service} 
                  index={index} 
                />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ReferenceServicesSection.displayName = 'ReferenceServicesSection';
export default ReferenceServicesSection;
