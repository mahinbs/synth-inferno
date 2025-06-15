
import { useState, useCallback } from "react";
import ExpandableServiceCard from "./services/ExpandableServiceCard";
import ServicesBackground from "./services/ServicesBackground";
import ServicesHeader from "./services/ServicesHeader";
import { servicesData } from "./services/ServicesData";

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

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <ServicesBackground />

      <div className="container mx-auto px-6 relative z-20">
        <ServicesHeader />

        <div className="max-w-6xl mx-auto space-y-6">
          {servicesData.map((service) => {
            const isExpanded = expandedService === service.id;

            return (
              <ExpandableServiceCard
                key={service.id}
                service={service}
                isExpanded={isExpanded}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
