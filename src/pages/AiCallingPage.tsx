import { Phone, Brain, BarChart3, Users, Zap, Shield, ArrowRight, CheckCircle, Mic, MessageCircle, TrendingUp, Clock, Target, Headphones } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/seo/SEOHead';
import ServicePortfolioSection from '@/components/portfolio/ServicePortfolioSection';
import { createContactNavigator } from '@/utils/navigation';
import { generateServicePageStructuredData } from '@/utils/seoServicePages';

const AiCallingPage = () => {
  const navigate = useNavigate();
  const navigateToContact = createContactNavigator(navigate);

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Conversational Intelligence',
      description: 'Advanced NLP and machine learning that understands context, emotion, and intent for human-like conversations.',
      highlight: 'Human-Like AI'
    },
    {
      icon: Phone,
      title: 'Voice Synthesis Mastery',
      description: 'Natural, expressive voice generation with custom voice cloning and multilingual support.',
      highlight: 'Natural Voices'
    },
    {
      icon: BarChart3,
      title: 'Intelligent Analytics',
      description: 'Real-time conversation analytics, sentiment analysis, and predictive insights for optimization.',
      highlight: 'Smart Insights'
    },
    {
      icon: Users,
      title: 'Lead Qualification Engine',
      description: 'Automated lead scoring, qualification, and nurturing through intelligent conversation flows.',
      highlight: 'Quality Leads'
    },
    {
      icon: Zap,
      title: 'Infinite Scalability',
      description: 'Handle thousands of simultaneous calls with consistent quality and zero fatigue.',
      highlight: 'Always On'
    },
    {
      icon: Shield,
      title: 'Compliance Guardian',
      description: 'Built-in compliance for TCPA, GDPR, and industry regulations with automatic consent management.',
      highlight: 'Fully Compliant'
    }
  ];

  const solutions = [
    {
      category: 'Sales Automation',
      description: 'Supercharge your sales pipeline with AI agents that prospect, qualify, and convert leads 24/7.',
      features: ['Automated Prospecting', 'Lead Qualification', 'Appointment Setting', 'Follow-up Sequences'],
      results: ['300% more qualified leads', '50% reduction in cost per acquisition', '24/7 sales coverage'],
      color: 'from-blue-500 to-cyan-500',
      icon: Target
    },
    {
      category: 'Customer Support',
      description: 'Deliver exceptional customer service with AI agents that resolve issues and delight customers.',
      features: ['Instant Response', 'Issue Resolution', 'Escalation Management', 'Customer Satisfaction'],
      results: ['90% faster response times', '85% first-call resolution', '40% cost reduction'],
      color: 'from-green-500 to-emerald-500',
      icon: Headphones
    },
    {
      category: 'Market Research',
      description: 'Gather valuable market insights through AI-powered surveys and customer feedback calls.',
      features: ['Survey Automation', 'Data Collection', 'Sentiment Analysis', 'Report Generation'],
      results: ['10x faster data collection', '95% response accuracy', 'Real-time insights'],
      color: 'from-purple-500 to-pink-500',
      icon: BarChart3
    },
    {
      category: 'Appointment Scheduling',
      description: 'Streamline booking processes with AI that handles scheduling, confirmations, and reminders.',
      features: ['Calendar Integration', 'Smart Scheduling', 'Automatic Reminders', 'Rescheduling Handling'],
      results: ['60% reduction in no-shows', '80% booking automation', 'Improved efficiency'],
      color: 'from-orange-500 to-red-500',
      icon: Clock
    }
  ];

  const industries = [
    {
      industry: 'Real Estate',
      applications: ['Lead qualification', 'Property inquiries', 'Appointment setting', 'Market surveys'],
      icon: '🏠'
    },
    {
      industry: 'Healthcare',
      applications: ['Appointment scheduling', 'Patient follow-ups', 'Insurance verification', 'Medication reminders'],
      icon: '🏥'
    },
    {
      industry: 'Financial Services',
      applications: ['Loan pre-qualification', 'Insurance quotes', 'Payment reminders', 'Customer surveys'],
      icon: '💰'
    },
    {
      industry: 'E-commerce',
      applications: ['Order confirmations', 'Customer feedback', 'Upselling campaigns', 'Support calls'],
      icon: '🛒'
    },
    {
      industry: 'Education',
      applications: ['Student outreach', 'Enrollment calls', 'Course reminders', 'Feedback collection'],
      icon: '🎓'
    },
    {
      industry: 'Automotive',
      applications: ['Service reminders', 'Sales follow-ups', 'Warranty calls', 'Customer satisfaction'],
      icon: '🚗'
    }
  ];

  const technology = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      technologies: ['Natural Language Processing', 'Speech Recognition', 'Voice Synthesis', 'Sentiment Analysis'],
      description: 'Advanced AI that understands and responds like a human'
    },
    {
      category: 'Voice Technology',
      icon: Mic,
      technologies: ['Text-to-Speech', 'Voice Cloning', 'Emotion Detection', 'Multilingual Support'],
      description: 'Natural voice generation and recognition capabilities'
    },
    {
      category: 'Integration & APIs',
      icon: MessageCircle,
      technologies: ['CRM Integration', 'Telephony APIs', 'Webhook Support', 'Real-time Analytics'],
      description: 'Seamless integration with your existing systems'
    },
    {
      category: 'Analytics & Insights',
      icon: TrendingUp,
      technologies: ['Call Recording', 'Performance Metrics', 'A/B Testing', 'Predictive Analytics'],
      description: 'Data-driven insights to optimize performance'
    }
  ];

  const developmentProcess = [
    {
      phase: 'Discovery & Strategy',
      duration: '1-2 weeks',
      description: 'Define call objectives, target audience, conversation flows, and success metrics.',
      activities: ['Use Case Analysis', 'Call Script Development', 'Voice Selection', 'Integration Planning']
    },
    {
      phase: 'AI Training & Development',
      duration: '3-4 weeks',
      description: 'Train AI models, develop conversation logic, and create natural voice interactions.',
      activities: ['AI Model Training', 'Voice Synthesis', 'Conversation Design', 'Testing Framework']
    },
    {
      phase: 'Integration & Testing',
      duration: '2-3 weeks',
      description: 'Integrate with your systems, test call flows, and optimize performance.',
      activities: ['System Integration', 'Call Testing', 'Performance Optimization', 'Quality Assurance']
    },
    {
      phase: 'Deployment & Optimization',
      duration: '1-2 weeks',
      description: 'Launch your AI calling system and continuously optimize based on real-world performance.',
      activities: ['Production Deployment', 'Performance Monitoring', 'A/B Testing', 'Continuous Improvement']
    }
  ];

  const pricing = [
    {
      tier: 'Starter',
      price: '$2,500/month',
      description: 'Perfect for small businesses starting with AI calling',
      features: ['Up to 1,000 calls/month', 'Basic AI voice', 'CRM integration', 'Call analytics', 'Email support'],
      popular: false
    },
    {
      tier: 'Professional',
      price: '$7,500/month',
      description: 'For growing businesses with higher call volumes',
      features: ['Up to 10,000 calls/month', 'Advanced AI voice', 'Custom integrations', 'Advanced analytics', 'Priority support', 'A/B testing'],
      popular: true
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex requirements',
      features: ['Unlimited calls', 'Custom voice cloning', 'White-label solution', 'Dedicated support', 'Custom development', 'SLA guarantee'],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: '95%', label: 'Call Success Rate', description: 'Successful conversation completion' },
    { metric: '3x', label: 'Lead Conversion', description: 'Increase in qualified leads' },
    { metric: '24/7', label: 'Availability', description: 'Round-the-clock operation' },
    { metric: '40%', label: 'Cost Savings', description: 'Reduction in call center costs' }
  ];

  const serviceSchema = generateServicePageStructuredData('ai-calling');

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title="AI Calling Solutions | Intelligent Voice Automation & AI Phone Systems"
        description="Revolutionize customer communication with AI-powered calling solutions. Automated voice systems, intelligent call routing, and AI-driven customer service."
        keywords="AI calling, voice automation, AI phone systems, intelligent call routing, automated customer service, voice AI, conversational AI, call center automation"
        canonical="/ai-calling"
        structuredData={serviceSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                AI Calling
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-light">
              Conversations That Convert, Scale, and Never Sleep
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with AI-powered calling systems that engage prospects, qualify leads, 
              and convert opportunities at scale. Experience human-like conversations that work 24/7, 
              never get tired, and continuously improve.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigateToContact('ai-calling-hero')}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl font-semibold text-lg hover:from-blue-400 hover:via-cyan-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start AI Calling
                <Phone className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              <Link 
                to="/speaksify" 
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-cyan-400/50 rounded-2xl font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              >
                See Speaksify Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">The Future of Business Calls</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI calling technology doesn't just make calls – it builds relationships, 
              understands context, and delivers results that exceed human performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gray-800/60 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center mr-5">
                      <capability.icon className="h-7 w-7 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                        {capability.highlight}
                      </div>
                      <h3 className="text-xl font-bold">{capability.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">AI Solutions for Every Business Need</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From sales automation to customer support, our AI calling solutions 
              transform how businesses communicate and drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <solution.icon className="h-8 w-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{solution.category}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Results</h4>
                    <div className="space-y-1">
                      {solution.results.map((result, idx) => (
                        <div key={idx} className="text-sm text-green-400 font-medium">
                          ✓ {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Transforming Industries</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI calling solutions are revolutionizing communication across diverse industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 text-center">
                <div className="text-6xl mb-6">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{industry.industry}</h3>
                <div className="space-y-3">
                  {industry.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400 justify-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Advanced AI Technology</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Built on cutting-edge AI and voice technologies for natural, 
              intelligent conversations that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technology.map((tech, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.category}</h3>
                <p className="text-gray-400 text-sm mb-6">{tech.description}</p>
                <div className="space-y-2">
                  {tech.technologies.map((technology, idx) => (
                    <div key={idx} className="text-xs text-gray-500 px-2 py-1 bg-gray-800/50 rounded">
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Flexible Pricing for Every Scale</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs and scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((tier, index) => (
              <div key={index} className={`relative p-8 rounded-3xl border-2 ${tier.popular ? 'border-cyan-400 bg-cyan-500/10' : 'border-gray-700 bg-gray-800/50'} transition-all duration-300 hover:scale-105`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                <p className="text-gray-400 mb-8">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigateToContact(`ai-calling-${tier.tier.toLowerCase()}`)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${tier.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400' : 'border-2 border-cyan-400/30 hover:bg-cyan-500/10'}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Scale Your Conversations?</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Transform your business communication with AI that never sleeps, never gets tired, 
              and continuously improves. Start your AI calling revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigateToContact('ai-calling-cta')}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl font-semibold text-lg hover:from-blue-400 hover:via-cyan-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Launch AI Calling
                <Brain className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <Link 
                to="/speaksify" 
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-cyan-400/50 rounded-2xl font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              >
                Try Speaksify
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <ServicePortfolioSection 
        serviceId="ai-calling" 
        serviceTitle="AI Calling Solutions" 
        serviceColor="pink" 
      />

      <Footer />
    </div>
  );
};

export default AiCallingPage;