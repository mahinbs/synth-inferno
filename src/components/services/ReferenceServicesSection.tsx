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
  return <section id="reference-services" className="py-20 relative overflow-hidden bg-transparent">
      
    </section>;
});
ReferenceServicesSection.displayName = 'ReferenceServicesSection';
export default ReferenceServicesSection;