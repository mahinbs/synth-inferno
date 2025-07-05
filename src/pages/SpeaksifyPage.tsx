import { Phone, Brain, BarChart3, Zap, Users, Clock, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { openZohoForm } from '@/utils/zohoForm';
const SpeaksifyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const keyFeatures = [{
    icon: Clock,
    title: 'AI calls every lead in 30 seconds',
    description: 'Lightning-fast response time ensures no lead goes cold while maintaining perfect conversation quality.'
  }, {
    icon: BarChart3,
    title: 'Real-time voice analytics',
    description: 'Advanced voice AI analyzes tone, sentiment, and intent to optimize every conversation for maximum conversion.'
  }, {
    icon: CheckCircle,
    title: 'Never miss a follow-up',
    description: 'Intelligent scheduling and automated reminders ensure every lead gets the attention they deserve.'
  }];
  const integrations = [{
    name: 'HubSpot',
    description: 'Seamlessly sync leads and conversation data',
    category: 'CRM'
  }, {
    name: 'Zoho',
    description: 'Complete CRM integration for lead management',
    category: 'CRM'
  }, {
    name: 'Zapier',
    description: 'Connect with 5000+ apps and workflows',
    category: 'Automation'
  }, {
    name: 'WhatsApp',
    description: 'Multi-channel communication support',
    category: 'Messaging'
  }];
  const howItWorks = [{
    step: '01',
    title: 'Lead Detection',
    description: 'Speaksify automatically detects new leads from your integrated systems and CRM platforms.'
  }, {
    step: '02',
    title: 'Instant Engagement',
    description: 'AI calls the lead within 30 seconds using natural, conversational voice technology.'
  }, {
    step: '03',
    title: 'Voice Analysis',
    description: 'Real-time analysis of voice responses, sentiment, and engagement level to optimize the conversation.'
  }, {
    step: '04',
    title: 'Smart Follow-up',
    description: 'Automatically schedules and executes follow-ups based on conversation outcomes and lead behavior.'
  }];
  const testimonials = [{
    quote: "Speaksify increased our lead conversion rate by 340%. The AI calls are so natural, our leads can't tell the difference.",
    author: "Sarah Chen",
    position: "VP of Sales",
    company: "TechFlow Solutions"
  }, {
    quote: "We went from calling 50 leads per day to 500. Speaksify handles the volume while we focus on closing deals.",
    author: "Marcus Rodriguez",
    position: "Sales Director",
    company: "GrowthLab Inc"
  }];
  return <div className="min-h-screen text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <iframe src="https://player.cloudinary.com/embed/?cloud_name=dknafpppp&public_id=0_Ai_Artificial_Intelligence_1280x720-2_wbcpcy&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false" className="w-full h-full object-cover" style={{
          transform: 'scale(1.1)',
          filter: 'brightness(0.3)',
          pointerEvents: 'none'
        }} loading="lazy" onLoad={() => setVideoLoaded(true)} title="AI Technology Background Video" />
          
          {/* Fallback gradient overlay when video is loading */}
          {!videoLoaded && <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800" />}
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-zinc-400/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '4s'
        }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 text-gray-300 border-white/30 bg-white/10 backdrop-blur-sm">
                Voice AI • AI-Powered Engagement • Conversational Intelligence
              </Badge>
            </div>
            <h1 className={`font-heading text-6xl md:text-8xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                AI-Powered Voice Engagement Engine
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">
                Built to Convert Leads in Real-Time
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
              Speaksify is an AI calling engine that connects with leads within 30 seconds, analyzes voice responses, and ensures no follow-ups are missed.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
              <button onClick={() => openZohoForm('speaksify-demo')} className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                <span>Request a Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button onClick={() => openZohoForm('speaksify-trial')} className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                <Play className="h-5 w-5" />
                <span>Start Free Trial</span>
              </button>
            </div>
            <div className="text-center">
              <p className={`text-2xl md:text-3xl font-bold text-white mb-2 italic ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
                "Stop chasing leads. Let AI call them all."
              </p>
              <p className="text-gray-300">The future of lead engagement is here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Core <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AI technology that transforms how you connect with leads and drive conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => <div key={index} className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 group hover:bg-white/15">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-500/20 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Speaksify</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From lead detection to conversion, see how AI transforms your entire sales process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => <div key={index} className="text-center relative">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-2xl font-bold mb-6 mx-auto text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                {index < howItWorks.length - 1 && <div className="hidden lg:block absolute top-10 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-cyan-400 mx-auto" />
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Seamless <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect Speaksify with your existing tools and workflows for maximum efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 text-center group hover:bg-white/15">
                <Badge variant="secondary" className="mb-4 bg-white/20 text-gray-300 border-white/30">
                  {integration.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-2 text-white">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Customer <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Success Stories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => <div key={index} className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.position}</div>
                    <div className="text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">30s</div>
              <div className="text-grey-300">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">340%</div>
              <div className="text-gray-300">Conversion Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Transform</span> Your Lead Engagement?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join hundreds of companies using Speaksify to convert more leads, faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openZohoForm('speaksify-demo-final')} className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                <span>Request a Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button onClick={() => openZohoForm('speaksify-trial-final')} className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                <Play className="h-5 w-5" />
                <span>Start Free Trial</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default SpeaksifyPage;