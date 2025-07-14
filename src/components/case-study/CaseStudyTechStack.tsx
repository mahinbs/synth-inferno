import { Project } from '@/data/projects';

interface CaseStudyTechStackProps {
  project: Project;
}

const getTechStackTitle = (projectType?: string) => {
  switch (projectType) {
    case 'saas':
      return 'SaaS Tech Stack';
    case 'mobile':
      return 'Mobile Tech Stack';
    case 'web':
      return 'Web Development Stack';
    case 'ai':
      return 'AI/ML Tech Stack';
    case 'arvr':
      return 'AR/VR Development Stack';
    case 'iot':
      return 'IoT Tech Stack';
    default:
      return 'Technology Stack';
  }
};

const CaseStudyTechStack = ({ project }: CaseStudyTechStackProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {getTechStackTitle(project.projectType)}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {project.techStack.map((stack, index) => (
              <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:border-cyan-400/30 transition-colors">
                <h4 className="text-cyan-400 font-semibold mb-4 text-lg">{stack.category}</h4>
                <div className="space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTechStack;