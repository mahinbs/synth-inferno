import { Cloud, CreditCard, BarChart3, Users, Settings, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const SaasPage = () => {
  const features = [{
    icon: Cloud,
    title: 'Multi-tenant Architecture',
    description: 'Scalable infrastructure that efficiently serves multiple customers from a single instance.'
  }, {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Seamless subscription management with Stripe, PayPal, and other payment gateways.'
  }, {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics to track user behavior, revenue, and business metrics.'
  }, {
    icon: Settings,
    title: 'API Management',
    description: 'RESTful APIs and webhooks for seamless third-party integrations.'
  }];
  const portfolio = [{
    title: 'TaskFlow Pro',
    category: 'Project Management SAAS',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Enterprise project management platform with real-time collaboration and advanced reporting.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
    metrics: '10,000+ users, 99.9% uptime',
    timeline: '12 weeks'
  }, {
    title: 'FinanceHub',
    category: 'Financial Management SAAS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete financial management suite for small to medium businesses with automated reporting.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe', 'Docker'],
    metrics: '5,000+ businesses, $2M+ processed',
    timeline: '16 weeks'
  }, {
    title: 'LearnSpace',
    category: 'E-Learning Platform',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Interactive learning management system with video streaming and progress tracking.',
    technologies: ['React', 'Express', 'MongoDB', 'Redis', 'Cloudflare'],
    metrics: '50,000+ students, 500+ courses',
    timeline: '14 weeks'
  }, {
    title: 'CustomerVoice',
    category: 'Customer Feedback SAAS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Advanced customer feedback and survey platform with AI-powered sentiment analysis.',
    technologies: ['Angular', 'Python', 'TensorFlow', 'PostgreSQL', 'GCP'],
    metrics: '1M+ responses analyzed, 200+ companies',
    timeline: '10 weeks'
  }, {
    title: 'InventoryMaster',
    category: 'Inventory Management SAAS',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Smart inventory management with predictive analytics and automated reordering.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Machine Learning', 'AWS'],
    metrics: '1,000+ warehouses, 40% cost reduction',
    timeline: '18 weeks'
  }, {
    title: 'TeamSync',
    category: 'Team Collaboration SAAS',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'All-in-one team collaboration platform with video conferencing and file sharing.',
    technologies: ['Next.js', 'Node.js', 'WebRTC', 'S3', 'Kubernetes'],
    metrics: '25,000+ teams, 95% satisfaction',
    timeline: '20 weeks'
  }];
  const caseStudies = [{
    client: 'TechCorp Solutions',
    industry: 'Technology',
    challenge: 'Needed a scalable project management solution to handle 500+ developers across multiple time zones.',
    solution: 'Built a comprehensive SAAS platform with real-time collaboration, advanced reporting, and integration with existing dev tools.',
    results: ['40% increase in project delivery speed', '60% reduction in communication overhead', '99.9% uptime achieved', '$500K annual cost savings'],
    testimonial: "NeuraCode delivered exactly what we needed. The platform has transformed how our teams collaborate and has significantly improved our project delivery times.",
    clientName: 'Sarah Johnson',
    clientRole: 'CTO, TechCorp Solutions',
    clientImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    duration: '14 weeks',
    teamSize: '6 developers'
  }, {
    client: 'GrowthStartup Inc',
    industry: 'E-commerce',
    challenge: 'Required a financial management SAAS to handle complex multi-currency transactions and automated reporting.',
    solution: 'Developed a robust financial platform with advanced analytics, automated compliance reporting, and seamless payment processing.',
    results: ['90% reduction in manual accounting work', 'Real-time financial insights', 'Automated compliance reporting', '300% improvement in cash flow visibility'],
    testimonial: "The financial management platform has been game-changing for our business. We now have complete visibility into our finances across all markets.",
    clientName: 'Michael Chen',
    clientRole: 'CEO, GrowthStartup Inc',
    clientImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    duration: '12 weeks',
    teamSize: '5 developers'
  }, {
    client: 'EduTech Academy',
    industry: 'Education',
    challenge: 'Needed to rapidly scale their online learning platform to support 100,000+ students during the pandemic.',
    solution: 'Built a scalable e-learning SAAS with video streaming, interactive assessments, and progress tracking capabilities.',
    results: ['10x increase in concurrent users', '95% student satisfaction rate', '50% reduction in support tickets', 'Zero downtime during peak usage'],
    testimonial: "NeuraCode helped us scale from 5,000 to 50,000 students seamlessly. Their platform handled the massive growth without any issues.",
    clientName: 'Dr. Emily Roberts',
    clientRole: 'Director of Technology, EduTech Academy',
    clientImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    duration: '16 weeks',
    teamSize: '8 developers'
  }];
  const pricingTiers = [{
    name: 'Startup',
    price: '$5,000',
    description: 'Perfect for early-stage businesses',
    features: ['Basic SAAS Foundation', 'User Authentication', 'Payment Integration', '3 Months Support'],
    popular: false
  }, {
    name: 'Growth',
    price: '$15,000',
    description: 'For growing businesses',
    features: ['Advanced Features', 'Analytics Dashboard', 'API Development', 'Team Collaboration', '6 Months Support'],
    popular: true
  }, {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: ['Custom Development', 'Advanced Security', 'Dedicated Support', 'Custom Integrations', '12 Months Support'],
    popular: false
  }];
  const process = [{
    step: '01',
    title: 'Discovery & Planning',
    description: 'Understand your business model and technical requirements'
  }, {
    step: '02',
    title: 'Architecture Design',
    description: 'Design scalable multi-tenant architecture and database schema'
  }, {
    step: '03',
    title: 'MVP Development',
    description: 'Build core features with payment integration and user management'
  }, {
    step: '04',
    title: 'Testing & Optimization',
    description: 'Comprehensive testing including load testing and security audits'
  }, {
    step: '05',
    title: 'Launch & Scale',
    description: 'Deploy to production with monitoring and ongoing optimization'
  }];
  return <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                SAAS Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Scalable software-as-a-service platforms with subscription management and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              
            </div>
          </div>
        </div>
      </section>

      {/* SAAS Tech Stack Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our SAAS Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering modern SAAS applications
            </p>
          </div>
          
          <div className="saas-stack-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="stack-group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Frontend</h3>
              <p className="text-gray-300 text-sm leading-relaxed">React · Modern UI/UX · Responsive Design</p>
            </div>

            <div className="stack-group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Payment Processing</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Stripe · Subscription Management · Secure Transactions</p>
            </div>

            <div className="stack-group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Cloud Infrastructure</h3>
              <p className="text-gray-300 text-sm leading-relaxed">AWS · Scalable Architecture · Auto-scaling</p>
            </div>

            <div className="stack-group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Caching & Performance</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Redis · Fast Response Times · Optimized Performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">SAAS Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to launch and scale your software-as-a-service business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our SAAS Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures scalable and successful SAAS delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">SAAS Development Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your SAAS project requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => <div key={index} className={`p-8 rounded-2xl border ${tier.popular ? 'border-blue-400 bg-blue-500/10' : 'border-gray-700 bg-gray-800/50'} relative`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">{tier.price}</div>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                      {feature}
                    </li>)}
                </ul>
                <a 
                  href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${tier.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500' : 'border border-blue-400/30 hover:bg-blue-500/10'}`}
                >
                  Get Started
                </a>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Launch Your SAAS?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build a scalable SAAS platform that grows with your business.
          </p>
          <a 
            href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            Start Your SAAS Journey
          </a>
        </div>
      </section>

      <Footer />
    </div>;
};
export default SaasPage;