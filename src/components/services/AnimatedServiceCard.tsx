
import { memo, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Service {
  id: string;
  icon: any;
  title: string;
  category: string;
  intro: string;
  technologies: string[];
  highlights: string[];
  backgroundImage: string;
}

interface AnimatedServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const AnimatedServiceCard = memo(({
  service,
  index,
  isVisible
}: AnimatedServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`group relative transform transition-all duration-500 ease-out h-full min-h-[500px] ${
        isVisible 
          ? `animate-fade-in-up opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${Math.min(index * 150, 600)}ms`,
        contain: 'layout style paint',
        willChange: isVisible ? 'transform, opacity' : 'auto'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-300"></div>
      
      {/* Main Card */}
      <div className="relative bg-white/85 backdrop-blur-sm rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1 overflow-hidden h-full flex flex-col">
        
        {/* Background Image Container with fixed aspect ratio */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl" style={{ aspectRatio: '1 / 1.2' }}>
          {/* Image Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse"></div>
          )}
          
          <img 
            src={service.backgroundImage}
            alt={`${service.title} background`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              filter: 'brightness(0.25) saturate(1.1)',
              willChange: isHovered ? 'transform' : 'auto'
            }}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-purple-900/30"></div>
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-emerald-600/15 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`}></div>
        </div>
        
        {/* Floating Particles - Simplified for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"></div>
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300 delay-100 transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
        </div>

        <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
          {/* Icon Container */}
          <div className="relative mb-6 flex-shrink-0">
            <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm border border-white/40 flex items-center justify-center transition-all duration-300 transform ${
              isHovered ? 'scale-105 rotate-3' : 'scale-100 rotate-0'
            }`}>
              <service.icon className={`h-8 w-8 sm:h-9 sm:w-9 text-white transition-all duration-300 transform ${
                isHovered ? 'scale-110' : 'scale-100'
              }`} />
              
              <Sparkles className={`absolute -top-0.5 -right-0.5 h-3 w-3 text-yellow-400 transition-all duration-200 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`} />
            </div>
          </div>

          {/* Content - Flexible layout */}
          <div className="space-y-4 flex-grow flex flex-col">
            <h3 className={`text-xl sm:text-2xl font-bold text-white transition-colors duration-200 ${
              isHovered ? 'text-blue-100' : 'text-white'
            }`}>
              {service.title}
            </h3>
            
            <p className="text-white/85 leading-relaxed group-hover:text-white/95 transition-colors duration-200 text-sm sm:text-base flex-grow">
              {service.intro}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4">
              {service.technologies.slice(0, 3).map((tech, idx) => (
                <span 
                  key={idx}
                  className={`px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium border border-white/30 transition-all duration-200 ${
                    isHovered ? 'scale-105 bg-white/30' : 'scale-100'
                  }`}
                >
                  {tech}
                </span>
              ))}
              {service.technologies.length > 3 && (
                <span className="px-2.5 py-1 bg-white/10 text-white/70 rounded-full text-xs sm:text-sm font-medium border border-white/20">
                  +{service.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Key Highlights */}
            <div className="space-y-2 mt-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wide">Key Features</h4>
              {service.highlights.slice(0, 2).map((highlight, idx) => (
                <div 
                  key={idx}
                  className="flex items-start text-xs sm:text-sm text-white/80 transition-colors duration-200 group-hover:text-white/90"
                >
                  <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-4 mt-auto border-t border-white/20">
              <button className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 transition-all duration-200 transform text-sm sm:text-base ${
                isHovered 
                  ? 'scale-105 shadow-lg from-blue-500/90 to-purple-500/90' 
                  : 'scale-100'
              }`}>
                <span>Explore Service</span>
                <ArrowRight className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 ${
                  isHovered ? 'translate-x-0.5' : 'translate-x-0'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AnimatedServiceCard.displayName = 'AnimatedServiceCard';
export default AnimatedServiceCard;
