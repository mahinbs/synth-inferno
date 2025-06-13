
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
    
    // More accurate dropdown dimensions based on actual content
    const dropdownHeight = 400; // Increased for better content display
    const dropdownWidth = 480; // Slightly wider for better readability
    
    // Add padding from viewport edges for better visual spacing
    const bottomPadding = 40;
    const rightPadding = 20;
    
    // Check if dropdown would be cut off at bottom with better threshold
    const shouldPositionAbove = rect.bottom + dropdownHeight > viewportHeight - bottomPadding;
    
    // Check if dropdown would be cut off at right edge with better threshold
    const shouldPositionLeft = rect.right + dropdownWidth > viewportWidth - rightPadding;

    setPosition({
      shouldPositionAbove,
      shouldPositionLeft
    });
  }, []);

  useEffect(() => {
    calculatePosition();
    
    // Use passive listeners for better scroll performance
    const handleScroll = () => calculatePosition();
    const handleResize = () => calculatePosition();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculatePosition]);

  return {
    elementRef,
    position,
    calculatePosition
  };
};
