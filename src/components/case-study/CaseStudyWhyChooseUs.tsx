import { Project } from '@/data/projects';
import { Award, Target, Zap, Shield, Users } from 'lucide-react';

interface CaseStudyWhyChooseUsProps {
  project: Project & { projectType?: 'saas' | 'mobile' | 'web' | 'ai' | 'arvr' | 'iot' };
}

const getWhyChooseUsContent = (projectType?: string) => {
  switch (projectType) {
    case 'saas':
      return {
        title: 'Why Choose Synth Inferno for SaaS Development',
        points: [
          { icon: Target, text: 'Product-market fit expertise and user research' },
          { icon: Zap, text: 'Scalable APIs and microservices architecture' },
          { icon: Shield, text: 'Enterprise security and compliance (SOC2, GDPR)' },
          { icon: Users, text: 'Real-time analytics and user behavior tracking' },
          { icon: Award, text: 'End-to-end SaaS deployment and optimization' }
        ]
      };
    case 'mobile':
      return {
        title: 'Why Choose Synth Inferno for Mobile Development',
        points: [
          { icon: Target, text: 'Native iOS and Android expertise' },
          { icon: Zap, text: 'Offline-first architecture and seamless sync' },
          { icon: Shield, text: 'App Store optimization and approval guidance' },
          { icon: Users, text: 'Cross-platform development with React Native/Flutter' },
          { icon: Award, text: 'Performance optimization and crash monitoring' }
        ]
      };
    case 'web':
      return {
        title: 'Why Choose Synth Inferno for Web Development',
        points: [
          { icon: Target, text: 'Modern framework expertise (React, Next.js, Vue)' },
          { icon: Zap, text: 'Performance optimization and Core Web Vitals' },
          { icon: Shield, text: 'Scalable cloud infrastructure and DevOps' },
          { icon: Users, text: 'Responsive design and accessibility compliance' },
          { icon: Award, text: 'SEO optimization and conversion tracking' }
        ]
      };
    case 'ai':
      return {
        title: 'Why Choose Dee&Cee Labs for AI/ML Development',
        points: [
          { icon: Target, text: 'Custom ML model development and training' },
          { icon: Zap, text: 'MLOps pipeline and automated model deployment' },
          { icon: Shield, text: 'Data privacy and ethical AI implementation' },
          { icon: Users, text: 'Real-time inference and edge computing' },
          { icon: Award, text: 'AI integration with existing systems' }
        ]
      };
    case 'arvr':
      return {
        title: 'Why Choose Dee&Cee Labs for AR/VR Development',
        points: [
          { icon: Target, text: 'Unity/Unreal expertise across XR platforms' },
          { icon: Zap, text: 'Immersive experience design for real business use cases' },
          { icon: Shield, text: 'AI-powered agents, gestures, and spatial UX' },
          { icon: Users, text: 'Cross-platform deployment (Meta, Vision Pro, WebXR)' },
          { icon: Award, text: 'Performance optimization and analytics integration' }
        ]
      };
    case 'iot':
      return {
        title: 'Why Choose Dee&Cee Labs for IoT Development',
        points: [
          { icon: Target, text: 'End-to-end IoT solution development' },
          { icon: Zap, text: 'Real-time data processing and edge computing' },
          { icon: Shield, text: 'IoT security and device management' },
          { icon: Users, text: 'Cloud integration and scalable infrastructure' },
          { icon: Award, text: 'Predictive analytics and automation' }
        ]
      };
    default:
      return {
        title: 'Why Choose Dee&Cee Labs',
        points: [
          { icon: Target, text: 'Proven expertise across multiple technologies' },
          { icon: Zap, text: 'Rapid development and deployment cycles' },
          { icon: Shield, text: 'Enterprise-grade security and scalability' },
          { icon: Users, text: 'Dedicated project management and support' },
          { icon: Award, text: 'Post-launch optimization and maintenance' }
        ]
      };
  }
};

const CaseStudyWhyChooseUs = ({ project }: CaseStudyWhyChooseUsProps) => {
  const content = getWhyChooseUsContent(project.projectType);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {content.title}
          </h2>

          <div className="space-y-6">
            {content.points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex items-center gap-4 bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                  <div className="bg-cyan-500/10 w-12 h-12 rounded-full flex items-center justify-center border border-cyan-400/30">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 text-lg">{point.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyWhyChooseUs;