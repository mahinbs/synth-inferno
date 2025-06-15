
import { Project } from '../projects';

export const salesForceProjects: Project[] = [
  {
    id: 'enterprise-crm-setup',
    title: 'Enterprise CRM Platform',
    client: 'TechCorp Solutions',
    description: 'Complete Salesforce implementation with automated lead tracking, pipeline management, and custom reporting dashboards.',
    technologies: ['Salesforce', 'Apex', 'Lightning', 'Pardot'],
    metrics: {
      'Lead Conversion': '45% increase',
      'Sales Efficiency': '60% faster pipeline',
      'Data Accuracy': '95% clean data'
    },
    timeline: '8 weeks',
    team: '3 Salesforce specialists',
    industry: 'Enterprise Sales',
    testimonial: 'Our sales team productivity increased dramatically with the new CRM setup.',
    clientLogo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'sales-force',
    challenge: 'Implementing a scalable CRM system that could handle complex sales processes and integrate with existing tools.',
    solution: 'Custom Salesforce platform with automated workflows, lead scoring, and comprehensive reporting.',
    approach: [
      'Salesforce platform configuration and customization',
      'Automated lead capture and qualification systems',
      'Custom dashboard and reporting setup',
      'Integration with existing marketing and support tools'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    detailedMetrics: [
      {
        label: 'Lead Conversion Rate',
        value: '45%',
        description: 'Increase in qualified leads converting to opportunities'
      },
      {
        label: 'Sales Cycle Speed',
        value: '60%',
        description: 'Faster pipeline progression with automated workflows'
      }
    ],
    techStack: [
      {
        category: 'CRM Platform',
        technologies: ['Salesforce', 'Lightning Platform', 'Apex', 'SOQL']
      },
      {
        category: 'Automation',
        technologies: ['Pardot', 'Process Builder', 'Flow', 'Workflow Rules']
      }
    ],
    features: [
      'Automated lead scoring and routing',
      'Custom sales pipeline management',
      'Real-time reporting and analytics',
      'Marketing automation integration'
    ],
    extendedTestimonial: {
      quote: 'The Salesforce implementation has transformed our sales process. Lead management is now seamless, and our team can focus on what they do best - closing deals.',
      author: 'Jennifer Martinez',
      position: 'VP of Sales',
      company: 'TechCorp Solutions'
    }
  }
];
