
import { useCallback, useRef, useEffect } from 'react';

export const useOptimizedScroll = () => {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const rafRef = useRef<number>();
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);

  const handleScrollStart = useCallback(() => {
    const currentScrollY = window.scrollY;
    const deltaY = Math.abs(currentScrollY - lastScrollY.current);
    
    // Calculate scroll velocity (pixels per frame)
    scrollVelocity.current = deltaY;
    lastScrollY.current = currentScrollY;
    
    // Only consider it "scrolling" if velocity is above threshold
    isScrollingRef.current = scrollVelocity.current > 5;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Reduced timeout for faster hover recovery
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      scrollVelocity.current = 0;
    }, 50);
  }, []);

  const optimizedScrollHandler = useCallback((callback: () => void) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      handleScrollStart();
      callback();
    });
  }, [handleScrollStart]);

  useEffect(() => {
    const handleScroll = () => optimizedScrollHandler(() => {});
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [optimizedScrollHandler]);

  return {
    isScrolling: () => isScrollingRef.current,
    getScrollVelocity: () => scrollVelocity.current,
  };
};
