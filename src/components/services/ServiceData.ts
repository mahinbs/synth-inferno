
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
    id: 'immersive',
    label: 'AR/VR'
  },
  {
    id: 'cloud',
    label: 'Cloud'
  }
];

export const services: Service[] = [
  {
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Mobile App Development',
    category: 'mobile',
    intro: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    highlights: ['Cross-platform development for faster time-to-market', 'Native performance optimization', 'Offline-first architecture', 'Push notifications and real-time features', 'App Store optimization and deployment', 'Continuous integration and testing'],
    backgroundImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'game-dev',
    icon: Gamepad2,
    title: 'Game Development',
    category: 'immersive',
    intro: 'Immersive gaming experiences ranging from mobile games to complex multiplayer environments and interactive simulations.',
    technologies: ['Unity', 'Unreal Engine', 'WebGL', 'C#', 'C++', 'Photon', 'Mirror Networking'],
    highlights: ['Cross-platform game deployment', 'Multiplayer networking and matchmaking', '3D graphics and physics simulation', 'Monetization strategy implementation', 'Performance optimization for all devices', 'Live service and content management'],
    backgroundImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design',
    category: 'design',
    intro: 'Human-centered design that creates intuitive, accessible, and visually stunning digital experiences.',
    technologies: ['Figma', 'Adobe XD', 'Principle', 'Framer', 'Sketch', 'Zeplin'],
    highlights: ['User research and persona development', 'Information architecture and wireframing', 'Interactive prototyping and testing', 'Design system creation and maintenance', 'Accessibility and WCAG compliance', 'Cross-platform design consistency'],
    backgroundImage: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fullstack-web',
    icon: Code,
    title: 'Full Stack Web Development',
    category: 'web',
    intro: 'Scalable web applications built with modern frameworks and architectures for optimal performance and maintainability.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'MongoDB'],
    highlights: ['Server-side rendering and static generation', 'Progressive Web App (PWA) development', 'API design and microservices architecture', 'Database optimization and scaling', 'Real-time features with WebSockets', 'SEO optimization and performance tuning'],
    backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chatbot-ai',
    icon: MessageSquare,
    title: 'Chatbot & Conversational AI',
    category: 'ai',
    intro: 'Intelligent conversational interfaces powered by advanced NLP and machine learning for seamless human-AI interaction.',
    technologies: ['OpenAI GPT', 'LangChain', 'Rasa', 'Dialogflow', 'Azure Bot Framework', 'Hugging Face'],
    highlights: ['Natural language understanding and processing', 'Multi-language support and localization', 'Integration with existing CRM and databases', 'Voice AI and speech recognition', 'Sentiment analysis and context awareness', 'Continuous learning and improvement'],
    backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud Architecture & DevOps',
    category: 'cloud',
    intro: 'Robust cloud infrastructure and DevOps practices that ensure scalability, reliability, and efficient deployment cycles.',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    highlights: ['Auto-scaling and load balancing', 'CI/CD pipeline automation', 'Infrastructure as Code (IaC)', 'Monitoring and logging systems', 'Security and compliance implementation', 'Cost optimization and resource management'],
    backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-calling',
    icon: Phone,
    title: 'AI Calling Solutions',
    category: 'ai',
    intro: 'Advanced voice AI systems for automated calling, customer support, and sales automation with natural conversation flows.',
    technologies: ['Twilio', 'OpenAI Whisper', 'Azure Speech', 'Python', 'TensorFlow', 'WebRTC'],
    highlights: ['Natural voice synthesis and recognition', 'Real-time conversation analysis', 'CRM integration and lead qualification', 'Multi-language voice support', 'Call analytics and performance metrics', 'Compliance with telecom regulations'],
    backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'iot-dev',
    icon: Cpu,
    title: 'IoT Development',
    category: 'cloud',
    intro: 'Connected device solutions that bridge the physical and digital worlds through intelligent sensor networks and data analytics.',
    technologies: ['Arduino', 'ESP32', 'Raspberry Pi', 'MQTT', 'LoRaWAN', 'Azure IoT', 'AWS IoT Core'],
    highlights: ['Sensor network design and implementation', 'Real-time data collection and processing', 'Edge computing and local intelligence', 'Industrial IoT dashboard development', 'Predictive maintenance systems', 'Secure device communication protocols'],
    backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'Artificial Intelligence & Machine Learning',
    category: 'ai',
    intro: 'Custom AI solutions that transform data into actionable insights and automate complex decision-making processes.',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK', 'Apache Spark', 'MLflow'],
    highlights: ['Custom model development and training', 'Computer vision and image recognition', 'Natural language processing', 'Predictive analytics and forecasting', 'Recommendation systems', 'MLOps and model deployment pipelines'],
    backgroundImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ar-vr',
    icon: Camera,
    title: 'AR/VR Development',
    category: 'immersive',
    intro: 'Immersive augmented and virtual reality experiences that create new possibilities for training, entertainment, and visualization.',
    technologies: ['Unity', 'Unreal Engine', 'ARKit', 'ARCore', 'WebXR', 'Oculus SDK', 'HoloLens'],
    highlights: ['Cross-platform AR/VR applications', 'Spatial mapping and tracking', 'Hand gesture and eye tracking', 'Photorealistic rendering and lighting', 'Multi-user collaborative experiences', 'Performance optimization for VR headsets'],
    backgroundImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'data-analytics',
    icon: BarChart3,
    title: 'Data Analytics & Business Intelligence',
    category: 'ai',
    intro: 'Transform raw data into strategic insights with advanced analytics, visualization, and business intelligence solutions.',
    technologies: ['Tableau', 'Power BI', 'Apache Kafka', 'Elasticsearch', 'Python', 'R', 'Databricks'],
    highlights: ['Real-time dashboard development', 'Data warehouse design and optimization', 'ETL pipeline automation', 'Predictive modeling and forecasting', 'A/B testing and experimentation platforms', 'Custom reporting and visualization'],
    backgroundImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
