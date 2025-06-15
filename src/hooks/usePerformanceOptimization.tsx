
import { useEffect, useCallback } from 'react';

export const usePerformanceOptimization = () => {
  // Preload critical resources including video
  const preloadCriticalResources = useCallback(() => {
    // Preload video metadata for faster loading
    const videoLink = document.createElement('link');
    videoLink.rel = 'preload';
    videoLink.as = 'video';
    videoLink.href = 'https://res.cloudinary.com/dknafpppp/video/upload/v1748772016/0_Ai_Artificial_Intelligence_1280x720-2_wbcpcy.mp4';
    videoLink.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(videoLink);

    // Preload video poster
    const posterLink = document.createElement('link');
    posterLink.rel = 'preload';
    posterLink.as = 'image';
    posterLink.href = 'https://res.cloudinary.com/dknafpppp/image/upload/v1748772016/0_Ai_Artificial_Intelligence_1280x720-2_wbcpcy.jpg';
    posterLink.fetchPriority = 'high';
    document.head.appendChild(posterLink);

    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/4e35c0a7-2a7f-4093-8e1c-470a0d096c7e.png',
      '/lovable-uploads/d0fa4f38-5951-4a69-9df8-13d4faa03aaa.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });

    // Add DNS prefetch for Cloudinary
    const dnsLink = document.createElement('link');
    dnsLink.rel = 'dns-prefetch';
    dnsLink.href = '//res.cloudinary.com';
    document.head.appendChild(dnsLink);
  }, []);

  // Optimize animations for performance
  const optimizeAnimations = useCallback(() => {
    // Reduce motion for performance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }

    // Add GPU acceleration to animated elements
    const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
    animatedElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.transform = 'translate3d(0, 0, 0)';
      htmlElement.style.backfaceVisibility = 'hidden';
    });
  }, []);

  // Optimize scroll performance with video considerations
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;

    const optimizeScroll = () => {
      // Remove will-change from elements not currently animating
      const elements = document.querySelectorAll('[style*="will-change"]');
      elements.forEach(element => {
        const htmlElement = element as HTMLElement;
        if (window.scrollY < 100) {
          htmlElement.style.willChange = 'auto';
        }
      });

      // Optimize video performance based on scroll position
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        const rect = video.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isInViewport && !video.paused) {
          video.pause();
        } else if (isInViewport && video.paused) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        }
      });
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(optimizeScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimize video loading
  const optimizeVideoLoading = useCallback(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      // Add performance attributes
      video.style.contain = 'layout style paint';
      video.style.contentVisibility = 'auto';
      
      // Optimize for mobile
      if (window.innerWidth <= 768) {
        video.setAttribute('preload', 'none');
      } else {
        video.setAttribute('preload', 'metadata');
      }
    });
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    optimizeAnimations();
    optimizeVideoLoading();
    const cleanupScroll = optimizeScrollPerformance();

    return cleanupScroll;
  }, [preloadCriticalResources, optimizeAnimations, optimizeScrollPerformance, optimizeVideoLoading]);

  return {
    preloadCriticalResources,
    optimizeAnimations,
    optimizeScrollPerformance,
    optimizeVideoLoading
  };
};
