import { useLocation } from 'react-router-dom';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
}

export const useSEO = (config: SEOConfig = {}) => {
  const location = useLocation();
  const baseUrl = 'https://www.deeceelabs.com';
  
  // Generate canonical URL
  const canonical = config.canonical || location.pathname;
  const fullCanonical = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;
  
  // Default values
  const defaultTitle = 'Synth Inferno - Engineering the Future Today';
  const defaultDescription = 'Transform your business with cutting-edge AI solutions, mobile apps, web development, and immersive AR/VR experiences. Expert development team specializing in full-stack solutions.';
  const defaultKeywords = 'AI development, machine learning, mobile app development, web development, AR VR development, chatbot development, cloud architecture, IoT solutions';
  
  return {
    title: config.title || defaultTitle,
    description: config.description || defaultDescription,
    keywords: config.keywords || defaultKeywords,
    canonical: fullCanonical,
    ogImage: config.ogImage || 'https://res.cloudinary.com/dtq6gshzf/image/upload/v1755595529/synthinferno-logo_socawa.png',
    ogType: config.ogType || 'website',
    noIndex: config.noIndex || false,
    structuredData: config.structuredData
  };
};

// Predefined SEO configurations for different page types
export const seoConfigs = {
  home: {
    title: 'Synth Inferno - Engineering the Future Today | AI, Web, Mobile & AR/VR Development',
    description: 'Transform your business with cutting-edge AI solutions, mobile apps, web development, and immersive AR/VR experiences. Expert development team specializing in full-stack solutions.',
    keywords: 'AI development, machine learning, mobile app development, web development, AR VR development, chatbot development, cloud architecture, IoT solutions, SaaS development, React development, TypeScript, Node.js'
  },
  
  webApps: {
    title: 'Web Application Development Services | Custom Web Apps & Full-Stack Solutions',
    description: 'Transform your business with cutting-edge web applications. Expert full-stack development using React, Node.js, TypeScript. Scalable, secure, and user-friendly web solutions.',
    keywords: 'web application development, full-stack development, React development, Node.js, TypeScript, web app development, custom web applications, progressive web apps, web development services'
  },
  
  mobileApps: {
    title: 'Mobile App Development Services | iOS & Android App Development',
    description: 'Create powerful mobile applications for iOS and Android. Expert mobile app development with React Native, Flutter, and native technologies. User-centric design and seamless performance.',
    keywords: 'mobile app development, iOS app development, Android app development, React Native, Flutter, mobile app design, app store optimization, cross-platform development'
  },
  
  saas: {
    title: 'SaaS Development Services | Custom SaaS Solutions & Cloud Applications',
    description: 'Build scalable SaaS applications with modern cloud technologies. Expert SaaS development including multi-tenancy, subscription management, and cloud infrastructure.',
    keywords: 'SaaS development, cloud applications, multi-tenant applications, subscription management, cloud infrastructure, scalable web applications, software as a service'
  },
  
  aiCalling: {
    title: 'AI Calling Solutions | Intelligent Voice Automation & AI Phone Systems',
    description: 'Revolutionize customer communication with AI-powered calling solutions. Automated voice systems, intelligent call routing, and AI-driven customer service.',
    keywords: 'AI calling, voice automation, AI phone systems, intelligent call routing, automated customer service, voice AI, conversational AI, call center automation'
  },
  
  aiAutomation: {
    title: 'AI Automation Services | Intelligent Process Automation & AI Solutions',
    description: 'Streamline business operations with AI automation. Intelligent process automation, workflow optimization, and AI-powered business solutions.',
    keywords: 'AI automation, process automation, intelligent automation, workflow optimization, AI business solutions, robotic process automation, smart automation'
  },
  
  arVr: {
    title: 'AR/VR Development Services | Immersive Experiences & Virtual Reality Solutions',
    description: 'Create immersive AR/VR experiences for business and entertainment. Expert AR/VR development with Unity, Unreal Engine, and cutting-edge technologies.',
    keywords: 'AR development, VR development, augmented reality, virtual reality, immersive experiences, Unity development, Unreal Engine, AR/VR solutions, mixed reality'
  },
  
  iot: {
    title: 'IoT Development Services | Internet of Things Solutions & Smart Device Development',
    description: 'Connect and automate with IoT solutions. Expert IoT development for smart devices, sensor networks, and connected systems.',
    keywords: 'IoT development, internet of things, smart devices, sensor networks, connected systems, IoT solutions, embedded systems, IoT architecture'
  },
  
  gameDevelopment: {
    title: 'Game Development Services | Custom Game Development & Interactive Experiences',
    description: 'Create engaging games and interactive experiences. Expert game development with Unity, Unreal Engine, and modern game technologies.',
    keywords: 'game development, Unity development, Unreal Engine, game design, interactive experiences, mobile games, web games, game programming'
  },
  
  uiUxDesign: {
    title: 'UI/UX Design Services | User Experience Design & Interface Design',
    description: 'Create exceptional user experiences with expert UI/UX design. User-centered design, interface design, and usability optimization.',
    keywords: 'UI design, UX design, user experience design, interface design, usability design, user interface, user research, design thinking'
  },
  
  chatbotDevelopment: {
    title: 'Chatbot Development Services | AI Chatbots & Conversational AI Solutions',
    description: 'Build intelligent chatbots and conversational AI solutions. Expert chatbot development with natural language processing and AI integration.',
    keywords: 'chatbot development, conversational AI, AI chatbots, natural language processing, customer service automation, intelligent assistants, chatbot solutions'
  },
  
  portfolio: {
    title: 'Our Portfolio | Web Development, Mobile Apps & AI Solutions Showcase',
    description: 'Explore our portfolio of successful projects. Web applications, mobile apps, AI solutions, and innovative technology implementations.',
    keywords: 'portfolio, web development projects, mobile app projects, AI solutions, case studies, project showcase, development examples'
  },
  
  products: {
    title: 'Our Products | AI Solutions & Technology Products',
    description: 'Discover our innovative products and AI solutions. Speaksify and other cutting-edge technology products designed to transform businesses.',
    keywords: 'products, AI products, technology solutions, Speaksify, software products, AI tools, business solutions'
  },
  
  blogs: {
    title: 'Technology Blog | AI, Web Development & Tech Insights',
    description: 'Stay updated with the latest in technology, AI, web development, and industry insights. Expert articles and technical guides.',
    keywords: 'technology blog, AI blog, web development blog, tech insights, programming articles, technology trends, development guides'
  },
  
  reviews: {
    title: 'Client Reviews & Testimonials | What Our Clients Say',
    description: 'Read reviews and testimonials from our satisfied clients. Discover why businesses choose Synth Inferno for their technology needs.',
    keywords: 'client reviews, testimonials, customer feedback, client success stories, business reviews, service reviews'
  },
  
  privacyPolicy: {
    title: 'Privacy Policy | Data Protection & Privacy Information',
    description: 'Learn about our privacy policy and how we protect your data. Comprehensive information about data collection, usage, and protection.',
    keywords: 'privacy policy, data protection, privacy information, data security, GDPR compliance, privacy rights'
  }
};
