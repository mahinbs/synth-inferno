
import { memo } from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCardActionButtons = memo(() => {
  return (
    <div className="flex space-x-4 pt-4">
      <button className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
      <button className="px-6 py-3 rounded-xl border border-blue-300/60 text-blue-700 hover:bg-blue-50/80 transition-all duration-300 font-medium backdrop-blur-sm">
        Get Quote
      </button>
    </div>
  );
});

ServiceCardActionButtons.displayName = 'ServiceCardActionButtons';
export default ServiceCardActionButtons;
