
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

  return (
    <div 
      className={`group relative transform transition-all duration-700 ease-out ${
        isVisible 
          ? `animate-fade-in-up opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        animationDelay: `${index * 200}ms`,
        transformStyle: 'preserve-3d'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-glow-pulse"></div>
      
      {/* Main Card */}
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 transform group-hover:translate-x-2 group-hover:-translate-y-2"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500 delay-200 transform group-hover:translate-x-4 group-hover:-translate-y-4"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-600 delay-100 transform group-hover:-translate-x-3 group-hover:translate-y-3"></div>
        </div>

        <div className="relative z-10">
          {/* Icon Container with Advanced Animation */}
          <div className="relative mb-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center transition-all duration-500 transform ${
              isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
            }`}>
              {/* Icon Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
              
              <service.icon className={`h-10 w-10 text-blue-600 transition-all duration-500 transform ${
                isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
              }`} />
              
              {/* Sparkle Effect */}
              <Sparkles className={`absolute -top-1 -right-1 h-4 w-4 text-yellow-400 transition-all duration-300 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`} />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold text-[#1c1c1e] transition-all duration-300 ${
              isHovered ? 'text-blue-600' : 'text-[#1c1c1e]'
            }`}>
              {service.title}
            </h3>
            
            <p className="text-[#1c1c1e]/70 leading-relaxed group-hover:text-[#1c1c1e]/90 transition-colors duration-300">
              {service.intro}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4">
              {service.technologies.slice(0, 3).map((tech, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 transition-all duration-300 delay-${idx * 50} ${
                    isHovered ? 'scale-105 shadow-md' : 'scale-100'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
              {service.technologies.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  +{service.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Key Highlights */}
            <div className="space-y-2 mt-6">
              <h4 className="text-sm font-semibold text-[#1c1c1e]/80 uppercase tracking-wide">Key Features</h4>
              {service.highlights.slice(0, 2).map((highlight, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center text-sm text-[#1c1c1e]/70 transition-all duration-300 delay-${idx * 100} ${
                    isHovered ? 'translate-x-1' : 'translate-x-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 transition-all duration-300 group-hover:scale-125"></div>
                  {highlight}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-6 mt-6 border-t border-gray-200/50">
              <button className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 transform ${
                isHovered 
                  ? 'scale-105 shadow-lg shadow-blue-500/25 from-blue-500 to-purple-500' 
                  : 'scale-100 hover:scale-105'
              }`}>
                <span>Explore Service</span>
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : 'translate-x-0'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Hover Border Animation */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
             style={{ 
               background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #10B981)',
               mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               maskComposite: 'xor',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               padding: '2px'
             }}>
        </div>
      </div>
    </div>
  );
});

AnimatedServiceCard.displayName = 'AnimatedServiceCard';
export default AnimatedServiceCard;
