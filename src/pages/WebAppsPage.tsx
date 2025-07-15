import { Code, Globe, Zap, Shield, Users, TrendingUp, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projects';
import OptimizedImage from '@/components/ui/OptimizedImage';
import CategorizedTechStackSection from '@/components/shared/CategorizedTechStackSection';
const WebAppsPage = () => {
  const [webAppProjects, setWebAppProjects] = useState<any[]>([]);
  useEffect(() => {
    // Get web app projects from the data source
    const webAppsService = projectsData.find(service => service.id === 'web-apps');
    if (webAppsService) {
      setWebAppProjects(webAppsService.projects);
      console.log('WebAppsPage - Loaded projects:', webAppsService.projects.length);
    }
  }, []);
  const features = [{
    icon: Code,
    title: 'Modern Tech Stack',
    description: 'Built with React, TypeScript, and the latest web technologies for optimal performance.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    icon: Globe,
    title: 'Responsive Design',
    description: 'Pixel-perfect designs that work seamlessly across all devices and screen sizes.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with advanced caching, lazy loading, and performance monitoring.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with SSL, data encryption, and regular security audits.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    icon: Users,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business, handling increased traffic and user loads.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    icon: TrendingUp,
    title: 'Analytics Integration',
    description: 'Comprehensive analytics and monitoring to track performance and user behavior.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  const caseStudies = [{
    client: 'RetailMax Corporation',
    industry: 'E-commerce',
    challenge: 'Legacy e-commerce platform couldn\'t handle Black Friday traffic spikes and had poor mobile experience.',
    solution: 'Built a modern, scalable e-commerce platform with microservices architecture, advanced caching, and mobile-first design.',
    results: ['300% increase in mobile conversion rates', 'Zero downtime during peak traffic', '50% faster page load times', '$2M additional revenue in first quarter'],
    testimonial: "The new platform exceeded all our expectations. We handled our highest traffic day ever without any issues.",
    clientName: 'David Martinez',
    clientRole: 'CTO, RetailMax Corporation',
    clientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    duration: '14 weeks',
    teamSize: '7 developers'
  }, {
    client: 'MedCare Health System',
    industry: 'Healthcare',
    challenge: 'Needed a HIPAA-compliant patient portal with telemedicine capabilities during the pandemic.',
    solution: 'Developed a secure healthcare platform with video consultations, appointment scheduling, and EHR integration.',
    results: ['80% reduction in in-person visits', '95% patient satisfaction score', 'HIPAA compliance achieved', '200% increase in patient engagement'],
    testimonial: "NeuraCode delivered a platform that not only met our compliance requirements but also improved patient care significantly.",
    clientName: 'Dr. Lisa Thompson',
    clientRole: 'Chief Medical Officer, MedCare',
    clientImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    duration: '18 weeks',
    teamSize: '9 developers'
  }];
  const process = [{
    step: '01',
    title: 'Discovery',
    description: 'Understanding your requirements and business goals'
  }, {
    step: '02',
    title: 'Design',
    description: 'Creating wireframes and user interface designs'
  }, {
    step: '03',
    title: 'Development',
    description: 'Building your application with clean, maintainable code'
  }, {
    step: '04',
    title: 'Testing',
    description: 'Rigorous testing across devices and browsers'
  }, {
    step: '05',
    title: 'Deployment',
    description: 'Launching your application with monitoring and support'
  }];
  return <div className="min-h-screen bg-black text-white" style={{
    backgroundImage: 'url("https://res.cloudinary.com/dknafpppp/image/upload/v1748810561/2150323552_rl9lps.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Web Applications
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with custom web applications built using cutting-edge technologies and modern development practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
                Get Started
              </a>
              <button className="px-8 py-4 border border-blue-400/30 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Now using data from projects.ts */}
      

      {/* Case Studies Section */}
      

      {/* Features Section */}
      <section className="py-20 bg-gray-900/70">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Web Development?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional web applications that drive results and exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="group relative p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <OptimizedImage src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <CategorizedTechStackSection />

      {/* Process Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures quality delivery and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a web application that transforms your business.
          </p>
          <a href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>;
};
export default WebAppsPage;