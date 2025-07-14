import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { openZohoForm } from "@/utils/zohoForm";

const IotPage = () => {

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0D0F21 0%, #13162B 100%)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              IoT Development
            </h1>
            <p className="text-xl md:text-2xl text-[#B0B3C3] mb-8 leading-relaxed">
              Build secure, intelligent IoT systems that seamlessly connect edge devices to powerful cloud-based infrastructure — designed for real-time control, AI insights, and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white rounded-xl font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => openZohoForm('iot-consultation')}
                className="px-8 py-4 text-lg border-2 border-gray-600 text-white hover:border-purple-500 hover:bg-purple-500/10 rounded-xl"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Tech Stack Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">IoT Development Tech Stack</h2>
            <p className="text-xl text-[#B0B3C3] max-w-3xl mx-auto">
              Enterprise-grade IoT infrastructure connecting intelligent edge devices to powerful cloud platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">1. Intelligent Edge Devices</h3>
              <p className="text-[#B0B3C3] leading-relaxed mb-3">
                <strong>Hardware:</strong> NVIDIA Jetson Orin, Qualcomm RB5, Raspberry Pi 5, Arduino Portenta<br/>
                <strong>Edge ML Frameworks:</strong> TensorFlow Lite, OpenVINO, Edge Impulse, NVIDIA TAO Toolkit<br/>
                <strong>Firmware/RTOS:</strong> Zephyr RTOS, FreeRTOS, Ubuntu Core<br/>
                <strong>Edge Toolkits:</strong> TinyML, ONNX Runtime, Coral TPU
              </p>
            </div>

            <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">2. Industrial-Grade Connectivity</h3>
              <p className="text-[#B0B3C3] leading-relaxed mb-3">
                <strong>Protocols:</strong> MQTT, OPC-UA, DDS, CoAP, HTTP/2<br/>
                <strong>Networks:</strong> LoRaWAN, NB-IoT, 5G, Private LTE<br/>
                <strong>Gateways:</strong> Balena, ChirpStack, AWS IoT Greengrass
              </p>
            </div>

            <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">3. IoT Cloud Infrastructure</h3>
              <p className="text-[#B0B3C3] leading-relaxed mb-3">
                <strong>Cloud Providers:</strong> AWS, Azure, Google Cloud<br/>
                <strong>Platforms:</strong> IoT Core, Greengrass, SiteWise, TwinMaker, IoT Hub, Digital Twins, K3s, Red Hat IoT
              </p>
            </div>

            <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">4. Data Engineering & Streaming</h3>
              <p className="text-[#B0B3C3] leading-relaxed mb-3">
                <strong>Streaming:</strong> Kafka, Pulsar, AWS Kinesis, EMQX, NiFi, dbt, Glue<br/>
                <strong>Storage:</strong> Timestream, InfluxDB, TimeScaleDB, Cosmos DB
              </p>
            </div>

            <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">5. AI/ML & Analytics</h3>
              <p className="text-[#B0B3C3] leading-relaxed mb-3">
                <strong>Frameworks:</strong> PyTorch, TensorFlow, DeepAR, Prophet, YOLOv8, OpenCV<br/>
                <strong>AI Models:</strong> Claude, GPT-4.5, LangChain, AutoGen
              </p>
            </div>

            <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">6. Visualization & Control</h3>
              <p className="text-[#B0B3C3] leading-relaxed mb-3">
                <strong>Dashboards:</strong> Grafana, ThingsBoard, Power BI<br/>
                <strong>Real-time:</strong> MQTT over WebSockets<br/>
                <strong>3D:</strong> Unity (Digital Twins)
              </p>
            </div>

            <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">7. Enterprise Security</h3>
              <p className="text-[#B0B3C3] leading-relaxed mb-3">
                <strong>Security:</strong> X.509, TLS 1.3, TPM 2.0, Secure Boot, Firmware Signing<br/>
                <strong>Compliance:</strong> ISO 27001, SOC 2, NIST, HIPAA, GDPR
              </p>
            </div>

            <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">8. Lifecycle & Observability</h3>
              <p className="text-[#B0B3C3] leading-relaxed mb-3">
                <strong>CI/CD:</strong> GitHub Actions, Mender, Jenkins<br/>
                <strong>Monitoring:</strong> Prometheus, Datadog, OpenTelemetry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Dee&Cee Labs for IoT Development?</h2>
            <p className="text-xl text-[#B0B3C3] max-w-3xl mx-auto">
              Deep expertise in industrial-grade IoT solutions with proven track record across industries
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔧</span>
                  <h3 className="text-lg font-semibold text-white">Industrial-Grade IoT</h3>
                </div>
                <p className="text-[#B0B3C3]">Deep experience in industrial-grade IoT with cloud & AI integration</p>
              </div>

              <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⚡</span>
                  <h3 className="text-lg font-semibold text-white">Real-Time Processing</h3>
                </div>
                <p className="text-[#B0B3C3]">Real-time data handling, edge-to-cloud communication, and visualization</p>
              </div>

              <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🛡️</span>
                  <h3 className="text-lg font-semibold text-white">Security-First</h3>
                </div>
                <p className="text-[#B0B3C3]">Security-first architecture with enterprise-grade encryption & compliance</p>
              </div>

              <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🧠</span>
                  <h3 className="text-lg font-semibold text-white">Full-Cycle Development</h3>
                </div>
                <p className="text-[#B0B3C3]">Full-cycle development: from firmware to analytics dashboards</p>
              </div>

              <div className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🚀</span>
                  <h3 className="text-lg font-semibold text-white">Scalable Platforms</h3>
                </div>
                <p className="text-[#B0B3C3]">Scalable platforms, built to handle thousands of devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Lifecycle */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our IoT Development Lifecycle</h2>
            <p className="text-xl text-[#B0B3C3] max-w-3xl mx-auto">
              Comprehensive 12-phase methodology for building enterprise IoT solutions from concept to scale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "1. Discovery & Planning",
              "2. Edge Device & Firmware Development", 
              "3. Connectivity & Protocol Integration",
              "4. Cloud & IoT Infrastructure Setup",
              "5. Data Pipeline & Stream Processing",
              "6. AI/ML Model Development",
              "7. MLOps & Model Lifecycle Management",
              "8. System Integration & Simulation Testing",
              "9. CI/CD & Secure Deployment",
              "10. Real-Time Dashboards & Visualization",
              "11. Security, Compliance & Governance",
              "12. Post-Deployment Optimization & Feedback"
            ].map((phase, index) => (
              <div key={index} className="bg-[#1C1E2F] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3 transition-colors">
                    <span className="text-sm font-semibold text-white">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-white">{phase.substring(3)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your IoT Solution?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent IoT solutions that connect devices, analyze data, and drive actionable insights.
          </p>
          <a 
            href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100 rounded-xl font-medium"
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

export default IotPage;