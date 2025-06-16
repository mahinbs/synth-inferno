
import { Project } from '../projects';

export const aiAutomationProjects: Project[] = [
  {
    id: 'invoice-processing-automation',
    title: 'AI-Powered Invoice Processing System',
    client: 'FinanceFlow Solutions',
    description: 'Intelligent document processing system that automates invoice extraction, validation, and approval workflows using computer vision and NLP.',
    technologies: ['Python', 'TensorFlow', 'OCR', 'NLP', 'AWS Lambda'],
    metrics: { accuracy: '98%', processing: '-85%', cost: '-60%', approval: '2x faster' },
    timeline: '14 weeks',
    team: '5 AI engineers',
    industry: 'Financial Services',
    testimonial: 'Revolutionized our accounts payable process. Processing time went from hours to minutes.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'ai-automation',
    liveUrl: 'https://financeflow-ai.herokuapp.com',
    challenge: 'FinanceFlow Solutions was manually processing thousands of invoices daily, leading to errors, delays, and high operational costs. They needed an intelligent system to automate the entire invoice lifecycle.',
    solution: 'We developed an AI-powered system that automatically extracts data from invoices, validates information against purchase orders, routes for approval, and integrates with their existing ERP system.',
    approach: [
      'Analyzed existing invoice processing workflows and pain points',
      'Trained custom OCR models for various invoice formats',
      'Developed NLP algorithms for data extraction and validation',
      'Built intelligent routing and approval workflow engine',
      'Integrated with existing ERP and accounting systems',
      'Implemented real-time monitoring and exception handling'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Extraction Accuracy', value: '98%', description: 'Accuracy rate for automated data extraction from invoices' },
      { label: 'Processing Time', value: '-85%', description: 'Reduction in invoice processing time' },
      { label: 'Cost Savings', value: '-60%', description: 'Reduction in operational processing costs' },
      { label: 'Approval Speed', value: '2x faster', description: 'Improvement in approval workflow speed' }
    ],
    techStack: [
      { category: 'AI/ML', technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'Tesseract OCR'] },
      { category: 'Backend', technologies: ['Python', 'FastAPI', 'Celery', 'Redis'] },
      { category: 'Cloud', technologies: ['AWS Lambda', 'S3', 'SQS', 'RDS'] },
      { category: 'Integration', technologies: ['REST APIs', 'Webhooks', 'SAP Integration', 'QuickBooks API'] }
    ],
    features: [
      'Intelligent document scanning and OCR',
      'Automated data extraction and validation',
      'Smart approval routing workflows',
      'Exception handling and manual review queue',
      'Real-time processing status tracking',
      'ERP system integration',
      'Audit trail and compliance reporting',
      'Machine learning model continuous improvement'
    ],
    extendedTestimonial: {
      quote: 'This AI system has completely transformed our accounts payable department. What used to take our team hours now happens automatically in minutes, with higher accuracy than manual processing.',
      author: 'Amanda Rodriguez',
      position: 'Chief Financial Officer',
      company: 'FinanceFlow Solutions'
    }
  },
  {
    id: 'customer-support-automation',
    title: 'Intelligent Customer Support Automation',
    client: 'TechSupport Plus',
    description: 'AI-powered customer support system with chatbots, ticket routing, sentiment analysis, and automated resolution for common issues.',
    technologies: ['OpenAI GPT', 'LangChain', 'Rasa', 'MongoDB', 'React'],
    metrics: { resolution: '75%', satisfaction: '+40%', response: '-90%', cost: '-50%' },
    timeline: '16 weeks',
    team: '6 AI specialists',
    industry: 'Technology',
    testimonial: 'Customer satisfaction improved dramatically while reducing our support costs by half.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'ai-automation',
    liveUrl: 'https://techsupport-ai.vercel.app',
    challenge: 'TechSupport Plus was overwhelmed with repetitive customer inquiries, long response times, and inconsistent support quality. They needed an intelligent system to handle routine queries while escalating complex issues to human agents.',
    solution: 'We built a comprehensive AI customer support system featuring intelligent chatbots, automated ticket classification, sentiment analysis, and knowledge base integration to provide instant, accurate responses.',
    approach: [
      'Analyzed historical support tickets to identify common patterns',
      'Developed custom NLP models for intent recognition and entity extraction',
      'Built conversational AI system with context awareness',
      'Implemented intelligent escalation rules and human handoff',
      'Created comprehensive knowledge base with automated updates',
      'Integrated with existing CRM and helpdesk systems'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Auto Resolution', value: '75%', description: 'Percentage of tickets resolved automatically without human intervention' },
      { label: 'Satisfaction Score', value: '+40%', description: 'Improvement in customer satisfaction ratings' },
      { label: 'Response Time', value: '-90%', description: 'Reduction in average first response time' },
      { label: 'Cost Reduction', value: '-50%', description: 'Reduction in overall customer support operational costs' }
    ],
    techStack: [
      { category: 'AI/NLP', technologies: ['OpenAI GPT-4', 'LangChain', 'Rasa', 'spaCy'] },
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Socket.io', 'Tailwind CSS'] },
      { category: 'Backend', technologies: ['Node.js', 'Express', 'MongoDB', 'Redis'] },
      { category: 'Analytics', technologies: ['Elasticsearch', 'Kibana', 'Prometheus', 'Grafana'] }
    ],
    features: [
      'Intelligent conversational AI chatbot',
      'Automated ticket classification and routing',
      'Real-time sentiment analysis and escalation',
      'Dynamic knowledge base with auto-updates',
      'Multi-channel support (web, email, chat)',
      'Human agent collaboration tools',
      'Performance analytics and insights',
      'Continuous learning and model improvement'
    ],
    extendedTestimonial: {
      quote: 'The AI support system has been a game-changer for our customer service operations. Our customers get instant, accurate help 24/7, and our human agents can focus on complex issues that truly need their expertise.',
      author: 'David Kim',
      position: 'Head of Customer Success',
      company: 'TechSupport Plus'
    }
  }
];
