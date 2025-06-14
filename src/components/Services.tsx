
import { useState, useCallback, Suspense, lazy } from "react";
import ServicesBackground from "./services/ServicesBackground";
import ServicesHeader from "./services/ServicesHeader";
import { servicesData } from "./services/ServicesData";

// Lazy load the glassmorphic service card for better performance
const GlassmorphicServiceCard = lazy(() => import("./services/GlassmorphicServiceCard"));

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(
    (serviceId: string) => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }

      const timeout = setTimeout(() => {
        setExpandedService(serviceId);
      }, 300);

      setHoverTimeout(timeout);
    },
    [hoverTimeout]
  );

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    const timeout = setTimeout(() => {
      setExpandedService(null);
    }, 200);

    setHoverTimeout(timeout);
  }, [hoverTimeout]);

  const handleExpand = useCallback((serviceId: string) => {
    setExpandedService(prev => prev === serviceId ? null : serviceId);
  }, []);

  const handleCollapse = useCallback(() => {
    setExpandedService(null);
  }, []);

  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh'
      }}
    >
      <ServicesBackground />

      <div className="container mx-auto px-6 relative z-20">
        <ServicesHeader />

        {/* Fixed Grid Layout with Consistent Spacing */}
        <div className="max-w-6xl mx-auto services-grid">
          {servicesData.map((service, index) => {
            const isExpanded = expandedService === service.id;

            return (
              <Suspense 
                key={service.id} 
                fallback={
                  <div className="glassmorphic-card glass-shimmer rounded-2xl flex items-center justify-center">
                    <span className="glass-text-secondary">Loading service...</span>
                  </div>
                }
              >
                <GlassmorphicServiceCard
                  service={service}
                  isExpanded={isExpanded}
                  onExpand={handleExpand}
                  onCollapse={handleCollapse}
                  index={index}
                />
              </Suspense>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
