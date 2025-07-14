import { Phone, Brain, BarChart3, Zap, Users, Clock, CheckCircle, ArrowRight, Play, Repeat, MessageCircle, Database, Globe, FileText, Wrench, Cpu, Code, Server, CloudLightning, Mic, Target } from 'lucide-react';
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
  // Core Features with exact content from requirements
  const coreFeatures = [
    {
      icon: Repeat,
      title: 'Automated Calling',
      description: 'AI makes real-time calls and follows up instantly',
      emoji: '🔁'
    },
    {
      icon: Brain,
      title: 'Conversational AI',
      description: 'Smart agents engage and qualify leads',
      emoji: '🧠'
    },
    {
      icon: BarChart3,
      title: 'Lead Pipeline Management',
      description: 'Custom status tracking',
      emoji: '📊'
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Support',
      description: 'SMS, Email, WhatsApp synced follow-ups',
      emoji: '📥'
    },
    {
      icon: FileText,
      title: 'Call History & Intent Logs',
      description: 'Track every AI-human interaction',
      emoji: '🔄'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Centralized actionable view',
      emoji: '🧩'
    },
    {
      icon: Globe,
      title: 'Time Zone Intelligence',
      description: 'Smart region-based scheduling',
      emoji: '⏰'
    }
  ];

  // AI Stack technologies
  const aiStack = [
    {
      name: 'OpenAI GPT-4o / Claude',
      description: 'Advanced language models for natural conversations',
      icon: Brain
    },
    {
      name: 'Twilio Voice & WhatsApp APIs',
      description: 'Global voice and messaging infrastructure',
      icon: Phone
    },
    {
      name: 'Whisper API',
      description: 'Real-time call transcription',
      icon: Mic
    },
    {
      name: 'Custom Lead Scoring',
      description: 'AI-powered qualification logic',
      icon: Target
    }
  ];

  // Tech Stack
  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React.js', 'TailwindCSS'],
      icon: Code,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express'],
      icon: Server,
      color: 'from-green-400 to-emerald-400'
    },
    {
      category: 'Database',
      technologies: ['PostgreSQL'],
      icon: Database,
      color: 'from-purple-400 to-violet-400'
    },
    {
      category: 'Infrastructure',
      technologies: ['AWS (Lambda, S3)', 'Vercel'],
      icon: CloudLightning,
      color: 'from-orange-400 to-red-400'
    },
    {
      category: 'AI Tools',
      technologies: ['OpenAI', 'ElevenLabs', 'LangChain'],
      icon: Cpu,
      color: 'from-cyan-400 to-teal-400'
    }
  ];

  // Results & Adoption metrics
  const results = [
    {
      metric: '70%',
      description: 'Reduction in manual follow-up time',
      icon: Clock,
      emoji: '⏱️'
    },
    {
      metric: '3x',
      description: 'Boost in qualified lead response',
      icon: BarChart3,
      emoji: '📈'
    },
    {
      metric: '6+',
      description: 'Countries live',
      icon: Globe,
      emoji: '🌍'
    },
    {
      metric: '5K+',
      description: 'Daily interactions',
      icon: Users,
      emoji: '💬'
    }
  ];
  return (
    <div className="min-h-screen text-white">
      <Header />
      
      {/* Hero Section - Redesigned with Brain Icon */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=3432&q=80')`,
              filter: 'brightness(0.3)'
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Brain Icon and Badge */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Brain className="h-8 w-8 text-cyan-400" />
                <Badge variant="outline" className="px-4 py-2 text-cyan-300 border-cyan-400/30 bg-cyan-400/10">
                  Voice AI
                </Badge>
              </div>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-white block mb-2">🧠 Speaksify</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                AI-Powered Voice Engagement Engine
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              AI calls every lead in 30 seconds, engages in real time, and never misses a follow-up.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <button 
                onClick={() => openZohoForm('speaksify-demo')} 
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span>Request a Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => openZohoForm('speaksify-trial')} 
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Play className="h-5 w-5" />
                <span>Start Free Trial</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                ✅ Product <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Overview</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🎯 Problem It Solves</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Manual follow-ups and inconsistent lead engagement delay conversions and reduce closure rates. 
                  Speaksify fixes this by automating outbound voice calls, tracking lead responses, and centralizing CRM actions — all powered by AI.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-semibold">Type:</span>
                    <span className="text-white">AI Calling & CRM Automation Platform</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-semibold">Target:</span>
                    <span className="text-white">Sales teams, marketing teams, founders, lead gen pros</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-semibold">Platform:</span>
                    <span className="text-white">SaaS Web App</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-semibold">Region:</span>
                    <span className="text-white">Global</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              🚀 Core <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Features</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group hover:bg-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{feature.emoji}</span>
                  <feature.icon className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Stack Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              🧠 AI <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Stack</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aiStack.map((tech, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <tech.icon className="h-8 w-8 text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{tech.name}</h3>
                    <p className="text-gray-300 text-sm">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              🔧 Tech <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Stack</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stack.color} p-0.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <stack.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{stack.category}</h3>
                <div className="space-y-1">
                  {stack.technologies.map((tech, techIndex) => (
                    <p key={techIndex} className="text-gray-300 text-sm">{tech}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Adoption Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              📈 Results & <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Adoption</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  <span className="text-4xl">{result.emoji}</span>
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {result.metric}
                </div>
                <div className="text-gray-300 leading-relaxed">{result.description}</div>
              </div>
            ))}
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
              <button 
                onClick={() => openZohoForm('speaksify-demo-final')} 
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span>Request a Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => openZohoForm('speaksify-trial-final')} 
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Play className="h-5 w-5" />
                <span>Start Free Trial</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default SpeaksifyPage;