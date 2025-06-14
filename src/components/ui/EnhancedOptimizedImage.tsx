
import { useState, useRef, useEffect } from 'react';

interface EnhancedOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  sizes?: string;
  quality?: number;
}

const EnhancedOptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  onLoad,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 80
}: EnhancedOptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : '');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Convert to WebP format for better compression
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('unsplash.com')) {
      return `${originalSrc}&fm=webp&q=${quality}&auto=format&fit=crop`;
    }
    return originalSrc;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) {
      setImageSrc(getOptimizedSrc(src));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setImageSrc(getOptimizedSrc(src));
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px' // Preload images 100px before they come into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, src, quality]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original source if WebP fails
    if (imageSrc.includes('&fm=webp')) {
      setImageSrc(src);
      setHasError(false);
    }
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      style={{
        contain: 'layout style paint',
        contentVisibility: priority ? 'visible' : 'auto'
      }}
    >
      {/* Glassmorphic loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 glassmorphic-card glass-shimmer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-text-secondary text-sm font-medium">Loading...</div>
          </div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 glassmorphic-card flex items-center justify-center">
          <div className="glass-text-secondary text-sm font-medium text-center p-4">
            <div className="mb-2">📷</div>
            <div>Image unavailable</div>
          </div>
        </div>
      )}
      
      {/* Optimized image with WebP support */}
      {isInView && imageSrc && !hasError && (
        <picture>
          <source srcSet={imageSrc} type="image/webp" />
          <img
            src={imageSrc}
            alt={alt}
            sizes={sizes}
            className={`glass-bg-image transition-all duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'low'}
            style={{
              willChange: isLoaded ? 'auto' : 'opacity, transform'
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default EnhancedOptimizedImage;
