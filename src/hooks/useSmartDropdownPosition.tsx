
import { useEffect, useState, useRef, useCallback } from 'react';

interface DropdownPosition {
  shouldPositionAbove: boolean;
  shouldPositionLeft: boolean;
}

export const useSmartDropdownPosition = () => {
  const [position, setPosition] = useState<DropdownPosition>({
    shouldPositionAbove: false,
    shouldPositionLeft: false
  });
  const elementRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Enhanced dropdown dimensions for better content display
    const dropdownHeight = 420;
    const dropdownWidth = 500;
    
    // Improved padding from viewport edges
    const bottomPadding = 60;
    const rightPadding = 40;
    const topPadding = 20;
    const leftPadding = 20;
    
    // Enhanced positioning logic with better thresholds
    const shouldPositionAbove = rect.bottom + dropdownHeight > viewportHeight - bottomPadding && 
                               rect.top - dropdownHeight > topPadding;
    
    const shouldPositionLeft = rect.right + dropdownWidth > viewportWidth - rightPadding &&
                              rect.left - dropdownWidth > leftPadding;

    setPosition({
      shouldPositionAbove,
      shouldPositionLeft
    });
  }, []);

  useEffect(() => {
    calculatePosition();
    
    // Optimized event listeners with debouncing
    let scrollTimeout: NodeJS.Timeout;
    let resizeTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(calculatePosition, 10);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculatePosition, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(scrollTimeout);
      clearTimeout(resizeTimeout);
    };
  }, [calculatePosition]);

  return {
    elementRef,
    position,
    calculatePosition
  };
};
