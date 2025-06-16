
import { Project } from '../projects';

export const salesForceProjects: Project[] = [
  {
    id: 'enterprise-crm-transformation',
    title: 'Enterprise CRM Transformation',
    client: 'Global Manufacturing Corp',
    description: 'Complete Salesforce implementation with custom workflows, advanced analytics, and multi-region sales automation.',
    technologies: ['Salesforce', 'Apex', 'Lightning', 'Pardot', 'MuleSoft'],
    metrics: { leads: '+400%', conversion: '+150%', efficiency: '+200%', revenue: '$50M+' },
    timeline: '24 weeks',
    team: '12 consultants',
    industry: 'Manufacturing',
    testimonial: 'Transformed our entire sales process. ROI was evident within the first quarter.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'sales-force',
    liveUrl: 'https://globalmanufacturing.my.salesforce.com',
    challenge: 'Global Manufacturing Corp had fragmented sales processes across multiple regions, poor lead tracking, and no unified view of customer interactions, resulting in lost opportunities and inefficient sales cycles.',
    solution: 'We implemented a comprehensive Salesforce solution with custom automation workflows, territory management, advanced analytics dashboards, and integrated marketing automation to streamline their global sales operations.',
    approach: [
      'Conducted comprehensive sales process audit across all regions',
      'Designed custom Salesforce architecture for multi-region operations',
      'Implemented advanced lead scoring and automated nurturing workflows',
      'Built custom Lightning components for industry-specific needs',
      'Integrated with existing ERP and marketing automation systems',
      'Provided comprehensive training and change management support'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Lead Generation', value: '+400%', description: 'Increase in qualified lead generation through automated processes' },
      { label: 'Conversion Rate', value: '+150%', description: 'Improvement in lead-to-customer conversion rates' },
      { label: 'Sales Efficiency', value: '+200%', description: 'Increase in sales team productivity and efficiency' },
      { label: 'Revenue Impact', value: '$50M+', description: 'Additional revenue generated in first year post-implementation' }
    ],
    techStack: [
      { category: 'Platform', technologies: ['Salesforce Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Einstein Analytics'] },
      { category: 'Development', technologies: ['Apex', 'Lightning Web Components', 'SOQL', 'REST APIs'] },
      { category: 'Integration', technologies: ['MuleSoft', 'Heroku', 'Data Loader', 'Workbench'] },
      { category: 'Automation', technologies: ['Process Builder', 'Flow', 'Workflow Rules', 'Approval Processes'] }
    ],
    features: [
      'Multi-region territory and quota management',
      'Automated lead scoring and routing',
      'Custom dashboards and analytics',
      'Integrated email marketing campaigns',
      'Mobile sales app for field representatives',
      'Custom product configurator',
      'Automated proposal and contract generation',
      'Advanced reporting and forecasting'
    ],
    extendedTestimonial: {
      quote: 'The Salesforce implementation has revolutionized our sales operations globally. We now have complete visibility into our sales pipeline, and our teams are more productive than ever. The ROI exceeded our expectations.',
      author: 'Robert Davis',
      position: 'VP of Global Sales',
      company: 'Global Manufacturing Corp'
    }
  },
  {
    id: 'healthcare-patient-management',
    title: 'Healthcare Patient Management System',
    client: 'MedCare Health Network',
    description: 'Salesforce Health Cloud implementation for patient relationship management, care coordination, and HIPAA-compliant communications.',
    technologies: ['Health Cloud', 'Shield', 'Community Cloud', 'Einstein', 'HL7'],
    metrics: { satisfaction: '+85%', efficiency: '+120%', coordination: '+90%', compliance: '100%' },
    timeline: '18 weeks',
    team: '8 consultants',
    industry: 'Healthcare',
    testimonial: 'Game-changing patient care coordination. Our patient satisfaction scores have never been higher.',
    clientLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    serviceId: 'sales-force',
    liveUrl: 'https://medcare.my.salesforce.com',
    challenge: 'MedCare Health Network struggled with fragmented patient data across multiple systems, poor care coordination between departments, and compliance challenges with HIPAA regulations.',
    solution: 'We implemented Salesforce Health Cloud with custom patient journey mapping, care team collaboration tools, and comprehensive compliance frameworks to create a unified patient experience.',
    approach: [
      'Analyzed existing patient care workflows and data sources',
      'Designed HIPAA-compliant Health Cloud architecture',
      'Implemented patient 360-degree view with care timeline',
      'Built custom care plan templates and coordination workflows',
      'Integrated with existing EMR and billing systems',
      'Established comprehensive security and compliance protocols'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    detailedMetrics: [
      { label: 'Patient Satisfaction', value: '+85%', description: 'Improvement in patient satisfaction scores' },
      { label: 'Care Efficiency', value: '+120%', description: 'Increase in care team productivity and response times' },
      { label: 'Care Coordination', value: '+90%', description: 'Improvement in inter-department care coordination' },
      { label: 'HIPAA Compliance', value: '100%', description: 'Full compliance with HIPAA and healthcare regulations' }
    ],
    techStack: [
      { category: 'Platform', technologies: ['Salesforce Health Cloud', 'Shield Platform Encryption', 'Community Cloud', 'Einstein Analytics'] },
      { category: 'Healthcare', technologies: ['HL7 FHIR', 'Patient Data Model', 'Care Plans', 'Clinical Data'] },
      { category: 'Security', technologies: ['Field Audit Trail', 'Platform Encryption', 'Shield', 'SSO'] },
      { category: 'Integration', technologies: ['MuleSoft', 'REST APIs', 'SOAP APIs', 'Bulk API'] }
    ],
    features: [
      'Comprehensive patient 360-degree view',
      'Care team collaboration and communication',
      'Automated care plan management',
      'Patient portal with secure messaging',
      'Clinical data integration and analytics',
      'Appointment scheduling and reminders',
      'Insurance verification and billing integration',
      'Compliance monitoring and audit trails'
    ],
    extendedTestimonial: {
      quote: 'The Health Cloud implementation has transformed how we deliver patient care. Our care teams are more coordinated, patients are more engaged, and we\'ve achieved unprecedented levels of operational efficiency.',
      author: 'Dr. Lisa Thompson',
      position: 'Chief Medical Officer',
      company: 'MedCare Health Network'
    }
  }
];
