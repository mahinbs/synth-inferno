import {
  Smartphone,
  Code,
  Cloud,
  Phone,
  Brain,
  Users,
  Zap,
  Gamepad2,
} from "lucide-react";
// import { webAppsProjects } from './projects/webAppsProjects';
// import { saasProjects } from './projects/saasProjects';
// import { aiCallingProjects } from './projects/aiCallingProjects';
// import { mobileAppsProjects } from './projects/mobileAppsProjects';
// import { salesForceProjects } from './projects/salesForceProjects';
// import { aiAutomationProjects } from './projects/aiAutomationProjects';
// import { gamingArVrProjects } from './projects/gamingArVrProjects';

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  metrics: Record<string, string>;
  timeline: string;
  team: string;
  industry: string;
  testimonial: string;
  clientLogo: string;
  image: string;
  serviceId: string;
  liveUrl?: string;
  projectType?: 'saas' | 'mobile' | 'web' | 'ai' | 'arvr' | 'iot';
  // Enhanced case study fields
  challenge: string;
  solution: string;
  approach: string[];
  gallery: string[];
  detailedMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  features: string[];
  extendedTestimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  metaInfo?: {
    timeline: string;
    teamSize: string;
    industry: string;
  };
}

export interface Service {
  id: string;
  icon: any;
  title: string;
  color: "cyan" | "blue" | "purple" | "pink" | "green";
  projects: Project[];
}

export const projectsData: Service[] = [
  {
    id: "web-apps",
    icon: Code,
    title: "Web Applications",
    color: "cyan",
    projects: [],
    //  webAppsProjects
  },
  {
    id: "saas",
    icon: Cloud,
    title: "SAAS Solutions",
    color: "blue",
    projects: [],
    //  saasProjects
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Applications",
    color: "purple",
    projects: [],
    //  mobileAppsProjects
  },
  // {
  //   id: "gaming-ar-vr",
  //   icon: Gamepad2,
  //   title: "Gaming AR/VR",
  //   color: "green",
  //   projects: [],
  //   //  gamingArVrProjects
  // },
  // {
  //   id: "sales-force",
  //   icon: Users,
  //   title: "Sales Force",
  //   color: "green",
  //   projects: [],
  //   //  salesForceProjects
  // },
  {
    id: "ai-calling",
    icon: Phone,
    title: "AI Calling Agency",
    color: "pink",
    projects: [],
    //  aiCallingProjects
  },
  // {
  //   id: "ai-automation",
  //   icon: Zap,
  //   title: "AI Automation",
  //   color: "green",
  //   projects: [],
  //   //  aiAutomationProjects
  // },
];
