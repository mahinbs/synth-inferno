import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesData } from './services/ServicesData';
import { navigateToContact } from '@/utils/navigation';
const Footer = () => {
  const navigate = useNavigate();
  const handleSectionLink = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };
  const handlePageLink = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://res.cloudinary.com/dtq6gshzf/image/upload/v1755595529/synthinferno-logo_socawa.png" alt="Synth Inferno Logo" className="h-8 w-8 object-contain" loading="lazy" />
              <span className="text-xl font-bold">Synth Inferno</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building innovative AI-powered software solutions that transform businesses and drive digital success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/deeceelabs?utm_source=qr&igsh=MTBybzE5dnd6NXAZaQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/dee-cee-labs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100084347787790" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/9324054346" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              {servicesData.map(service => <li key={service.id}>
                  <button onClick={() => handlePageLink(service.route)} className="hover:text-white transition-colors duration-200 text-left">
                    {service.title}
                  </button>
                </li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => handleSectionLink('about')} className="hover:text-white transition-colors duration-200 text-left">
                  About Us
                </button>
              </li>
              <li>
                
              </li>
              <li>
                <button onClick={() => handlePageLink('/blogs')} className="hover:text-white transition-colors duration-200 text-left">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handlePageLink('/reviews')} className="hover:text-white transition-colors duration-200 text-left">
                  Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handlePageLink('/privacy-policy')} className="hover:text-white transition-colors duration-200 text-left">Privacy Policy</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>SynthInferno@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 9324054346</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Mumbai, India</span>
              </div>
              <div className="mt-4">
                <button onClick={() => navigateToContact('footer')} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="flex flex-col space-y-2">
              <p className="text-center md:text-left">© 2025 Synth Inferno. All rights reserved. Built with passion for innovation.</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-1">⚡</span>
                <span>Powered by @ACNS AI SOLUTIONS LLP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;