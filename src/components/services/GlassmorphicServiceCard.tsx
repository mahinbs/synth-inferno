
import { memo, useState, useRef, Suspense, lazy } from 'react';
import { ServiceData } from './ServicesData';
import { useServiceHover } from './hooks/useServiceHover';
import EnhancedOptimizedImage from '../ui/EnhancedOptimizedImage';

// Lazy load expanded content for better performance
const ServiceCardExpandedContent = lazy(() => import('./ServiceCardExpandedContent'));

interface GlassmorphicServiceCardProps {
  service: ServiceData;
  isExpanded: boolean;
  onExpand: (serviceId: string) => void;
  onCollapse: () => void;
  index: number;
}

const GlassmorphicServiceCard = memo(({
  service,
  isExpanded,
  onExpand,
  onCollapse,
  index
}: GlassmorphicServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const {
    isTouchDevice,
    handleMouseEnter,
    handleMouseLeave,
    handleContentMouseEnter,
    handleContentMouseLeave,
    handleClick
  } = useServiceHover({
    onExpand,
    onCollapse,
    serviceId: service.id,
    isExpanded
  });

  return (
    <div 
      ref={cardRef}
      className={`group relative overflow-hidden transition-all duration-300 ease-out glassmorphic-card glass-optimized ${
        isExpanded ? 'scale-[1.02]' : 'scale-100'
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        willChange: isExpanded ? 'transform, opacity' : 'auto',
        minHeight: isExpanded ? 'auto' : '280px'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image Container */}
      <div className="glass-bg-container">
        <EnhancedOptimizedImage
          src={service.image}
          alt={`${service.title} background`}
          className="w-full h-full"
          priority={index < 2}
          onLoad={() => setImageLoaded(true)}
          quality={85}
        />
      </div>

      {/* Main Card Content */}
      <div className="relative z-10 p-6">
        {/* Header Section */}
        <div 
          className="glassmorphic-content cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex items-center justify-between">
            {/* Service Info */}
            <div className="flex items-center space-x-4 flex-1">
              <div className="w-16 h-16 glassmorphic-card flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold glass-text-primary mb-2 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="glass-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Pricing and Timeline */}
            <div className="hidden md:flex flex-col space-y-2 ml-6">
              <div className="glass-tag px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <span className="glass-text-accent">{service.startingPrice}</span>
              </div>
              <div className="glass-tag px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <span className="glass-text-accent">{service.timeline}</span>
              </div>
            </div>

            {/* Expand/Collapse Indicator */}
            <div className={`ml-4 w-8 h-8 glassmorphic-card flex items-center justify-center transition-all duration-300 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}>
              <div className="w-4 h-0.5 glass-text-accent bg-current" />
              <div className={`w-0.5 h-4 glass-text-accent bg-current absolute transition-opacity duration-300 ${
                isExpanded ? 'opacity-0' : 'opacity-100'
              }`} />
            </div>
          </div>

          {/* Mobile Pricing */}
          <div className="md:hidden flex space-x-4 mt-4">
            <div className="glass-tag px-4 py-2 rounded-lg text-sm font-medium">
              <span className="glass-text-accent">{service.startingPrice}</span>
            </div>
            <div className="glass-tag px-4 py-2 rounded-lg text-sm font-medium">
              <span className="glass-text-accent">{service.timeline}</span>
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6">
            <Suspense fallback={
              <div className="glassmorphic-content glass-shimmer h-32 flex items-center justify-center">
                <span className="glass-text-secondary">Loading details...</span>
              </div>
            }>
              <ServiceCardExpandedContent
                service={service}
                isExpanded={isExpanded}
                onContentMouseEnter={handleContentMouseEnter}
                onContentMouseLeave={handleContentMouseLeave}
                allProjects={[]} // Pass actual projects if needed
              />
            </Suspense>
          </div>
        )}
      </div>

      {/* Hover shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
      </div>
    </div>
  );
});

GlassmorphicServiceCard.displayName = 'GlassmorphicServiceCard';
export default GlassmorphicServiceCard;
