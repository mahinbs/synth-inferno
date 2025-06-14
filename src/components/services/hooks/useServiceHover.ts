
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
  const { isScrolling } = useOptimizedScroll();

  // Detect touch device on mount
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(hover: none)').matches
      );
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

  // Auto-expand on mouse enter (desktop only)
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice || isScrolling()) return;
    
    // Clear any pending timeouts
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
    if (expandTimeoutRef.current) {
      clearTimeout(expandTimeoutRef.current);
    }
    
    // Small delay to prevent rapid firing during scroll
    expandTimeoutRef.current = setTimeout(() => {
      if (!isScrolling()) {
        onExpand(serviceId);
      }
    }, 50);
  }, [isTouchDevice, onExpand, serviceId, isScrolling]);

  // Delayed collapse on mouse leave (desktop only)
  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    
    // Clear expand timeout
    if (expandTimeoutRef.current) {
      clearTimeout(expandTimeoutRef.current);
    }
    
    // Set a 300ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      onCollapse();
    }, 300);
  }, [isTouchDevice, onCollapse]);

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
    
    // Set a 300ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      onCollapse();
    }, 300);
  }, [isTouchDevice, onCollapse]);

  // Click handler for mobile/touch devices
  const handleClick = useCallback(() => {
    if (isTouchDevice) {
      if (isExpanded) {
        onCollapse();
      } else {
        onExpand(serviceId);
      }
    }
  }, [isTouchDevice, isExpanded, onExpand, onCollapse, serviceId]);

  return {
    isTouchDevice,
    handleMouseEnter,
    handleMouseLeave,
    handleContentMouseEnter,
    handleContentMouseLeave,
    handleClick
  };
};
