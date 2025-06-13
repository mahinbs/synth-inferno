
import { useState, useEffect, memo, useCallback } from 'react';
import { usePerformance } from '@/hooks/usePerformance';
import EnhancedServiceCard from './EnhancedServiceCard';
import { servicesData } from './ServicesData';

const EnhancedServicesSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const { createOptimizedObserver, enableLazyLoading } = usePerformance();

  useEffect(() => {
    const observer = createOptimizedObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.05,
      rootMargin: '50px'
    });

    const section = document.getElementById('enhanced-services');
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

  const handleToggleExpand = useCallback((serviceId: string) => {
    setExpandedService(prev => prev === serviceId ? null : serviceId);
  }, []);

  return (
    <section
      id="enhanced-services"
      className="py-20 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
      style={{ contentVisibility: 'auto' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-900 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            Cutting-edge digital solutions powered by advanced technology and innovative design
          </p>
        </div>

        {/* Enhanced Service Cards */}
        <div className="max-w-6xl mx-auto space-y-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`enhanced-service-card transform transition-all duration-500 ${
                isVisible 
                  ? 'animate-fade-in-up opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                willChange: 'transform, opacity',
                contain: 'layout style paint'
              }}
            >
              <EnhancedServiceCard
                service={service}
                isExpanded={expandedService === service.id}
                onToggle={() => handleToggleExpand(service.id)}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

EnhancedServicesSection.displayName = 'EnhancedServicesSection';
export default EnhancedServicesSection;
