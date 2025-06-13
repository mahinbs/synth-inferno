
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EnhancedServicesSection from '@/components/services/EnhancedServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyUsSection from '@/components/WhyUsSection';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/chatbot/FloatingChatbot';

const Index = () => {
  const handleShowWebProjects = () => {
    // Navigate to portfolio page with web projects filter
    window.location.href = '/portfolio#projects-grid';
  };

  const handleContactHuman = () => {
    // Scroll to contact section on current page
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <EnhancedServicesSection />
        <PortfolioSection />
        <WhyUsSection />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Chatbot */}
      <FloatingChatbot 
        onShowWebProjects={handleShowWebProjects}
        onContactHuman={handleContactHuman}
      />
    </div>
  );
};

export default Index;
