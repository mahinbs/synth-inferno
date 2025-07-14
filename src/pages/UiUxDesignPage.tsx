import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackSection from "@/components/shared/TechStackSection";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import DevelopmentLifecycle from "@/components/shared/DevelopmentLifecycle";
import { openZohoForm } from "@/utils/zohoForm";

const UiUxDesignPage = () => {
  const designTechnologies = [
    "Figma", "Adobe XD", "Sketch", "Adobe Photoshop", "Adobe Illustrator",
    "Principle", "InVision", "Framer", "Zeplin", "Marvel", "Maze",
    "Hotjar", "Google Analytics", "Miro", "FigJam", "Abstract",
    "Adobe After Effects", "Lottie", "ProtoPie", "Axure RP", "Balsamiq"
  ];

  const designPhases = [
    {
      phase: "01",
      title: "Research & Discovery",
      description: "Understanding users, market, and business requirements",
      activities: ["User research", "Competitive analysis", "Stakeholder interviews", "Requirements gathering"]
    },
    {
      phase: "02", 
      title: "Strategy & Planning",
      description: "Defining design strategy and user experience architecture",
      activities: ["User personas", "User journey mapping", "Information architecture", "Design strategy"]
    },
    {
      phase: "03",
      title: "Design & Prototyping",
      description: "Creating visual designs and interactive prototypes",
      activities: ["Wireframing", "Visual design", "Interactive prototypes", "Design systems"]
    },
    {
      phase: "04",
      title: "Testing & Validation", 
      description: "Validating designs through user testing and feedback",
      activities: ["Usability testing", "A/B testing", "User feedback", "Design iteration"]
    },
    {
      phase: "05",
      title: "Implementation & Support",
      description: "Supporting development and ensuring design quality",
      activities: ["Design handoff", "Developer collaboration", "Quality assurance", "Design maintenance"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              UI/UX Design Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Create exceptional user experiences with data-driven design that converts visitors into customers and delights users at every touchpoint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openZohoForm('ui-ux-design')}
                className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
              >
                Start Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => openZohoForm('design-consultation')}
                className="px-8 py-4 text-lg"
              >
                Free Design Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection 
        title="Design Tools & Technologies"
        subtitle="Professional design tools and methodologies for creating outstanding user experiences"
        technologies={designTechnologies}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection 
        title="Why Choose DeeCee for UI/UX Design?"
        subtitle="Award-winning design team with proven expertise in creating user-centered digital experiences"
      />

      {/* Development Lifecycle */}
      <DevelopmentLifecycle 
        title="Design Process"
        subtitle="Human-centered design approach that ensures every design decision is backed by user research and data"
        phases={designPhases}
        className="bg-muted/30"
      />

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your User Experience?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create designs that not only look beautiful but also drive measurable business results and user satisfaction.
          </p>
          <Button 
            size="lg"
            onClick={() => openZohoForm('design-final-cta')}
            className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Design Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UiUxDesignPage;