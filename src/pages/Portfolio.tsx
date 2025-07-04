
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioServiceFilter from '@/components/portfolio/PortfolioServiceFilter';
import PortfolioProjectsGrid from '@/components/portfolio/PortfolioProjectsGrid';
import PortfolioCTASection from '@/components/portfolio/PortfolioCTASection';
import FloatingChatbot from '@/components/chatbot/FloatingChatbot';
import { getPortfolioData } from '@/services/portfolioDataService';
import { Service } from '@/data/projects';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

const Portfolio = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize performance optimizations
  usePerformanceOptimization();

  // Load data when component mounts
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        console.log('Portfolio Page - Starting to load portfolio data...');
        setLoading(true);
        setError(null);
        
        const data = await getPortfolioData();
        console.log('Portfolio Page - Portfolio data loaded successfully:', data.length, 'services');
        
        if (data && data.length > 0) {
          setServices(data);
        } else {
          console.warn('Portfolio Page - No data received');
          setServices([]);
        }
      } catch (error) {
        console.error('Portfolio Page - Error loading portfolio data:', error);
        setError('Failed to load portfolio data');
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

  const handleShowWebProjects = () => {
    setSelectedService('web-apps');
    // Scroll to projects grid
    const projectsSection = document.querySelector('#projects-grid');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactHuman = () => {
    // Scroll to contact section or CTA
    const contactSection = document.getElementById('contact');
    const ctaSection = document.querySelector('.portfolio-cta');
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Navigate to home page contact section
      window.location.href = '/#contact';
    }
  };

  // Calculate total projects only from services that have projects
  const totalProjects = services
    .filter(service => service.projects.length > 0)
    .reduce((total, service) => total + service.projects.length, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading our amazing portfolio...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-red-500 mb-4 text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <p>{error}</p>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <PortfolioHero totalProjects={totalProjects} />

      {/* Portfolio Grid */}
      <section id="projects-grid" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Light Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          {services.length > 0 ? (
            <>
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
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-4">No projects available at the moment.</p>
              <p className="text-sm text-gray-500">Please check back later for exciting updates!</p>
            </div>
          )}
          
          <div className="portfolio-cta">
            <PortfolioCTASection />
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating Chatbot - Load only after initial render */}
      <FloatingChatbot 
        onShowWebProjects={handleShowWebProjects}
        onContactHuman={handleContactHuman}
      />
    </div>
  );
};

export default Portfolio;
