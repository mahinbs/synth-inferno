import { useState, useEffect, memo, useCallback } from 'react';
import { usePerformance } from '@/hooks/usePerformance';
import EnhancedServiceCard from './EnhancedServiceCard';
import { servicesData } from './ServicesData';
const EnhancedServicesSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const {
    createOptimizedObserver,
    enableLazyLoading
  } = usePerformance();
  useEffect(() => {
    const observer = createOptimizedObserver(([entry]) => {
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

    // Enable lazy loading for service cards
    enableLazyLoading('.enhanced-service-card');
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [createOptimizedObserver, enableLazyLoading]);
  const handleExpand = useCallback((serviceId: string) => {
    setExpandedService(serviceId);
  }, []);
  const handleCollapse = useCallback(() => {
    setExpandedService(null);
  }, []);
  return <section id="services" className="py-20 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden" style={{
    contentVisibility: 'auto'
  }}>
      {/* Light Background with Subtle Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>Cutting edge digital solutions powered by advanced technology and innovative design</p>
        </div>

        {/* Enhanced Service Cards */}
        <div className="max-w-6xl mx-auto space-y-6">
          {servicesData.map((service, index) => <div key={service.id} className={`enhanced-service-card transform transition-all duration-500 ${isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          animationDelay: `${index * 150}ms`,
          willChange: 'transform, opacity',
          contain: 'layout style paint'
        }}>
              <EnhancedServiceCard service={service} isExpanded={expandedService === service.id} onExpand={handleExpand} onCollapse={handleCollapse} index={index} />
            </div>)}
        </div>
      </div>
    </section>;
});
EnhancedServicesSection.displayName = 'EnhancedServicesSection';
export default EnhancedServicesSection;