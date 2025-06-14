
import { useState, useEffect, memo, Suspense, lazy } from 'react';
import { servicesData } from './ServicesData';
import { useRoutePreloading } from '@/hooks/useRoutePreloading';
import GlassmorphicServiceCard from './GlassmorphicServiceCard';

// Lazy load components for better performance
const ServiceFilter = lazy(() => import('./ServiceFilter'));

const EnhancedServicesSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const {
    preloadRoute
  } = useRoutePreloading();

  // Preload critical service pages
  useEffect(() => {
    const criticalRoutes = ['/services/web-applications', '/services/saas', '/services/mobile-apps'];
    setTimeout(() => {
      criticalRoutes.forEach(route => preloadRoute(route, 100));
    }, 1000);
  }, [preloadRoute]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
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
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleExpand = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const handleCollapse = () => {
    setExpandedService(null);
  };

  const filteredServices = activeFilter === 'all' ? servicesData : servicesData.filter(service => service.id === activeFilter);

  return (
    <section 
      id="enhanced-services" 
      className="py-16 md:py-20 relative min-h-screen bg-[#f9f9fb]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
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

        {/* Service Filter */}
        <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{
          animationDelay: '0.4s'
        }}>
          <Suspense fallback={<div className="flex justify-center">
              <div className="bg-white rounded-full h-12 w-64 animate-pulse" />
            </div>}>
            <ServiceFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} isVisible={isVisible} />
          </Suspense>
        </div>

        {/* Services Grid */}
        <div className="space-y-6 md:space-y-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`transform transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} 
              style={{
                animationDelay: `${0.6 + index * 0.1}s`,
                willChange: isVisible ? 'auto' : 'transform, opacity'
              }}
            >
              <GlassmorphicServiceCard 
                service={service} 
                isExpanded={expandedService === service.id} 
                onExpand={handleExpand} 
                onCollapse={handleCollapse} 
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
