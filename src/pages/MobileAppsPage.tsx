import { Smartphone, Zap, Users, Shield, Globe, TrendingUp, ArrowRight, CheckCircle, Star, Layers, Code, Cloud, Battery, Wifi, Camera } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createContactNavigator } from '@/utils/navigation';

const MobileAppsPage = () => {
  const navigate = useNavigate();
  const navigateToContact = createContactNavigator(navigate);

  const mobileCapabilities = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Mastery',
      description: 'Build once, deploy everywhere with React Native and Flutter, ensuring consistent experiences across iOS and Android.',
      highlight: 'Universal Reach'
    },
    {
      icon: Zap,
      title: 'Native Performance',
      description: 'Optimized for speed and efficiency with native modules, advanced caching, and performance monitoring.',
      highlight: 'Lightning Fast'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with platform guidelines and accessibility standards for maximum adoption.',
      highlight: 'Delightful UX'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security with biometric authentication, data encryption, and secure API communication.',
      highlight: 'Fort Knox Secure'
    },
    {
      icon: Globe,
      title: 'Offline-First Architecture',
      description: 'Apps that work seamlessly without internet connectivity, with smart data synchronization when online.',
      highlight: 'Always Available'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Built-in analytics, A/B testing, and app store optimization to maximize downloads and user engagement.',
      highlight: 'Scale & Succeed'
    }
  ];

  const appCategories = [
    {
      category: 'Business & Productivity Apps',
      description: 'Transform how teams work with mobile solutions that boost productivity and streamline business processes.',
      features: ['Team Collaboration', 'Document Management', 'Task Automation', 'Real-Time Sync'],
      examples: ['CRM Mobile Apps', 'Project Management Tools', 'Field Service Apps', 'Sales Enablement'],
      color: 'from-blue-500 to-cyan-500',
      icon: Layers
    },
    {
      category: 'Consumer & Lifestyle Apps',
      description: 'Engaging consumer applications that captivate users and build loyal communities around your brand.',
      features: ['Social Features', 'Personalization', 'Push Notifications', 'In-App Purchases'],
      examples: ['Social Platforms', 'Fitness Apps', 'Food Delivery', 'Entertainment Apps'],
      color: 'from-purple-500 to-pink-500',
      icon: Users
    },
    {
      category: 'E-Commerce & Marketplace Apps',
      description: 'Mobile commerce solutions that drive sales with seamless shopping experiences and secure payments.',
      features: ['Product Catalogs', 'Payment Integration', 'Order Tracking', 'Customer Reviews'],
      examples: ['Online Stores', 'Marketplace Apps', 'Booking Platforms', 'Subscription Services'],
      color: 'from-green-500 to-emerald-500',
      icon: Smartphone
    },
    {
      category: 'IoT & Connected Apps',
      description: 'Smart applications that connect to IoT devices and provide intelligent control and monitoring capabilities.',
      features: ['Device Control', 'Real-Time Monitoring', 'Data Visualization', 'Automated Actions'],
      examples: ['Smart Home Apps', 'Wearable Companions', 'Vehicle Apps', 'Health Monitors'],
      color: 'from-orange-500 to-red-500',
      icon: Wifi
    }
  ];

  const platforms = [
    {
      name: 'iOS Development',
      description: 'Native iOS apps built with Swift and SwiftUI, optimized for the Apple ecosystem',
      technologies: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit', 'iOS SDK'],
      advantages: ['App Store optimization', 'iOS-specific features', 'Premium user base', 'High revenue potential'],
      icon: '📱'
    },
    {
      name: 'Android Development',
      description: 'Native Android apps using Kotlin and Jetpack Compose for modern Android experiences',
      technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Firebase', 'Android SDK'],
      advantages: ['Global market reach', 'Customization options', 'Google Play services', 'Diverse device support'],
      icon: '🤖'
    },
    {
      name: 'Cross-Platform',
      description: 'Unified codebase for both platforms using React Native or Flutter',
      technologies: ['React Native', 'Flutter', 'Expo', 'TypeScript', 'Native Modules'],
      advantages: ['Cost-effective', 'Faster development', 'Code reusability', 'Consistent experience'],
      icon: '🔄'
    }
  ];

  const developmentPhases = [
    {
      phase: 'Strategy & Planning',
      duration: '1-2 weeks',
      description: 'Define app concept, target audience, platform strategy, and technical requirements for optimal market fit.',
      activities: ['Market Research', 'User Personas', 'Platform Selection', 'Technical Architecture']
    },
    {
      phase: 'Design & Prototyping',
      duration: '2-3 weeks',
      description: 'Create intuitive user experiences with platform-specific design guidelines and interactive prototypes.',
      activities: ['UI/UX Design', 'Platform Guidelines', 'Interactive Prototypes', 'Design System']
    },
    {
      phase: 'Development & Integration',
      duration: '8-16 weeks',
      description: 'Build core functionality with native performance, third-party integrations, and cloud backend.',
      activities: ['Core Development', 'API Integration', 'Database Setup', 'Performance Optimization']
    },
    {
      phase: 'Testing & Optimization',
      duration: '2-3 weeks',
      description: 'Comprehensive testing across devices, app store preparation, and performance optimization.',
      activities: ['Device Testing', 'Performance Testing', 'Security Audit', 'App Store Preparation']
    },
    {
      phase: 'Launch & Growth',
      duration: 'Ongoing',
      description: 'App store deployment, user acquisition strategies, and continuous improvement based on analytics.',
      activities: ['App Store Launch', 'User Analytics', 'Feature Updates', 'Growth Optimization']
    }
  ];

  const techStack = [
    {
      category: 'Frontend Development',
      icon: Code,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'TypeScript'],
      description: 'Modern frameworks for beautiful, performant mobile interfaces'
    },
    {
      category: 'Backend & APIs',
      icon: Cloud,
      technologies: ['Node.js', 'Firebase', 'GraphQL', 'REST APIs', 'WebSockets'],
      description: 'Scalable backend infrastructure for real-time data and sync'
    },
    {
      category: 'Device Features',
      icon: Camera,
      technologies: ['Camera APIs', 'GPS Location', 'Push Notifications', 'Biometrics', 'Sensors'],
      description: 'Native device capabilities for rich mobile experiences'
    },
    {
      category: 'Performance & Analytics',
      icon: TrendingUp,
      technologies: ['Crashlytics', 'Analytics', 'A/B Testing', 'Performance Monitoring', 'App Store Optimization'],
      description: 'Tools to monitor, optimize, and grow your mobile app'
    }
  ];

  const successMetrics = [
    { metric: '4.8★', label: 'Average App Rating', description: 'User satisfaction across platforms' },
    { metric: '2M+', label: 'Downloads Generated', description: 'For client apps we\'ve built' },
    { metric: '99.9%', label: 'Crash-Free Rate', description: 'Reliable performance standards' },
    { metric: '50+', label: 'Apps Launched', description: 'Across iOS and Android platforms' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Mobile Applications
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-light">
              Pocket-Sized Powerhouses That Connect the World
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create powerful mobile experiences that users love and businesses depend on. From consumer apps 
              to enterprise solutions, we build native and cross-platform applications that perform flawlessly 
              and scale effortlessly across iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigateToContact('mobile-hero')}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl font-semibold text-lg hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
              >
                Build Your App
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-pink-400/50 rounded-2xl font-semibold text-lg hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300"
              >
                See Mobile Success Stories
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
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Mobile Excellence, Redefined</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just develop mobile apps – we craft digital experiences that users can't put down, 
              businesses can't live without, and competitors can't replicate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileCapabilities.map((capability, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gray-800/60 border border-gray-700/50 hover:border-pink-400/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center mr-5">
                      <capability.icon className="h-7 w-7 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-1">
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

      {/* App Categories */}
      <section className="py-24 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Apps for Every Vision</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From consumer favorites to enterprise solutions, we build mobile applications 
              that drive engagement, productivity, and business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {appCategories.map((category, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <category.icon className="h-8 w-8 text-pink-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-3">Core Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-3">Examples</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, idx) => (
                        <span key={idx} className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-400/30">
                          {example}
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

      {/* Platform Expertise */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Master of All Platforms</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you need native performance or cross-platform efficiency, 
              we have the expertise to deliver the perfect solution for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-pink-400/50 transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-3">{platform.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{platform.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {platform.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-3">Advantages</h4>
                  <div className="space-y-2">
                    {platform.advantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {advantage}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Powered by Modern Technology</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge mobile technologies to create apps that are fast, 
              secure, and built to handle millions of users.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-pink-400/50 transition-all duration-500 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.category}</h3>
                <p className="text-gray-400 text-sm mb-6">{tech.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {tech.technologies.map((technology, idx) => (
                    <span key={idx} className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-400/30">
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">From Concept to App Store</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our proven development process ensures your mobile app launches successfully 
              and achieves sustainable growth in competitive app stores.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="relative">
                {index < developmentPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>
                  <div className="text-pink-400 text-sm font-semibold mb-3">{phase.duration}</div>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Go Mobile?</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Transform your idea into a mobile app that users love and your business depends on. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigateToContact('mobile-cta')}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl font-semibold text-lg hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
              >
                Start Your Mobile App
                <Smartphone className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-pink-400/50 rounded-2xl font-semibold text-lg hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300"
              >
                See Mobile Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileAppsPage;