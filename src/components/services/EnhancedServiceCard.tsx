
import { memo, useState } from 'react';
import { ChevronDown, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { ServiceData } from './ServicesData';
import OptimizedImage from '../ui/OptimizedImage';

interface EnhancedServiceCardProps {
  service: ServiceData;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

const EnhancedServiceCard = memo(({
  service,
  isExpanded,
  onToggle,
  index
}: EnhancedServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden transition-all duration-500 ease-out ${
        isExpanded
          ? 'bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-violet-500/30 rounded-2xl shadow-2xl shadow-violet-500/10'
          : 'bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-violet-500/40 shadow-lg hover:shadow-xl'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        willChange: 'transform, opacity',
        contain: 'layout style paint'
      }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-blue-600/5 to-cyan-600/5 animate-pulse opacity-50" />
      
      {/* Main Card Content */}
      <div className="relative z-10">
        {/* Header Section with Image */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={onToggle}
        >
          {/* Left Image Section */}
          <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-l-xl">
            <OptimizedImage
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onLoad={() => setImageLoaded(true)}
              priority={index < 2}
            />
            
            {/* Glassmorphic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900/60 via-blue-900/40 to-cyan-900/60 backdrop-blur-sm" />
            
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-blue-300 rounded-full animate-bounce" />
            </div>
            
            {/* Icon Container */}
            <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
              <service.icon className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Price and Timeline Badges */}
              <div className="hidden md:flex flex-col space-y-2 mr-6">
                <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600/20 to-blue-600/20 backdrop-blur-sm border border-violet-500/30 text-sm font-medium flex items-center space-x-2 text-white">
                  <DollarSign className="h-4 w-4" />
                  <span>{service.startingPrice}</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 text-sm font-medium flex items-center space-x-2 text-white">
                  <Clock className="h-4 w-4" />
                  <span>{service.timeline}</span>
                </div>
              </div>

              {/* Expand Icon */}
              <ChevronDown
                className={`h-6 w-6 text-violet-400 transform transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded
              ? "max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
          style={{ contentVisibility: isExpanded ? 'visible' : 'hidden' }}
        >
          <div className="px-6 pb-6 border-t border-slate-700/50 mt-4 pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    About This Service
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {service.detailedDescription}
                  </p>
                </div>

                {/* Mobile Price/Timeline */}
                <div className="md:hidden flex space-x-4">
                  <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600/20 to-blue-600/20 backdrop-blur-sm border border-violet-500/30 text-sm font-medium flex items-center space-x-2 text-white">
                    <DollarSign className="h-4 w-4" />
                    <span>{service.startingPrice}</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 text-sm font-medium flex items-center space-x-2 text-white">
                    <Clock className="h-4 w-4" />
                    <span>{service.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-slate-300 flex items-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm border border-slate-600/50 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="px-6 py-3 rounded-xl border border-violet-500/50 text-violet-300 hover:bg-violet-600/20 transition-all duration-300 font-medium backdrop-blur-sm">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </div>
  );
});

EnhancedServiceCard.displayName = 'EnhancedServiceCard';
export default EnhancedServiceCard;
