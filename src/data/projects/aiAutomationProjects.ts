
import { Project } from '../projects';

export const aiAutomationProjects: Project[] = [
  {
    id: 'document-processing-ai',
    title: 'SmartDoc AI Processor',
    client: 'Enterprise Solutions Inc',
    description: 'AI-powered document processing system that automates data extraction, classification, and workflow routing.',
    technologies: ['Python', 'TensorFlow', 'OpenAI GPT', 'AWS Lambda'],
    metrics: {
      'Processing Speed': '10x faster than manual',
      'Accuracy Rate': '99.2% accuracy',
      'Cost Reduction': '75% operational savings'
    },
    timeline: '10 weeks',
    team: '3 AI engineers',
    industry: 'Enterprise Automation',
    testimonial: 'SmartDoc has revolutionized our document processing workflow with incredible accuracy and speed.',
    clientLogo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'ai-automation',
    challenge: 'Automating complex document processing workflows while maintaining high accuracy and speed.',
    solution: 'Developed a custom AI pipeline using machine learning models for document classification and data extraction.',
    approach: [
      'Custom ML model training for document types',
      'OCR integration with intelligent text extraction',
      'Automated workflow routing and approval systems',
      'Real-time processing dashboard and analytics'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    detailedMetrics: [
      {
        label: 'Processing Speed',
        value: '10x faster',
        description: 'Automated processing vs manual document handling'
      },
      {
        label: 'Accuracy Rate',
        value: '99.2%',
        description: 'High precision in document classification and data extraction'
      }
    ],
    techStack: [
      {
        category: 'AI/ML',
        technologies: ['TensorFlow', 'OpenAI GPT', 'Computer Vision', 'NLP']
      },
      {
        category: 'Infrastructure',
        technologies: ['AWS Lambda', 'S3', 'API Gateway', 'DynamoDB']
      }
    ],
    features: [
      'Intelligent document classification',
      'Automated data extraction',
      'Workflow routing automation',
      'Real-time processing analytics'
    ],
    extendedTestimonial: {
      quote: 'The SmartDoc AI system has completely transformed our document processing capabilities. What used to take hours now happens in minutes with incredible accuracy.',
      author: 'Michael Rodriguez',
      position: 'Operations Director',
      company: 'Enterprise Solutions Inc'
    }
  }
];
