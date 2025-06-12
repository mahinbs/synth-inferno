
import { useState, useEffect, memo } from 'react';
import ServiceFilter from './services/ServiceFilter';
import CollapsibleServiceCard from './services/CollapsibleServiceCard';
import { services } from './services/ServiceData';

const ServicesSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.05,
      rootMargin: '50px'
    });

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const filteredServices = activeFilter === 'all' ? services : services.filter(service => service.category === activeFilter);

  return (
    <section 
      id="services" 
      className="py-16 md:py-20 relative overflow-hidden bg-gray-50/80 backdrop-blur-[10px]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(to right, #5d70ff, #a158ff, #2fd1ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Services
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-[#1c1c1e]/80 max-w-3xl mx-auto leading-relaxed tracking-wide px-4 ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Comprehensive digital solutions tailored to transform your business and drive innovation across every touchpoint.
          </p>
        </div>

        {/* Filter Categories */}
        <ServiceFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          isVisible={isVisible}
        />

        {/* Services Container */}
        <div className="space-y-6 md:space-y-8">
          {filteredServices.map((service, index) => (
            <CollapsibleServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
              isLastCard={index === filteredServices.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
