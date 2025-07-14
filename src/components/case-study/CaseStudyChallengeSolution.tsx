import { Project } from '@/data/projects';

interface CaseStudyChallengeSolutionProps {
  project: Project;
}

const CaseStudyChallengeSolution = ({ project }: CaseStudyChallengeSolutionProps) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Challenge & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solution</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Challenge */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.features.map((feature, index) => (
                  <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      </div>
                      <div className="text-cyan-400 font-semibold">Feature {index + 1}</div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyChallengeSolution;