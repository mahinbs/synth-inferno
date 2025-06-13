
import { Smartphone, Code, Cloud, Phone, Brain } from 'lucide-react';

export interface Service {
  id: string;
  icon: any;
  title: string;
  category: string;
  intro: string;
  aboutService: string;
  keyFeatures: string[];
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
    aboutService: 'Our web application development service delivers cutting-edge solutions using the latest technologies and best practices. We focus on creating scalable, maintainable, and high-performance applications that grow with your business needs.',
    keyFeatures: [
      'Custom web application development',
      'Progressive Web App (PWA) implementation',
      'API design and microservices architecture',
      'Real-time features and WebSocket integration'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    highlights: ['Server-side rendering and static generation', 'Progressive Web App development', 'API design and microservices architecture'],
    backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    price: '$5,000',
    duration: '4-12 weeks'
  },
  {
    id: 'saas-solutions',
    icon: Cloud,
    title: 'SAAS Solutions',
    category: 'saas',
    intro: 'Complete Software-as-a-Service platforms with user management, billing, analytics, and scalable cloud infrastructure.',
    aboutService: 'We build comprehensive SAAS platforms from the ground up, including user management, subscription billing, analytics dashboards, and scalable cloud infrastructure that can handle millions of users.',
    keyFeatures: [
      'Multi-tenant architecture design',
      'Subscription billing and payment processing',
      'Real-time analytics and reporting',
      'Auto-scaling cloud infrastructure'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Stripe', 'PostgreSQL', 'Redis'],
    highlights: ['Multi-tenant architecture', 'Subscription billing integration', 'Real-time analytics dashboard'],
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    price: '$15,000',
    duration: '8-16 weeks'
  },
  {
    id: 'mobile-applications',
    icon: Smartphone,
    title: 'Mobile Applications',
    category: 'mobile',
    intro: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    aboutService: 'Our mobile development team creates high-performance applications for iOS and Android platforms, focusing on user experience, performance optimization, and native platform integration.',
    keyFeatures: [
      'Cross-platform development with Flutter/React Native',
      'Native iOS and Android development',
      'Push notifications and real-time messaging',
      'Offline functionality and data synchronization'
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    highlights: ['Cross-platform development', 'Native performance optimization', 'Push notifications and real-time features'],
    backgroundImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    price: '$10,000',
    duration: '6-14 weeks'
  },
  {
    id: 'ai-calling-agency',
    icon: Phone,
    title: 'AI Calling Agency',
    category: 'ai',
    intro: 'Advanced voice AI systems for automated calling, customer support, and sales automation with natural conversation flows.',
    aboutService: 'Revolutionary AI-powered calling solutions that handle customer interactions with human-like conversation capabilities, perfect for lead generation, customer support, and sales automation.',
    keyFeatures: [
      'Natural voice synthesis and recognition',
      'Conversation flow automation',
      'CRM integration and lead management',
      'Real-time sentiment analysis'
    ],
    technologies: ['Twilio', 'OpenAI Whisper', 'Azure Speech', 'Python', 'TensorFlow', 'WebRTC'],
    highlights: ['Natural voice synthesis and recognition', 'Real-time conversation analysis', 'CRM integration and lead qualification'],
    backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    price: '$8,000',
    duration: '6-10 weeks'
  },
  {
    id: 'ai-automation',
    icon: Brain,
    title: 'AI Automation',
    category: 'ai',
    intro: 'Custom AI solutions that transform data into actionable insights and automate complex decision-making processes.',
    aboutService: 'Intelligent automation solutions that leverage machine learning and AI to streamline business processes, analyze data patterns, and make intelligent decisions automatically.',
    keyFeatures: [
      'Custom ML model development and training',
      'Process automation and workflow optimization',
      'Intelligent document processing',
      'Predictive analytics and forecasting'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'LangChain', 'Python', 'MLflow'],
    highlights: ['Custom model development and training', 'Process automation and optimization', 'Intelligent workflow management'],
    backgroundImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    price: '$12,000',
    duration: '8-12 weeks'
  }
];
