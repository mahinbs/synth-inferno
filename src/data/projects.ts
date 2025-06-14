
import { Smartphone, Code, Cloud, Phone, Brain } from 'lucide-react';
import { webAppsProjects } from './projects/webAppsProjects';
import { saasProjects } from './projects/saasProjects';
import { aiCallingProjects } from './projects/aiCallingProjects';

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
}

export interface Service {
  id: string;
  icon: any;
  title: string;
  color: 'cyan' | 'blue' | 'purple' | 'pink' | 'green';
  projects: Project[];
}

export const projectsData: Service[] = [
  {
    id: 'web-apps',
    icon: null,
    title: 'Web Applications',
    color: 'cyan',
    projects: webAppsProjects
  },
  {
    id: 'saas',
    icon: null,
    title: 'SAAS Solutions',
    color: 'blue',
    projects: saasProjects
  },
  {
    id: 'ai-calling',
    icon: null,
    title: 'AI Calling Agency',
    color: 'pink',
    projects: aiCallingProjects
  }
];
