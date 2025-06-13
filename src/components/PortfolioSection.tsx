import { useState, useEffect } from 'react';
import { getPortfolioData } from '@/services/portfolioDataService';
import PortfolioHeader from './portfolio/PortfolioHeader';
import ServiceFilter from './portfolio/ServiceFilter';
import ProjectGrid from './portfolio/ProjectGrid';
import PortfolioCTA from './portfolio/PortfolioCTA';
import { Service } from '@/data/projects';

const PortfolioSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Load data when component mounts
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        console.log('PortfolioSection - Starting to load portfolio data...');
        setLoading(true);
        const data = await getPortfolioData();
        console.log('PortfolioSection - Portfolio data loaded:', data);
        
        // Log the total number of projects
        const totalProjects = data.reduce((total, service) => total + service.projects.length, 0);
        console.log(`PortfolioSection - Total projects loaded: ${totalProjects}`);
        
        // Check specifically for Crave Kitchen
        const allProjects = data.flatMap(service => service.projects);
        const craveKitchenProject = allProjects.find(p => p.title.toLowerCase().includes('crave kitchen'));
        if (craveKitchenProject) {
          console.log('PortfolioSection - ✅ Crave Kitchen found in loaded data');
        } else {
          console.log('PortfolioSection - ❌ Crave Kitchen NOT found in loaded data');
        }
        
        setServices(data);
      } catch (error) {
        console.error('PortfolioSection - Error loading portfolio data:', error);
        // Keep existing static data as fallback
        setServices([]);
      } finally {
        setLoading(false);
        console.log('PortfolioSection - Loading completed');
      }
    };

    loadPortfolioData();
  }, []);

  const handleProjectClick = (projectId: string) => {
    console.log('PortfolioSection - Project clicked:', projectId);
    window.location.href = `/case-study/${projectId}`;
  };

  // Log whenever services state changes
  useEffect(() => {
    console.log('PortfolioSection - Services state updated:', services.length, 'services');
    services.forEach((service, index) => {
      console.log(`  Service ${index + 1}: ${service.title} (${service.projects.length} projects)`);
    });
  }, [services]);

  return (
    <section 
      id="portfolio"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <PortfolioHeader isVisible={isVisible} setIsVisible={setIsVisible} />
        
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <ServiceFilter 
              services={services} 
              selectedService={selectedService} 
              setSelectedService={setSelectedService}
              isVisible={isVisible}
            />
            <ProjectGrid 
              services={services}
              selectedService={selectedService}
              isVisible={isVisible}
              handleProjectClick={handleProjectClick}
            />
          </>
        )}
        
        <PortfolioCTA isVisible={isVisible} />
      </div>
    </section>
  );
};

export default PortfolioSection;
