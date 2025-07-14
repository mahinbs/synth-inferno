import { Users, Trophy, Zap, Shield, Clock, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WhyChooseUsItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const defaultReasons: WhyChooseUsItem[] = [
  {
    icon: Users,
    title: "Expert Team",
    description: "230+ experienced developers with proven expertise in cutting-edge technologies"
  },
  {
    icon: Trophy,
    title: "Proven Track Record", 
    description: "Successfully delivered 500+ projects across various industries worldwide"
  },
  {
    icon: Zap,
    title: "Modern Technology Stack",
    description: "Latest frameworks and tools ensuring scalable, future-ready solutions"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and compliance with international standards"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for peace of mind"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 40+ countries with local understanding and expertise"
  }
];

interface WhyChooseUsSectionProps {
  title?: string;
  subtitle?: string;
  reasons?: WhyChooseUsItem[];
  className?: string;
}

const WhyChooseUsSection = ({
  title = "Why Choose DeeCee for Your Project?",
  subtitle = "We combine technical excellence with business understanding to deliver exceptional results",
  reasons = defaultReasons,
  className = ""
}: WhyChooseUsSectionProps) => {
  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group border-0 bg-background/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;