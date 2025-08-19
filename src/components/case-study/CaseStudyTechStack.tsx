import { Project } from '@/data/projects';
interface CaseStudyTechStackProps {
  project: Project & { projectType?: 'saas' | 'mobile' | 'web' | 'ai' | 'arvr' | 'iot' };
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
const CaseStudyTechStack = ({
  project
}: CaseStudyTechStackProps) => {
  return (
    <div>
      <h3>{getTechStackTitle(project.projectType)}</h3>
      {/* Tech stack content will be implemented later */}
    </div>
  );
};
export default CaseStudyTechStack;