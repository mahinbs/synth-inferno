
import { useState, useCallback, Suspense, lazy } from "react";
import ServicesBackground from "./services/ServicesBackground";
import ServicesHeader from "./services/ServicesHeader";
import { servicesData } from "./services/ServicesData";

// Lazy load the service card for better performance
const GlassmorphicServiceCard = lazy(() => import("./services/GlassmorphicServiceCard"));

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

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

        {/* Single Column Layout with Consistent Spacing */}
        <div className="max-w-4xl mx-auto space-y-6">
          {servicesData.map((service, index) => {
            const isExpanded = expandedService === service.id;

            return (
              <Suspense 
                key={service.id} 
                fallback={
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-48 flex items-center justify-center">
                    <span className="text-gray-500">Loading service...</span>
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
