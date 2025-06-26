
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDropdownItem {
  name: string;
  href: string;
  description: string;
  icon: string;
}

const services: ServiceDropdownItem[] = [
  {
    name: 'Web Applications',
    href: '/web-apps',
    description: 'Custom web solutions',
    icon: '💻'
  },
  {
    name: 'Mobile Apps',
    href: '/mobile-apps', 
    description: 'iOS & Android development',
    icon: '📱'
  },
  {
    name: 'SAAS Solutions',
    href: '/saas',
    description: 'Scalable software platforms',
    icon: '☁️'
  },
  {
    name: 'AI Calling',
    href: '/ai-calling',
    description: 'Intelligent phone systems',
    icon: '🤖'
  },
  {
    name: 'AI Automation',
    href: '/ai-automation',
    description: 'Process automation',
    icon: '⚡'
  }
];

const SmoothServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    timeoutRef.current = setTimeout(() => {
      if (!isHovered) {
        setIsOpen(false);
      }
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      {/* Trigger Button */}
      <button 
        className={`flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out font-medium ${
          isOpen ? 'text-blue-600' : ''
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Our Services
        <ChevronDown 
          className={`w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-180 text-blue-600' : 'rotate-0'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out transform origin-top z-50 ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0 visible' 
            : 'opacity-0 scale-95 -translate-y-2 invisible'
        }`}
        style={{
          transformOrigin: 'top center'
        }}
      >
        <div className="py-2">
          {services.map((service, index) => (
            <Link
              key={service.name}
              to={service.href}
              className={`flex items-center gap-4 px-6 py-4 hover:bg-blue-50 transition-all duration-200 ease-in-out group ${
                index !== services.length - 1 ? 'border-b border-gray-100' : ''
              }`}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {service.name}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors duration-200">
                  {service.description}
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-500 rotate-[-90deg] transition-all duration-200" />
            </Link>
          ))}
        </div>
        
        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
      </div>
    </div>
  );
};

export default SmoothServicesDropdown;
