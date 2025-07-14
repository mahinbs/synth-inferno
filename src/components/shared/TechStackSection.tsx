import { Badge } from "@/components/ui/badge";

interface TechStackSectionProps {
  title?: string;
  subtitle?: string;
  technologies: string[];
  className?: string;
}

const TechStackSection = ({ 
  title = "Technologies We Use", 
  subtitle = "Cutting-edge tools and frameworks powering your solutions",
  technologies,
  className = ""
}: TechStackSectionProps) => {
  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="px-4 py-2 text-sm hover:bg-primary/20 transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;