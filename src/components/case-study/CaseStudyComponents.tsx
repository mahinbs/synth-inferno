
import { Project } from '@/data/projects';
import CaseStudyHero from './CaseStudyHero';
import CaseStudyChallengeSolution from './CaseStudyChallengeSolution';
import CaseStudyTechStack from './CaseStudyTechStack';
import CaseStudyWhyChooseUs from './CaseStudyWhyChooseUs';
import CaseStudyDevelopmentRoadmap from './CaseStudyDevelopmentRoadmap';
import CaseStudyResults from './CaseStudyResults';
import CaseStudyGallery from './CaseStudyGallery';
import CaseStudyErrorBoundary from './CaseStudyErrorBoundary';

interface CaseStudyComponentsProps {
  project: Project;
}

const CaseStudyComponents = ({ project }: CaseStudyComponentsProps) => {
  const SectionErrorFallback = ({ sectionName }: { sectionName: string }) => (
    <div className="py-12 bg-gray-800/50 border border-gray-700/30 rounded-lg m-6">
      <div className="text-center text-gray-400">
        <p>Unable to load {sectionName} section</p>
        <p className="text-sm mt-2">Please refresh the page to try again</p>
      </div>
    </div>
  );

  return (
    <>
      <CaseStudyErrorBoundary fallback={<SectionErrorFallback sectionName="Hero" />}>
        <CaseStudyHero project={project} />
      </CaseStudyErrorBoundary>
      
      <CaseStudyErrorBoundary fallback={<SectionErrorFallback sectionName="Challenge & Solution" />}>
        <CaseStudyChallengeSolution project={project} />
      </CaseStudyErrorBoundary>
      
      <CaseStudyErrorBoundary fallback={<SectionErrorFallback sectionName="Tech Stack" />}>
        <CaseStudyTechStack project={project} />
      </CaseStudyErrorBoundary>
      
      <CaseStudyErrorBoundary fallback={<SectionErrorFallback sectionName="Why Choose Us" />}>
        <CaseStudyWhyChooseUs project={project} />
      </CaseStudyErrorBoundary>
      
      <CaseStudyErrorBoundary fallback={<SectionErrorFallback sectionName="Development Roadmap" />}>
        <CaseStudyDevelopmentRoadmap project={project} />
      </CaseStudyErrorBoundary>
      
      <CaseStudyErrorBoundary fallback={<SectionErrorFallback sectionName="Results" />}>
        <CaseStudyResults project={project} />
      </CaseStudyErrorBoundary>
      
      <CaseStudyErrorBoundary fallback={<SectionErrorFallback sectionName="Gallery" />}>
        <CaseStudyGallery project={project} />
      </CaseStudyErrorBoundary>
    </>
  );
};

export default CaseStudyComponents;
