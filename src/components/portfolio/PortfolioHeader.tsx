
import { useEffect, useState } from 'react';

interface PortfolioHeaderProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const PortfolioHeader = ({ isVisible, setIsVisible }: PortfolioHeaderProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('portfolio');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [setIsVisible]);

  return (
    <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Latest <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">Projects</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Discover some of our most innovative solutions that have transformed businesses across industries.
      </p>
    </div>
  );
};

export default PortfolioHeader;
