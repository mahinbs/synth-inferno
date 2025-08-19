/**
 * Navigation utility function to redirect users to the contact section
 * This replaces the previous Zoho form integration
 */

export const navigateToContact = (source?: string) => {
  try {
    // Log the source for analytics if needed
    if (source) {
      console.log(`Contact navigation from: ${source}`);
    }

    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll to contact
      window.location.href = '/#contact';
    }
  } catch (error) {
    console.error('Error navigating to contact:', error);
    // Fallback to direct navigation
    window.location.href = '/#contact';
  }
};

/**
 * Navigation utility for React Router contexts
 * Use this when you have access to useNavigate hook
 */
export const createContactNavigator = (navigate: (path: string) => void) => {
  return (source?: string) => {
    try {
      // Log the source for analytics if needed
      if (source) {
        console.log(`Contact navigation from: ${source}`);
      }

      // Check if we're on the home page
      if (window.location.pathname === '/') {
        // If on home page, scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on home page, navigate to home and then scroll to contact
        navigate('/');
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } catch (error) {
      console.error('Error navigating to contact:', error);
      // Fallback to direct navigation
      window.location.href = '/#contact';
    }
  };
};
