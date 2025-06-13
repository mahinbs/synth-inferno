
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  blurDataURL,
  priority = false,
  onLoad 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : '');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden optimized-image ${className}`}
      style={{
        contain: 'layout style paint',
        contentVisibility: 'auto'
      }}
    >
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-700 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent animate-shimmer" />
        </div>
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
          <div className="text-slate-400 text-sm">Image unavailable</div>
        </div>
      )}
      
      {/* Main image */}
      {isInView && imageSrc && !hasError && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            willChange: isLoaded ? 'auto' : 'opacity',
            transform: 'translate3d(0, 0, 0)',
            contain: 'layout style paint'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
