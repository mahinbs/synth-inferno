
import { useState, useCallback, useRef, useEffect } from 'react';

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
    };
  }, []);

  // Auto-expand on mouse enter (desktop only)
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    
    // Clear any pending collapse timeout
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
    
    // Immediately expand
    onExpand(serviceId);
  }, [isTouchDevice, onExpand, serviceId]);

  // Delayed collapse on mouse leave (desktop only)
  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    
    // Set a 200ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      onCollapse();
    }, 200);
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
    
    // Set a 200ms delay before collapsing
    collapseTimeoutRef.current = setTimeout(() => {
      onCollapse();
    }, 200);
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
