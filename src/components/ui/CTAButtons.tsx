import { useNavigate } from 'react-router-dom';
import { openZohoForm } from '@/utils/zohoForm';

export default function CTAButtons() {
  const navigate = useNavigate();

  const handleConsultation = () => {
    // Navigate to homepage and scroll to contact section
    if (window.location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a 
        href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium"
      >
        Start Your Project
      </a>

      <button
        className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-md font-medium"
        onClick={handleConsultation}
      >
        Schedule Consultation
      </button>
    </div>
  );
}