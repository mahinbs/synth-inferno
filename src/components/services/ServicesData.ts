import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Zap,
  Users,
  Gamepad2,
} from "lucide-react";

export const servicesData = [
  {
    id: "web-apps",
    icon: Code,
    title: "Web Applications",
    description:
      "Custom web applications built with cutting-edge technologies and responsive design.",
    detailedDescription:
      "Full-stack web applications built with React, Node.js, and modern frameworks. We create scalable, secure, and high-performance solutions tailored to your business needs.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "React & Next.js",
      "Real-time Features",
      "Cloud Integration",
      "Progressive Web Apps",
    ],
    technologies: ["TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    startingPrice: "$5,000",
    timeline: "4-12 weeks",
    color: "blue" as const,
    route: "/web-apps",
  },
  {
    id: "saas",
    icon: Cloud,
    title: "SAAS Solutions",
    description:
      "Scalable software-as-a-service platforms with subscription management and analytics.",
    detailedDescription:
      "Complete SAAS platforms with multi-tenancy, payment processing, analytics dashboards, and user management. Built for scale and optimized for recurring revenue.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multi-tenant Architecture",
      "Payment Integration",
      "Analytics Dashboard",
      "API Management",
    ],
    technologies: ["React", "Stripe", "AWS", "Redis"],
    startingPrice: "$15,000",
    timeline: "8-16 weeks",
    color: "blue" as const,
    route: "/saas",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps with intuitive user experiences.",
    detailedDescription:
      "iOS and Android applications built with React Native or native technologies. Focus on performance, user experience, and app store optimization.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "iOS & Android",
      "Cross-platform",
      "App Store Optimization",
      "Push Notifications",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase"],
    startingPrice: "$10,000",
    timeline: "6-14 weeks",
    color: "gray" as const,
    route: "/mobile-apps",
  },
  {
    id: "gaming-ar-vr",
    icon: Gamepad2,
    title: "Gaming AR/VR",
    description:
      "Immersive gaming experiences with cutting-edge AR/VR technologies and interactive 3D environments.",
    detailedDescription:
      "Next-generation gaming applications featuring augmented reality, virtual reality, and mixed reality experiences. We create immersive worlds with realistic physics, stunning visuals, and intuitive interactions.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Unity & Unreal Engine",
      "WebXR Development",
      "3D Modeling & Animation",
      "Cross-Platform VR/AR",
    ],
    technologies: ["Unity", "Unreal Engine", "WebXR", "Three.js"],
    startingPrice: "$18,000",
    timeline: "10-20 weeks",
    color: "zinc" as const,
    route: "/gaming-ar-vr",
  },
  {
    id: "sales-force",
    icon: Users,
    title: "Sales Force",
    description:
      "End-to-end CRM and sales pipeline automation solutions tailored to boost lead conversions and manage enterprise relationships.",
    detailedDescription:
      "Comprehensive Salesforce platform setup and customization with automated workflows, lead tracking, and performance analytics. Transform your sales process with enterprise-grade CRM solutions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Salesforce Platform Setup",
      "Sales Pipeline Automation",
      "Lead Capture & Tracking",
      "Real-time Reporting",
      "CRM Data Migration",
    ],
    technologies: ["Salesforce", "Apex", "Lightning", "Pardot"],
    startingPrice: "$9,000",
    timeline: "6-12 weeks",
    color: "blue" as const,
    route: "/sales-force",
  },
  {
    id: "ai-calling",
    icon: Brain,
    title: "AI Calling Agency",
    description:
      "Intelligent call automation systems with natural language processing capabilities.",
    detailedDescription:
      "Advanced AI-powered calling systems for lead generation, customer support, and sales automation. Featuring voice AI, sentiment analysis, and CRM integration.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Voice AI",
      "Call Analytics",
      "Lead Generation",
      "CRM Integration",
    ],
    technologies: ["OpenAI", "Twilio", "Python", "TensorFlow"],
    startingPrice: "$8,000",
    timeline: "6-10 weeks",
    color: "slate" as const,
    route: "/ai-calling",
  },
  {
    id: "ai-automation",
    icon: Zap,
    title: "AI Automation",
    description:
      "Custom AI solutions to automate workflows and enhance business processes.",
    detailedDescription:
      "Intelligent automation solutions using machine learning and AI to streamline operations, reduce costs, and improve efficiency across your organization.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Process Automation",
      "Machine Learning",
      "Data Analytics",
      "Workflow Integration",
    ],
    technologies: ["Python", "TensorFlow", "AWS Lambda", "Zapier"],
    startingPrice: "$12,000",
    timeline: "8-12 weeks",
    color: "stone" as const,
    route: "/ai-automation",
  },
];

export type ServiceData = typeof servicesData[0];
export type ColorType = "blue" | "gray" | "slate" | "stone" | "zinc";
