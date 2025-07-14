import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackSection from "@/components/shared/TechStackSection";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import DevelopmentLifecycle from "@/components/shared/DevelopmentLifecycle";
import { openZohoForm } from "@/utils/zohoForm";

const IotPage = () => {
  const iotTechnologies = [
    "Arduino", "Raspberry Pi", "ESP32", "AWS IoT", "Azure IoT Hub", 
    "Google Cloud IoT", "MQTT", "LoRaWAN", "Zigbee", "Bluetooth LE",
    "Node.js", "Python", "C/C++", "Java", "JavaScript", "React",
    "MongoDB", "InfluxDB", "PostgreSQL", "Docker", "Kubernetes"
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
              IoT Development Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Connect the physical and digital worlds with intelligent IoT solutions that drive automation, efficiency, and innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openZohoForm('iot-development')}
                className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
              >
                Start Your IoT Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => openZohoForm('iot-consultation')}
                className="px-8 py-4 text-lg"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection 
        title="IoT Technology Stack"
        subtitle="Comprehensive IoT solutions using industry-leading platforms and protocols"
        technologies={iotTechnologies}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection 
        title="Why Choose DeeCee for IoT Development?"
        subtitle="Leading IoT development with proven expertise in connected device solutions"
      />

      {/* Development Lifecycle */}
      <DevelopmentLifecycle 
        title="IoT Development Process"
        subtitle="From concept to connected device deployment, we follow a proven IoT development methodology"
        className="bg-muted/30"
      />

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your IoT Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent IoT solutions that connect devices, analyze data, and drive actionable insights.
          </p>
          <Button 
            size="lg"
            onClick={() => openZohoForm('iot-final-cta')}
            className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IotPage;