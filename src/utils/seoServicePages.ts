import { generateServiceSchema } from '@/components/seo/StructuredData';

export interface ServicePageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
}

export const servicePageSEOConfigs: Record<string, ServicePageSEO> = {
  'ai-calling': {
    title: 'AI Calling Solutions | Intelligent Voice Automation & AI Phone Systems',
    description: 'Revolutionize customer communication with AI-powered calling solutions. Automated voice systems, intelligent call routing, and AI-driven customer service.',
    keywords: 'AI calling, voice automation, AI phone systems, intelligent call routing, automated customer service, voice AI, conversational AI, call center automation',
    canonical: '/ai-calling',
    serviceName: 'AI Calling Solutions',
    serviceDescription: 'Revolutionize customer communication with AI-powered calling solutions. Automated voice systems, intelligent call routing, and AI-driven customer service.',
    serviceType: 'AI Calling Services'
  },
  'ai-automation': {
    title: 'AI Automation Services | Intelligent Process Automation & AI Solutions',
    description: 'Streamline business operations with AI automation. Intelligent process automation, workflow optimization, and AI-powered business solutions.',
    keywords: 'AI automation, process automation, intelligent automation, workflow optimization, AI business solutions, robotic process automation, smart automation',
    canonical: '/ai-automation',
    serviceName: 'AI Automation Services',
    serviceDescription: 'Streamline business operations with AI automation. Intelligent process automation, workflow optimization, and AI-powered business solutions.',
    serviceType: 'AI Automation'
  },
  'ar-vr-development': {
    title: 'AR/VR Development Services | Immersive Experiences & Virtual Reality Solutions',
    description: 'Create immersive AR/VR experiences for business and entertainment. Expert AR/VR development with Unity, Unreal Engine, and cutting-edge technologies.',
    keywords: 'AR development, VR development, augmented reality, virtual reality, immersive experiences, Unity development, Unreal Engine, AR/VR solutions, mixed reality',
    canonical: '/ar-vr-development',
    serviceName: 'AR/VR Development',
    serviceDescription: 'Create immersive AR/VR experiences for business and entertainment. Expert AR/VR development with Unity, Unreal Engine, and cutting-edge technologies.',
    serviceType: 'AR/VR Development'
  },
  'iot': {
    title: 'IoT Development Services | Internet of Things Solutions & Smart Device Development',
    description: 'Connect and automate with IoT solutions. Expert IoT development for smart devices, sensor networks, and connected systems.',
    keywords: 'IoT development, internet of things, smart devices, sensor networks, connected systems, IoT solutions, embedded systems, IoT architecture',
    canonical: '/iot',
    serviceName: 'IoT Development',
    serviceDescription: 'Connect and automate with IoT solutions. Expert IoT development for smart devices, sensor networks, and connected systems.',
    serviceType: 'IoT Development'
  },
  'game-development': {
    title: 'Game Development Services | Custom Game Development & Interactive Experiences',
    description: 'Create engaging games and interactive experiences. Expert game development with Unity, Unreal Engine, and modern game technologies.',
    keywords: 'game development, Unity development, Unreal Engine, game design, interactive experiences, mobile games, web games, game programming',
    canonical: '/game-development',
    serviceName: 'Game Development',
    serviceDescription: 'Create engaging games and interactive experiences. Expert game development with Unity, Unreal Engine, and modern game technologies.',
    serviceType: 'Game Development'
  },
  'ui-ux-design': {
    title: 'UI/UX Design Services | User Experience Design & Interface Design',
    description: 'Create exceptional user experiences with expert UI/UX design. User-centered design, interface design, and usability optimization.',
    keywords: 'UI design, UX design, user experience design, interface design, usability design, user interface, user research, design thinking',
    canonical: '/ui-ux-design',
    serviceName: 'UI/UX Design',
    serviceDescription: 'Create exceptional user experiences with expert UI/UX design. User-centered design, interface design, and usability optimization.',
    serviceType: 'UI/UX Design'
  },
  'chatbot-development': {
    title: 'Chatbot Development Services | AI Chatbots & Conversational AI Solutions',
    description: 'Build intelligent chatbots and conversational AI solutions. Expert chatbot development with natural language processing and AI integration.',
    keywords: 'chatbot development, conversational AI, AI chatbots, natural language processing, customer service automation, intelligent assistants, chatbot solutions',
    canonical: '/chatbot-development',
    serviceName: 'Chatbot Development',
    serviceDescription: 'Build intelligent chatbots and conversational AI solutions. Expert chatbot development with natural language processing and AI integration.',
    serviceType: 'Chatbot Development'
  },
  'sales-force': {
    title: 'Salesforce Development Services | Custom Salesforce Solutions & CRM Development',
    description: 'Maximize your Salesforce investment with custom development. Expert Salesforce solutions, CRM customization, and business process automation.',
    keywords: 'Salesforce development, CRM development, Salesforce customization, business process automation, Salesforce integration, CRM solutions',
    canonical: '/sales-force',
    serviceName: 'Salesforce Development',
    serviceDescription: 'Maximize your Salesforce investment with custom development. Expert Salesforce solutions, CRM customization, and business process automation.',
    serviceType: 'Salesforce Development'
  }
};

export const getServicePageSEO = (serviceKey: string): ServicePageSEO => {
  return servicePageSEOConfigs[serviceKey] || {
    title: 'Professional Development Services | Synth Inferno',
    description: 'Expert development services for your business needs. Professional solutions with cutting-edge technology.',
    keywords: 'development services, professional development, business solutions, technology services',
    canonical: `/${serviceKey}`,
    serviceName: 'Development Services',
    serviceDescription: 'Expert development services for your business needs.',
    serviceType: 'Development Services'
  };
};

export const generateServicePageStructuredData = (serviceKey: string) => {
  const seoConfig = getServicePageSEO(serviceKey);
  
  return generateServiceSchema({
    name: seoConfig.serviceName,
    description: seoConfig.serviceDescription,
    provider: {
      name: 'Synth Inferno',
      url: 'https://www.deeceelabs.com'
    },
    areaServed: 'Worldwide',
    serviceType: seoConfig.serviceType,
    url: `https://www.deeceelabs.com${seoConfig.canonical}`
  });
};
