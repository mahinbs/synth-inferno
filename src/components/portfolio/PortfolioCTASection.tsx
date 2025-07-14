
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openZohoForm } from '@/utils/zohoForm';

const PortfolioCTASection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on portfolio page, navigate to home with contact section
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="mt-20 text-center">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100 shadow-lg">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Start Your Project?
        </h3>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCTASection;
