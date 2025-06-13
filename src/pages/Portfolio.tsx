
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioServiceFilter from '@/components/portfolio/PortfolioServiceFilter';
import PortfolioProjectsGrid from '@/components/portfolio/PortfolioProjectsGrid';
import PortfolioCTASection from '@/components/portfolio/PortfolioCTASection';
import { getPortfolioData } from '@/services/portfolioDataService';
import { Service } from '@/data/projects';

const Portfolio = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Load data when component mounts
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        console.log('Portfolio Page - Starting to load portfolio data...');
        setLoading(true);
        const data = await getPortfolioData();
        console.log('Portfolio Page - Portfolio data loaded:', data);
        
        // Log the total number of projects
        const totalProjects = data.reduce((total, service) => total + service.projects.length, 0);
        console.log(`Portfolio Page - Total projects loaded: ${totalProjects}`);
        
        // Check specifically for Crave Kitchen
        const allProjects = data.flatMap(service => service.projects);
        const craveKitchenProject = allProjects.find(p => p.title.toLowerCase().includes('crave kitchen'));
        if (craveKitchenProject) {
          console.log('Portfolio Page - ✅ Crave Kitchen found in loaded data');
        } else {
          console.log('Portfolio Page - ❌ Crave Kitchen NOT found in loaded data');
        }
        
        setServices(data);
      } catch (error) {
        console.error('Portfolio Page - Error loading portfolio data:', error);
        setServices([]);
      } finally {
        setLoading(false);
        console.log('Portfolio Page - Loading completed');
      }
    };

    loadPortfolioData();
    
    // Listen for storage changes (when admin adds/edits projects)
    window.addEventListener('storage', loadPortfolioData);
    
    // Also refresh on focus (for same-tab updates)
    window.addEventListener('focus', loadPortfolioData);

    return () => {
      window.removeEventListener('storage', loadPortfolioData);
      window.removeEventListener('focus', loadPortfolioData);
    };
  }, []);

  const handleProjectClick = (projectId: string) => {
    window.location.href = `/case-study/${projectId}`;
  };

  const totalProjects = services.reduce((total, service) => total + service.projects.length, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-900">Loading portfolio...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <PortfolioHero totalProjects={totalProjects} />

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Light Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <PortfolioServiceFilter 
            services={services}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            totalProjects={totalProjects}
          />
          
          <PortfolioProjectsGrid 
            services={services}
            selectedService={selectedService}
            handleProjectClick={handleProjectClick}
          />
          
          <PortfolioCTASection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
