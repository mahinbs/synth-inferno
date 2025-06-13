
import { useState, useCallback, useRef, useEffect } from 'react';

interface UseServiceCardInteractionsProps {
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const useServiceCardInteractions = ({
  isAnimating,
  setIsAnimating,
  setIsOpen
}: UseServiceCardInteractionsProps) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const collapseTimeoutRef = useRef<NodeJS.Timeout>();
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect touch device on mount
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    
    const handleResize = () => {
      checkTouchDevice();
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (collapseTimeoutRef.current) {
        clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  // Auto-expand on mouse enter (desktop only)
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice || isAnimating) return;
    
    // Clear any pending collapse timeout
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
    
    // Immediately expand
    setIsAnimating(true);
    setIsOpen(true);
    
    // Reset animation flag after transition
    setTimeout(() => setIsAnimating(false), 300);
  }, [isTouchDevice, isAnimating, setIsAnimating, setIsOpen]);

  // Delayed collapse on mouse leave (desktop only)
  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice || isAnimating) return;
    
    // Set a 200ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
      setIsOpen(false);
      
      // Reset animation flag after transition
      setTimeout(() => setIsAnimating(false), 300);
    }, 200);
  }, [isTouchDevice, isAnimating, setIsAnimating, setIsOpen]);

  // Prevent collapse when hovering over expanded content
  const handleContentMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    
    // Cancel any pending collapse
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
  }, [isTouchDevice]);

  // Resume collapse timing when leaving expanded content
  const handleContentMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    
    // Set a 200ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
      setIsOpen(false);
      
      // Reset animation flag after transition
      setTimeout(() => setIsAnimating(false), 300);
    }, 200);
  }, [isTouchDevice, setIsAnimating, setIsOpen]);

  // Click handler for mobile/touch devices
  const handleClick = useCallback(() => {
    if (isTouchDevice) {
      setIsAnimating(true);
      setIsOpen(prev => !prev);
      
      // Reset animation flag after transition
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isTouchDevice, setIsAnimating, setIsOpen]);

  return {
    isTouchDevice,
    cardRef,
    handleMouseEnter,
    handleMouseLeave,
    handleContentMouseEnter,
    handleContentMouseLeave,
    handleClick
  };
};
