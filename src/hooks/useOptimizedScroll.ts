
import { useCallback, useRef, useEffect } from 'react';

export const useOptimizedScroll = () => {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const rafRef = useRef<number>();

  const handleScrollStart = useCallback(() => {
    isScrollingRef.current = true;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 150);
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
  };
};
