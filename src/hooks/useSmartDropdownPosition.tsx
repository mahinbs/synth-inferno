
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
    
    // Estimated dropdown dimensions
    const dropdownHeight = 320;
    const dropdownWidth = 448; // max-w-lg is roughly 448px
    
    // Check if dropdown would be cut off at bottom
    const shouldPositionAbove = rect.bottom + dropdownHeight > viewportHeight - 20;
    
    // Check if dropdown would be cut off at right edge
    const shouldPositionLeft = rect.right + dropdownWidth > viewportWidth - 20;

    setPosition({
      shouldPositionAbove,
      shouldPositionLeft
    });
  }, []);

  useEffect(() => {
    calculatePosition();
    
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
