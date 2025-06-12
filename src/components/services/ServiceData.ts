
import { Smartphone, Gamepad2, Palette, Code, MessageSquare, Cloud, Phone, Cpu, Brain, Camera, BarChart3 } from 'lucide-react';

export interface Service {
  id: string;
  icon: any;
  title: string;
  category: string;
  intro: string;
  technologies: string[];
  highlights: string[];
  backgroundImage: string;
  price: string;
  duration: string;
}

export const filterCategories = [
  {
    id: 'all',
    label: 'All Services'
  },
  {
    id: 'ai',
    label: 'AI & ML'
  },
  {
    id: 'mobile',
    label: 'Mobile'
  },
  {
    id: 'web',
    label: 'Web'
  },
  {
    id: 'saas',
    label: 'SAAS'
  },
  {
    id: 'cloud',
    label: 'Cloud'
  }
];

export const services: Service[] = [
  {
    id: 'web-applications',
    icon: Code,
    title: 'Web Applications',
    category: 'web',
    intro: 'Scalable web applications built with modern frameworks and architectures for optimal performance and maintainability.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    highlights: ['Server-side rendering and static generation', 'Progressive Web App development', 'API design and microservices architecture'],
    backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$5,000',
    duration: '4-12 weeks'
  },
  {
    id: 'saas-solutions',
    icon: Cloud,
    title: 'SAAS Solutions',
    category: 'saas',
    intro: 'Complete Software-as-a-Service platforms with user management, billing, analytics, and scalable cloud infrastructure.',
    technologies: ['React', 'Node.js', 'AWS', 'Stripe', 'PostgreSQL', 'Redis'],
    highlights: ['Multi-tenant architecture', 'Subscription billing integration', 'Real-time analytics dashboard'],
    backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$15,000',
    duration: '8-16 weeks'
  },
  {
    id: 'mobile-applications',
    icon: Smartphone,
    title: 'Mobile Applications',
    category: 'mobile',
    intro: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    highlights: ['Cross-platform development', 'Native performance optimization', 'Push notifications and real-time features'],
    backgroundImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$10,000',
    duration: '6-14 weeks'
  },
  {
    id: 'ai-calling-agency',
    icon: Phone,
    title: 'AI Calling Agency',
    category: 'ai',
    intro: 'Advanced voice AI systems for automated calling, customer support, and sales automation with natural conversation flows.',
    technologies: ['Twilio', 'OpenAI Whisper', 'Azure Speech', 'Python', 'TensorFlow', 'WebRTC'],
    highlights: ['Natural voice synthesis and recognition', 'Real-time conversation analysis', 'CRM integration and lead qualification'],
    backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$8,000',
    duration: '6-10 weeks'
  },
  {
    id: 'ai-automation',
    icon: Brain,
    title: 'AI Automation',
    category: 'ai',
    intro: 'Custom AI solutions that transform data into actionable insights and automate complex decision-making processes.',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'LangChain', 'Python', 'MLflow'],
    highlights: ['Custom model development and training', 'Process automation and optimization', 'Intelligent workflow management'],
    backgroundImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$12,000',
    duration: '8-12 weeks'
  }
];
