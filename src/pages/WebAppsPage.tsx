import {
  Code,
  Globe,
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Cpu,
  Database,
  Cloud,
  Layers,
  Lock,
  Rocket,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/seo/SEOHead";
import ServicePortfolioSection from "@/components/portfolio/ServicePortfolioSection";
import { projectsData } from "@/data/projects";
import OptimizedImage from "@/components/ui/OptimizedImage";
import CategorizedTechStackSection from "@/components/shared/CategorizedTechStackSection";
import { createContactNavigator } from "@/utils/navigation";
import { generateServiceSchema } from "@/components/seo/StructuredData";
import Contact from "@/components/Contact";
import SimpleContactForm from "@/components/SimpleContactForm";

const WebAppsPage = () => {
  const navigate = useNavigate();
  const navigateToContact = createContactNavigator(navigate);
  const [webAppProjects, setWebAppProjects] = useState<any[]>([]);

  useEffect(() => {
    const webAppsService = projectsData.find(
      (service) => service.id === "web-apps"
    );
    if (webAppsService) {
      setWebAppProjects(webAppsService.projects);
    }
  }, []);

  const capabilities = [
    {
      icon: Code,
      title: "Full-Stack Mastery",
      description:
        "End-to-end web application development from database design to user interface, ensuring seamless integration across all layers.",
      highlight: "Complete Solutions",
    },
    {
      icon: Globe,
      title: "Universal Accessibility",
      description:
        "Responsive, progressive web applications that work flawlessly across all devices, browsers, and accessibility standards.",
      highlight: "Cross-Platform",
    },
    {
      icon: Zap,
      title: "Performance Excellence",
      description:
        "Lightning-fast applications optimized for speed with advanced caching, code splitting, and performance monitoring.",
      highlight: "Blazing Fast",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security with multi-layer protection, data encryption, and comprehensive security auditing.",
      highlight: "Fort Knox Secure",
    },
    {
      icon: Users,
      title: "Infinite Scalability",
      description:
        "Architecture designed to grow with your business, handling millions of users with automatic scaling capabilities.",
      highlight: "Scale to Millions",
    },
    {
      icon: TrendingUp,
      title: "Intelligence Built-In",
      description:
        "Integrated analytics, AI capabilities, and business intelligence to drive data-driven decisions and growth.",
      highlight: "Smart & Insightful",
    },
  ];

  const solutions = [
    {
      category: "E-Commerce Platforms",
      description:
        "Next-generation online stores with AI-powered recommendations, real-time inventory, and seamless payment processing.",
      features: [
        "Smart Product Recommendations",
        "Multi-Currency Support",
        "Advanced Analytics",
        "Mobile-First Design",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Business Management Systems",
      description:
        "Comprehensive ERP and CRM solutions that streamline operations and boost productivity across all departments.",
      features: [
        "Workflow Automation",
        "Real-Time Reporting",
        "Team Collaboration",
        "API Integrations",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Data Visualization Dashboards",
      description:
        "Interactive dashboards that transform complex data into actionable insights with beautiful, intuitive interfaces.",
      features: [
        "Real-Time Data",
        "Custom Visualizations",
        "Export Capabilities",
        "Role-Based Access",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Social & Community Platforms",
      description:
        "Engaging social applications with real-time messaging, content sharing, and community building features.",
      features: [
        "Real-Time Chat",
        "Content Management",
        "User Profiles",
        "Moderation Tools",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const technologies = [
    {
      category: "Frontend Excellence",
      icon: Layers,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      description:
        "Modern, interactive user interfaces that captivate and engage",
    },
    {
      category: "Backend Power",
      icon: Database,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      description: "Robust server architecture that handles any load",
    },
    {
      category: "Cloud Infrastructure",
      icon: Cloud,
      technologies: [
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "CloudFlare",
      ],
      description: "Scalable cloud solutions for global reach and reliability",
    },
    {
      category: "AI Integration",
      icon: Cpu,
      technologies: [
        "OpenAI",
        "TensorFlow",
        "Machine Learning",
        "Natural Language Processing",
      ],
      description: "Intelligent features that enhance user experience",
    },
  ];

  const developmentProcess = [
    {
      phase: "Discovery & Strategy",
      duration: "1-2 weeks",
      description:
        "Deep dive into your business goals, user needs, and technical requirements to craft the perfect solution.",
      deliverables: [
        "Requirements Analysis",
        "Technical Architecture",
        "Project Roadmap",
      ],
    },
    {
      phase: "Design & Prototyping",
      duration: "2-3 weeks",
      description:
        "Creating intuitive user experiences and stunning visual designs that align with your brand identity.",
      deliverables: ["UI/UX Design", "Interactive Prototypes", "Design System"],
    },
    {
      phase: "Development & Integration",
      duration: "6-12 weeks",
      description:
        "Building your application with clean, maintainable code and seamless third-party integrations.",
      deliverables: ["Core Development", "API Integration", "Database Setup"],
    },
    {
      phase: "Testing & Optimization",
      duration: "1-2 weeks",
      description:
        "Comprehensive testing across devices, browsers, and performance optimization for peak efficiency.",
      deliverables: [
        "Quality Assurance",
        "Performance Testing",
        "Security Audit",
      ],
    },
    {
      phase: "Launch & Support",
      duration: "Ongoing",
      description:
        "Smooth deployment with monitoring, maintenance, and continuous improvement based on user feedback.",
      deliverables: [
        "Production Deployment",
        "24/7 Monitoring",
        "Ongoing Support",
      ],
    },
  ];

  const serviceSchema = generateServiceSchema({
    name: "Web Application Development",
    description:
      "Transform your business with cutting-edge web applications built using modern technologies. We specialize in full-stack development, creating scalable, secure, and user-friendly web solutions.",
    provider: {
      name: "Synth Inferno",
      url: "https://www.synthinferno.com",
    },
    areaServed: "Worldwide",
    serviceType: "Web Development",
    url: "https://www.synthinferno.com/web-apps",
  });

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dknafpppp/image/upload/v1748810561/2150323552_rl9lps.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <SEOHead
        title="Web Application Development Services | Custom Web Apps & Full-Stack Solutions"
        description="Transform your business with cutting-edge web applications. Expert full-stack development using React, Node.js, TypeScript. Scalable, secure, and user-friendly web solutions."
        keywords="web application development, full-stack development, React development, Node.js, TypeScript, web app development, custom web applications, progressive web apps, web development services"
        canonical="/web-apps"
        structuredData={serviceSchema}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 min-h-screen flex flex-col justify-center pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Web Applications
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-light">
              Engineering the Future of Digital Experiences
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with intelligent web applications that
              combine cutting-edge technology, stunning design, and seamless
              user experiences. From concept to deployment, we craft digital
              solutions that drive growth and exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigateToContact("web-apps-hero")}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl font-semibold text-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-cyan-400/50 rounded-2xl font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SimpleContactForm
        variant="minimal"
        showQuickContact={false}
        title="Contact Us"
      />

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose Synth Inferno?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just build web applications – we engineer digital
              masterpieces that transform businesses and create lasting impact
              in the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gray-800/60 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 overflow-hidden backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center mr-5">
                      <capability.icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                        {capability.highlight}
                      </div>
                      <h3 className="text-xl font-bold">{capability.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From startups to enterprises, we create custom web applications
              that solve real business challenges and unlock new opportunities
              for growth.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {solution.category}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We leverage the latest technologies and frameworks to build
              applications that are not just functional, but future-ready and
              built to scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.category}</h3>
                <p className="text-gray-400 text-sm mb-4">{tech.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {tech.technologies.map((technology, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Our Proven Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A systematic approach that ensures quality, transparency, and
              successful delivery of your web application.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent z-0"></div>
                )}

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {phase.description}
                  </p>
                  <div className="space-y-1">
                    {phase.deliverables.map((deliverable, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-gray-500 px-2 py-1 bg-gray-800/50 rounded"
                      >
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SimpleContactForm
        variant="minimal"
        showQuickContact={false}
        title="Contact Us"
      />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Let's transform your vision into a powerful web application that
              drives results. Schedule a consultation with our expert team and
              discover what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigateToContact("web-apps-cta")}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl font-semibold text-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Project
                <Rocket className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-cyan-400/50 rounded-2xl font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <ServicePortfolioSection
        serviceId="web-apps"
        serviceTitle="Web Applications"
        serviceColor="cyan"
      />

      <Footer />
    </div>
  );
};

export default WebAppsPage;
