import { Project } from '../projects';

export const mobileAppsProjects: Project[] = [
  {
    id: 'fittrack-mobile',
    title: 'FitTrack - Fitness & Wellness App',
    client: 'HealthTech Solutions',
    description: 'Cross-platform mobile app for fitness tracking, meal planning, and health monitoring with real-time sync.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Stripe', 'HealthKit'],
    metrics: { downloads: '100K+', rating: '4.8/5', retention: '85%', revenue: '$2M+' },
    timeline: '16 weeks',
    team: '6 developers',
    industry: 'Health & Fitness',
    testimonial: 'Exceeded our expectations. The app has transformed how our users engage with fitness.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop',
    serviceId: 'mobile-apps',
    liveUrl: 'https://apps.apple.com/fittrack',
    challenge: 'HealthTech Solutions needed a comprehensive fitness app that could compete with established players while offering unique health monitoring features and seamless cross-platform experience.',
    solution: 'We developed a feature-rich mobile app with advanced fitness tracking, AI-powered meal recommendations, social features, and integration with popular health devices and platforms.',
    approach: [
      'Conducted extensive user research and competitor analysis',
      'Designed intuitive UI/UX with fitness-focused user journeys',
      'Implemented real-time health data synchronization',
      'Built AI-powered recommendation engine for personalized fitness plans',
      'Integrated with HealthKit, Google Fit, and popular fitness devices',
      'Developed social features for community engagement'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'App Downloads', value: '100K+', description: 'Total downloads across iOS and Android platforms' },
      { label: 'User Rating', value: '4.8/5', description: 'Average rating on app stores' },
      { label: 'User Retention', value: '85%', description: '30-day user retention rate' },
      { label: 'Revenue Generated', value: '$2M+', description: 'Total revenue from subscriptions and premium features' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'React Navigation'] },
      { category: 'Backend', technologies: ['Firebase', 'Cloud Functions', 'Firestore', 'Firebase Auth'] },
      { category: 'Integrations', technologies: ['HealthKit', 'Google Fit', 'Stripe', 'Apple Pay'] },
      { category: 'Analytics', technologies: ['Firebase Analytics', 'Crashlytics', 'AppsFlyer', 'Mixpanel'] }
    ],
    features: [
      'Cross-platform iOS and Android support',
      'Real-time fitness tracking and analytics',
      'AI-powered meal and workout recommendations',
      'Social features and community challenges',
      'Integration with health devices and platforms',
      'Subscription management and premium features',
      'Offline mode with data synchronization',
      'Push notifications and reminders'
    ],
    extendedTestimonial: {
      quote: 'FitTrack has completely transformed our business. The app not only met all our requirements but exceeded them with innovative features we hadn\'t even considered. User engagement is through the roof.',
      author: 'Sarah Johnson',
      position: 'CEO',
      company: 'HealthTech Solutions'
    }
  },
  {
    id: 'shopmate-ecommerce',
    title: 'ShopMate - Social Shopping App',
    client: 'RetailMax Group',
    description: 'Social commerce mobile app with AR try-on features, social shopping, and personalized recommendations.',
    technologies: ['Flutter', 'AWS', 'ARCore', 'ARKit', 'TensorFlow'],
    metrics: { users: '250K+', conversion: '12%', social: '65%', growth: '+300%' },
    timeline: '20 weeks',
    team: '8 developers',
    industry: 'E-commerce',
    testimonial: 'Revolutionary shopping experience. Our conversion rates increased by 300% within 6 months.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop',
    serviceId: 'mobile-apps',
    liveUrl: 'https://play.google.com/store/apps/shopmate',
    challenge: 'RetailMax Group wanted to create a next-generation shopping experience that combines social media engagement with advanced AR technology to reduce return rates and increase customer satisfaction.',
    solution: 'We built an innovative social commerce app featuring AR try-on capabilities, social shopping experiences, AI-powered recommendations, and seamless checkout processes.',
    approach: [
      'Researched AR shopping trends and user behavior patterns',
      'Developed custom AR try-on engine for various product categories',
      'Implemented social features including reviews, sharing, and group buying',
      'Built AI recommendation system based on user preferences and social signals',
      'Integrated multiple payment gateways and loyalty programs',
      'Created admin dashboard for inventory and social content management'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Active Users', value: '250K+', description: 'Monthly active users across platforms' },
      { label: 'Conversion Rate', value: '12%', description: 'Overall conversion rate from browse to purchase' },
      { label: 'Social Engagement', value: '65%', description: 'Users engaging with social features monthly' },
      { label: 'Growth Rate', value: '+300%', description: 'Year-over-year user growth rate' }
    ],
    techStack: [
      { category: 'Frontend', technologies: ['Flutter', 'Dart', 'Provider', 'GetX'] },
      { category: 'AR/ML', technologies: ['ARCore', 'ARKit', 'TensorFlow Lite', 'OpenCV'] },
      { category: 'Backend', technologies: ['AWS Lambda', 'DynamoDB', 'S3', 'API Gateway'] },
      { category: 'Payments', technologies: ['Stripe', 'PayPal', 'Apple Pay', 'Google Pay'] }
    ],
    features: [
      'AR try-on for clothing, accessories, and makeup',
      'Social shopping with friends and influencers',
      'AI-powered personalized recommendations',
      'Real-time chat and video shopping sessions',
      'Social reviews and rating system',
      'Group buying and discount sharing',
      'Wishlist sharing and gift recommendations',
      'One-click checkout and multiple payment options'
    ],
    extendedTestimonial: {
      quote: 'ShopMate has redefined what mobile commerce can be. The AR features are incredibly accurate, and the social aspect has created a whole new shopping culture among our customers.',
      author: 'Michael Chen',
      position: 'Chief Digital Officer',
      company: 'RetailMax Group'
    }
  }
];
