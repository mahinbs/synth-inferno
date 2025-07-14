import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackSection from "@/components/shared/TechStackSection";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import DevelopmentLifecycle from "@/components/shared/DevelopmentLifecycle";
import { openZohoForm } from "@/utils/zohoForm";

const GameDevelopmentPage = () => {
  const gameTechnologies = [
    "Unity", "Unreal Engine", "Godot", "C#", "C++", "JavaScript",
    "Blender", "Maya", "3ds Max", "Photon", "Mirror Networking", 
    "PlayFab", "Firebase", "AWS GameLift", "Steam SDK", "iOS SDK",
    "Android SDK", "WebGL", "OpenGL", "DirectX", "Vulkan"
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
              Game Development Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Create engaging, immersive gaming experiences across all platforms with cutting-edge technology and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => openZohoForm('game-consultation')}
                className="px-8 py-4 text-lg"
              >
                Discuss Your Idea
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection 
        title="Game Development Technology Stack"
        subtitle="Professional game development tools and engines for creating exceptional gaming experiences"
        technologies={gameTechnologies}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection 
        title="Why Choose DeeCee for Game Development?"
        subtitle="Expert game developers with proven experience in creating successful games across all platforms"
      />

      {/* Development Lifecycle */}
      <DevelopmentLifecycle 
        title="Game Development Process"
        subtitle="From concept to launch, our proven game development methodology ensures engaging and successful games"
        className="bg-muted/30"
      />

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Game?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Turn your game idea into reality with our experienced development team and cutting-edge technology.
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

export default GameDevelopmentPage;