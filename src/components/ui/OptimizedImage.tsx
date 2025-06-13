
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    // Fallback to a placeholder or retry logic
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden optimized-image ${className}`}>
      {/* Loading skeleton with improved performance */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            contain: 'layout style paint',
            willChange: 'auto'
          }}
        />
      )}
      
      {/* Main image */}
      {isInView && imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            willChange: isLoaded ? 'auto' : 'opacity',
            transform: 'translate3d(0, 0, 0)',
            contain: 'layout style paint',
            contentVisibility: 'auto'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
