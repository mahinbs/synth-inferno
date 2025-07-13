import React from "react";
import { Eye, Box, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const ArVrPage = () => {
  const technologies = ["Unity", "Unreal Engine", "Spark AR", "8thWall", "WebXR", "Blender", "ARKit", "ARCore"];
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AR/VR Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create immersive experiences that bridge the gap between digital and physical worlds
            </p>
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

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enter the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create immersive AR/VR experiences that will captivate your audience and transform your business.
          </p>
          <Button size="lg" className="px-8">
            Start Your AR/VR Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ArVrPage;