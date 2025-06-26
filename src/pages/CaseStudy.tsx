
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudyLoading from '@/components/case-study/CaseStudyLoading';
import CaseStudyComponents from '@/components/case-study/CaseStudyComponents';
import CaseStudyErrorBoundary from '@/components/case-study/CaseStudyErrorBoundary';
import { getProjectSummary, loadFullProject, clearProjectCache } from '@/services/projectService';
import { onProjectsChange } from '@/services/caseStudyDataService';
import { Project } from '@/data/projects';

const CaseStudy = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    const loadProject = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Try to get project summary for immediate render
        const summary = await getProjectSummary(projectId);
        if (!summary) {
          setNotFound(true);
          setIsLoading(false);
          return;
        }

        // Load full project data
        const fullProject = await loadFullProject(projectId);
        if (fullProject) {
          setProject(fullProject);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error('Error loading project:', err);
        setError('Failed to load project data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();

    // Listen for data changes
    const cleanup = onProjectsChange(() => {
      clearProjectCache();
      loadProject();
    });

    return cleanup;
  }, [projectId]);

  // Handle error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error Loading Project</h1>
          <p className="text-gray-400 mb-8">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/portfolio" replace />;
  }

  if (isLoading || !project) {
    return <CaseStudyLoading />;
  }

  return (
    <CaseStudyErrorBoundary>
      <div className="min-h-screen bg-black">
        <Header />
        <CaseStudyComponents project={project} />
        <Footer />
      </div>
    </CaseStudyErrorBoundary>
  );
};

export default CaseStudy;
