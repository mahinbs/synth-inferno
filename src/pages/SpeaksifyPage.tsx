import { Phone, Brain, BarChart3, Zap, Users, Clock, CheckCircle, ArrowRight, Play, MessageCircle, Database, Globe, Bot, Activity, Target, Cpu, Server, Code, Cloud, Smartphone, PhoneCall, FileText, BarChart, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { openZohoForm } from '@/utils/zohoForm';
const SpeaksifyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Core Features - 7 specific features from user content
  const coreFeatures = [{
    icon: PhoneCall,
    title: 'Automated Calling',
    description: 'AI makes real-time calls and follows up instantly'
  }, {
    icon: Bot,
    title: 'Conversational AI',
    description: 'Smart agents engage and qualify leads'
  }, {
    icon: BarChart,
    title: 'Lead Pipeline Management',
    description: 'Custom status tracking'
  }, {
    icon: MessageCircle,
    title: 'Omnichannel Support',
    description: 'SMS, Email, WhatsApp synced follow-ups'
  }, {
    icon: FileText,
    title: 'Call History & Intent Logs',
    description: 'Track every AI-human interaction'
  }, {
    icon: Database,
    title: 'CRM Integration',
    description: 'Centralized actionable view'
  }, {
    icon: Globe,
    title: 'Time Zone Intelligence',
    description: 'Smart region-based scheduling'
  }];

  // AI Stack
  const aiStack = [{
    name: 'OpenAI GPT-4o / Claude',
    icon: Brain
  }, {
    name: 'Twilio Voice & WhatsApp APIs',
    icon: Phone
  }, {
    name: 'Whisper API for call transcription',
    icon: Activity
  }, {
    name: 'Custom lead scoring & qualification logic',
    icon: Target
  }];

  // Tech Stack
  const techStack = [{
    name: 'React.js + TailwindCSS',
    category: 'Frontend',
    icon: Code
  }, {
    name: 'Node.js + Express',
    category: 'Backend',
    icon: Server
  }, {
    name: 'PostgreSQL',
    category: 'Database',
    icon: Database
  }, {
    name: 'AWS (Lambda, S3), Vercel',
    category: 'Infrastructure',
    icon: Cloud
  }, {
    name: 'OpenAI, ElevenLabs, LangChain',
    category: 'AI Tools',
    icon: Brain
  }];

  // Results & Adoption
  const results = [{
    stat: '70%',
    description: 'Reduced manual follow-up time',
    icon: Clock
  }, {
    stat: '3x',
    description: 'Boosted qualified lead response',
    icon: TrendingUp
  }, {
    stat: '6+',
    description: 'Countries live',
    icon: Globe
  }, {
    stat: '5K+',
    description: 'Daily interactions',
    icon: Activity
  }];
  return <div className="min-h-screen text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '4s'
        }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Brand Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-teal-400 text-white px-2 py-1 text-xs">
                  Voice AI
                </Badge>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Speaksify</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent text-4xl md:text-5xl">
                AI-Powered Voice Engagement Engine
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto">
              AI calls every lead in 30 seconds, engages in real time, and never misses a follow-up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button onClick={() => openZohoForm('speaksify-demo')} className="bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                <span>Request Demo</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button onClick={() => openZohoForm('speaksify-trial')} variant="outline" className="border-2 border-cyan-400/80 bg-cyan-950/30 text-cyan-100 hover:bg-cyan-400/20 hover:border-cyan-300 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5" />
                <span>Start Free Trial</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Product <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Overview</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">🎯 Problem It Solves</h3>
                <p className="text-gray-300 leading-relaxed">
                  Manual follow-ups and inconsistent lead engagement delay conversions and reduce closure rates. 
                  Speaksify fixes this by automating outbound voice calls, tracking lead responses, and centralizing CRM actions — all powered by AI.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">✅ Target Audience</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Sales teams</li>
                  <li>• Marketing teams</li>
                  <li>• Founders</li>
                  <li>• Lead gen professionals</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-cyan-400">Platform: SaaS Web App • Region: Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              🚀 Core <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Features</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group hover:bg-white/10">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400/20 to-teal-400/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* AI Stack Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              🧠 AI <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Stack</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aiStack.map((tech, index) => <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-xl flex items-center justify-center">
                    <tech.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              🔧 Tech <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Stack</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techStack.map((tech, index) => <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-lg flex items-center justify-center">
                    <tech.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <Badge variant="outline" className="text-xs text-cyan-400 border-cyan-400/30">
                    {tech.category}
                  </Badge>
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* Results & Adoption Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              📈 Results & <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Adoption</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <result.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{result.stat}</div>
                <div className="text-gray-300">{result.description}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Transform</span> Your Lead Engagement?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join hundreds of companies using Speaksify to convert more leads, faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => openZohoForm('speaksify-demo-final')} className="bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                <span>Request Demo</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default SpeaksifyPage;