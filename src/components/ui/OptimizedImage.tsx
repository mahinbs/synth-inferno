
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  priority?: boolean;
  onLoad?: () => void;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  blurDataURL,
  priority = false,
  onLoad,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : '');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP source with fallback
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('unsplash.com')) {
      return `${originalSrc}&fm=webp&q=80`;
    }
    return originalSrc;
  };

  // Get high-quality fallback image based on context
  const getFallbackImage = () => {
    if (alt.toLowerCase().includes('healthcare') || alt.toLowerCase().includes('medical')) {
      return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    }
    if (alt.toLowerCase().includes('retail') || alt.toLowerCase().includes('ecommerce')) {
      return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    }
    if (alt.toLowerCase().includes('project') || alt.toLowerCase().includes('management')) {
      return 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    }
    // Default high-quality tech image
    return 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  };

  useEffect(() => {
    if (priority) {
      // Preload critical images immediately
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = getWebPSrc(src);
      document.head.appendChild(link);
      return;
    }

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
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${src}, using fallback`);
    setHasError(true);
    // Try fallback image
    setImageSrc(getFallbackImage());
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
      {/* Loading skeleton with better styling */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-500 text-sm font-medium">Loading...</div>
          </div>
        </div>
      )}
      
      {/* Main image with WebP support and fallback handling */}
      {isInView && imageSrc && (
        <picture>
          <source srcSet={getWebPSrc(imageSrc)} type="image/webp" />
          <img
            src={imageSrc}
            alt={alt}
            sizes={sizes}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'low'}
            style={{
              willChange: isLoaded ? 'auto' : 'opacity, transform',
              transform: 'translate3d(0, 0, 0)'
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
