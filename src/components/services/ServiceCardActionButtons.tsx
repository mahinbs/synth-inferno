
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
        className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl glass-button transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Learn more about ${serviceTitle}`}
      >
        <span className="glass-text-accent">Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <button className="px-6 py-3 rounded-xl glass-button transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <span className="glass-text-accent">Get Quote</span>
      </button>
    </div>
  );
});

ServiceCardActionButtons.displayName = 'ServiceCardActionButtons';
export default ServiceCardActionButtons;
