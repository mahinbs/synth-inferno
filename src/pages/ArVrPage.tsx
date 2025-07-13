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
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            AR & VR Development
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create immersive experiences that blur the line between digital and reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3">
              Start Your AR/VR Project
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            AR/VR Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <app.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{app.title}</CardTitle>
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
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Build Your AR/VR Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something that will amaze your users
          </p>
          <Button size="lg" className="px-8 py-3">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};
export default ArVrPage;