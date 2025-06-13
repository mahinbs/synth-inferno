
import { memo, ReactNode } from 'react';

interface ServiceCardWrapperProps {
  isVisible: boolean;
  index: number;
  isAnimating: boolean;
  children: ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  cardRef: React.RefObject<HTMLDivElement>;
}

const ServiceCardWrapper = memo(({
  isVisible,
  index,
  isAnimating,
  children,
  onMouseEnter,
  onMouseLeave,
  cardRef
}: ServiceCardWrapperProps) => {
  return (
    <div 
      ref={cardRef}
      className={`group transform transition-all duration-500 ease-out relative service-card ${
        isVisible 
          ? `animate-fade-in-up opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${Math.min(index * 100, 500)}ms`,
        willChange: isAnimating ? 'transform, opacity' : 'auto'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
});

ServiceCardWrapper.displayName = 'ServiceCardWrapper';
export default ServiceCardWrapper;
