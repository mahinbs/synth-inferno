
import { memo, useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  posterSrc?: string;
  className?: string;
}

const VideoBackground = memo(({ src, posterSrc, className = '' }: VideoBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Preload video metadata
    video.preload = 'metadata';
    
    // Add loading event listeners
    const handleLoadedData = () => setIsLoaded(true);
    const handleError = () => setHasError(true);
    
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    
    // Optimize for mobile
    if (window.innerWidth <= 768) {
      video.setAttribute('playsinline', 'true');
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Handle reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (hasError || prefersReducedMotion) {
    return (
      <div 
        className={`bg-gradient-to-br from-slate-900 via-gray-900 to-black ${className}`}
        style={{
          backgroundImage: posterSrc ? `url(${posterSrc})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    );
  }

  return (
    <div className={className}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
        className="w-full h-full object-cover"
        style={{
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          contain: 'layout style paint',
          contentVisibility: 'visible'
        }}
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black animate-pulse" />
      )}
    </div>
  );
});

VideoBackground.displayName = 'VideoBackground';
export default VideoBackground;
