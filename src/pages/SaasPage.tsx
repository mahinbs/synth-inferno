import { Cloud, CreditCard, BarChart3, Users, Settings, Zap, ArrowRight, CheckCircle, Star, Layers, Database, Lock, TrendingUp, Globe, Cpu, Server } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/seo/SEOHead';
import { createContactNavigator } from '@/utils/navigation';
import { generateServiceSchema } from '@/components/seo/StructuredData';

const SaasPage = () => {
  const navigate = useNavigate();
  const navigateToContact = createContactNavigator(navigate);

  const saasCapabilities = [
    {
      icon: Cloud,
      title: 'Multi-Tenant Architecture',
      description: 'Scalable, secure infrastructure that efficiently serves thousands of customers from a single instance while maintaining complete data isolation.',
      highlight: 'Enterprise Scale'
    },
    {
      icon: CreditCard,
      title: 'Revenue Engine',
      description: 'Complete subscription management with automated billing, payment processing, and revenue optimization across multiple pricing models.',
      highlight: 'Monetization Ready'
    },
    {
      icon: BarChart3,
      title: 'Intelligence Dashboard',
      description: 'Comprehensive analytics and business intelligence that transforms user behavior into actionable insights and growth strategies.',
      highlight: 'Data-Driven Growth'
    },
    {
      icon: Users,
      title: 'User Experience Mastery',
      description: 'Intuitive interfaces designed for adoption and retention, with onboarding flows that convert trials into loyal customers.',
      highlight: 'User-Centric Design'
    },
    {
      icon: Settings,
      title: 'Integration Ecosystem',
      description: 'Robust API infrastructure with webhooks, SSO, and seamless third-party integrations that extend your platform\'s reach.',
      highlight: 'Connected Platform'
    },
    {
      icon: Zap,
      title: 'Performance at Scale',
      description: 'Optimized for speed and reliability with auto-scaling, global CDN, and 99.9% uptime SLA to support your growing business.',
      highlight: 'Lightning Fast'
    }
  ];

  const saasTypes = [
    {
      category: 'Business Automation SaaS',
      description: 'Streamline operations with intelligent workflow automation, CRM systems, and productivity tools that scale with your business.',
      features: ['Workflow Automation', 'CRM Integration', 'Team Collaboration', 'Advanced Reporting'],
      useCases: ['Project Management', 'Sales Automation', 'Customer Support', 'HR Management'],
      color: 'from-blue-500 to-cyan-500',
      icon: Settings
    },
    {
      category: 'Data & Analytics SaaS',
      description: 'Transform raw data into powerful insights with custom analytics platforms, business intelligence, and real-time reporting.',
      features: ['Real-Time Analytics', 'Custom Dashboards', 'Data Visualization', 'Predictive Insights'],
      useCases: ['Business Intelligence', 'Marketing Analytics', 'Financial Reporting', 'Performance Tracking'],
      color: 'from-purple-500 to-pink-500',
      icon: BarChart3
    },
    {
      category: 'Industry-Specific SaaS',
      description: 'Specialized solutions tailored for specific industries with deep domain expertise and compliance requirements.',
      features: ['Industry Compliance', 'Custom Workflows', 'Specialized Tools', 'Expert Support'],
      useCases: ['Healthcare Systems', 'Educational Platforms', 'Financial Services', 'E-commerce Tools'],
      color: 'from-green-500 to-emerald-500',
      icon: Globe
    },
    {
      category: 'AI-Powered SaaS',
      description: 'Next-generation platforms enhanced with artificial intelligence, machine learning, and automation capabilities.',
      features: ['AI Automation', 'Smart Predictions', 'Natural Language Processing', 'Intelligent Insights'],
      useCases: ['Content Generation', 'Predictive Analytics', 'Customer Service Bots', 'Smart Recommendations'],
      color: 'from-orange-500 to-red-500',
      icon: Cpu
    }
  ];

  const technicalFoundation = [
    {
      category: 'Frontend Excellence',
      icon: Layers,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Progressive Web App'],
      description: 'Modern, responsive interfaces that work seamlessly across all devices'
    },
    {
      category: 'Backend Infrastructure',
      icon: Server,
      technologies: ['Node.js', 'Python', 'Microservices', 'API Gateway', 'Load Balancing'],
      description: 'Scalable server architecture designed for high availability and performance'
    },
    {
      category: 'Database & Storage',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Data Lakes', 'Backup Systems'],
      description: 'Robust data management with automatic scaling and disaster recovery'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
      description: 'Cloud-native deployment with automated scaling and monitoring'
    },
    {
      category: 'Security & Compliance',
      icon: Lock,
      technologies: ['OAuth 2.0', 'End-to-End Encryption', 'GDPR Compliance', 'SOC 2', 'Penetration Testing'],
      description: 'Enterprise-grade security with industry compliance standards'
    },
    {
      category: 'AI & Analytics',
      icon: Cpu,
      technologies: ['Machine Learning', 'Real-Time Analytics', 'Business Intelligence', 'Predictive Modeling'],
      description: 'Intelligent features that provide insights and automate decisions'
    }
  ];

  const pricingModels = [
    {
      name: 'SaaS Starter',
      price: '$15,000',
      duration: '8-12 weeks',
      description: 'Perfect for MVP and early-stage SaaS',
      features: [
        'Multi-tenant architecture',
        'User authentication & management',
        'Basic subscription billing',
        'Essential analytics dashboard',
        'API foundation',
        '3 months post-launch support'
      ],
      popular: false,
      color: 'border-gray-700'
    },
    {
      name: 'SaaS Professional',
      price: '$35,000',
      duration: '12-16 weeks',
      description: 'For growing SaaS businesses',
      features: [
        'Advanced subscription management',
        'Comprehensive analytics & reporting',
        'Third-party integrations',
        'Advanced security features',
        'Mobile-responsive design',
        'Team collaboration tools',
        '6 months comprehensive support'
      ],
      popular: true,
      color: 'border-blue-400'
    },
    {
      name: 'SaaS Enterprise',
      price: 'Custom',
      duration: '16-24 weeks',
      description: 'For large-scale SaaS platforms',
      features: [
        'Custom enterprise features',
        'White-label capabilities',
        'Advanced compliance & security',
        'Dedicated infrastructure',
        'AI/ML integration',
        'Custom integrations & APIs',
        '12 months enterprise support'
      ],
      popular: false,
      color: 'border-purple-400'
    }
  ];

  const developmentPhases = [
    {
      phase: 'Strategy & Architecture',
      duration: '2-3 weeks',
      description: 'Define your SaaS business model, user personas, and technical architecture for optimal scalability.',
      activities: ['Market Research', 'Technical Planning', 'User Journey Mapping', 'Architecture Design']
    },
    {
      phase: 'MVP Development',
      duration: '6-8 weeks',
      description: 'Build core functionality with user management, billing, and essential features to validate your concept.',
      activities: ['Core Features', 'User Authentication', 'Payment Integration', 'Basic Analytics']
    },
    {
      phase: 'Advanced Features',
      duration: '4-6 weeks',
      description: 'Enhance your platform with advanced features, integrations, and optimization for user engagement.',
      activities: ['Feature Enhancement', 'Third-party Integrations', 'Performance Optimization', 'Security Hardening']
    },
    {
      phase: 'Testing & Launch',
      duration: '2-3 weeks',
      description: 'Comprehensive testing, security audits, and smooth deployment with monitoring and support.',
      activities: ['Quality Assurance', 'Security Testing', 'Performance Testing', 'Production Deployment']
    },
    {
      phase: 'Growth & Scale',
      duration: 'Ongoing',
      description: 'Continuous optimization, feature additions, and scaling support as your user base grows.',
      activities: ['Performance Monitoring', 'Feature Updates', 'User Support', 'Scaling Infrastructure']
    }
  ];

  const successMetrics = [
    { metric: '99.9%', label: 'Uptime Guarantee', description: 'Reliable performance for your users' },
    { metric: '3x', label: 'Faster Time to Market', description: 'Launch your SaaS faster than competitors' },
    { metric: '50+', label: 'SaaS Platforms Built', description: 'Proven experience across industries' },
    { metric: '85%', label: 'User Retention Rate', description: 'Engaging experiences that keep users' }
  ];

  const serviceSchema = generateServiceSchema({
    name: "SaaS Development",
    description: "Build scalable SaaS applications with modern cloud technologies. Expert SaaS development including multi-tenancy, subscription management, and cloud infrastructure.",
    provider: {
      name: "Synth Inferno",
      url: "https://www.deeceelabs.com"
    },
    areaServed: "Worldwide",
    serviceType: "SaaS Development",
    url: "https://www.deeceelabs.com/saas"
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title="SaaS Development Services | Custom SaaS Solutions & Cloud Applications"
        description="Build scalable SaaS applications with modern cloud technologies. Expert SaaS development including multi-tenancy, subscription management, and cloud infrastructure."
        keywords="SaaS development, cloud applications, multi-tenant applications, subscription management, cloud infrastructure, scalable web applications, software as a service, SaaS architecture"
        canonical="/saas"
        structuredData={serviceSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                SaaS Platforms
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-light">
              Build, Launch, and Scale Your Software Empire
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              From startup MVPs to enterprise-grade platforms, we engineer SaaS solutions that transform 
              ideas into profitable, scalable businesses. Complete with subscription management, analytics, 
              and the technical foundation to support millions of users.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigateToContact('saas-hero')}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl font-semibold text-lg hover:from-blue-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Build Your SaaS
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-purple-400/50 rounded-2xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
              >
                See SaaS Success Stories
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
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">SaaS Excellence by Design</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just build software – we architect complete SaaS ecosystems with every component 
              optimized for growth, scalability, and user satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasCapabilities.map((capability, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gray-800/60 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center mr-5">
                      <capability.icon className="h-7 w-7 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
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

      {/* SaaS Types */}
      <section className="py-24 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">SaaS Solutions for Every Vision</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you're disrupting an industry or creating a new market, we build SaaS platforms 
              that turn your vision into a thriving business.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {saasTypes.map((type, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <type.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{type.category}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Foundation */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Built on Rock-Solid Foundations</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every SaaS platform we build leverages enterprise-grade technologies and architectural 
              patterns designed for scale, security, and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalFoundation.map((tech, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.category}</h3>
                <p className="text-gray-400 text-sm mb-6">{tech.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {tech.technologies.map((technology, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">From Idea to Market Leader</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our proven development process ensures your SaaS platform launches successfully and scales efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="relative">
                {index < developmentPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>
                  <div className="text-purple-400 text-sm font-semibold mb-3">{phase.duration}</div>
                  <p className="text-gray-400 text-sm mb-4">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="text-xs text-gray-500 px-2 py-1 bg-gray-800/50 rounded">
                        {activity}
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-5xl font-bold mb-6">Investment in Your Success</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transparent pricing based on the complexity and scale of your SaaS vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingModels.map((tier, index) => (
              <div key={index} className={`relative p-8 rounded-3xl border-2 ${tier.color} ${tier.popular ? 'bg-purple-500/10' : 'bg-gray-800/50'} transition-all duration-300 hover:scale-105`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">{tier.price}</div>
                <div className="text-purple-300 text-sm mb-2">{tier.duration}</div>
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
                  onClick={() => navigateToContact(`saas-${tier.name.toLowerCase()}`)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${tier.popular ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400' : 'border-2 border-purple-400/30 hover:bg-purple-500/10'}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Disrupt Your Industry?</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Transform your innovative idea into a market-leading SaaS platform. 
              Let's build something that changes the world, one user at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigateToContact('saas-cta')}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl font-semibold text-lg hover:from-purple-400 hover:via-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your SaaS Journey
                <TrendingUp className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-purple-400/50 rounded-2xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
              >
                Explore SaaS Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaasPage;