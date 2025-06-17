
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRoutePreloading } from '@/hooks/useRoutePreloading';

interface Service {
  id: string;
  icon: any;
  title: string;
  category: string;
  intro: string;
  technologies: string[];
  highlights: string[];
  backgroundImage: string;
  price: string;
  duration: string;
}

interface HorizontalServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const getCategoryAccent = (category: string) => {
  switch (category) {
    case 'ai':
      return 'from-cyan-400 to-blue-500';
    case 'web':
      return 'from-purple-400 to-violet-500';
    case 'mobile':
      return 'from-emerald-400 to-green-500';
    case 'saas':
      return 'from-orange-400 to-amber-500';
    case 'cloud':
      return 'from-pink-400 to-rose-500';
    default:
      return 'from-blue-400 to-purple-500';
  }
};

// Map service categories to their existing route paths
const getServiceRoute = (category: string): string => {
  const routeMap: Record<string, string> = {
    'web': '/web-apps',
    'saas': '/saas',
    'mobile': '/mobile-apps', 
    'ai': '/ai-calling',
    'automation': '/ai-automation'
  };
  
  return routeMap[category] || '/web-apps';
};

const HorizontalServiceCard = memo(({
  service,
  index,
  isVisible
}: HorizontalServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { preloadRoute, cancelPreload } = useRoutePreloading();
  const serviceRoute = getServiceRoute(service.category);

  const handleLearnMoreHover = () => {
    preloadRoute(serviceRoute, 300);
  };

  const handleLearnMoreLeave = () => {
    cancelPreload(serviceRoute);
  };

  return (
    <div 
      className={`group relative transform transition-all duration-500 ease-out ${
        isVisible 
          ? `animate-fade-in-up opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${Math.min(index * 100, 500)}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${getCategoryAccent(service.category)} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
      
      {/* Main Card */}
      <div className={`relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800/60 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden p-6 sm:p-8 ${
        isHovered ? 'border-gray-700/80' : 'border-gray-800/60'
      }`}>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Icon Container */}
          <div className="flex-shrink-0">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getCategoryAccent(service.category)} flex items-center justify-center transition-all duration-300 transform ${
              isHovered ? 'scale-105 rotate-3' : 'scale-100 rotate-0'
            }`}>
              <service.icon className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-grow min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-200">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-200 mb-4">
              {service.intro}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {service.technologies.slice(0, 4).map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 bg-gray-800/60 text-gray-300 rounded-full text-xs font-medium border border-gray-700/40 transition-all duration-200 hover:bg-gray-700/60"
                >
                  {tech}
                </span>
              ))}
              {service.technologies.length > 4 && (
                <span className="px-2.5 py-1 bg-gray-800/40 text-gray-400 rounded-full text-xs font-medium border border-gray-700/30">
                  +{service.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Pricing & Duration */}
          <div className="flex-shrink-0 flex flex-col sm:items-end gap-3 w-full sm:w-auto">
            {/* Price Badge */}
            <div className={`px-4 py-2 bg-gradient-to-r ${getCategoryAccent(service.category)} rounded-lg shadow-lg transition-all duration-200 transform ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}>
              <span className="text-white font-bold text-lg">
                {service.price}
              </span>
            </div>
            
            {/* Duration Badge */}
            <div className="px-3 py-1.5 bg-gray-800/80 backdrop-blur-sm text-gray-300 rounded-lg border border-gray-700/50 transition-all duration-200">
              <span className="text-sm font-medium">
                {service.duration}
              </span>
            </div>

            {/* Enhanced Action Link */}
            <Link
              to={serviceRoute}
              className={`flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/60 hover:bg-gray-700/80 text-gray-300 hover:text-white rounded-lg border border-gray-700/40 hover:border-gray-600/60 transition-all duration-200 transform text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={handleLearnMoreHover}
              onMouseLeave={handleLearnMoreLeave}
            >
              <span>Learn More</span>
              <ArrowRight className={`h-3 w-3 transition-transform duration-200 ${
                isHovered ? 'translate-x-0.5' : 'translate-x-0'
              }`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

HorizontalServiceCard.displayName = 'HorizontalServiceCard';
export default HorizontalServiceCard;
