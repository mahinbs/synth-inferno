import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import { Project } from '@/data/projects';
interface CaseStudyResultsProps {
  project: Project;
}
const CaseStudyResults = ({
  project
}: CaseStudyResultsProps) => {
  const iconMap = {
    0: TrendingUp,
    1: Users,
    2: Clock,
    3: Award
  };
  return <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Results & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Impact</span>
          </h2>

          {/* Detailed Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {project.detailedMetrics.map((metric, index) => {
            const Icon = iconMap[index as keyof typeof iconMap] || TrendingUp;
            return <div key={index} className="text-center">
                  <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                  <div className="text-white font-semibold mb-2">{metric.label}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{metric.description}</div>
                </div>;
          })}
          </div>

          {/* Features */}
          

          {/* Extended Testimonial */}
          
        </div>
      </div>
    </section>;
};
export default CaseStudyResults;