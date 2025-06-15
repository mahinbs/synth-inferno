
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRoutePreloading } from '@/hooks/useRoutePreloading';

interface ServiceCardActionButtonsProps {
  learnMorePath: string;
  serviceTitle: string;
}

const ServiceCardActionButtons = memo(({ learnMorePath, serviceTitle }: ServiceCardActionButtonsProps) => {
  const { preloadRoute, cancelPreload } = useRoutePreloading();

  const handleMouseEnter = () => {
    preloadRoute(learnMorePath, 300);
  };

  const handleMouseLeave = () => {
    cancelPreload(learnMorePath);
  };

  return (
    <div className="flex space-x-4 pt-4">
      <Link
        to={learnMorePath}
        className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Learn more about ${serviceTitle}`}
      >
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <button className="px-6 py-3 rounded-xl border border-blue-300/60 text-blue-700 hover:bg-blue-50/80 transition-all duration-300 font-medium backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Get Quote
      </button>
    </div>
  );
});

ServiceCardActionButtons.displayName = 'ServiceCardActionButtons';
export default ServiceCardActionButtons;
