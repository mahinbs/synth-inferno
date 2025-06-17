
import { Project } from '../projects';

export const webAppsProjects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform with Real-time Analytics',
    client: 'RetailTech Solutions',
    description: 'Modern e-commerce platform with real-time inventory, AI recommendations, and comprehensive analytics dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket'],
    metrics: { sales: '+250%', users: '50K+', performance: '99.9%', conversion: '+180%' },
    timeline: '16 weeks',
    team: '7 developers',
    industry: 'E-commerce',
    testimonial: 'Exceeded expectations. Sales increased by 250% within the first quarter.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    serviceId: 'web-apps',
    liveUrl: 'https://retailtech-demo.vercel.app',
    challenge: 'RetailTech Solutions needed a modern e-commerce platform that could handle high traffic, provide real-time inventory updates, and offer personalized shopping experiences.',
    solution: 'We built a scalable e-commerce platform with microservices architecture, real-time analytics, AI-powered recommendations, and advanced inventory management.',
    approach: [
      'Analyzed market requirements and user behavior patterns',
      'Designed scalable microservices architecture',
      'Implemented real-time inventory and order tracking',
      'Built AI recommendation engine for personalized shopping',
      'Integrated multiple payment gateways and shipping providers',
      'Created comprehensive admin dashboard with analytics'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop'
    ],
    detailedMetrics: [
      { label: 'Sales Increase', value: '+250%', description: 'Year-over-year sales growth after platform launch' },
      { label: 'Active Users', value: '50K+', description: 'Monthly active users on the platform' },
      { label: 'Uptime', value: '99.9%', description: 'Platform availability and performance reliability' },
      { label: 'Conversion Rate', value: '+180%', description: 'Improvement in visitor-to-customer conversion' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
      { category: 'Backend', technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
      { category: 'Real-time', technologies: ['WebSocket', 'Socket.io', 'Redis Pub/Sub', 'Server-Sent Events'] },
      { category: 'Analytics', technologies: ['Google Analytics', 'Mixpanel', 'Custom Analytics Engine', 'D3.js'] }
    ],
    features: [
      'Real-time inventory management',
      'AI-powered product recommendations',
      'Advanced search and filtering',
      'Multi-vendor marketplace support',
      'Comprehensive analytics dashboard',
      'Mobile-responsive design',
      'Multiple payment gateway integration',
      'Order tracking and notifications'
    ],
    extendedTestimonial: {
      quote: 'The e-commerce platform has transformed our business completely. The real-time features and AI recommendations have significantly improved customer engagement and sales conversion rates.',
      author: 'Michael Chen',
      position: 'CEO',
      company: 'RetailTech Solutions'
    }
  },
  {
    id: 'learning-management-system',
    title: 'Advanced Learning Management System',
    client: 'EduTech Academy',
    description: 'Comprehensive LMS with interactive courses, video streaming, progress tracking, and collaborative learning features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'WebRTC'],
    metrics: { students: '25K+', engagement: '+320%', completion: '92%', satisfaction: '4.9/5' },
    timeline: '20 weeks',
    team: '9 developers',
    industry: 'Education',
    testimonial: 'Revolutionary learning platform. Student engagement and completion rates have never been higher.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
    serviceId: 'web-apps',
    liveUrl: 'https://edutech-lms.herokuapp.com',
    challenge: 'EduTech Academy needed a modern LMS that could support interactive learning, video streaming, real-time collaboration, and detailed progress tracking for thousands of students.',
    solution: 'We developed a comprehensive learning management system with video streaming capabilities, interactive assignments, real-time collaboration tools, and advanced analytics.',
    approach: [
      'Researched modern learning methodologies and user experience patterns',
      'Designed scalable architecture for video content delivery',
      'Implemented interactive course creation tools for instructors',
      'Built real-time collaboration features and discussion forums',
      'Created comprehensive progress tracking and analytics system',
      'Integrated with popular educational tools and platforms'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop'
    ],
    detailedMetrics: [
      { label: 'Active Students', value: '25K+', description: 'Students actively using the platform monthly' },
      { label: 'Engagement Rate', value: '+320%', description: 'Increase in student engagement with course materials' },
      { label: 'Completion Rate', value: '92%', description: 'Course completion rate across all programs' },
      { label: 'Satisfaction Score', value: '4.9/5', description: 'Average student satisfaction rating' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Redux', 'Material-UI'] },
      { category: 'Backend', technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose'] },
      { category: 'Video', technologies: ['WebRTC', 'AWS CloudFront', 'FFmpeg', 'HLS Streaming'] },
      { category: 'Real-time', technologies: ['Socket.io', 'Redis', 'WebSocket', 'Live Chat'] }
    ],
    features: [
      'Interactive video-based courses',
      'Real-time collaboration and discussion forums',
      'Advanced progress tracking and analytics',
      'Assignment submission and grading system',
      'Live streaming and webinar capabilities',
      'Mobile-responsive learning interface',
      'Certification and badge system',
      'Integration with external educational tools'
    ],
    extendedTestimonial: {
      quote: 'This LMS has revolutionized how we deliver education. The interactive features and seamless video streaming have created an engaging learning environment that our students love.',
      author: 'Dr. Sarah Williams',
      position: 'Director of Digital Learning',
      company: 'EduTech Academy'
    }
  },
  {
    id: 'healthcare-management-portal',
    title: 'Healthcare Management Portal',
    client: 'MedCare Solutions',
    description: 'Comprehensive healthcare management system with patient records, appointment scheduling, telemedicine, and billing integration.',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'WebRTC'],
    metrics: { patients: '15K+', efficiency: '+200%', satisfaction: '96%', cost: '-40%' },
    timeline: '24 weeks',
    team: '10 developers',
    industry: 'Healthcare',
    testimonial: 'Streamlined our entire healthcare workflow. Patient satisfaction and operational efficiency improved dramatically.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop',
    serviceId: 'web-apps',
    liveUrl: 'https://medcare-portal.herokuapp.com',
    challenge: 'MedCare Solutions needed a comprehensive healthcare management system that could handle patient records, appointment scheduling, telemedicine consultations, and billing while maintaining HIPAA compliance.',
    solution: 'We developed a secure, HIPAA-compliant healthcare portal with electronic health records, telemedicine capabilities, appointment management, and integrated billing systems.',
    approach: [
      'Conducted healthcare workflow analysis and compliance research',
      'Designed HIPAA-compliant architecture with end-to-end encryption',
      'Implemented electronic health records system with audit trails',
      'Built telemedicine platform with video consultation capabilities',
      'Created automated appointment scheduling and reminder system',
      'Integrated with existing billing and insurance systems'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&auto=format&fit=crop'
    ],
    detailedMetrics: [
      { label: 'Patient Records', value: '15K+', description: 'Patient records managed in the system' },
      { label: 'Efficiency Gain', value: '+200%', description: 'Improvement in administrative efficiency' },
      { label: 'Patient Satisfaction', value: '96%', description: 'Patient satisfaction with digital services' },
      { label: 'Cost Reduction', value: '-40%', description: 'Reduction in administrative overhead costs' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Redux', 'Ant Design'] },
      { category: 'Backend', technologies: ['Python', 'Django', 'PostgreSQL', 'Celery'] },
      { category: 'Security', technologies: ['OAuth 2.0', 'JWT', 'AES Encryption', 'HIPAA Compliance'] },
      { category: 'Telemedicine', technologies: ['WebRTC', 'Socket.io', 'Video.js', 'Screen Sharing'] }
    ],
    features: [
      'Electronic Health Records (EHR) system',
      'Telemedicine video consultations',
      'Appointment scheduling and management',
      'Patient portal with secure messaging',
      'Billing and insurance integration',
      'Prescription management system',
      'Medical imaging and document storage',
      'Compliance reporting and audit trails'
    ],
    extendedTestimonial: {
      quote: 'The healthcare portal has transformed how we deliver patient care. From appointment scheduling to telemedicine consultations, everything is seamlessly integrated and secure.',
      author: 'Dr. Robert Johnson',
      position: 'Chief Medical Officer',
      company: 'MedCare Solutions'
    }
  }
];
