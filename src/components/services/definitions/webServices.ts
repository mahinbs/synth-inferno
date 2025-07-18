
import { ServiceData } from '../types';
import { Code, Globe, Smartphone, VrIcon } from 'lucide-react';

export const webServices: ServiceData[] = [
  {
    id: 'web-apps',
    icon: Code,
    title: 'Web Applications',
    category: 'Development',
    intro: 'Scalable web applications built with modern frameworks and architectures for optimal performance and maintainability.',
    detailedDescription: 'Our web application development service delivers cutting-edge solutions using the latest technologies and best practices. We focus on creating scalable, maintainable, and high-performance applications that grow with your business needs.',
    features: [
      'Custom web application development',
      'Progressive Web App (PWA) implementation', 
      'API design and microservices architecture',
      'Real-time features and WebSocket integration'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    highlights: ['Server-side rendering and static generation', 'Progressive Web App development', 'API design and microservices architecture'],
    startingPrice: '$5,000',
    timeline: '4-12 weeks',
    colorType: 'blue'
  },
  {
    id: 'ar-vr-development',
    icon: VrIcon,
    title: 'AR/VR Development',
    category: 'Immersive Tech',
    intro: 'Digital immersion that educates, entertains, and transforms reality with cutting-edge AR/VR experiences.',
    detailedDescription: 'Our AR/VR development services combine artistry with engineering precision to craft immersive experiences that educate, train, and engage users. From gesture-based interfaces to spatial storytelling, our solutions push the boundaries of digital interaction.',
    features: [
      'VR Training & Safety Modules',
      'AR Retail Try-ons & Filters', 
      'Virtual Product Demos',
      'Spatial Storytelling with Interaction',
      'WebAR for Browser-based Immersive Experience'
    ],
    technologies: ['Unity', 'Unreal Engine', 'Spark AR', '8thWall', 'WebXR', 'Blender', 'ARKit', 'ARCore'],
    highlights: ['VR Training Simulations', 'AR Marketing Filters', 'WebAR Browser Integration'],
    startingPrice: '$12,000',
    timeline: '8-16 weeks',
    colorType: 'purple'
  }
];
