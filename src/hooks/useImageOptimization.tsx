
import { useCallback, useRef } from 'react';

export const useImageOptimization = () => {
  const observerMap = useRef<Map<Element, IntersectionObserver>>(new Map());

  // Enhanced preload resource with priority hints
  const preloadResource = useCallback((href: string, as: string, priority: 'high' | 'low' = 'low') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (priority === 'high') {
      link.setAttribute('fetchpriority', 'high');
    }
    document.head.appendChild(link);
  }, []);

  // Enhanced image optimization with progressive loading
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px',
        threshold: 0.01
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }, []);

  // Memory cleanup for observers
  const cleanupObservers = useCallback(() => {
    observerMap.current.forEach(observer => {
      observer.disconnect();
    });
    observerMap.current.clear();
  }, []);

  return {
    preloadResource,
    optimizeImages,
    cleanupObservers,
  };
};
