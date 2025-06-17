
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
  const [fallbackAttempt, setFallbackAttempt] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  // Enhanced fallback images based on context
  const getFallbackImages = () => {
    const altLower = alt.toLowerCase();
    
    if (altLower.includes('healthcare') || altLower.includes('medical') || altLower.includes('medcare')) {
      return [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop'
      ];
    }
    
    if (altLower.includes('retail') || altLower.includes('ecommerce') || altLower.includes('shopping')) {
      return [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
      ];
    }
    
    if (altLower.includes('education') || altLower.includes('learning') || altLower.includes('lms')) {
      return [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop'
      ];
    }
    
    if (altLower.includes('ai') || altLower.includes('automation') || altLower.includes('artificial')) {
      return [
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop'
      ];
    }
    
    // Default tech fallbacks
    return [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop'
    ];
  };

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
    setHasError(false);
    onLoad?.();
    console.log(`✅ Image loaded successfully: ${alt}`);
  };

  const handleError = () => {
    console.warn(`❌ Image failed to load: ${imageSrc} for ${alt}`);
    setHasError(true);
    
    const fallbacks = getFallbackImages();
    if (fallbackAttempt < fallbacks.length) {
      console.log(`🔄 Trying fallback ${fallbackAttempt + 1} for ${alt}`);
      setImageSrc(fallbacks[fallbackAttempt]);
      setFallbackAttempt(prev => prev + 1);
      setHasError(false);
    } else {
      console.error(`💥 All fallbacks failed for ${alt}`);
      setIsLoaded(true);
    }
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
    >
      {/* Enhanced loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-500 text-sm font-medium">Loading image...</div>
          </div>
        </div>
      )}
      
      {/* Error placeholder */}
      {hasError && fallbackAttempt >= getFallbackImages().length && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-gray-600 text-sm font-medium text-center p-4">
            <div className="mb-2">🖼️</div>
            <div>Image unavailable</div>
          </div>
        </div>
      )}
      
      {/* Main image */}
      {isInView && imageSrc && !hasError && (
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
        />
      )}
    </div>
  );
};

export default OptimizedImage;
