
import { ServiceData } from '../types';
import { Code, Globe, Smartphone, Headphones, Cloud } from 'lucide-react';

export const webServices: ServiceData[] = [
  {
    id: 'web-apps',
    icon: Code,
    title: 'Web Applications',
    description: 'Scalable web applications built with modern frameworks and architectures for optimal performance and maintainability.',
    detailedDescription: 'Our web application development service delivers cutting-edge solutions using the latest technologies and best practices. We focus on creating scalable, maintainable, and high-performance applications that grow with your business needs.',
    image: 'https://res.cloudinary.com/dknafpppp/image/upload/v1754647711/2150201871_ayygpj.jpg',
    backgroundImage: 'https://res.cloudinary.com/dknafpppp/image/upload/v1754647711/2150201871_ayygpj.jpg',
    features: [
      'Custom web application development',
      'Progressive Web App (PWA) implementation', 
      'API design and microservices architecture',
      'Real-time features and WebSocket integration'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    startingPrice: '$5,000',
    timeline: '4-12 weeks',
    color: 'blue',
    route: '/web-apps'
  },
  {
    id: 'saas-solutions',
    icon: Cloud,
    title: 'SAAS Solutions',
    description: 'Scalable software-as-a-service platforms with subscription management and analytics.',
    detailedDescription: 'Complete SAAS platforms with multi-tenancy, payment processing, analytics dashboards, and user management. Built for scale and optimized for recurring revenue.',
    image: 'https://res.cloudinary.com/dknafpppp/image/upload/v1754647710/2149399290_d2hp75.jpg',
    backgroundImage: 'https://res.cloudinary.com/dknafpppp/image/upload/v1754647710/2149399290_d2hp75.jpg',
    features: [
      'Multi-tenant Architecture',
      'Payment Integration',
      'Analytics Dashboard',
      'API Management'
    ],
    technologies: ['React', 'Stripe', 'AWS', 'Redis'],
    startingPrice: '$15,000',
    timeline: '8-16 weeks',
    color: 'blue',
    route: '/saas'
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps with intuitive user experiences.',
    detailedDescription: 'iOS and Android applications built with React Native or native technologies. Focus on performance, user experience, and app store optimization.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'iOS & Android',
      'Cross-platform',
      'App Store Optimization',
      'Push Notifications'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
    startingPrice: '$10,000',
    timeline: '6-14 weeks',
    color: 'purple',
    route: '/mobile-apps'
  },
  {
    id: 'ar-vr-development',
    icon: Headphones,
    title: 'AR/VR Development',
    description: 'Digital immersion that educates, entertains, and transforms reality with cutting-edge AR/VR experiences.',
    detailedDescription: 'Our AR/VR development services combine artistry with engineering precision to craft immersive experiences that educate, train, and engage users. From gesture-based interfaces to spatial storytelling, our solutions push the boundaries of digital interaction.',
    image: 'https://res.cloudinary.com/dknafpppp/image/upload/v1754648501/2151908116_sz3fko.jpg',
    backgroundImage: 'https://res.cloudinary.com/dknafpppp/image/upload/v1754648501/2151908116_sz3fko.jpg',
    features: [
      'VR Training & Safety Modules',
      'AR Retail Try-ons & Filters', 
      'Virtual Product Demos',
      'Spatial Storytelling with Interaction',
      'WebAR for Browser-based Immersive Experience'
    ],
    technologies: ['Unity', 'Unreal Engine', 'Spark AR', '8thWall', 'WebXR', 'Blender', 'ARKit', 'ARCore'],
    startingPrice: '$12,000',
    timeline: '8-16 weeks',
    color: 'purple',
    route: '/ar-vr-development'
  }
];
