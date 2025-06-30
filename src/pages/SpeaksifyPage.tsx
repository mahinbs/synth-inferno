
import { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Phone, Zap, Users, BarChart3, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/chatbot/FloatingChatbot';

const SpeaksifyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Phone,
      title: "AI calls every lead in 30 seconds",
      description: "No more waiting. Our AI reaches out to every lead instantly, ensuring maximum engagement while interest is hot."
    },
    {
      icon: BarChart3,
      title: "Real-time engagement and voice analytics",
      description: "Track conversation quality, sentiment analysis, and engagement metrics in real-time to optimize your sales process."
    },
    {
      icon: CheckCircle,
      title: "No missed follow-ups",
      description: "Automated follow-up sequences ensure every lead gets the attention they deserve, increasing conversion rates by 300%."
    }
  ];

  const integrations = [
    { name: "CRM Systems", description: "Seamlessly sync with Salesforce, HubSpot, and more" },
    { name: "Zapier", description: "Connect with 5000+ apps and automate workflows" },
    { name: "WhatsApp", description: "Multi-channel engagement across voice and messaging" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className={`font-heading text-5xl md:text-7xl font-bold mb-8 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              AI-Powered Voice Engagement Engine
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-4">
                Built to Convert Leads in Real-Time
              </span>
            </h1>

            {/* Value Proposition */}
            <p className={`text-2xl md:text-3xl text-gray-200 mb-4 font-semibold ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
              Stop chasing leads. Let AI call them all.
            </p>

            <p className={`text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
              Transform your sales process with intelligent voice engagement that converts prospects into customers while you focus on closing deals.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
              <button 
                onClick={() => scrollToSection('demo')} 
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 transform shadow-xl hover:shadow-2xl flex items-center space-x-3"
              >
                <span>Request a Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('trial')} 
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
              >
                <Play className="h-5 w-5" />
                <span>Start Free Trial</span>
              </button>
            </div>

            {/* Key Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">30s</div>
                <p className="text-gray-300">Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
                <p className="text-gray-300">Conversion Increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <p className="text-gray-300">Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Speaksify Converts Better
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our AI-powered voice engagement engine is built for one purpose: converting leads into customers faster than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Connect Speaksify with your existing tools and workflows for maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section id="demo" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to 10X Your Lead Conversion?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              See how Speaksify can transform your sales process with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 transform shadow-lg">
                Request Demo
              </button>
              <button 
                id="trial"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 transform"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default SpeaksifyPage;
