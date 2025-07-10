import React from "react";
import { Eye, Box, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ArVrPage = () => {
  const technologies = [
    "Unity", "Unreal Engine", "Spark AR", "8thWall", 
    "WebXR", "Blender", "ARKit", "ARCore"
  ];

  const applications = [
    {
      icon: Users,
      title: "VR Training & Safety Modules",
      description: "Immersive training environments that simulate real-world scenarios without real-world risks."
    },
    {
      icon: Box,
      title: "AR Retail Try-ons & Filters",
      description: "Interactive augmented reality experiences that let customers visualize products before purchase."
    },
    {
      icon: Eye,
      title: "Virtual Product Demos",
      description: "Showcase products in virtual environments that engage and inform potential customers."
    },
    {
      icon: Zap,
      title: "Spatial Storytelling",
      description: "Create narrative experiences that unfold in three-dimensional space around users."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Eye className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">AR / VR Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Digital Immersion That Transforms Reality
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our AR/VR solutions blend artistry and precision engineering to create experiences 
            that inform, train, or mesmerize. We specialize in real-time 3D interaction, 
            gesture tracking, and spatial storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From training simulations to retail experiences, our AR/VR solutions 
              serve diverse industries and use cases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {applications.map((app, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <app.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{app.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {app.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WebAR Experiences Highlight */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">WebAR Experiences</CardTitle>
              <CardDescription className="text-lg">
                Browser-based augmented reality that works on any device, 
                no app installation required.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-lg text-muted-foreground">
              Industry-leading tools and frameworks for cutting-edge AR/VR development.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Investment & Timeline</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Starting Investment</h3>
              <p className="text-4xl font-bold mb-4">$22,000</p>
              <p className="text-muted-foreground">
                Custom AR/VR solutions tailored to your specific needs and objectives.
              </p>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Development Timeline</h3>
              <p className="text-4xl font-bold mb-4">12-18 weeks</p>
              <p className="text-muted-foreground">
                From concept to deployment, including testing and optimization phases.
              </p>
            </Card>
          </div>
          
          <Button size="lg" className="text-lg px-8">
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ArVrPage;