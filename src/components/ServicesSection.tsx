import { useState, useEffect, memo } from 'react';
import { ChevronDown, Smartphone, Gamepad2, Palette, Code, MessageSquare, Cloud, Phone, Cpu, Brain, Camera, BarChart3 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
const ServicesSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px'
    });
    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const filterCategories = [{
    id: 'all',
    label: 'All Services'
  }, {
    id: 'ai',
    label: 'AI & ML'
  }, {
    id: 'mobile',
    label: 'Mobile'
  }, {
    id: 'web',
    label: 'Web'
  }, {
    id: 'immersive',
    label: 'AR/VR'
  }, {
    id: 'cloud',
    label: 'Cloud'
  }];
  const services = [{
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Mobile App Development',
    category: 'mobile',
    intro: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    highlights: ['Cross-platform development for faster time-to-market', 'Native performance optimization', 'Offline-first architecture', 'Push notifications and real-time features', 'App Store optimization and deployment', 'Continuous integration and testing']
  }, {
    id: 'game-dev',
    icon: Gamepad2,
    title: 'Game Development',
    category: 'immersive',
    intro: 'Immersive gaming experiences ranging from mobile games to complex multiplayer environments and interactive simulations.',
    technologies: ['Unity', 'Unreal Engine', 'WebGL', 'C#', 'C++', 'Photon', 'Mirror Networking'],
    highlights: ['Cross-platform game deployment', 'Multiplayer networking and matchmaking', '3D graphics and physics simulation', 'Monetization strategy implementation', 'Performance optimization for all devices', 'Live service and content management']
  }, {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design',
    category: 'design',
    intro: 'Human-centered design that creates intuitive, accessible, and visually stunning digital experiences.',
    technologies: ['Figma', 'Adobe XD', 'Principle', 'Framer', 'Sketch', 'Zeplin'],
    highlights: ['User research and persona development', 'Information architecture and wireframing', 'Interactive prototyping and testing', 'Design system creation and maintenance', 'Accessibility and WCAG compliance', 'Cross-platform design consistency']
  }, {
    id: 'fullstack-web',
    icon: Code,
    title: 'Full Stack Web Development',
    category: 'web',
    intro: 'Scalable web applications built with modern frameworks and architectures for optimal performance and maintainability.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'MongoDB'],
    highlights: ['Server-side rendering and static generation', 'Progressive Web App (PWA) development', 'API design and microservices architecture', 'Database optimization and scaling', 'Real-time features with WebSockets', 'SEO optimization and performance tuning']
  }, {
    id: 'chatbot-ai',
    icon: MessageSquare,
    title: 'Chatbot & Conversational AI',
    category: 'ai',
    intro: 'Intelligent conversational interfaces powered by advanced NLP and machine learning for seamless human-AI interaction.',
    technologies: ['OpenAI GPT', 'LangChain', 'Rasa', 'Dialogflow', 'Azure Bot Framework', 'Hugging Face'],
    highlights: ['Natural language understanding and processing', 'Multi-language support and localization', 'Integration with existing CRM and databases', 'Voice AI and speech recognition', 'Sentiment analysis and context awareness', 'Continuous learning and improvement']
  }, {
    id: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud Architecture & DevOps',
    category: 'cloud',
    intro: 'Robust cloud infrastructure and DevOps practices that ensure scalability, reliability, and efficient deployment cycles.',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    highlights: ['Auto-scaling and load balancing', 'CI/CD pipeline automation', 'Infrastructure as Code (IaC)', 'Monitoring and logging systems', 'Security and compliance implementation', 'Cost optimization and resource management']
  }, {
    id: 'ai-calling',
    icon: Phone,
    title: 'AI Calling Solutions',
    category: 'ai',
    intro: 'Advanced voice AI systems for automated calling, customer support, and sales automation with natural conversation flows.',
    technologies: ['Twilio', 'OpenAI Whisper', 'Azure Speech', 'Python', 'TensorFlow', 'WebRTC'],
    highlights: ['Natural voice synthesis and recognition', 'Real-time conversation analysis', 'CRM integration and lead qualification', 'Multi-language voice support', 'Call analytics and performance metrics', 'Compliance with telecom regulations']
  }, {
    id: 'iot-dev',
    icon: Cpu,
    title: 'IoT Development',
    category: 'cloud',
    intro: 'Connected device solutions that bridge the physical and digital worlds through intelligent sensor networks and data analytics.',
    technologies: ['Arduino', 'ESP32', 'Raspberry Pi', 'MQTT', 'LoRaWAN', 'Azure IoT', 'AWS IoT Core'],
    highlights: ['Sensor network design and implementation', 'Real-time data collection and processing', 'Edge computing and local intelligence', 'Industrial IoT dashboard development', 'Predictive maintenance systems', 'Secure device communication protocols']
  }, {
    id: 'ai-ml',
    icon: Brain,
    title: 'Artificial Intelligence & Machine Learning',
    category: 'ai',
    intro: 'Custom AI solutions that transform data into actionable insights and automate complex decision-making processes.',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK', 'Apache Spark', 'MLflow'],
    highlights: ['Custom model development and training', 'Computer vision and image recognition', 'Natural language processing', 'Predictive analytics and forecasting', 'Recommendation systems', 'MLOps and model deployment pipelines']
  }, {
    id: 'ar-vr',
    icon: Camera,
    title: 'AR/VR Development',
    category: 'immersive',
    intro: 'Immersive augmented and virtual reality experiences that create new possibilities for training, entertainment, and visualization.',
    technologies: ['Unity', 'Unreal Engine', 'ARKit', 'ARCore', 'WebXR', 'Oculus SDK', 'HoloLens'],
    highlights: ['Cross-platform AR/VR applications', 'Spatial mapping and tracking', 'Hand gesture and eye tracking', 'Photorealistic rendering and lighting', 'Multi-user collaborative experiences', 'Performance optimization for VR headsets']
  }, {
    id: 'data-analytics',
    icon: BarChart3,
    title: 'Data Analytics & Business Intelligence',
    category: 'ai',
    intro: 'Transform raw data into strategic insights with advanced analytics, visualization, and business intelligence solutions.',
    technologies: ['Tableau', 'Power BI', 'Apache Kafka', 'Elasticsearch', 'Python', 'R', 'Databricks'],
    highlights: ['Real-time dashboard development', 'Data warehouse design and optimization', 'ETL pipeline automation', 'Predictive modeling and forecasting', 'A/B testing and experimentation platforms', 'Custom reporting and visualization']
  }];
  const filteredServices = activeFilter === 'all' ? services : services.filter(service => service.category === activeFilter);
  return <section id="services" className="py-20 bg-background relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our <span className="brand-gradient-text">Services</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Comprehensive digital solutions tailored to transform your business and drive innovation across every touchpoint.
          </p>
        </div>

        {/* Filter Categories */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
          {filterCategories.map(category => <button key={category.id} onClick={() => setActiveFilter(category.id)} className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}>
              {category.label}
            </button>)}
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          {filteredServices.map((service, index) => <Collapsible key={service.id} open={expandedService === service.id} onOpenChange={open => setExpandedService(open ? service.id : null)}>
              <div className={`group bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden ${isVisible ? `animate-fade-in-up animate-stagger-${index + 3}` : 'opacity-0'}`}>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center p-8 cursor-pointer hover:bg-muted/50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.intro}
                      </p>
                    </div>
                    
                    <ChevronDown className={`h-6 w-6 text-muted-foreground transform transition-transform duration-300 ml-4 ${expandedService === service.id ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="px-8 pb-8 border-t border-border/50">
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-card-foreground mb-4">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                              {tech}
                            </span>)}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-card-foreground mb-4">Key Capabilities</h4>
                        <ul className="space-y-3">
                          {service.highlights.map((highlight, idx) => <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border/50">
                      <button className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300">
                        Get Started
                      </button>
                      <button className="flex-1 border border-primary text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>)}
        </div>
      </div>
    </section>;
});
ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
