import { ArrowRight, Target, Palette, TrendingUp, Users, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { openZohoForm } from "@/utils/zohoForm";

const UiUxDesignPage = () => {
  const designTechStack = [
    {
      category: "Research & Strategy",
      tools: "Optimal Workshop · Maze · Useberry · Hotjar · Google Analytics"
    },
    {
      category: "Wireframing & Prototyping", 
      tools: "Figma · Adobe XD · Sketch · Balsamiq · InVision"
    },
    {
      category: "Visual & Interface Design",
      tools: "Figma · Adobe Illustrator · Photoshop · Lottie"
    },
    {
      category: "User Testing & Feedback",
      tools: "Maze · Lookback · UsabilityHub · PlaybookUX"
    },
    {
      category: "Design Systems & Tokens",
      tools: "Figma Tokens · Storybook · Zeroheight · DSM (InVision)"
    },
    {
      category: "Developer Handoff",
      tools: "Figma Dev Mode · Zeplin · Avocode · Storybook Docs"
    },
    {
      category: "Motion & Interaction",
      tools: "ProtoPie · After Effects · Framer · Principle"
    },
    {
      category: "Accessibility & Guidelines",
      tools: "Stark · axe DevTools · WCAG Guidelines · Lighthouse"
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Research-first approach ensuring your user's needs are understood"
    },
    {
      icon: Palette,
      title: "Pixel-perfect, scalable design systems for consistency"
    },
    {
      icon: TrendingUp,
      title: "Design aligned to conversion, accessibility & clarity"
    },
    {
      icon: Users,
      title: "Smooth handoff from design to dev teams with full documentation"
    },
    {
      icon: RotateCcw,
      title: "Iterative testing & optimization post-launch"
    }
  ];

  const designProcess = [
    "Discovery & Requirement Gathering",
    "User Research & Persona Development", 
    "Information Architecture & User Flows",
    "Wireframing (Low-Fidelity)",
    "Interactive Prototyping (High-Fidelity)",
    "Visual & UI Design",
    "Design System & Component Library Creation",
    "Usability Testing & Iteration",
    "Accessibility Review & Compliance Checks",
    "Developer Handoff & Documentation",
    "Post-Launch Feedback & Continuous UX Optimization"
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
              UI/UX Design
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Deliver delightful digital experiences through research-backed, accessible, and beautifully crafted UI/UX design — built for conversion, clarity, and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade UI/UX Design Tech Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional design tools and methodologies for creating outstanding user experiences
            </p>
          </div>
          <div className="grid gap-6 max-w-5xl mx-auto">
            {designTechStack.map((stack, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">{stack.category}:</h3>
                  <p className="text-muted-foreground">{stack.tools}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dee&Cee Labs for UI/UX Design?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Award-winning design team with proven expertise in creating user-centered digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground leading-relaxed">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade UI/UX Design Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Human-centered design approach that ensures every design decision is backed by user research and data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {designProcess.map((step, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="font-medium text-foreground">{step}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your User Experience?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create designs that not only look beautiful but also drive measurable business results and user satisfaction.
          </p>
          <a 
            href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UiUxDesignPage;