import { portfolioProjectsData } from '@/data/portfolioProjects';
import { adminDataService } from './adminDataService';

export const portfolioImportService = {
  importAllProjects: async () => {
    console.log('PortfolioImportService - Starting import of', portfolioProjectsData.length, 'projects...');
    
    const results = {
      success: [] as string[],
      failures: [] as { title: string; error: string }[]
    };

    for (const project of portfolioProjectsData) {
      try {
        console.log('PortfolioImportService - Importing:', project.title);
        const savedProject = await adminDataService.saveProject(project);
        results.success.push(savedProject.title);
        console.log('PortfolioImportService - Successfully imported:', savedProject.title);
      } catch (error) {
        console.error('PortfolioImportService - Failed to import:', project.title, error);
        results.failures.push({
          title: project.title,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    console.log('PortfolioImportService - Import completed.');
    console.log('Success:', results.success.length, 'projects');
    console.log('Failures:', results.failures.length, 'projects');
    
    return results;
  },

  importProjectByTitle: async (title: string) => {
    const project = portfolioProjectsData.find(p => p.title === title);
    if (!project) {
      throw new Error(`Project with title "${title}" not found in import data`);
    }

    console.log('PortfolioImportService - Importing single project:', title);
    return await adminDataService.saveProject(project);
  },

  getAvailableProjects: () => {
    return portfolioProjectsData.map(project => ({
      title: project.title,
      serviceId: project.serviceId,
      industry: project.industry,
      timeline: project.timeline
    }));
  }
};