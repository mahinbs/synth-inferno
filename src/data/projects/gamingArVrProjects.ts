
import { Project } from '../projects';

export const gamingArVrProjects: Project[] = [
  {
    id: 'vr-training-simulator',
    title: 'VR Training Simulator',
    client: 'MedTech Solutions',
    description: 'Immersive virtual reality training platform for medical professionals with realistic surgical simulations and haptic feedback.',
    technologies: ['Unity', 'C#', 'Oculus SDK', 'WebXR', 'Node.js'],
    metrics: {
      'Training Time Reduced': '65%',
      'User Retention': '94%',
      'Simulation Accuracy': '98%',
      'Platform Users': '12,000+'
    },
    timeline: '16 weeks',
    team: '6 developers',
    industry: 'Healthcare',
    testimonial: 'The VR training platform has revolutionized how we train medical staff. The realistic simulations provide hands-on experience without any risk.',
    clientLogo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'gaming-ar-vr',
    liveUrl: 'https://demo-vr-training.com',
    challenge: 'Creating realistic medical training scenarios that could replace traditional hands-on training while maintaining safety and effectiveness.',
    solution: 'Developed a comprehensive VR platform with haptic feedback, realistic anatomy models, and progressive difficulty levels.',
    approach: [
      'Collaborated with medical professionals to ensure accuracy',
      'Implemented advanced physics simulation for realistic interactions',
      'Created modular training scenarios for different medical specialties',
      'Integrated progress tracking and performance analytics'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    detailedMetrics: [
      {
        label: 'Training Efficiency',
        value: '65% faster',
        description: 'Reduced time needed to achieve competency levels'
      },
      {
        label: 'User Engagement',
        value: '94% retention',
        description: 'Monthly active users completing training modules'
      },
      {
        label: 'Simulation Accuracy',
        value: '98% realistic',
        description: 'Medical professional validation of simulation fidelity'
      }
    ],
    techStack: [
      {
        category: 'Game Engine',
        technologies: ['Unity 2022.3', 'C# Scripting']
      },
      {
        category: 'VR Platform',
        technologies: ['Oculus SDK', 'OpenXR', 'WebXR']
      },
      {
        category: 'Backend',
        technologies: ['Node.js', 'MongoDB', 'Socket.io']
      }
    ],
    features: [
      'Realistic haptic feedback system',
      'Progressive difficulty training modules',
      'Multi-user collaborative sessions',
      'Detailed performance analytics',
      'Cross-platform VR headset support'
    ],
    extendedTestimonial: {
      quote: 'This VR training platform has transformed our medical education program. Students can now practice complex procedures in a safe, controlled environment with immediate feedback.',
      author: 'Dr. Sarah Chen',
      position: 'Director of Medical Education',
      company: 'MedTech Solutions'
    }
  },
  {
    id: 'ar-furniture-showroom',
    title: 'AR Furniture Showroom',
    client: 'HomeStyle Retail',
    description: 'Augmented reality mobile app allowing customers to visualize furniture in their homes before purchase with realistic 3D models.',
    technologies: ['Unity', 'ARCore', 'ARKit', 'React Native', 'AWS'],
    metrics: {
      'Sales Conversion': '85% increase',
      'Return Rate': '40% decrease',
      'App Downloads': '250,000+',
      'Customer Satisfaction': '4.8/5'
    },
    timeline: '12 weeks',
    team: '5 developers',
    industry: 'Retail',
    testimonial: 'The AR showroom app has completely changed how our customers shop. They can see exactly how furniture looks in their space.',
    clientLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'gaming-ar-vr',
    liveUrl: 'https://homestylear.app',
    challenge: 'Enabling customers to accurately visualize how furniture would look and fit in their actual living spaces.',
    solution: 'Built a cross-platform AR app with precise 3D models, room scanning, and realistic lighting simulation.',
    approach: [
      'Developed high-quality 3D furniture models with accurate dimensions',
      'Implemented advanced AR tracking for stable object placement',
      'Created intuitive user interface for easy furniture browsing',
      'Integrated with existing e-commerce platform for seamless purchasing'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    detailedMetrics: [
      {
        label: 'Sales Impact',
        value: '85% increase',
        description: 'Boost in conversion rate for customers using AR preview'
      },
      {
        label: 'Customer Satisfaction',
        value: '40% fewer returns',
        description: 'Reduction in product returns due to better visualization'
      },
      {
        label: 'User Adoption',
        value: '250K downloads',
        description: 'Active monthly users engaging with AR features'
      }
    ],
    techStack: [
      {
        category: 'AR Framework',
        technologies: ['ARCore', 'ARKit', 'Unity AR Foundation']
      },
      {
        category: 'Mobile Development',
        technologies: ['React Native', 'Native iOS/Android']
      },
      {
        category: 'Cloud Services',
        technologies: ['AWS S3', 'CloudFront', 'Lambda']
      }
    ],
    features: [
      'Real-time AR furniture placement',
      'Accurate room scanning and measurement',
      'Realistic lighting and shadows',
      'Social sharing capabilities',
      'Integrated purchase flow'
    ],
    extendedTestimonial: {
      quote: 'Since launching the AR showroom, we\'ve seen unprecedented engagement and customer confidence in their purchases. It\'s a game-changer for online furniture retail.',
      author: 'Mike Johnson',
      position: 'VP of Digital Innovation',
      company: 'HomeStyle Retail'
    }
  }
];
