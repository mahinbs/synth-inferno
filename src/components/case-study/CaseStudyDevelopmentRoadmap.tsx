import { Project } from '@/data/projects';
import { CheckCircle } from 'lucide-react';

interface CaseStudyDevelopmentRoadmapProps {
  project: Project & { projectType?: 'saas' | 'mobile' | 'web' | 'ai' | 'arvr' | 'iot' };
}

const getDevelopmentSteps = (projectType?: string) => {
  switch (projectType) {
    case 'saas':
      return [
        'Discovery & Market Research',
        'Product Architecture & Technical Planning',
        'MVP Development & Core Features',
        'Backend API & Database Design',
        'Frontend Development & User Experience',
        'Integration & Third-party Services',
        'Security Implementation & Compliance',
        'Testing & Quality Assurance',
        'Deployment & Infrastructure Setup',
        'Analytics & Performance Monitoring',
        'User Feedback & Iteration',
        'Scale & Growth Optimization'
      ];
    case 'mobile':
      return [
        'Mobile App Planning & Strategy',
        'UI/UX Design & Prototyping',
        'Native/Cross-platform Development',
        'Backend API Integration',
        'Offline Functionality & Data Sync',
        'Push Notifications & Real-time Features',
        'Device Testing & Performance Optimization',
        'App Store Preparation & Guidelines',
        'Beta Testing & User Feedback',
        'App Store Deployment & Launch',
        'Post-launch Monitoring & Analytics',
        'Updates & Feature Enhancement'
      ];
    case 'web':
      return [
        'Web Strategy & Technical Planning',
        'Modern Architecture & Framework Selection',
        'Responsive Design & User Experience',
        'Frontend Development & Optimization',
        'Backend API & Database Development',
        'Performance Optimization & SEO',
        'Security Implementation & Best Practices',
        'Cross-browser Testing & Validation',
        'Cloud Deployment & Infrastructure',
        'Analytics & Conversion Tracking',
        'Launch & Go-live Support',
        'Maintenance & Continuous Improvement'
      ];
    case 'ai':
      return [
        'AI Use Case Analysis & Data Assessment',
        'Model Architecture & Algorithm Selection',
        'Data Collection & Preprocessing Pipeline',
        'Model Training & Hyperparameter Tuning',
        'Model Validation & Performance Testing',
        'MLOps Pipeline & Automation Setup',
        'API Development & Integration',
        'Real-time Inference & Edge Deployment',
        'Monitoring & Model Drift Detection',
        'Production Deployment & Scaling',
        'Performance Analytics & Optimization',
        'Continuous Learning & Model Updates'
      ];
    case 'arvr':
      return [
        'Concept Development & Use Case Definition',
        'User Research & Spatial Experience Mapping',
        'Technical Architecture & Platform Selection',
        '3D Asset Design & Environment Modeling',
        'Engine Setup & Core Scene Development',
        'Interaction Design (Gestures, Gaze, Haptics)',
        'AR/VR SDK Integration & Platform Setup',
        'AI Integration (NPCs, Voice, Vision)',
        'Multiplayer/Networking Implementation',
        'Device Testing & Performance Optimization',
        'Cross-Platform Build & Deployment',
        'Analytics & Continuous Updates'
      ];
    case 'iot':
      return [
        'IoT Strategy & Hardware Requirements',
        'Sensor Integration & Device Setup',
        'Edge Computing & Data Processing',
        'Cloud Infrastructure & Connectivity',
        'Real-time Data Pipeline Development',
        'Device Management & Security',
        'Dashboard & Analytics Development',
        'Automation & Rule Engine',
        'Testing & Quality Assurance',
        'Deployment & Network Setup',
        'Monitoring & Predictive Analytics',
        'Maintenance & System Optimization'
      ];
    default:
      return [
        'Discovery & Requirements Analysis',
        'Technical Architecture & Planning',
        'Design & User Experience',
        'Core Development & Implementation',
        'Integration & Testing',
        'Quality Assurance & Optimization',
        'Deployment & Launch',
        'Monitoring & Support'
      ];
  }
};

const getRoadmapTitle = (projectType?: string) => {
  switch (projectType) {
    case 'saas':
      return 'SaaS Development Roadmap';
    case 'mobile':
      return 'Mobile Development Lifecycle';
    case 'web':
      return 'Web Development Process';
    case 'ai':
      return 'AI/ML Development Pipeline';
    case 'arvr':
      return 'AR/VR Development Journey';
    case 'iot':
      return 'IoT Development Roadmap';
    default:
      return 'Development Roadmap';
  }
};

const CaseStudyDevelopmentRoadmap = ({ project }: CaseStudyDevelopmentRoadmapProps) => {
  const steps = getDevelopmentSteps(project.projectType);
  const title = getRoadmapTitle(project.projectType);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {title}
          </h2>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:border-cyan-400/30 transition-colors">
                <div className="bg-cyan-500/10 w-10 h-10 rounded-full flex items-center justify-center border border-cyan-400/30 flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">{step}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-400" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
              <p className="text-gray-300 text-lg mb-4">
                Ready to start your {project.projectType || 'development'} project?
              </p>
              <a
                href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDevelopmentRoadmap;