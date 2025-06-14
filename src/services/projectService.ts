
import { Project } from '@/data/projects';
import { findProject, getCombinedProjects } from './caseStudyDataService';

// Cache for loaded projects
const projectCache = new Map<string, Project>();

// Default project structure to ensure consistency
const getDefaultProjectStructure = (): Partial<Project> => ({
  techStack: [],
  gallery: [],
  features: [],
  approach: [],
  detailedMetrics: [],
  extendedTestimonial: {
    quote: '',
    author: '',
    position: '',
    company: ''
  },
  metrics: {},
  timeline: '',
  team: '',
  industry: '',
  clientLogo: '',
  testimonial: ''
});

// Validate and normalize project data
const normalizeProject = (project: Project): Project => {
  const defaults = getDefaultProjectStructure();
  
  return {
    ...defaults,
    ...project,
    // Ensure arrays are always arrays
    techStack: Array.isArray(project.techStack) ? project.techStack : [],
    gallery: Array.isArray(project.gallery) ? project.gallery : [],
    features: Array.isArray(project.features) ? project.features : [],
    approach: Array.isArray(project.approach) ? project.approach : [],
    detailedMetrics: Array.isArray(project.detailedMetrics) ? project.detailedMetrics : [],
    technologies: Array.isArray(project.technologies) ? project.technologies : [],
    // Ensure testimonial object exists
    extendedTestimonial: project.extendedTestimonial || defaults.extendedTestimonial,
    // Fallback for missing basic info
    timeline: project.timeline || 'Not specified',
    team: project.team || 'Not specified',
    industry: project.industry || 'Technology',
    clientLogo: project.clientLogo || 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    testimonial: project.testimonial || project.extendedTestimonial?.quote || 'Great project experience.'
  };
};

export const getProjectSummary = async (projectId: string) => {
  try {
    const project = await findProject(projectId);
    if (!project) return null;

    const normalized = normalizeProject(project);

    // Return minimal data for initial render
    return {
      id: normalized.id,
      title: normalized.title,
      client: normalized.client,
      description: normalized.description,
      image: normalized.image,
      industry: normalized.industry,
      clientLogo: normalized.clientLogo,
      metrics: normalized.metrics,
      timeline: normalized.timeline,
      team: normalized.team
    };
  } catch (error) {
    console.error('Error getting project summary:', error);
    return null;
  }
};

export const loadFullProject = async (projectId: string): Promise<Project | null> => {
  try {
    // Check cache first
    if (projectCache.has(projectId)) {
      return projectCache.get(projectId)!;
    }

    // Load from combined data (static + admin)
    const project = await findProject(projectId);

    if (project) {
      const normalized = normalizeProject(project);
      projectCache.set(projectId, normalized);
      return normalized;
    }

    return null;
  } catch (error) {
    console.error('Error loading full project:', error);
    return null;
  }
};

// Preload likely next projects
export const preloadProject = async (projectId: string) => {
  try {
    if (!projectCache.has(projectId)) {
      await loadFullProject(projectId);
    }
  } catch (error) {
    console.error('Error preloading project:', error);
  }
};

// Bulk preload for faster navigation
export const preloadMultipleProjects = async (projectIds: string[]) => {
  try {
    await Promise.all(projectIds.map(id => preloadProject(id)));
  } catch (error) {
    console.error('Error preloading multiple projects:', error);
  }
};

// Clear cache when needed
export const clearProjectCache = () => {
  projectCache.clear();
};
