
import { memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Service {
  id: string;
  icon: any;
  title: string;
  category: string;
  intro: string;
  technologies: string[];
  highlights: string[];
}

interface ServiceCardProps {
  service: Service;
  isExpanded: boolean;
  onToggle: (serviceId: string | null) => void;
  index: number;
  isVisible: boolean;
}

const ServiceCard = memo(({ service, isExpanded, onToggle, index, isVisible }: ServiceCardProps) => {
  return (
    <Collapsible
      open={isExpanded}
      onOpenChange={(open) => onToggle(open ? service.id : null)}
    >
      <div className={`group bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden ${isVisible ? `animate-fade-in-up animate-stagger-${index + 3}` : 'opacity-0'}`}>
        <CollapsibleTrigger asChild>
          <div className="flex items-center p-8 cursor-pointer hover:bg-muted/50 transition-colors duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <service.icon className="h-8 w-8 text-primary" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.intro}
              </p>
            </div>
            
            <ChevronDown className={`h-6 w-6 text-muted-foreground transform transition-transform duration-300 ml-4 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-8 pb-8 border-t border-border/50">
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Key Capabilities</h4>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border/50">
              <button className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300">
                Get Started
              </button>
              <button className="flex-1 border border-primary text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
});

ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;
