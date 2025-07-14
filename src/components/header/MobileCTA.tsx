
import { openZohoForm } from '@/utils/zohoForm';

interface MobileCTAProps {
  onSmoothScroll: (href: string, sectionId: string) => void;
  onClose: () => void;
}

const MobileCTA = ({ onSmoothScroll, onClose }: MobileCTAProps) => {
  return (
    <div className="mt-8 pt-8 border-t border-white/20">
      <a 
        href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:from-teal-300 hover:via-cyan-300 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 block text-center"
      >
        Get Started
      </a>
    </div>
  );
};

export default MobileCTA;
