
import { memo, useState, useRef } from 'react';
import { ChevronDown, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { ServiceData } from './ServicesData';
import { Service } from '@/data/projects';
import OptimizedImage from '../ui/OptimizedImage';
import ServicePortfolioPreviews from './ServicePortfolioPreviews';
import { useServiceHover } from './hooks/useServiceHover';

interface EnhancedServiceCardProps {
  service: ServiceData;
  isExpanded: boolean;
  onExpand: (serviceId: string) => void;
  onCollapse: () => void;
  index: number;
  projects: Service[];
}

const EnhancedServiceCard = memo(({
  service,
  isExpanded,
  onExpand,
  onCollapse,
  index,
  projects
}: EnhancedServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const {
    isTouchDevice,
    handleMouseEnter,
    handleMouseLeave,
    handleContentMouseEnter,
    handleContentMouseLeave,
    handleClick
  } = useServiceHover({
    onExpand,
    onCollapse,
    serviceId: service.id,
    isExpanded
  });

  // Get all projects from all services and flatten them
  const allProjects = projects.flatMap(serviceData => serviceData.projects);

  return (
    <div 
      ref={cardRef}
      className={`group relative overflow-hidden transition-all duration-300 ease-out ${
        isExpanded 
          ? 'bg-white/95 backdrop-blur-xl border border-blue-200/40 rounded-2xl shadow-2xl shadow-blue-500/10' 
          : 'bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl hover:border-blue-300/50 shadow-lg hover:shadow-xl hover:bg-white/90'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        willChange: isExpanded ? 'transform, opacity' : 'auto',
        contain: 'layout style paint',
        transform: 'translate3d(0, 0, 0)'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-blue-50/30 opacity-50" />
      
      {/* Main Card Content */}
      <div className="relative z-10">
        {/* Header Section with Image */}
        <div 
          className={`flex items-center ${isTouchDevice ? 'cursor-pointer' : 'cursor-default'}`}
          onClick={handleClick}
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
            
            {/* Light Glassmorphic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-blue-600/20 backdrop-blur-sm" />
            
            {/* Icon Container */}
            <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md border border-blue-200/50 flex items-center justify-center shadow-lg">
              <service.icon className="h-6 w-6 text-blue-600" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Price and Timeline Badges */}
              <div className="hidden md:flex flex-col space-y-2 mr-6">
                <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                  <span>{service.startingPrice}</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span>{service.timeline}</span>
                </div>
              </div>

              {/* Expand Icon */}
              <ChevronDown className={`h-6 w-6 text-blue-600 transform transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`} />
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isExpanded 
              ? "max-h-[1000px] opacity-100 transform translate-y-0" 
              : "max-h-0 opacity-0 transform -translate-y-2"
          }`}
          style={{
            contentVisibility: isExpanded ? 'visible' : 'hidden'
          }}
          onMouseEnter={handleContentMouseEnter}
          onMouseLeave={handleContentMouseLeave}
        >
          <div className="px-6 pb-6 border-t border-gray-200/50 mt-4 pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    About This Service
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {service.detailedDescription}
                  </p>
                </div>

                {/* Mobile Price/Timeline */}
                <div className="md:hidden flex space-x-4">
                  <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
                    <DollarSign className="h-4 w-4 text-blue-600" />
                    <span>{service.startingPrice}</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/60 text-sm font-medium flex items-center space-x-2 text-gray-800">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span>{service.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 rounded-full text-sm bg-gray-100/80 border border-gray-200/80 text-gray-700 hover:bg-gray-200/60 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="px-6 py-3 rounded-xl border border-blue-300/60 text-blue-700 hover:bg-blue-50/80 transition-all duration-300 font-medium backdrop-blur-sm">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Project Previews Section */}
            {isExpanded && (
              <ServicePortfolioPreviews 
                serviceId={service.id} 
                projects={allProjects} 
              />
            )}

            {/* See All Projects Link */}
            {isExpanded && (
              <div className="mt-6 pt-4 border-t border-gray-200/30 text-center">
                <a 
                  href={`/portfolio?service=${service.id}`} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  See All {service.title} Projects
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </div>
  );
});

EnhancedServiceCard.displayName = 'EnhancedServiceCard';
export default EnhancedServiceCard;
