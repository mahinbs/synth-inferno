
import { Award, TrendingUp, Users } from 'lucide-react';

interface PortfolioHeroProps {
  totalProjects: number;
}

const PortfolioHero = ({ totalProjects }: PortfolioHeroProps) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Light Background with Subtle Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the innovative solutions we've delivered for our clients. Each project showcases our commitment to excellence and cutting-edge technology.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700 font-semibold">{totalProjects}+ Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <span className="text-gray-700 font-semibold">98% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-purple-600" />
              <span className="text-gray-700 font-semibold">50+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
