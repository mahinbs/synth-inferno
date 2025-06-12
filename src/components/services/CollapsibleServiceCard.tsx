
import { memo, useState } from 'react';
import { ChevronDown, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Service {
  id: string;
  icon: any;
  title: string;
  category: string;
  intro: string;
  aboutService: string;
  keyFeatures: string[];
  technologies: string[];
  price: string;
  duration: string;
}

interface CollapsibleServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const getCategoryAccent = (category: string) => {
  switch (category) {
    case 'ai':
      return {
        gradient: 'from-cyan-500 to-blue-600',
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-700'
      };
    case 'web':
      return {
        gradient: 'from-purple-500 to-violet-600',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-700'
      };
    case 'mobile':
      return {
        gradient: 'from-emerald-500 to-green-600',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-700'
      };
    case 'saas':
      return {
        gradient: 'from-orange-500 to-amber-600',
        border: 'border-orange-500/30',
        bg: 'bg-orange-500/10',
        text: 'text-orange-700'
      };
    case 'cloud':
      return {
        gradient: 'from-pink-500 to-rose-600',
        border: 'border-pink-500/30',
        bg: 'bg-pink-500/10',
        text: 'text-pink-700'
      };
    default:
      return {
        gradient: 'from-blue-500 to-purple-600',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-700'
      };
  }
};

const CollapsibleServiceCard = memo(({
  service,
  index,
  isVisible
}: CollapsibleServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const accent = getCategoryAccent(service.category);

  return (
    <div 
      className={`group transform transition-all duration-500 ease-out ${
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
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Hover Preview Dropdown */}
        {isHovered && !isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-xl p-6 shadow-xl animate-fade-in-up transition-all duration-300 ease-in-out">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-[#1c1c1e] mb-3 flex items-center gap-2">
                  🧾 About This Service
                </h4>
                <p className="text-xs text-[#1c1c1e]/80 leading-relaxed">
                  {service.aboutService.substring(0, 120)}...
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-[#1c1c1e] mb-3 flex items-center gap-2">
                  ✅ Key Features
                </h4>
                <ul className="space-y-1">
                  {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-xs text-[#1c1c1e]/80 flex items-start gap-2">
                      <span className={`${accent.text} mt-1 flex-shrink-0`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-[#1c1c1e] mb-3 flex items-center gap-2">
                  🧰 Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} className={`text-xs px-3 py-1 rounded-full ${accent.bg} ${accent.text} border ${accent.border} hover:bg-opacity-80 transition-colors`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-3 border-t border-gray-200/40">
                <Button size="sm" className={`bg-gradient-to-r ${accent.gradient} text-white hover:opacity-90 text-xs px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105`}>
                  🔘 View Details
                </Button>
                <Button size="sm" variant="outline" className="text-xs px-4 py-2 rounded-lg border-gray-300 text-[#1c1c1e]/80 hover:bg-gray-100/60 transition-all duration-200 hover:scale-105">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main Card */}
        <div className={`relative bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg transition-all duration-300 overflow-hidden hover:shadow-xl hover:border-gray-200/60 ${
          isOpen ? 'ring-1 ring-gray-300/50' : ''
        }`}>
          
          <CollapsibleTrigger asChild>
            <div className="cursor-pointer p-6 hover:bg-gray-50/30 transition-colors duration-200">
              <div className="flex items-center gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${accent.gradient} flex items-center justify-center transition-all duration-300 transform ${
                  isHovered ? 'scale-105 rotate-3' : 'scale-100 rotate-0'
                }`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-xl font-bold text-[#1c1c1e] mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[#1c1c1e]/80 text-sm leading-relaxed group-hover:text-[#1c1c1e] transition-colors duration-200">
                    {service.intro}
                  </p>
                </div>

                {/* Price & Duration */}
                <div className="flex-shrink-0 flex flex-col items-end gap-3">
                  <div className={`px-4 py-2 bg-gradient-to-r ${accent.gradient} rounded-lg shadow-lg`}>
                    <span className="text-white font-bold text-lg">
                      {service.price}
                    </span>
                  </div>
                  
                  <div className="px-3 py-1.5 bg-gray-100/80 backdrop-blur-sm text-[#1c1c1e]/80 rounded-lg border border-gray-200/50">
                    <span className="text-sm font-medium">
                      {service.duration}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown className={`h-5 w-5 text-[#1c1c1e]/60 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`} />
                </div>
              </div>
            </div>
          </CollapsibleTrigger>

          {/* Collapsible Content */}
          <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="px-6 pb-6 border-t border-gray-200/40">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                
                {/* About This Service */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-[#1c1c1e] flex items-center gap-2">
                    🧾 About This Service
                  </h4>
                  <p className="text-[#1c1c1e]/80 text-sm leading-relaxed">
                    {service.aboutService}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-[#1c1c1e] flex items-center gap-2">
                    ✅ Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="text-[#1c1c1e]/80 text-sm flex items-start gap-2">
                        <span className={`${accent.text} mt-1 flex-shrink-0`}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-[#1c1c1e] flex items-center gap-2">
                    🧰 Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        className={`${accent.bg} ${accent.border} ${accent.text} hover:bg-opacity-80 transition-colors rounded-full px-3 py-1`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-200/40">
                <Button 
                  className={`bg-gradient-to-r ${accent.gradient} text-white hover:opacity-90 transition-all duration-200 hover:scale-105 flex items-center gap-2 rounded-lg`}
                >
                  <ExternalLink className="h-4 w-4" />
                  🔘 View Details
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-[#1c1c1e]/80 hover:bg-gray-100/60 hover:text-[#1c1c1e] transition-all duration-200 hover:scale-105 flex items-center gap-2 rounded-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get Quote
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
});

CollapsibleServiceCard.displayName = 'CollapsibleServiceCard';
export default CollapsibleServiceCard;
