
import { projectsData, Service, Project } from '@/data/projects';
import { adminDataService } from './adminDataService';

export const getCombinedProjects = async (): Promise<Project[]> => {
  try {
    // Get admin projects from database
    const adminProjects = await adminDataService.getProjects();
    
    // Filter out the Crave Kitchen portfolio item
    const filteredAdminProjects = adminProjects.filter(
      project => project.id !== "1fdcbf8a-8a59-4c64-8a39-3b38ab9671ef"
    );
    
    // Get all static projects from all services
    const staticProjects = projectsData.flatMap(service => service.projects);
    
    // Combine and return all projects
    return [...staticProjects, ...filteredAdminProjects];
  } catch (error) {
    console.error('CaseStudyDataService - Error getting combined projects:', error);
    // Return static data as fallback
    return projectsData.flatMap(service => service.projects);
  }
};

export const findProject = async (projectId: string): Promise<Project | null> => {
  try {
    const allProjects = await getCombinedProjects();
    return allProjects.find(project => project.id === projectId) || null;
  } catch (error) {
    console.error('CaseStudyDataService - Error finding project:', error);
    return null;
  }
};

// For real-time updates, we'll use Supabase subscriptions instead of localStorage events
export const onProjectsChange = (callback: () => void) => {
  console.log('CaseStudyDataService - Setting up real-time subscription for projects');
  
  // For now, just return a cleanup function
  // Real-time subscriptions can be added later if needed
  return () => {
    console.log('CaseStudyDataService - Cleanup function called');
  };
};
