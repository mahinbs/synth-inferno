
import { useEffect, useCallback } from 'react';

export const usePerformanceOptimization = () => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalImages = [
      '/lovable-uploads/4e35c0a7-2a7f-4093-8e1c-470a0d096c7e.png',
      '/lovable-uploads/d0fa4f38-5951-4a69-9df8-13d4faa03aaa.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize animations for performance
  const optimizeAnimations = useCallback(() => {
    // Reduce motion for performance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }

    // Add GPU acceleration to animated elements
    const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
    animatedElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.transform = 'translate3d(0, 0, 0)';
      htmlElement.style.backfaceVisibility = 'hidden';
    });
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;

    const optimizeScroll = () => {
      // Remove will-change from elements not currently animating
      const elements = document.querySelectorAll('[style*="will-change"]');
      elements.forEach(element => {
        const htmlElement = element as HTMLElement;
        if (window.scrollY < 100) {
          htmlElement.style.willChange = 'auto';
        }
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(optimizeScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    optimizeAnimations();
    const cleanupScroll = optimizeScrollPerformance();

    return cleanupScroll;
  }, [preloadCriticalResources, optimizeAnimations, optimizeScrollPerformance]);

  return {
    preloadCriticalResources,
    optimizeAnimations,
    optimizeScrollPerformance
  };
};
