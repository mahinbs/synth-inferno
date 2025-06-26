
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Zap,
  Users,
  Gamepad2,
  Palette,
  Cpu,
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
    id: "game-development",
    icon: Gamepad2,
    title: "Game Development",
    description:
      "Where creativity meets code to build living, breathing virtual experiences.",
    detailedDescription:
      "We don't just develop games — we design emotional, immersive experiences. With deep expertise in game physics, animation rigs, and multiplayer architecture, our team brings together storyboarding, logic systems, and visual fidelity to create games that don't just entertain — they engage deeply.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multiplayer Game Engines with Real-time Sync",
      "Gamified Learning Platforms",
      "AR/VR-Enabled Training Simulators",
      "In-game Economies with Secure Transaction Layers",
      "Procedural Environments + AI NPC Behavior",
    ],
    technologies: ["Unity", "Unreal Engine", "WebGL", "C#", "C++", "Photon", "Blender", "PlayFab"],
    startingPrice: "$20,000",
    timeline: "12-24 weeks",
    color: "indigo" as const,
    route: "/game-development",
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
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design systems engineered from empathy, validated by data, and refined by interaction science.",
    detailedDescription:
      "We believe that great design is not what it looks like — but how it thinks. At Dee&Cee Labs, our design team fuses behavioral psychology with information architecture and digital ergonomics to craft unforgettable experiences. We're not pixel-pushers — we're product thinkers.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "UX Heatmaps & User Flow Optimization",
      "Design Systems for Scalable Product Ecosystems",
      "Microinteractions that Humanize Tech",
      "Motion Design for Feedback + Delight",
      "Accessibility-First Interfaces (AA/AAA Standards)",
    ],
    technologies: ["Figma", "Adobe XD", "Maze", "Hotjar", "Lottie", "WCAG Compliance"],
    startingPrice: "$7,000",
    timeline: "4-10 weeks",
    color: "purple" as const,
    route: "/ui-ux-design",
  },
  {
    id: "iot",
    icon: Cpu,
    title: "Internet of Things (IoT)",
    description:
      "Secure, intelligent ecosystems that connect devices, data, and decisions.",
    detailedDescription:
      "From hardware control to live telemetry dashboards, we build full-cycle IoT solutions that gather, process, and act on data — in milliseconds.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Industrial IoT Dashboards",
      "Smart Home Systems",
      "Real-time Alerts & Controls",
      "Remote Monitoring",
      "Low Power WAN Optimization",
    ],
    technologies: ["MQTT", "CoAP", "Arduino", "ESP32", "Node-RED", "Raspberry Pi", "AWS IoT Core"],
    startingPrice: "$12,000",
    timeline: "8-14 weeks",
    color: "teal" as const,
    route: "/iot",
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
export type ColorType = "blue" | "gray" | "slate" | "stone" | "zinc" | "indigo" | "purple" | "teal";
