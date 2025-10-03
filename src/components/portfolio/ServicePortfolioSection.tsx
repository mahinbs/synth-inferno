import { useState, useEffect } from 'react';
import { getPortfolioData } from '@/services/portfolioDataService';
import ProjectCard from './ProjectCard';
import { Service } from '@/data/projects';
import { Code } from 'lucide-react';

interface ServicePortfolioSectionProps {
  serviceId: string;
  serviceTitle: string;
  serviceColor: 'cyan' | 'blue' | 'pink' | 'purple' | 'green';
}

const ServicePortfolioSection = ({ serviceId, serviceTitle, serviceColor }: ServicePortfolioSectionProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await getPortfolioData();
        
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error('Error loading portfolio data:', error);
        setError('Failed to load portfolio data');
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  const handleProjectClick = (projectId: string) => {
    console.log('ServicePortfolioSection - Project clicked:', projectId);
    window.location.href = `/case-study/${projectId}`;
  };

  // Get the specific service data
  const currentService = services.find(service => service.id === serviceId);
  const projects = currentService?.projects || [];

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">Loading our amazing {serviceTitle} projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-red-500 mb-4">⚠️ {error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our {serviceTitle} Portfolio</h2>
            <p className="text-gray-600 mb-4">No {serviceTitle.toLowerCase()} projects available at the moment.</p>
            <p className="text-sm text-gray-500">Please check back later for our latest work.</p>
          </div>
        </div>
      </section>
    );
  }

  const colorClasses = {
    cyan: {
      border: 'border-cyan-400/30',
      gradient: 'from-cyan-400/10 to-cyan-600/10',
      icon: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/30',
      text: 'text-cyan-400',
      button: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/30',
      tag: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
    },
    blue: {
      border: 'border-blue-400/30',
      gradient: 'from-blue-400/10 to-blue-600/10',
      icon: 'bg-blue-500/10 text-blue-400 border-blue-400/30',
      text: 'text-blue-400',
      button: 'bg-blue-500/20 border-blue-400/30 text-blue-400 hover:bg-blue-500/30',
      tag: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    },
    pink: {
      border: 'border-pink-400/30',
      gradient: 'from-pink-400/10 to-pink-600/10',
      icon: 'bg-pink-500/10 text-pink-400 border-pink-400/30',
      text: 'text-pink-400',
      button: 'bg-pink-500/20 border-pink-400/30 text-pink-400 hover:bg-pink-500/30',
      tag: 'bg-pink-500/20 text-pink-300 border-pink-500/30'
    },
    purple: {
      border: 'border-purple-400/30',
      gradient: 'from-purple-400/10 to-purple-600/10',
      icon: 'bg-purple-500/10 text-purple-400 border-purple-400/30',
      text: 'text-purple-400',
      button: 'bg-purple-500/20 border-purple-400/30 text-purple-400 hover:bg-purple-500/30',
      tag: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    },
    green: {
      border: 'border-green-400/30',
      gradient: 'from-green-400/10 to-green-600/10',
      icon: 'bg-green-500/10 text-green-400 border-green-400/30',
      text: 'text-green-400',
      button: 'bg-green-500/20 border-green-400/30 text-green-400 hover:bg-green-500/30',
      tag: 'bg-green-500/20 text-green-300 border-green-500/30'
    }
  };

  const colors = colorClasses[serviceColor];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our {serviceTitle} Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful {serviceTitle.toLowerCase()} projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              service={currentService!}
              colors={colors}
              ServiceIcon={Code} // You can customize this based on service
              isVisible={true}
              handleProjectClick={handleProjectClick}
              animationDelay={index * 150}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your {serviceTitle} Project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/portfolio'}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                View All Projects
              </button>
              <button
                onClick={() => window.location.href = '/#contact'}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolioSection;

