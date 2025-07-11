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
      <button 
        className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 text-white px-8 py-3 rounded-lg font-medium hover:from-teal-300 hover:via-cyan-300 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105"
        onClick={() => openZohoForm('cta-buttons')}
      >
        Start Your Project
      </button>

      <button
        className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-500 hover:text-white transition-all duration-300"
        onClick={handleConsultation}
      >
        Schedule Consultation
      </button>
    </div>
  );
}