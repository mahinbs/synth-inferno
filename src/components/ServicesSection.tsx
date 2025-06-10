
import { useState, useEffect, memo } from 'react';
import ServiceFilter from './services/ServiceFilter';
import ServiceCard from './services/ServiceCard';
import { services } from './services/ServiceData';

const ServicesSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px'
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
    <section id="services" className="py-20 bg-background relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our <span className="brand-gradient-text">Services</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Comprehensive digital solutions tailored to transform your business and drive innovation across every touchpoint.
          </p>
        </div>

        {/* Filter Categories */}
        <ServiceFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          isVisible={isVisible}
        />

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedService === service.id}
              onToggle={setExpandedService}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
