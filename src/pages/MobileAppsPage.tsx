
import { Smartphone, Zap, Users, Shield, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MobileAppsPage = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with React Native and Flutter technologies.'
    },
    {
      icon: Zap,
      title: 'Native Performance',
      description: 'Optimized performance that delivers smooth, responsive user experiences.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with user experience and accessibility in mind.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with data encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Offline Functionality',
      description: 'Apps that work seamlessly even without internet connectivity.'
    },
    {
      icon: TrendingUp,
      title: 'App Store Optimization',
      description: 'Optimized for app store discovery and maximum downloads.'
    }
  ];

  const platforms = [
    {
      name: 'iOS Development',
      description: 'Native iOS apps built with Swift and modern iOS frameworks',
      technologies: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit']
    },
    {
      name: 'Android Development',
      description: 'Native Android apps using Kotlin and latest Android technologies',
      technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Firebase']
    },
    {
      name: 'Cross-Platform',
      description: 'Unified codebase for both iOS and Android platforms',
      technologies: ['React Native', 'Flutter', 'Expo', 'Xamarin']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Mobile Applications
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Create powerful mobile experiences that engage users and drive business growth with native and cross-platform solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <button className="px-8 py-4 border border-purple-400/30 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mobile App Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge mobile solutions that deliver exceptional user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Development Platforms</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in all major mobile development platforms and frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{platform.name}</h3>
                <p className="text-gray-300 mb-6">{platform.description}</p>
                <div className="space-y-2">
                  {platform.technologies.map((tech, idx) => (
                    <div key={idx} className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Tech Stack Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mobile Tech Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A robust, scalable technology foundation powering modern mobile apps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "1. Planning & Architecture",
                items: [
                  { category: "Project Management", tech: "Jira · Asana · Linear" },
                  { category: "Tech Architecture", tech: "Modular, AI-ready, Offline-first design" },
                  { category: "API Protocols", tech: "REST · GraphQL (Apollo, Relay)" }
                ]
              },
              {
                title: "2. UI/UX Design",
                items: [
                  { category: "Tools", tech: "Figma · Adobe XD" },
                  { category: "Voice/Chat UI", tech: "Planning for AI interfaces" }
                ]
              },
              {
                title: "3. Frontend Development (Mobile)",
                items: [
                  { category: "Native", tech: "Kotlin · Swift / Obj-C" },
                  { category: "Cross-Platform", tech: "Flutter · React Native · Xamarin (.NET/C#)" },
                  { category: "IDEs", tech: "Android Studio · Xcode · VS Code" },
                  { category: "State Management", tech: "Redux · MobX · Provider · Bloc" },
                  { category: "Image Optimization", tech: "Glide · SDWebImage · FastImage" }
                ]
              },
              {
                title: "4. Data Layer & Local Persistence",
                items: [
                  { category: "Databases", tech: "SQLite · Realm · Core Data · Room" },
                  { category: "Offline Sync", tech: "Firebase Offline · AWS AppSync" }
                ]
              },
              {
                title: "5. Backend & Cloud Integration",
                items: [
                  { category: "Platforms", tech: "Firebase · Supabase · AWS Amplify · GCP · Azure Mobile Apps" }
                ]
              },
              {
                title: "6. AI/ML Integration",
                items: [
                  { category: "ML Frameworks", tech: "TensorFlow Lite · Core ML · ML Kit · SageMaker · Azure ML" },
                  { category: "NLP & Vision", tech: "spaCy · NLTK · Vision AI · LangChain" },
                  { category: "AI Services", tech: "Midjourney · GPT · Dialogflow · Rasa" },
                  { category: "Edge AI", tech: "ONNX · OpenVINO" }
                ]
              },
              {
                title: "7. Testing & QA",
                items: [
                  { category: "Testing", tech: "JUnit · XCTest · Jest · Appium · Flutter Testing" },
                  { category: "Crash Reporting", tech: "Crashlytics · Sentry" },
                  { category: "Performance", tech: "Xcode Instruments · AppSignal" }
                ]
              },
              {
                title: "8. CI/CD & Deployment",
                items: [
                  { category: "CI/CD", tech: "Fastlane · GitHub Actions · GitLab · Jenkins · Azure DevOps" },
                  { category: "Distribution", tech: "Firebase App Distribution · TestFlight · Microsoft App Center" }
                ]
              },
              {
                title: "9. Security & Compliance",
                items: [
                  { category: "Authentication", tech: "OAuth 2.0 · OpenID · AES 256" },
                  { category: "Device Security", tech: "Secure Enclave · Android Keystore" },
                  { category: "Security Tools", tech: "MAST Tools · Code Obfuscation · Biometric APIs" }
                ]
              },
              {
                title: "10. Analytics & Engagement",
                items: [
                  { category: "Analytics", tech: "Google Analytics · Mixpanel · Amplitude" },
                  { category: "Push Notifications", tech: "OneSignal · FCM · Remote Config" },
                  { category: "A/B Testing", tech: "Optimizely" }
                ]
              },
              {
                title: "11. Post-Launch Monitoring",
                items: [
                  { category: "Monitoring", tech: "Datadog · New Relic · Prometheus · Grafana" },
                  { category: "App Intelligence", tech: "App Annie · Sensor Tower" },
                  { category: "MLOps", tech: "Feedback Loop: Continuous AI tuning" }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4 text-purple-400">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="text-sm">
                      <span className="font-semibold text-gray-200">{item.category}:</span>
                      <span className="text-gray-400 ml-1">{item.tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a mobile application that delights users and drives business success.
          </p>
          <a 
            href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileAppsPage;
