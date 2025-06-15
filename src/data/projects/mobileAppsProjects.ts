
import { Project } from '../projects';

export const mobileAppsProjects: Project[] = [
  {
    id: 'fitness-tracker-app',
    title: 'FitLife Tracker',
    client: 'HealthTech Solutions',
    description: 'Comprehensive fitness tracking mobile app with real-time health monitoring, workout plans, and social features.',
    technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit'],
    metrics: {
      'User Engagement': '85% daily active users',
      'App Store Rating': '4.8/5 stars',
      'Downloads': '500K+ downloads'
    },
    timeline: '12 weeks',
    team: '4 developers',
    industry: 'Health & Fitness',
    testimonial: 'The FitLife app exceeded our expectations with its intuitive design and robust functionality.',
    clientLogo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'mobile-apps',
    challenge: 'Creating a comprehensive fitness app that integrates with multiple health platforms while maintaining excellent performance.',
    solution: 'Built a React Native app with native module integrations for health data and real-time synchronization.',
    approach: [
      'Cross-platform development with React Native',
      'Integration with HealthKit and Google Fit APIs',
      'Real-time data synchronization with Firebase',
      'Custom UI/UX design for fitness workflows'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    detailedMetrics: [
      {
        label: 'Daily Active Users',
        value: '85%',
        description: 'High user engagement with daily workout tracking'
      },
      {
        label: 'App Store Rating',
        value: '4.8/5',
        description: 'Excellent user satisfaction across both iOS and Android'
      }
    ],
    techStack: [
      {
        category: 'Mobile Development',
        technologies: ['React Native', 'TypeScript', 'Expo']
      },
      {
        category: 'Backend',
        technologies: ['Firebase', 'Cloud Functions', 'Firestore']
      }
    ],
    features: [
      'Real-time fitness tracking',
      'Social workout sharing',
      'Custom workout plans',
      'Health data integration'
    ],
    extendedTestimonial: {
      quote: 'The FitLife app has transformed how our users engage with fitness tracking. The seamless integration with health platforms and intuitive design has resulted in unprecedented user retention.',
      author: 'Sarah Chen',
      position: 'Product Director',
      company: 'HealthTech Solutions'
    }
  }
];
