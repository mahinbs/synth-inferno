import React from "react";
import { Eye, Box, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackSection from "@/components/shared/TechStackSection";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import DevelopmentLifecycle from "@/components/shared/DevelopmentLifecycle";
import { openZohoForm } from "@/utils/zohoForm";
const ArVrPage = () => {
  const technologies = [
    "Unity", "Unreal Engine", "Spark AR", "8thWall", "WebXR", "Blender", 
    "ARKit", "ARCore", "A-Frame", "Three.js", "Babylon.js", "OpenXR",
    "Oculus SDK", "HTC Vive SDK", "Magic Leap", "HoloLens", "Vuforia",
    "ARToolKit", "C#", "C++", "JavaScript", "WebGL"
  ];
  const applications = [{
    icon: Users,
    title: "VR Training & Safety Modules",
    description: "Immersive training environments that simulate real-world scenarios without real-world risks."
  }, {
    icon: Box,
    title: "AR Retail Try-ons & Filters",
    description: "Interactive augmented reality experiences that let customers visualize products before purchase."
  }, {
    icon: Eye,
    title: "Virtual Product Demos",
    description: "Showcase products in virtual environments that engage and inform potential customers."
  }, {
    icon: Zap,
    title: "Spatial Storytelling",
    description: "Create narrative experiences that unfold in three-dimensional space around users."
  }];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AR/VR Development Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Create immersive experiences that bridge the gap between digital and physical worlds with cutting-edge AR/VR technology.
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
                onClick={() => openZohoForm('ar-vr-consultation')}
                className="px-8 py-4 text-lg"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our AR/VR Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <app.icon className="h-8 w-8 text-primary mr-4" />
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{app.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection 
        title="AR/VR Technology Stack"
        subtitle="Advanced AR/VR development tools and platforms for creating immersive experiences"
        technologies={technologies}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection 
        title="Why Choose DeeCee for AR/VR Development?"
        subtitle="Leading AR/VR development with proven expertise in immersive technology solutions"
      />

      {/* Development Lifecycle */}
      <DevelopmentLifecycle 
        title="AR/VR Development Process"
        subtitle="From concept to immersive reality, our proven AR/VR development methodology"
        className="bg-muted/30"
      />

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enter the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create immersive AR/VR experiences that will captivate your audience and transform your business.
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

export default ArVrPage;