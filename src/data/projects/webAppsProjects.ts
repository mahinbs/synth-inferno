
import { Project } from '../projects';

export const webAppsProjects: Project[] = [
  {
    id: 'retailmax',
    title: 'RetailMax E-commerce Platform',
    client: 'RetailMax Inc.',
    description: 'Complete e-commerce solution with advanced inventory management and AI-powered recommendations.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    metrics: { revenue: '+250%', conversion: '+45%', users: '50K+', sales: '$2.5M' },
    timeline: '12 weeks',
    team: '5 developers',
    industry: 'E-commerce',
    testimonial: 'The platform exceeded our expectations. Sales increased dramatically within the first month.',
    clientLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'web-apps',
    liveUrl: 'https://retailmax-demo.vercel.app',
    challenge: 'RetailMax was struggling with an outdated e-commerce platform that couldn\'t handle their growing customer base and complex inventory needs. Their conversion rates were low, and they were losing sales due to poor user experience and slow loading times.',
    solution: 'We built a modern, scalable e-commerce platform from the ground up with AI-powered product recommendations, real-time inventory tracking, and a seamless checkout process that significantly improved user experience.',
    approach: [
      'Conducted comprehensive UX research and customer journey mapping',
      'Designed a responsive, mobile-first interface with intuitive navigation',
      'Implemented AI-powered recommendation engine using machine learning',
      'Built robust inventory management system with real-time updates',
      'Integrated secure payment processing with multiple payment options',
      'Deployed on scalable cloud infrastructure with CDN optimization'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Revenue Growth', value: '+250%', description: 'Increased monthly revenue from $500K to $1.75M' },
      { label: 'Conversion Rate', value: '+45%', description: 'Improved from 2.1% to 3.7% conversion rate' },
      { label: 'Page Load Speed', value: '75% faster', description: 'Reduced average page load time from 4.2s to 1.1s' },
      { label: 'Customer Satisfaction', value: '96%', description: 'Post-launch customer satisfaction score' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Query'] },
      { category: 'Backend', technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
      { category: 'Payment', technologies: ['Stripe', 'PayPal', 'Apple Pay', 'Google Pay'] },
      { category: 'Infrastructure', technologies: ['AWS', 'CloudFront', 'S3', 'Docker'] }
    ],
    features: [
      'AI-powered product recommendations',
      'Real-time inventory management',
      'Multi-currency support',
      'Advanced search and filtering',
      'Wishlist and favorites',
      'Order tracking and notifications',
      'Admin dashboard with analytics',
      'Mobile-responsive design'
    ],
    extendedTestimonial: {
      quote: 'Working with this team was exceptional. They didn\'t just build us a website - they created a complete digital transformation for our business. The results speak for themselves: our revenue has more than doubled, and our customers love the new experience.',
      author: 'Sarah Johnson',
      position: 'CEO',
      company: 'RetailMax Inc.'
    }
  },
  {
    id: 'medcare',
    title: 'MedCare Healthcare Portal',
    client: 'MedCare Systems',
    description: 'Patient management system with telemedicine capabilities and secure data handling.',
    technologies: ['React', 'TypeScript', 'Firebase', 'WebRTC', 'Socket.io'],
    metrics: { efficiency: '+60%', satisfaction: '95%', appointments: '10K+', cost: '-40%' },
    timeline: '16 weeks',
    team: '6 developers',
    industry: 'Healthcare',
    testimonial: 'Revolutionary improvement in patient care delivery and administrative efficiency.',
    clientLogo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    serviceId: 'web-apps',
    liveUrl: 'https://medcare-portal-demo.vercel.app',
    challenge: 'MedCare Systems needed a comprehensive digital solution to manage patient records, enable telemedicine consultations, and streamline administrative processes while ensuring HIPAA compliance and data security.',
    solution: 'We developed a secure, cloud-based healthcare portal that integrates patient management, telemedicine capabilities, and administrative tools in one unified platform with end-to-end encryption and compliance features.',
    approach: [
      'Conducted HIPAA compliance assessment and security audit',
      'Designed patient-centric interface with accessibility features',
      'Implemented secure video calling with WebRTC technology',
      'Built comprehensive patient record management system',
      'Created automated appointment scheduling and reminders',
      'Integrated with existing hospital management systems'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Administrative Efficiency', value: '+60%', description: 'Reduced administrative overhead and processing time' },
      { label: 'Patient Satisfaction', value: '95%', description: 'Post-implementation patient satisfaction score' },
      { label: 'Telemedicine Adoption', value: '10K+ appointments', description: 'Successful virtual consultations conducted' },
      { label: 'Cost Reduction', value: '-40%', description: 'Operational cost savings through automation' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Material-UI', 'React Hook Form'] },
      { category: 'Backend', technologies: ['Firebase', 'Cloud Functions', 'Firestore', 'Authentication'] },
      { category: 'Communication', technologies: ['WebRTC', 'Socket.io', 'Twilio', 'SendGrid'] },
      { category: 'Security', technologies: ['End-to-end encryption', 'HIPAA compliance', 'OAuth 2.0', 'SSL/TLS'] }
    ],
    features: [
      'Secure patient portal',
      'Video consultations',
      'Electronic health records',
      'Appointment scheduling',
      'Prescription management',
      'Medical billing integration',
      'Real-time notifications',
      'Multi-language support'
    ],
    extendedTestimonial: {
      quote: 'This platform has revolutionized how we deliver healthcare. Our patients love the convenience of virtual consultations, and our staff has become significantly more efficient. The security features give us complete confidence in protecting patient data.',
      author: 'Dr. Michael Chen',
      position: 'Chief Medical Officer',
      company: 'MedCare Systems'
    }
  }
];
