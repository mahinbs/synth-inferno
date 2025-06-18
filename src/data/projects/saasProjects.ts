import { Project } from '../projects';

export const saasProjects: Project[] = [
  {
    id: 'projectflow',
    title: 'ProjectFlow Management Platform',
    client: 'TechCorp Solutions',
    description: 'Enterprise project management with real-time collaboration and advanced analytics.',
    technologies: ['React', 'AWS', 'Redis', 'WebSocket', 'GraphQL'],
    metrics: { productivity: '+75%', teams: '200+', projects: '5K+', time: '-50%' },
    timeline: '20 weeks',
    team: '8 developers',
    industry: 'Technology',
    testimonial: 'Transformed how our teams collaborate. Best investment we\'ve made in years.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    serviceId: 'saas',
    liveUrl: 'https://projectflow-demo.vercel.app',
    challenge: 'TechCorp Solutions was struggling with project visibility, team coordination, and resource allocation across multiple departments. Their existing tools were fragmented, leading to miscommunication and missed deadlines.',
    solution: 'We created a comprehensive project management platform that centralizes all project activities, provides real-time collaboration tools, and offers advanced analytics for better decision-making.',
    approach: [
      'Analyzed existing workflow patterns and pain points',
      'Designed intuitive dashboards for different user roles',
      'Implemented real-time collaboration features',
      'Built advanced reporting and analytics engine',
      'Created automated workflow and notification system',
      'Integrated with existing enterprise tools'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Team Productivity', value: '+75%', description: 'Measured improvement in task completion rates' },
      { label: 'Active Teams', value: '200+', description: 'Teams actively using the platform daily' },
      { label: 'Projects Managed', value: '5K+', description: 'Total projects successfully managed' },
      { label: 'Time Savings', value: '-50%', description: 'Reduction in project planning and coordination time' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React', 'Redux Toolkit', 'TypeScript', 'Ant Design'] },
      { category: 'Backend', technologies: ['Node.js', 'GraphQL', 'AWS Lambda', 'DynamoDB'] },
      { category: 'Real-time', technologies: ['WebSocket', 'Redis', 'Socket.io', 'AWS ElastiCache'] },
      { category: 'Analytics', technologies: ['D3.js', 'Chart.js', 'AWS QuickSight', 'ElasticSearch'] }
    ],
    features: [
      'Real-time project dashboards',
      'Team collaboration tools',
      'Advanced analytics and reporting',
      'Resource allocation management',
      'Automated workflow engine',
      'Time tracking and billing',
      'Custom project templates',
      'Mobile app support'
    ],
    extendedTestimonial: {
      quote: 'ProjectFlow has been a game-changer for our organization. We\'ve seen dramatic improvements in project delivery times and team satisfaction. The real-time collaboration features have made remote work seamless, and the analytics help us make data-driven decisions.',
      author: 'Jennifer Martinez',
      position: 'Director of Operations',
      company: 'TechCorp Solutions'
    }
  }
];
