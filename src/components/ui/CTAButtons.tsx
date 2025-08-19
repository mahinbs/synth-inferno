import { useNavigate } from 'react-router-dom';
import { createContactNavigator } from '@/utils/navigation';

export default function CTAButtons() {
  const navigate = useNavigate();
  const navigateToContact = createContactNavigator(navigate);

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onClick={() => navigateToContact('cta-start-project')}
        className="inline-flex items-center justify-center px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium"
      >
        Start Your Project
      </button>

      <button
        className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-md font-medium"
        onClick={() => navigateToContact('cta-consultation')}
      >
        Schedule Consultation
      </button>
    </div>
  );
}