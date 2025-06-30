import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesData } from './services/ServicesData';

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
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://res.cloudinary.com/dknafpppp/image/upload/v1751309533/logo_1_1_hh0yjm.png" alt="Dee&Cee Labs Logo" className="h-8 w-8 object-contain" loading="lazy" />
              <span className="text-xl font-bold">Dee&Cee Labs</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building innovative AI-powered software solutions that transform businesses and drive digital success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handlePageLink(service.route)} 
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
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
                <button onClick={() => handleSectionLink('team')} className="hover:text-white transition-colors duration-200 text-left">
                  Our Team
                </button>
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
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@deeceelabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
              <div className="mt-4">
                <button onClick={() => handleSectionLink('contact')} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Dee&Cee Labs. All rights reserved. Built with passion for innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
