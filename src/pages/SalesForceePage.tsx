
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/chatbot/FloatingChatbot';
import ServicePortfolioPreviews from '@/components/services/ServicePortfolioPreviews';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, CheckCircle, ArrowRight, Star, Clock, Shield, TrendingUp } from 'lucide-react';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { getPortfolioData } from '@/services/portfolioDataService';
import { Service } from '@/data/projects';

const SalesForcePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  usePerformanceOptimization();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getPortfolioData();
        setServices(data);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const salesForceProjects = services.find(s => s.id === 'sales-force')?.projects || [];

  const handleContactClick = () => {
    window.location.href = '/#contact';
  };

  const handleShowWebProjects = () => {
    window.location.href = '/portfolio';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Salesforce Solutions
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Sales Operations</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                End-to-end Salesforce implementation and customization services to boost lead conversions, 
                automate workflows, and manage enterprise relationships with powerful CRM solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Start Your CRM Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleShowWebProjects}
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Salesforce <span className="text-blue-600">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From platform setup to advanced customization, we deliver complete Salesforce solutions 
                that scale with your business and drive measurable results.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Shield,
                  title: 'Platform Setup & Migration',
                  description: 'Complete Salesforce platform implementation with data migration, user management, and security configuration.'
                },
                {
                  icon: TrendingUp,
                  title: 'Sales Pipeline Automation',
                  description: 'Automated lead scoring, opportunity management, and sales process optimization for maximum efficiency.'
                },
                {
                  icon: Users,
                  title: 'Lead Capture & Tracking',
                  description: 'Advanced lead generation systems with multi-channel capture, scoring, and nurturing workflows.'
                },
                {
                  icon: Star,
                  title: 'Custom Lightning Development',
                  description: 'Tailored Lightning components and applications designed for your specific business requirements.'
                },
                {
                  icon: Clock,
                  title: 'Real-time Reporting',
                  description: 'Comprehensive dashboards and analytics for data-driven insights and performance tracking.'
                },
                {
                  icon: CheckCircle,
                  title: 'CRM Data Integration',
                  description: 'Seamless integration with existing systems, ERP platforms, and third-party applications.'
                }
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose Our Salesforce Services?
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Certified Salesforce consultants and developers',
                      'Proven track record with enterprise implementations',
                      'Custom solutions tailored to your industry',
                      'Comprehensive training and change management',
                      'Ongoing support and optimization services',
                      'Integration with existing business systems'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Salesforce dashboard and analytics"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>

            {/* Portfolio Previews */}
            {!loading && (
              <ServicePortfolioPreviews 
                serviceId="sales-force" 
                projects={salesForceProjects}
              />
            )}

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Process?</h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our Salesforce expertise can drive your business growth and improve sales efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={handleContactClick}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg transition-all duration-300"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={handleShowWebProjects}
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                  >
                    View Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot 
        onShowWebProjects={handleShowWebProjects}
        onContactHuman={handleContactClick}
      />
    </div>
  );
};

export default SalesForcePage;
