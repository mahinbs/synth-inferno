
import { useCallback, useRef } from 'react';
import { useScrollPerformance } from './useScrollPerformance';

export const useIntersectionObserver = () => {
  const observerMap = useRef<Map<Element, IntersectionObserver>>(new Map());
  const { getScrollVelocity } = useScrollPerformance();

  // Enhanced intersection observer with better performance
  const createOptimizedObserver = useCallback((
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
  ) => {
    const throttledCallback: IntersectionObserverCallback = (entries, observer) => {
      // Skip processing during fast scrolling
      if (getScrollVelocity() > 5) {
        return;
      }

      const scrollRAF = requestAnimationFrame(() => {
        callback(entries, observer);
      });
      
      return () => cancelAnimationFrame(scrollRAF);
    };

    const observer = new IntersectionObserver(throttledCallback, {
      rootMargin: '100px',
      threshold: [0, 0.1, 0.5, 1],
      ...options
    });

    return observer;
  }, [getScrollVelocity]);

  // Lazy loading with content visibility
  const enableLazyLoading = useCallback((selector: string) => {
    const elements = document.querySelectorAll(selector);
    
    const observer = createOptimizedObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          element.style.contentVisibility = 'visible';
          element.classList.add('loaded');
        } else {
          element.style.contentVisibility = 'auto';
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
      observerMap.current.set(element, observer);
    });
  }, [createOptimizedObserver]);

  // Memory cleanup for observers
  const cleanupObservers = useCallback(() => {
    observerMap.current.forEach(observer => {
      observer.disconnect();
    });
    observerMap.current.clear();
  }, []);

  return {
    createOptimizedObserver,
    enableLazyLoading,
    cleanupObservers,
  };
};
