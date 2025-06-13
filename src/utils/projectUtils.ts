
import { Service, Project } from '@/data/projects';

// Flatten all projects from all services into a single array
export const getAllProjects = (services: Service[]): Project[] => {
  return services.flatMap(service => service.projects);
};

// Get projects by service ID
export const getProjectsByService = (services: Service[], serviceId: string): Project[] => {
  const service = services.find(s => s.id === serviceId);
  return service ? service.projects : [];
};

// Get project by ID from all services
export const getProjectById = (services: Service[], projectId: string): Project | undefined => {
  const allProjects = getAllProjects(services);
  return allProjects.find(project => project.id === projectId);
};

// Get featured projects (limit to specific number)
export const getFeaturedProjects = (services: Service[], limit: number = 6): Project[] => {
  const allProjects = getAllProjects(services);
  return allProjects.slice(0, limit);
};
