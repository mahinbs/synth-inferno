
import { useState, useCallback, useRef, useEffect } from 'react';
import { useOptimizedScroll } from '@/hooks/useOptimizedScroll';

interface UseServiceHoverProps {
  onExpand: (serviceId: string) => void;
  onCollapse: () => void;
  serviceId: string;
  isExpanded: boolean;
}

export const useServiceHover = ({
  onExpand,
  onCollapse,
  serviceId,
  isExpanded
}: UseServiceHoverProps) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const collapseTimeoutRef = useRef<NodeJS.Timeout>();
  const expandTimeoutRef = useRef<NodeJS.Timeout>();
  const { isScrolling, getScrollVelocity } = useOptimizedScroll();

  // Improved touch device detection
  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      
      // Consider it a touch device if it has touch AND lacks precise hover/pointer
      setIsTouchDevice(hasTouch && (!hasHover || !hasPointer));
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
      if (expandTimeoutRef.current) {
        clearTimeout(expandTimeoutRef.current);
      }
    };
  }, []);

  // Clear all timeouts helper
  const clearAllTimeouts = useCallback(() => {
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = undefined;
    }
    if (expandTimeoutRef.current) {
      clearTimeout(expandTimeoutRef.current);
      expandTimeoutRef.current = undefined;
    }
  }, []);

  // Improved mouse enter with better scroll detection
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    
    // Only block hover if actively scrolling fast
    const scrollVelocity = getScrollVelocity();
    if (isScrolling() && scrollVelocity > 10) return;
    
    clearAllTimeouts();
    
    // Reduced delay for more responsive hover
    expandTimeoutRef.current = setTimeout(() => {
      // Double-check scroll state before expanding
      if (!isScrolling() || getScrollVelocity() < 5) {
        onExpand(serviceId);
      }
    }, 100);
  }, [isTouchDevice, onExpand, serviceId, isScrolling, getScrollVelocity, clearAllTimeouts]);

  // Improved mouse leave with shorter delay
  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    
    clearAllTimeouts();
    
    // Reduced collapse delay for more responsive interaction
    collapseTimeoutRef.current = setTimeout(() => {
      onCollapse();
    }, 150);
  }, [isTouchDevice, onCollapse, clearAllTimeouts]);

  // Prevent collapse when hovering over expanded content
  const handleContentMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    
    clearAllTimeouts();
  }, [isTouchDevice, clearAllTimeouts]);

  // Resume collapse timing when leaving expanded content
  const handleContentMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    
    clearAllTimeouts();
    
    collapseTimeoutRef.current = setTimeout(() => {
      onCollapse();
    }, 150);
  }, [isTouchDevice, onCollapse, clearAllTimeouts]);

  // Improved click handler for touch devices
  const handleClick = useCallback(() => {
    if (isTouchDevice) {
      clearAllTimeouts();
      if (isExpanded) {
        onCollapse();
      } else {
        onExpand(serviceId);
      }
    }
  }, [isTouchDevice, isExpanded, onExpand, onCollapse, serviceId, clearAllTimeouts]);

  return {
    isTouchDevice,
    handleMouseEnter,
    handleMouseLeave,
    handleContentMouseEnter,
    handleContentMouseLeave,
    handleClick
  };
};
