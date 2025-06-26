
import { Code, Cloud, Smartphone } from "lucide-react";
import { ServiceData } from "../types";

export const webServices: ServiceData[] = [
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
];
