
import { useCallback, useRef } from 'react';

export const useScrollPerformance = () => {
  const scrollRAF = useRef<number>();
  const lastScrollTime = useRef<number>(0);
  const lastScrollY = useRef<number>(0);
  const scrollVelocity = useRef<number>(0);

  // Enhanced debounce with immediate execution option
  const debounce = useCallback((func: Function, wait: number, immediate = false) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }, []);

  // High-performance scroll throttling with velocity calculation
  const throttleScroll = useCallback((callback: () => void) => {
    if (scrollRAF.current) {
      cancelAnimationFrame(scrollRAF.current);
    }
    
    scrollRAF.current = requestAnimationFrame(() => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const deltaTime = now - lastScrollTime.current;
      const deltaY = Math.abs(currentScrollY - lastScrollY.current);
      
      // Calculate scroll velocity (pixels per millisecond)
      if (deltaTime > 0) {
        scrollVelocity.current = deltaY / deltaTime;
      }
      
      lastScrollTime.current = now;
      lastScrollY.current = currentScrollY;
      callback();
    });
  }, []);

  // Get current scroll velocity for performance decisions
  const getScrollVelocity = useCallback(() => {
    return scrollVelocity.current;
  }, []);

  // Enhanced scroll performance optimization
  const optimizeScrollPerformance = useCallback(() => {
    // Remove will-change from elements not currently animating
    const optimizeWillChange = () => {
      const elements = document.querySelectorAll('[style*="will-change"]');
      elements.forEach(element => {
        const htmlElement = element as HTMLElement;
        if (scrollVelocity.current < 1) {
          htmlElement.style.willChange = 'auto';
        }
      });
    };

    // Add performance hints to heavy elements
    const heavyElements = document.querySelectorAll('.backdrop-blur-xl, .animate-pulse, .hero-section, .review-card');
    heavyElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.contain = 'layout style paint';
      htmlElement.style.contentVisibility = 'auto';
    });

    // Optimize video elements for scroll performance
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.style.contain = 'layout style paint';
      video.style.contentVisibility = 'auto';
    });

    // Debounced will-change optimization
    const debouncedOptimize = debounce(optimizeWillChange, 100);
    window.addEventListener('scroll', debouncedOptimize, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedOptimize);
      if (scrollRAF.current) {
        cancelAnimationFrame(scrollRAF.current);
      }
    };
  }, [debounce]);

  return {
    debounce,
    throttleScroll,
    getScrollVelocity,
    optimizeScrollPerformance,
  };
};
