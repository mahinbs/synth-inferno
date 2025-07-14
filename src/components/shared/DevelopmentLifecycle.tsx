import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DevelopmentPhase {
  phase: string;
  title: string;
  description: string;
  activities: string[];
}

const defaultPhases: DevelopmentPhase[] = [
  {
    phase: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements and defining project scope",
    activities: ["Requirements gathering", "Technical analysis", "Project roadmap", "Resource planning"]
  },
  {
    phase: "02", 
    title: "Design & Prototyping",
    description: "Creating user-centered designs and interactive prototypes",
    activities: ["UI/UX design", "Wireframing", "Prototyping", "Design validation"]
  },
  {
    phase: "03",
    title: "Development & Testing",
    description: "Building robust solutions with continuous testing",
    activities: ["Agile development", "Code reviews", "Quality assurance", "Performance testing"]
  },
  {
    phase: "04",
    title: "Deployment & Launch", 
    description: "Seamless deployment and successful go-live",
    activities: ["Production deployment", "Go-live support", "Performance monitoring", "User training"]
  },
  {
    phase: "05",
    title: "Support & Maintenance",
    description: "Ongoing support and continuous improvement",
    activities: ["24/7 monitoring", "Regular updates", "Feature enhancements", "Technical support"]
  }
];

interface DevelopmentLifecycleProps {
  title?: string;
  subtitle?: string;
  phases?: DevelopmentPhase[];
  className?: string;
}

const DevelopmentLifecycle = ({ 
  title = "Our Development Process",
  subtitle = "A proven methodology that ensures successful project delivery",
  phases = defaultPhases,
  className = ""
}: DevelopmentLifecycleProps) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-cyan-400 font-bold text-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    {phase.phase}
                  </div>
                  <CardTitle className="text-xl font-semibold text-cyan-400">{phase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentLifecycle;