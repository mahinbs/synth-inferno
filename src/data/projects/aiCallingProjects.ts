import { Project } from '../projects';

export const aiCallingProjects: Project[] = [
  {
    id: 'leadgen',
    title: 'LeadGen AI System',
    client: 'SalesForce Pro',
    description: 'Intelligent lead generation system with natural conversation AI and CRM integration.',
    technologies: ['OpenAI', 'Twilio', 'Python', 'CRM APIs', 'NLP'],
    metrics: { leads: '+300%', conversion: '+85%', cost: '-60%', calls: '10K+ daily' },
    timeline: '10 weeks',
    team: '4 developers',
    industry: 'Sales & Marketing',
    testimonial: 'Game-changer for our sales team. The AI calls are indistinguishable from human agents.',
    clientLogo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
    serviceId: 'ai-calling',
    liveUrl: 'https://leadgen-ai-demo.vercel.app',
    challenge: 'SalesForce Pro needed to scale their lead generation efforts but faced high costs and inconsistent quality with human agents. They required a solution that could make thousands of calls daily while maintaining natural, engaging conversations.',
    solution: 'We developed an AI-powered calling system that uses advanced natural language processing to conduct human-like conversations, qualify leads, and seamlessly integrate with their existing CRM workflow.',
    approach: [
      'Trained custom AI models on successful sales conversations',
      'Implemented natural language understanding and generation',
      'Built seamless CRM integration for lead management',
      'Created conversation flow optimization system',
      'Developed real-time sentiment analysis',
      'Implemented quality monitoring and improvement loops'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1553775282-20af80779df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Lead Generation', value: '+300%', description: 'Increase in qualified leads generated monthly' },
      { label: 'Conversion Rate', value: '+85%', description: 'Improvement in lead-to-customer conversion' },
      { label: 'Cost Reduction', value: '-60%', description: 'Lower cost per lead compared to human agents' },
      { label: 'Daily Call Volume', value: '10K+', description: 'AI-powered calls handled daily' }
    ],
    techStack: [
      { category: 'AI/ML', technologies: ['OpenAI GPT-4', 'Custom NLP Models', 'TensorFlow', 'Sentiment Analysis'] },
      { category: 'Communication', technologies: ['Twilio Voice API', 'Speech-to-Text', 'Text-to-Speech', 'WebRTC'] },
      { category: 'Backend', technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'] },
      { category: 'Integration', technologies: ['Salesforce API', 'HubSpot API', 'Zapier', 'Webhooks'] }
    ],
    features: [
      'Natural conversation AI',
      'Real-time sentiment analysis',
      'CRM auto-integration',
      'Call quality monitoring',
      'Lead scoring and qualification',
      'Multi-language support',
      'Voice synthesis and recognition',
      'Performance analytics dashboard'
    ],
    extendedTestimonial: {
      quote: 'The LeadGen AI system has completely transformed our sales process. Our team can now focus on closing qualified leads while the AI handles the initial outreach. The conversations are so natural that prospects often don\'t realize they\'re talking to an AI.',
      author: 'Robert Thompson',
      position: 'VP of Sales',
      company: 'SalesForce Pro'
    }
  }
];
