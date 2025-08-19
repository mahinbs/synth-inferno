
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
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/ar-vr-bg.jpg')`
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              AR/VR Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build immersive AR/VR experiences with spatial storytelling, real-time interaction, and AI-enhanced environments ready for next-gen platforms like Vision Pro, Meta Quest, and WebXR.
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
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our AR/VR Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge immersive experiences that engage users and transform digital interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mr-4">
                      <app.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{app.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-900/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">AR/VR Development Tech Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade tools and frameworks powering next-generation immersive experiences
            </p>
          </div>
          <div className="grid gap-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Core Engines:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Unreal Engine 5 (XR)", "Unity 2023 (XR)", "Godot 4"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">AR SDKs:</h3>
                <div className="flex flex-wrap gap-2">
                  {["ARKit (iOS)", "ARCore (Android)", "Vuforia", "8thWall (WebAR)"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">VR SDKs:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Oculus SDK", "OpenXR", "SteamVR", "Pico SDK", "Meta Presence Platform"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">3D Modeling:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Blender", "Maya", "Cinema 4D", "Substance 3D", "Mixamo"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Interaction & UX:</h3>
                <div className="flex flex-wrap gap-2">
                  {["XR Toolkit", "Unreal Controllers", "ManoMotion", "Ultraleap", "HaptX"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">AI Integration:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Inworld AI", "GPT-4.5", "OpenCV", "Unity Barracuda"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Networking:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Photon Fusion", "Normcore", "Unity Netcode", "Epic Online Services"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Deployment:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Meta Quest", "HTC Vive", "Apple Vision Pro", "HoloLens 2", "Magic Leap", "WebXR"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Testing:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Unity Profiler", "Unreal Insights", "PlaytestCloud", "Oculus Tools"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Analytics:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Unity Analytics", "Firebase", "Custom XR Metrics"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 bg-gray-700/50 text-gray-300 border-gray-600/50">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Synth Inferno for AR/VR?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading AR/VR development with enterprise-grade expertise and next-gen platform support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center bg-gray-800/50 border-gray-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <CardTitle className="text-xl mb-3 text-white">Deep Unity/Unreal Expertise</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Across XR platforms with proven track record in enterprise-grade immersive applications
              </CardDescription>
            </Card>
            <Card className="p-6 text-center bg-gray-800/50 border-gray-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <CardTitle className="text-xl mb-3 text-white">Immersive Experience Design</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Tailored to real business use cases with focus on user engagement and practical applications
              </CardDescription>
            </Card>
            <Card className="p-6 text-center bg-gray-800/50 border-gray-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎮</div>
              <CardTitle className="text-xl mb-3 text-white">AI-Powered Agents & UX</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Enhanced with gestures, spatial UX, and intelligent interactions for next-level immersion
              </CardDescription>
            </Card>
            <Card className="p-6 text-center bg-gray-800/50 border-gray-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <CardTitle className="text-xl mb-3 text-white">Multi-Platform Deployment</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Deployed to Meta Quest, Apple Vision Pro, and WebXR devices with optimized performance
              </CardDescription>
            </Card>
            <Card className="p-6 text-center bg-gray-800/50 border-gray-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <CardTitle className="text-xl mb-3 text-white">Analytics & Performance</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Real-time support with comprehensive analytics, performance tuning, and continuous optimization
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Lifecycle */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Enterprise-Grade AR/VR Development Lifecycle</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, our systematic approach to complex XR projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { phase: "1", title: "Concept Development & Use Case Definition", description: "Define project scope, identify target platforms, and establish success metrics for your AR/VR solution." },
              { phase: "2", title: "User Research & Spatial Experience Mapping", description: "Research user behaviors in 3D space and map optimal interaction patterns for immersive experiences." },
              { phase: "3", title: "Technical Architecture & Platform Selection", description: "Choose optimal engines, SDKs, and deployment platforms based on project requirements and target devices." },
              { phase: "4", title: "3D Asset Design & Environment Modeling", description: "Create optimized 3D assets, environments, and visual elements using industry-standard modeling tools." },
              { phase: "5", title: "Engine Setup & Core Scene Development", description: "Set up Unity/Unreal environments and develop core scenes with proper lighting and optimization." },
              { phase: "6", title: "Interaction Design", description: "Implement gestures, gaze tracking, haptics, and voice controls for intuitive user interactions." },
              { phase: "7", title: "AR/VR SDK Integration", description: "Integrate platform-specific SDKs (ARKit, ARCore, OpenXR) for device-native functionality." },
              { phase: "8", title: "AI Integration", description: "Implement NPCs, conversational UI, and vision AI for enhanced user engagement and intelligence." },
              { phase: "9", title: "Multiplayer/Networking", description: "Add real-time networking capabilities for collaborative and multiplayer AR/VR experiences when applicable." },
              { phase: "10", title: "Device Testing & Performance Optimization", description: "Extensive testing across target devices with performance profiling and optimization for smooth experiences." },
              { phase: "11", title: "Cross-Platform Build & Deployment", description: "Deploy to Meta Quest, Apple Vision Pro, WebXR, and other target platforms with platform-specific optimizations." },
              { phase: "12", title: "Analytics, Feedback Loop & Continuous Updates", description: "Monitor user engagement, gather feedback, and implement continuous improvements based on real-world usage data." }
            ].map((step, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {step.phase}
                    </div>
                    <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Enter the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create immersive AR/VR experiences that will captivate your audience and transform your business.
          </p>
          <a 
            href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArVrPage;
