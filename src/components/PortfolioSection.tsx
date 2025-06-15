
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
  const [error, setError] = useState<string | null>(null);

  // Load data when component mounts
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        console.log('PortfolioSection - Starting to load portfolio data...');
        setLoading(true);
        setError(null);
        
        const data = await getPortfolioData();
        console.log('PortfolioSection - Portfolio data loaded successfully:', data.length, 'services');
        
        if (data && data.length > 0) {
          setServices(data);
        } else {
          console.warn('PortfolioSection - No data received, setting empty array');
          setServices([]);
        }
      } catch (error) {
        console.error('PortfolioSection - Error loading portfolio data:', error);
        setError('Failed to load portfolio data');
        setServices([]); // Set empty array as fallback
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
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">Loading our amazing projects...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-red-500 mb-4">⚠️ {error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : services.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-gray-600 mb-4">No projects available at the moment.</p>
            <p className="text-sm text-gray-500">Please check back later.</p>
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
