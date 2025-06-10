
import { useState, useEffect, memo } from 'react';
import ServiceFilter from './services/ServiceFilter';
import AnimatedServiceCard from './services/AnimatedServiceCard';
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
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden"
      style={{ contain: 'layout style paint' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full overflow-x-hidden">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-[#1c1c1e] leading-tight tracking-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-glow-pulse">Services</span>
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

        {/* Services Grid - Enhanced with CSS Grid and responsive design */}
        <div className="w-full max-w-7xl mx-auto overflow-x-hidden">
          <div className="services-grid grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id}
                className="service-card-container"
                style={{ 
                  contain: 'layout style paint',
                  contentVisibility: 'auto',
                  containIntrinsicSize: '1px 400px'
                }}
              >
                <AnimatedServiceCard
                  service={service}
                  index={index}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
