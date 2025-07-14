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
const CaseStudyTechStack = ({
  project
}: CaseStudyTechStackProps) => {
  return;
};
export default CaseStudyTechStack;