
import { useEffect } from 'react';
import { useImageOptimization } from './useImageOptimization';
import { useScrollPerformance } from './useScrollPerformance';
import { useIntersectionObserver } from './useIntersectionObserver';

export const usePerformance = () => {
  const imageOptimization = useImageOptimization();
  const scrollPerformance = useScrollPerformance();
  const intersectionObserver = useIntersectionObserver();

  useEffect(() => {
    // Initialize performance optimizations
    imageOptimization.optimizeImages();
    const cleanup = scrollPerformance.optimizeScrollPerformance();

    // Apply global performance optimizations
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Enable lazy loading for heavy sections
    intersectionObserver.enableLazyLoading('.hero-section, .about-section, .portfolio-section');
    
    // Clean up on unmount
    return () => {
      cleanup();
      imageOptimization.cleanupObservers();
      intersectionObserver.cleanupObservers();
    };
  }, [imageOptimization, scrollPerformance, intersectionObserver]);

  return {
    ...imageOptimization,
    ...scrollPerformance,
    ...intersectionObserver,
  };
};
