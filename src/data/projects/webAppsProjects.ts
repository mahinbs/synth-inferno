
import { Project } from '../projects';

export const webAppsProjects: Project[] = [
  {
    id: 'healthcare-portal',
    title: 'Healthcare Management Portal',
    client: 'MedCare Solutions',
    description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine integration.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Stripe'],
    metrics: { patients: '50K+', uptime: '99.9%', satisfaction: '4.9/5', efficiency: '+60%' },
    timeline: '16 weeks',
    team: '7 developers',
    industry: 'Healthcare',
    testimonial: 'Transformed our patient care delivery. The system is intuitive and reliable.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop',
    serviceId: 'web-apps',
    liveUrl: 'https://healthcare-portal-demo.vercel.app',
    challenge: 'MedCare Solutions needed to digitize their entire healthcare workflow, from patient registration to billing, while ensuring HIPAA compliance and seamless integration with existing systems.',
    solution: 'We developed a comprehensive healthcare portal that streamlines all medical processes, includes telemedicine capabilities, and maintains the highest security standards for patient data protection.',
    approach: [
      'Conducted thorough analysis of existing healthcare workflows',
      'Designed HIPAA-compliant architecture with end-to-end encryption',
      'Implemented real-time patient monitoring and alert systems',
      'Built intuitive dashboards for different user roles (doctors, nurses, admin)',
      'Integrated with existing medical equipment and EHR systems',
      'Developed mobile-responsive interface for accessibility'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&auto=format&fit=crop'
    ],
    detailedMetrics: [
      { label: 'Active Patients', value: '50K+', description: 'Patients actively using the portal for appointments and records' },
      { label: 'System Uptime', value: '99.9%', description: 'Consistent system availability throughout the year' },
      { label: 'User Satisfaction', value: '4.9/5', description: 'Average rating from healthcare providers and patients' },
      { label: 'Workflow Efficiency', value: '+60%', description: 'Improvement in administrative task completion time' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Redux', 'Material-UI'] },
      { category: 'Backend', technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
      { category: 'Real-time', technologies: ['Socket.io', 'WebRTC', 'Push Notifications'] },
      { category: 'Security', technologies: ['JWT', 'bcrypt', 'HTTPS', 'HIPAA Compliance'] }
    ],
    features: [
      'Patient record management',
      'Appointment scheduling system',
      'Telemedicine video consultations',
      'Prescription management',
      'Insurance claim processing',
      'Real-time notifications',
      'Mobile responsive design',
      'HIPAA compliant security'
    ],
    extendedTestimonial: {
      quote: 'The healthcare portal has revolutionized how we deliver patient care. Our staff can now focus more on patients rather than paperwork, and our patients love the convenience of online scheduling and telemedicine options.',
      author: 'Dr. Emily Watson',
      position: 'Chief Medical Officer',
      company: 'MedCare Solutions'
    }
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    client: 'RetailMax Inc.',
    description: 'Modern e-commerce platform with advanced analytics, inventory management, and multi-vendor support.',
    technologies: ['Next.js', 'Shopify API', 'Stripe', 'MongoDB', 'AWS'],
    metrics: { sales: '+250%', conversion: '12%', vendors: '500+', orders: '100K+' },
    timeline: '14 weeks',
    team: '6 developers',
    industry: 'E-commerce',
    testimonial: 'Sales increased by 250% within the first quarter. Outstanding platform performance.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    serviceId: 'web-apps',
    liveUrl: 'https://retailmax-platform.vercel.app',
    challenge: 'RetailMax Inc. needed a scalable e-commerce solution that could handle multiple vendors, complex inventory management, and provide detailed analytics while maintaining excellent user experience.',
    solution: 'We built a comprehensive e-commerce platform with multi-vendor capabilities, advanced inventory tracking, real-time analytics, and seamless payment processing.',
    approach: [
      'Analyzed existing e-commerce workflows and pain points',
      'Designed scalable multi-vendor architecture',
      'Implemented advanced search and filtering capabilities',
      'Built comprehensive admin dashboard with analytics',
      'Integrated multiple payment gateways and shipping providers',
      'Optimized for mobile commerce and performance'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop'
    ],
    detailedMetrics: [
      { label: 'Sales Growth', value: '+250%', description: 'Increase in total sales within first quarter' },
      { label: 'Conversion Rate', value: '12%', description: 'Average conversion rate across all product categories' },
      { label: 'Active Vendors', value: '500+', description: 'Vendors actively selling on the platform' },
      { label: 'Monthly Orders', value: '100K+', description: 'Orders processed monthly on the platform' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', technologies: ['Node.js', 'Express', 'MongoDB', 'Redis'] },
      { category: 'Payments', technologies: ['Stripe', 'PayPal', 'Apple Pay', 'Google Pay'] },
      { category: 'Infrastructure', technologies: ['AWS', 'CloudFront', 'S3', 'Lambda'] }
    ],
    features: [
      'Multi-vendor marketplace',
      'Advanced product search and filtering',
      'Real-time inventory management',
      'Analytics and reporting dashboard',
      'Mobile-optimized checkout',
      'Multiple payment gateway support',
      'Order tracking and notifications',
      'SEO optimization and performance'
    ],
    extendedTestimonial: {
      quote: 'This platform has transformed our business completely. The multi-vendor capabilities and analytics have opened up new revenue streams we never thought possible.',
      author: 'James Mitchell',
      position: 'CEO',
      company: 'RetailMax Inc.'
    }
  },
  {
    id: 'learning-management-system',
    title: 'Learning Management System',
    client: 'EduTech Academy',
    description: 'Comprehensive LMS with interactive courses, progress tracking, and virtual classroom integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS S3'],
    metrics: { students: '25K+', courses: '1K+', completion: '85%', engagement: '+70%' },
    timeline: '18 weeks',
    team: '8 developers',
    industry: 'Education',
    testimonial: 'Student engagement increased by 70%. The platform exceeded all our expectations.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
    serviceId: 'web-apps',
    liveUrl: 'https://edutech-lms.vercel.app',
    challenge: 'EduTech Academy required a modern learning platform that could deliver engaging online education experiences, track student progress effectively, and support various learning formats including live sessions.',
    solution: 'We developed a comprehensive LMS featuring interactive content delivery, real-time collaboration tools, progress analytics, and seamless virtual classroom integration.',
    approach: [
      'Studied modern educational technology trends and user needs',
      'Designed engaging and intuitive learning interfaces',
      'Implemented adaptive learning algorithms',
      'Built robust video streaming and live session capabilities',
      'Created comprehensive progress tracking and analytics',
      'Integrated accessibility features for inclusive learning'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop'
    ],
    detailedMetrics: [
      { label: 'Active Students', value: '25K+', description: 'Students actively enrolled and participating in courses' },
      { label: 'Available Courses', value: '1K+', description: 'Courses available across various subjects and levels' },
      { label: 'Completion Rate', value: '85%', description: 'Average course completion rate across all programs' },
      { label: 'Engagement Increase', value: '+70%', description: 'Improvement in student engagement metrics' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Redux', 'Video.js'] },
      { category: 'Backend', technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'] },
      { category: 'Media', technologies: ['WebRTC', 'AWS S3', 'CloudFront', 'FFmpeg'] },
      { category: 'Analytics', technologies: ['Google Analytics', 'Mixpanel', 'Custom Tracking'] }
    ],
    features: [
      'Interactive course content delivery',
      'Live virtual classroom sessions',
      'Progress tracking and analytics',
      'Discussion forums and collaboration',
      'Mobile learning support',
      'Automated grading and feedback',
      'Certificate generation',
      'Multi-language support'
    ],
    extendedTestimonial: {
      quote: 'The LMS has revolutionized how we deliver education. Students are more engaged than ever, and our instructors love the comprehensive tools available for course management.',
      author: 'Dr. Maria Rodriguez',
      position: 'Academic Director',
      company: 'EduTech Academy'
    }
  }
];
