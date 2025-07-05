import { AdminProject } from '@/services/adminDataService';

export const portfolioProjectsData: AdminProject[] = [
  // Web Applications
  {
    title: "UPSC Aids – Personalized Mentorship & UPSC Preparation Tool",
    client: "UPSC Aids",
    description: "A comprehensive personalized mentorship platform designed specifically for UPSC preparation, featuring AI-driven study plans, mentor matching, and progress tracking.",
    serviceId: "web-apps",
    industry: "Education",
    timeline: "3 months",
    team: "5 members (2 frontend, 2 backend, 1 UI/UX)",
    image: "/public/images/bg-web-ui.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "UPSC aspirants struggled with finding personalized guidance and structured mentorship to navigate the complex exam preparation process effectively.",
    solution: "Developed an intelligent mentorship platform that matches students with experienced mentors, provides personalized study plans, and tracks progress with AI-powered insights.",
    technologies: ["React.js", "Node.js", "MongoDB", "AWS"],
    approach: [
      "User research and requirement analysis for UPSC preparation needs",
      "AI-powered mentor-student matching algorithm development",
      "Real-time progress tracking and analytics implementation",
      "Mobile-responsive design for accessibility on all devices"
    ],
    features: [
      "Personalized mentor matching",
      "AI-driven study plan generation",
      "Progress tracking dashboard",
      "Real-time mentorship sessions",
      "Performance analytics"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "User Engagement",
        value: "85%",
        description: "Daily active user engagement rate"
      },
      {
        label: "Mentor Satisfaction",
        value: "92%",
        description: "Mentor satisfaction with platform tools"
      },
      {
        label: "Success Rate",
        value: "78%",
        description: "Students showing improved test scores"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React.js", "Redux", "CSS3", "HTML5"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "MongoDB"]
      },
      {
        category: "Cloud",
        technologies: ["AWS", "S3", "EC2"]
      }
    ],
    metrics: {
      "Timeline": "3 months",
      "Team Size": "5 members",
      "User Engagement": "85%"
    },
    testimonial: "The team delivered a well-organized and scalable solution that met our mentorship needs perfectly.",
    extendedTestimonial: {
      quote: "The team delivered a well-organized and scalable solution that met our mentorship needs perfectly. The platform has transformed how we connect UPSC aspirants with quality mentors.",
      author: "UPSC Aids Team",
      position: "Product Manager",
      company: "UPSC Aids"
    }
  },
  {
    title: "Interview Pro – Professional Interview Scheduling Tool",
    client: "Interview Pro",
    description: "A comprehensive interview scheduling platform that streamlines the recruitment process with automated scheduling, video integration, and candidate management features.",
    serviceId: "web-apps",
    industry: "HR Tech",
    timeline: "2.5 months",
    team: "4 members (1 PM, 2 full stack devs, 1 QA)",
    image: "/public/images/bg-web-ui.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Companies struggled with complex interview scheduling, coordination between multiple stakeholders, and seamless video integration for remote interviews.",
    solution: "Built a unified platform that automates interview scheduling, integrates with popular video conferencing tools, and provides comprehensive candidate management.",
    technologies: ["Vue.js", "Firebase", "Zoom API", "Express.js"],
    approach: [
      "Analysis of recruitment workflow pain points",
      "Integration with popular calendaring and video systems",
      "Automated notification and reminder system",
      "Comprehensive testing with QA specialist"
    ],
    features: [
      "Automated interview scheduling",
      "Zoom API integration",
      "Candidate management dashboard",
      "Email notifications and reminders",
      "Calendar synchronization"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Scheduling Efficiency",
        value: "90%",
        description: "Reduction in scheduling time"
      },
      {
        label: "User Adoption",
        value: "88%",
        description: "HR teams actively using the platform"
      },
      {
        label: "Interview Completion",
        value: "95%",
        description: "Successfully completed interviews"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["Vue.js", "Vuex", "CSS3", "HTML5"]
      },
      {
        category: "Backend",
        technologies: ["Express.js", "Firebase", "Zoom API"]
      },
      {
        category: "Database",
        technologies: ["Firebase Firestore"]
      }
    ],
    metrics: {
      "Timeline": "2.5 months",
      "Team Size": "4 members",
      "Efficiency Gain": "90%"
    },
    testimonial: "The execution was smooth and efficient. The platform helped simplify our interview process significantly.",
    extendedTestimonial: {
      quote: "The execution was smooth and efficient. The platform helped simplify our interview process significantly. Our HR team now saves hours every week on scheduling coordination.",
      author: "HR Director",
      position: "HR Director",
      company: "Interview Pro"
    }
  },
  {
    title: "StreamVerse – Smart Rental Management Platform",
    client: "StreamVerse",
    description: "A comprehensive rental management platform that facilitates seamless communication between tenants and landlords with smart automation and reliable data handling.",
    serviceId: "web-apps",
    industry: "Real Estate",
    timeline: "4 months",
    team: "6 members (2 frontend, 2 backend, 1 designer, 1 QA)",
    image: "/public/images/bg-web-ui.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Traditional rental management involved complex paperwork, poor communication channels, and inefficient property management workflows.",
    solution: "Created a unified platform that digitizes rental processes, enables real-time communication, and automates routine property management tasks.",
    technologies: ["Angular", "Node.js", "PostgreSQL", "AWS S3"],
    approach: [
      "Comprehensive stakeholder interviews with landlords and tenants",
      "Design of intuitive user interfaces for both user types",
      "Implementation of secure document storage and sharing",
      "Thorough testing and quality assurance processes"
    ],
    features: [
      "Tenant-landlord communication portal",
      "Automated rent collection",
      "Document management system",
      "Maintenance request tracking",
      "Property analytics dashboard"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Communication Efficiency",
        value: "85%",
        description: "Faster resolution of tenant issues"
      },
      {
        label: "Payment Processing",
        value: "98%",
        description: "On-time rent collection rate"
      },
      {
        label: "User Satisfaction",
        value: "91%",
        description: "Overall platform satisfaction score"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["Angular", "TypeScript", "SCSS", "HTML5"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "PostgreSQL"]
      },
      {
        category: "Cloud Storage",
        technologies: ["AWS S3", "AWS EC2"]
      }
    ],
    metrics: {
      "Timeline": "4 months",
      "Team Size": "6 members",
      "User Satisfaction": "91%"
    },
    testimonial: "The team crafted a seamless rental management platform with smooth tenant-landlord communication and reliable data handling.",
    extendedTestimonial: {
      quote: "The team crafted a seamless rental management platform with smooth tenant-landlord communication and reliable data handling. The platform has revolutionized how we manage our property portfolio.",
      author: "Property Manager",
      position: "Senior Property Manager",
      company: "StreamVerse"
    }
  },
  {
    title: "Fashion Journey Navigator – Personalized Style Assistant",
    client: "Fashion Journey Navigator",
    description: "An AI-powered style assistant that provides personalized fashion recommendations, wardrobe management, and style guidance with beautiful design and intuitive usability.",
    serviceId: "web-apps",
    industry: "Fashion & Retail",
    timeline: "2 months",
    team: "3 members (1 frontend, 1 backend, 1 UI/UX)",
    image: "/public/images/bg-web-ui.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Fashion enthusiasts struggled with creating cohesive personal style, managing wardrobes effectively, and discovering fashion that matches their preferences.",
    solution: "Developed a personalized style assistant using AI to analyze preferences, suggest outfits, and provide comprehensive wardrobe management tools.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    approach: [
      "User journey mapping for fashion discovery",
      "AI algorithm development for style matching",
      "Beautiful and responsive UI/UX design",
      "Rapid development with modern tech stack"
    ],
    features: [
      "AI-powered style recommendations",
      "Virtual wardrobe management",
      "Outfit coordination suggestions",
      "Fashion trend analysis",
      "Personal style profiling"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "User Engagement",
        value: "82%",
        description: "Daily active users using style suggestions"
      },
      {
        label: "Recommendation Accuracy",
        value: "89%",
        description: "Users satisfied with AI recommendations"
      },
      {
        label: "Style Improvement",
        value: "76%",
        description: "Users reporting improved personal style"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"]
      },
      {
        category: "Backend",
        technologies: ["Supabase", "PostgreSQL"]
      },
      {
        category: "AI/ML",
        technologies: ["AI Style Matching", "Image Recognition"]
      }
    ],
    metrics: {
      "Timeline": "2 months",
      "Team Size": "3 members",
      "User Satisfaction": "89%"
    },
    testimonial: "The system was beautifully designed and deployed with a perfect balance between aesthetics and usability.",
    extendedTestimonial: {
      quote: "The system was beautifully designed and deployed with a perfect balance between aesthetics and usability. Our users love the personalized fashion insights.",
      author: "Fashion Director",
      position: "Creative Director",
      company: "Fashion Journey Navigator"
    }
  },
  {
    title: "Projectsy.ai – AI-Powered Project & Task Manager",
    client: "Projectsy.ai",
    description: "An intelligent project management platform that leverages AI to automate task scheduling, predict project timelines, and optimize team productivity with a clean, intuitive interface.",
    serviceId: "web-apps",
    industry: "Productivity",
    timeline: "2.5 months",
    team: "4 members (2 developers, 1 designer, 1 QA)",
    image: "/public/images/bg-web-ui.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Project managers struggled with manual task scheduling, unrealistic timeline estimates, and lack of intelligent insights for team productivity optimization.",
    solution: "Built an AI-powered platform that automates project planning, provides intelligent task recommendations, and offers predictive analytics for better project outcomes.",
    technologies: ["React.js", "Node.js", "MongoDB", "OpenAI API"],
    approach: [
      "Integration of OpenAI API for intelligent automation",
      "Development of predictive analytics algorithms",
      "Clean UX design focused on productivity",
      "Comprehensive quality assurance testing"
    ],
    features: [
      "AI-powered task automation",
      "Predictive project timeline estimation",
      "Team productivity analytics",
      "Intelligent task prioritization",
      "Collaborative workspace"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Productivity Increase",
        value: "87%",
        description: "Improvement in team task completion"
      },
      {
        label: "Timeline Accuracy",
        value: "93%",
        description: "AI prediction accuracy for project timelines"
      },
      {
        label: "User Adoption",
        value: "84%",
        description: "Teams actively using AI features"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React.js", "Redux", "CSS3", "HTML5"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "MongoDB"]
      },
      {
        category: "AI Integration",
        technologies: ["OpenAI API", "Machine Learning Models"]
      }
    ],
    metrics: {
      "Timeline": "2.5 months",
      "Team Size": "4 members",
      "Productivity Gain": "87%"
    },
    testimonial: "The platform offers powerful automation and clean UX, solving key pain points for project managers.",
    extendedTestimonial: {
      quote: "The platform offers powerful automation and clean UX, solving key pain points for project managers. The AI features have transformed how our teams approach project planning.",
      author: "Project Director",
      position: "Senior Project Manager",
      company: "Projectsy.ai"
    }
  },
  {
    title: "Crimson Classified Hub – Community-Driven Classifieds",
    client: "Crimson Classified Hub",
    description: "A modern classifieds platform that fosters community collaboration with intuitive design, advanced search capabilities, and social features for local commerce.",
    serviceId: "web-apps",
    industry: "E-commerce",
    timeline: "2 months",
    team: "3 members (1 designer, 2 full stack devs)",
    image: "/public/images/bg-web-ui.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Traditional classified platforms lacked community engagement, had poor user experience, and didn't facilitate trust between buyers and sellers.",
    solution: "Created a community-driven platform with social features, user verification systems, and intuitive interface that encourages local commerce collaboration.",
    technologies: ["Vue.js", "Firebase", "Node.js"],
    approach: [
      "Community-focused design and user experience",
      "Implementation of trust and verification systems",
      "Full-stack development with Vue.js and Firebase",
      "Scalable architecture for growing user base"
    ],
    features: [
      "Advanced search and filtering",
      "User verification system",
      "Community messaging features",
      "Local commerce optimization",
      "Social interaction tools"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Community Engagement",
        value: "79%",
        description: "Users actively participating in community features"
      },
      {
        label: "Transaction Success",
        value: "91%",
        description: "Successful buyer-seller connections"
      },
      {
        label: "Platform Growth",
        value: "156%",
        description: "Month-over-month user growth"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["Vue.js", "Vuex", "CSS3", "HTML5"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Firebase"]
      },
      {
        category: "Database",
        technologies: ["Firebase Firestore"]
      }
    ],
    metrics: {
      "Timeline": "2 months",
      "Team Size": "3 members",
      "User Growth": "156%"
    },
    testimonial: "A well-designed, scalable classifieds platform that encourages community collaboration.",
    extendedTestimonial: {
      quote: "A well-designed, scalable classifieds platform that encourages community collaboration. The platform has brought our local community together in ways we never expected.",
      author: "Community Manager",
      position: "Community Manager",
      company: "Crimson Classified Hub"
    }
  },
  {
    title: "Dubai Classifieds Pulse – Hyperlocal Classified Platform",
    client: "Dubai Classifieds Pulse",
    description: "A high-performance hyperlocal classified platform specifically designed for Dubai market, featuring advanced location-based search and real-time listings management.",
    serviceId: "web-apps",
    industry: "E-commerce",
    timeline: "3 months",
    team: "4 members (2 frontend, 1 backend, 1 UI/UX)",
    image: "/public/images/bg-web-ui.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Dubai's diverse market needed a specialized classified platform that could handle hyperlocal requirements, multiple languages, and high-volume listings efficiently.",
    solution: "Developed a location-optimized platform with advanced filtering, multilingual support, and high-performance architecture tailored for Dubai's unique market needs.",
    technologies: ["React.js", "Node.js", "MongoDB", "AWS EC2"],
    approach: [
      "Market research specific to Dubai's classified needs",
      "High-performance architecture design and implementation",
      "Hyperlocal optimization with advanced location services",
      "User experience design for diverse cultural demographics"
    ],
    features: [
      "Hyperlocal search and filtering",
      "Multilingual support",
      "Real-time listing updates",
      "Advanced location services",
      "High-performance search engine"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Search Performance",
        value: "95%",
        description: "Sub-second search response times"
      },
      {
        label: "Local Accuracy",
        value: "97%",
        description: "Accurate location-based results"
      },
      {
        label: "User Satisfaction",
        value: "88%",
        description: "Overall platform satisfaction in Dubai market"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React.js", "Redux", "CSS3", "HTML5"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "MongoDB"]
      },
      {
        category: "Cloud Infrastructure",
        technologies: ["AWS EC2", "AWS S3", "CloudFront"]
      }
    ],
    metrics: {
      "Timeline": "3 months",
      "Team Size": "4 members",
      "Performance": "95%"
    },
    testimonial: "The team did an excellent job designing and developing a high-performance classified listing portal.",
    extendedTestimonial: {
      quote: "The team did an excellent job designing and developing a high-performance classified listing portal. The platform perfectly captures Dubai's dynamic marketplace needs.",
      author: "Business Development Manager",
      position: "Business Development Manager",
      company: "Dubai Classifieds Pulse"
    }
  },

  // Mobile Applications
  {
    title: "UrjaOne Nexus – Mobile Energy Services Marketplace",
    client: "UrjaOne Nexus",
    description: "A comprehensive mobile marketplace for energy services featuring real-time service booking, provider matching, and reliable backend infrastructure for energy sector solutions.",
    serviceId: "mobile-apps",
    industry: "Energy Services",
    timeline: "3 months",
    team: "4 members (1 frontend, 2 backend, 1 devops)",
    image: "/public/images/bg-mobile-app.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Energy service consumers lacked a reliable platform to connect with verified service providers, leading to inefficient service delivery and trust issues.",
    solution: "Built a mobile-first marketplace with provider verification, real-time booking, and robust backend infrastructure to ensure reliable energy service connections.",
    technologies: ["Flutter", "Laravel", "MySQL", "AWS Lambda"],
    approach: [
      "Mobile-first design approach for energy service marketplace",
      "Backend stability and reliability focus with Laravel",
      "DevOps implementation for scalable infrastructure",
      "Provider verification and quality assurance systems"
    ],
    features: [
      "Real-time service provider matching",
      "Secure payment processing",
      "Service tracking and updates",
      "Provider verification system",
      "Energy service analytics"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Service Reliability",
        value: "96%",
        description: "Successful service completion rate"
      },
      {
        label: "Provider Network",
        value: "200+",
        description: "Verified energy service providers"
      },
      {
        label: "Response Time",
        value: "< 2min",
        description: "Average provider response time"
      }
    ],
    techStack: [
      {
        category: "Mobile",
        technologies: ["Flutter", "Dart"]
      },
      {
        category: "Backend",
        technologies: ["Laravel", "PHP", "MySQL"]
      },
      {
        category: "Cloud Services",
        technologies: ["AWS Lambda", "AWS RDS"]
      }
    ],
    metrics: {
      "Timeline": "3 months",
      "Team Size": "4 members",
      "Service Success": "96%"
    },
    testimonial: "The marketplace was delivered with clarity and strong backend stability. Very reliable experience.",
    extendedTestimonial: {
      quote: "The marketplace was delivered with clarity and strong backend stability. Very reliable experience. Our energy service network has never been more efficiently connected.",
      author: "Operations Director",
      position: "Operations Director",
      company: "UrjaOne Nexus"
    }
  },
  {
    title: "CoffeeLavka Express Track – Real-Time Coffee Orders",
    client: "CoffeeLavka Express Track",
    description: "A mobile application for real-time coffee ordering with intuitive interface, order tracking, and seamless delivery coordination for coffee enthusiasts.",
    serviceId: "mobile-apps",
    industry: "Food & Beverage",
    timeline: "1.5 months",
    team: "3 members (1 developer, 1 UI, 1 backend)",
    image: "/public/images/bg-mobile-app.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Coffee shops needed a fast, reliable mobile ordering system that could handle peak hours and provide real-time order tracking for customer satisfaction.",
    solution: "Developed a streamlined mobile app with React Native that enables quick ordering, real-time tracking, and efficient delivery coordination.",
    technologies: ["React Native", "Firebase", "Node.js"],
    approach: [
      "Rapid development cycle for quick market entry",
      "Focus on intuitive user interface for coffee ordering",
      "Real-time backend implementation with Firebase",
      "Delivery optimization and tracking features"
    ],
    features: [
      "One-tap coffee ordering",
      "Real-time order tracking",
      "Delivery status updates",
      "Coffee customization options",
      "Loyalty rewards system"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Order Speed",
        value: "30sec",
        description: "Average time to complete order"
      },
      {
        label: "Customer Satisfaction",
        value: "94%",
        description: "Customer satisfaction with app experience"
      },
      {
        label: "Delivery Accuracy",
        value: "98%",
        description: "On-time delivery rate"
      }
    ],
    techStack: [
      {
        category: "Mobile",
        technologies: ["React Native", "JavaScript"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Firebase"]
      },
      {
        category: "Database",
        technologies: ["Firebase Firestore"]
      }
    ],
    metrics: {
      "Timeline": "1.5 months",
      "Team Size": "3 members",
      "Order Speed": "30sec"
    },
    testimonial: "The team did a fantastic job ensuring on-time delivery and intuitive interface for coffee enthusiasts.",
    extendedTestimonial: {
      quote: "The team did a fantastic job ensuring on-time delivery and intuitive interface for coffee enthusiasts. Our customers love the speed and simplicity of ordering their favorite coffee.",
      author: "Store Manager",
      position: "Store Manager",
      company: "CoffeeLavka Express Track"
    }
  },
  {
    title: "Ember – AI-Powered Soulmate Matching & Conversations",
    client: "Ember",
    description: "An innovative dating app that uses AI to match compatible partners and facilitate meaningful conversations, focusing on emotional connection and relationship building.",
    serviceId: "mobile-apps",
    industry: "Dating & Relationships",
    timeline: "2.5 months",
    team: "4 members (1 frontend, 1 backend, 1 AI dev, 1 PM)",
    image: "/public/images/bg-mobile-app.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Traditional dating apps focused on superficial matching without considering emotional compatibility and meaningful connection building.",
    solution: "Created an AI-powered platform that analyzes personality traits, communication styles, and relationship goals to make deeper, more meaningful matches.",
    technologies: ["Flutter", "Python (AI)", "Firebase"],
    approach: [
      "AI algorithm development for personality-based matching",
      "Project management for coordinated team development",
      "Focus on emotional connection and user psychology",
      "Cross-platform mobile development with Flutter"
    ],
    features: [
      "AI-powered personality matching",
      "Conversation starter suggestions",
      "Emotional compatibility analysis",
      "Secure messaging platform",
      "Relationship goal alignment"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Match Quality",
        value: "86%",
        description: "Users satisfied with match compatibility"
      },
      {
        label: "Conversation Rate",
        value: "73%",
        description: "Matches leading to meaningful conversations"
      },
      {
        label: "Relationship Success",
        value: "42%",
        description: "Users reporting lasting connections"
      }
    ],
    techStack: [
      {
        category: "Mobile",
        technologies: ["Flutter", "Dart"]
      },
      {
        category: "AI/Backend",
        technologies: ["Python", "AI Matching Algorithms", "Firebase"]
      },
      {
        category: "Database",
        technologies: ["Firebase Firestore"]
      }
    ],
    metrics: {
      "Timeline": "2.5 months",
      "Team Size": "4 members",
      "Match Quality": "86%"
    },
    testimonial: "The platform built was reliable and smart, with a strong focus on emotional connection.",
    extendedTestimonial: {
      quote: "The platform built was reliable and smart, with a strong focus on emotional connection. Our users appreciate the thoughtful approach to meaningful relationships.",
      author: "Product Manager",
      position: "Product Manager",
      company: "Ember"
    }
  },
  {
    title: "Bharat Meds – TrackNow Medicine Delivery & Tracking",
    client: "Bharat Meds",
    description: "A comprehensive medicine delivery and tracking application that ensures timely medication delivery with real-time tracking, pharmacy integration, and patient care features.",
    serviceId: "mobile-apps",
    industry: "Healthcare",
    timeline: "2 months",
    team: "3 members (2 developers, 1 UI/UX)",
    image: "/public/images/bg-mobile-app.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Patients struggled with reliable medicine delivery, prescription management, and real-time tracking of their critical medications.",
    solution: "Built a comprehensive mobile app that connects patients with pharmacies, provides real-time delivery tracking, and includes medication reminders and management features.",
    technologies: ["React Native", "Firebase", "Node.js", "Google Maps API"],
    approach: [
      "Healthcare-focused user experience design and development",
      "Integration with Google Maps for accurate delivery tracking",
      "Careful implementation ensuring medication tracking reliability",
      "Pharmacy network integration and management"
    ],
    features: [
      "Real-time medicine delivery tracking",
      "Prescription management system",
      "Pharmacy network integration",
      "Medication reminders",
      "Emergency medicine requests"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Delivery Accuracy",
        value: "99%",
        description: "Accurate medicine delivery rate"
      },
      {
        label: "Tracking Reliability",
        value: "97%",
        description: "Real-time tracking accuracy"
      },
      {
        label: "Patient Satisfaction",
        value: "92%",
        description: "Overall patient satisfaction with service"
      }
    ],
    techStack: [
      {
        category: "Mobile",
        technologies: ["React Native", "JavaScript"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Firebase"]
      },
      {
        category: "Maps & Location",
        technologies: ["Google Maps API", "GPS Tracking"]
      }
    ],
    metrics: {
      "Timeline": "2 months",
      "Team Size": "3 members",
      "Delivery Accuracy": "99%"
    },
    testimonial: "The delivery system was implemented with care, helping ensure timely medication tracking.",
    extendedTestimonial: {
      quote: "The delivery system was implemented with care, helping ensure timely medication tracking. Our patients now have complete peace of mind about their medication delivery.",
      author: "Healthcare Operations Manager",
      position: "Operations Manager",
      company: "Bharat Meds"
    }
  },

  // AI/Healthcare Solutions  
  {
    title: "Mediverse Connect AI – AI-Powered Healthcare Networking",
    client: "Mediverse Connect AI",
    description: "An AI-powered healthcare networking platform that intelligently matches patients with healthcare providers, ensuring secure, reliable connections and optimized care delivery.",
    serviceId: "saas",
    industry: "Healthcare",
    timeline: "3.5 months",
    team: "5 members (3 devs, 1 tester, 1 PM)",
    image: "/public/images/bg-saas-metrics.svg",
    clientLogo: "",
    liveUrl: "",
    challenge: "Healthcare systems struggled with efficient patient-provider matching, secure data handling, and reliable networking between healthcare professionals.",
    solution: "Developed an AI-powered platform that intelligently matches patients with appropriate healthcare providers while maintaining strict security and reliability standards.",
    technologies: ["React", "Django", "PostgreSQL", "REST APIs", "Azure"],
    approach: [
      "Comprehensive project management for healthcare compliance",
      "AI algorithm development for patient-provider matching",
      "Thorough testing and quality assurance for healthcare standards",
      "Secure and reliable architecture design"
    ],
    features: [
      "AI-powered patient-provider matching",
      "Secure healthcare data management",
      "Professional networking tools",
      "Appointment scheduling system",
      "Healthcare analytics dashboard"
    ],
    gallery: [],
    detailedMetrics: [
      {
        label: "Matching Accuracy",
        value: "94%",
        description: "AI matching accuracy for patient-provider connections"
      },
      {
        label: "Platform Security",
        value: "100%",
        description: "HIPAA compliance and security standards met"
      },
      {
        label: "Provider Network",
        value: "500+",
        description: "Healthcare providers in the network"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Redux", "CSS3", "HTML5"]
      },
      {
        category: "Backend",
        technologies: ["Django", "Python", "PostgreSQL", "REST APIs"]
      },
      {
        category: "Cloud & AI",
        technologies: ["Azure", "AI Matching Algorithms"]
      }
    ],
    metrics: {
      "Timeline": "3.5 months",
      "Team Size": "5 members",
      "Security Compliance": "100%"
    },
    testimonial: "The platform was thoughtfully developed to ensure patient-provider matching worked reliably and securely.",
    extendedTestimonial: {
      quote: "The platform was thoughtfully developed to ensure patient-provider matching worked reliably and securely. The AI-powered matching has revolutionized how we connect patients with the right healthcare providers.",
      author: "Healthcare Technology Director",
      position: "Technology Director",
      company: "Mediverse Connect AI"
    }
  }
];