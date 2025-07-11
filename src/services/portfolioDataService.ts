
import { projectsData, Service } from '@/data/projects';
import { adminDataService } from './adminDataService';
import { Code, Cloud, Brain, Smartphone, Zap } from 'lucide-react';

export const getPortfolioData = async (): Promise<Service[]> => {
  console.log('PortfolioDataService - Getting portfolio data...');
  
  try {
    // Start with static data as base (deep copy to avoid mutations)
    const combinedData = JSON.parse(JSON.stringify(projectsData)) as Service[];
    console.log('PortfolioDataService - Static services loaded:', combinedData.length);
    
    // Assign icons to all services first
    combinedData.forEach(service => {
      service.icon = getServiceIcon(service.id);
    });
    
    try {
      // Try to get admin projects with timeout
      const adminProjects = await Promise.race([
        adminDataService.getProjects(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Admin data timeout')), 5000)
        )
      ]) as any[];
      
      console.log('PortfolioDataService - Admin projects retrieved:', adminProjects.length);
      
      if (adminProjects && adminProjects.length > 0) {
        // Filter out specific portfolio items
        const filteredAdminProjects = adminProjects.filter(
          project => project.id !== "1fdcbf8a-8a59-4c64-8a39-3b38ab9671ef" && 
                     project.id !== "5ba46296-94a4-442b-97ad-c174d5e42665"
        );
        
        console.log('PortfolioDataService - Filtered admin projects:', filteredAdminProjects.length);
        
        // Group admin projects by service
        const adminProjectsByService = filteredAdminProjects.reduce((acc, project) => {
          if (!acc[project.serviceId]) {
            acc[project.serviceId] = [];
          }
          
          // Transform admin project to match expected format
          const transformedProject = {
            id: project.id,
            title: project.title || 'Untitled Project',
            description: project.description || 'No description available',
            image: project.image || '/placeholder.svg',
            industry: project.industry || 'Technology',
            client: project.client || 'Client',
            timeline: project.timeline || '3 months',
            team: project.team || '3 developers',
            technologies: project.technologies || [],
            metrics: project.metrics || {},
            testimonial: project.testimonial || 'Great project experience.',
            clientLogo: project.clientLogo || '/placeholder.svg',
            liveUrl: project.liveUrl || '',
            serviceId: project.serviceId,
            challenge: project.challenge || 'Challenge details coming soon...',
            solution: project.solution || 'Solution details coming soon...',
            approach: project.approach || [],
            gallery: project.gallery || [],
            detailedMetrics: project.detailedMetrics || [],
            techStack: project.techStack || [],
            features: project.features || [],
            extendedTestimonial: project.extendedTestimonial || {
              quote: project.testimonial || 'Great project experience.',
              author: 'Client Representative',
              position: 'Project Manager',
              company: project.client || 'Client Company'
            }
          };
          
          acc[project.serviceId].push(transformedProject);
          return acc;
        }, {} as Record<string, any[]>);
        
        // Add admin projects to existing services and create new services if needed
        const existingServiceIds = combinedData.map(s => s.id);
        const uniqueAdminServiceIds = [...new Set(filteredAdminProjects.map(p => p.serviceId))];
        
        // Create missing services
        uniqueAdminServiceIds.forEach(serviceId => {
          if (!existingServiceIds.includes(serviceId)) {
            let serviceTitle = serviceId;
            let serviceColor: 'cyan' | 'blue' | 'pink' | 'purple' | 'green' = 'blue';
            
            switch (serviceId) {
              case 'mobile-apps':
                serviceTitle = 'Mobile Applications';
                serviceColor = 'purple';
                break;
              case 'ai-automation':
                serviceTitle = 'AI Automation';
                serviceColor = 'green';
                break;
              default:
                serviceTitle = serviceId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            }
            
            combinedData.push({
              id: serviceId,
              icon: getServiceIcon(serviceId),
              title: serviceTitle,
              color: serviceColor,
              projects: []
            });
          }
        });
        
        // Add admin projects to services
        combinedData.forEach(service => {
          if (adminProjectsByService[service.id]) {
            service.projects = [...service.projects, ...adminProjectsByService[service.id]];
          }
        });
        
        console.log('PortfolioDataService - Combined data with admin projects ready');
      }
    } catch (adminError) {
      console.warn('PortfolioDataService - Admin data failed, using static data only:', adminError);
      // Continue with static data only
    }
    
    console.log('PortfolioDataService - Final data:', combinedData.map(s => ({ 
      id: s.id, 
      title: s.title, 
      projectCount: s.projects.length 
    })));
    
    return combinedData;
  } catch (error) {
    console.error('PortfolioDataService - Critical error, returning static fallback:', error);
    
    // Return static data with icons as ultimate fallback
    return projectsData.map(service => ({
      ...service,
      icon: getServiceIcon(service.id)
    }));
  }
};

const getServiceIcon = (serviceId: string) => {
  switch (serviceId) {
    case 'web-apps': return Code;
    case 'saas': return Cloud;
    case 'mobile-apps': return Smartphone;
    case 'ai-calling': return Brain;
    case 'ai-automation': return Zap;
    default: return Code;
  }
};
