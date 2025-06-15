
interface DesktopCTAProps {
  onSmoothScroll: (href: string, sectionId: string) => void;
}

const DesktopCTA = ({ onSmoothScroll }: DesktopCTAProps) => {
  return (
    <div className="hidden lg:flex items-center">
      <button 
        onClick={() => onSmoothScroll('/#contact', 'contact')} 
        className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-teal-300 hover:via-cyan-300 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105"
      >
        Get Started
      </button>
    </div>
  );
};

export default DesktopCTA;
