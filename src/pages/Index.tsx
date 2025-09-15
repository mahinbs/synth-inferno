
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EnhancedServicesSection from '@/components/services/EnhancedServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProductsSection from '@/components/products/ProductsSection';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/chatbot/FloatingChatbot';
import SEOHead from '@/components/seo/SEOHead';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/components/seo/StructuredData';

const Index = () => {
  // Initialize performance optimizations
  usePerformanceOptimization();

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

  const organizationSchema = generateOrganizationSchema({
    name: "Synth Inferno",
    url: "https://www.deeceelabs.com",
    logo: "https://res.cloudinary.com/dtq6gshzf/image/upload/v1755595529/synthinferno-logo_socawa.png",
    description: "Engineering the Future Today - AI, Web, Mobile & AR/VR Development",
    address: {
      addressCountry: "US"
    },
    contactPoint: {
      contactType: "customer service"
    },
    sameAs: [
      "https://www.linkedin.com/company/deeceelabs",
      "https://twitter.com/deeceelabs"
    ]
  });

  const websiteSchema = generateWebSiteSchema({
    name: "Synth Inferno",
    url: "https://www.deeceelabs.com",
    description: "Transform your business with cutting-edge AI solutions, mobile apps, web development, and immersive AR/VR experiences.",
    potentialAction: {
      target: "https://www.deeceelabs.com/search?q={search_term_string}",
      queryInput: "required name=search_term_string"
    }
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <SEOHead
        title="Synth Inferno - Engineering the Future Today | AI, Web, Mobile & AR/VR Development"
        description="Transform your business with cutting-edge AI solutions, mobile apps, web development, and immersive AR/VR experiences. Expert development team specializing in full-stack solutions."
        keywords="AI development, machine learning, mobile app development, web development, AR VR development, chatbot development, cloud architecture, IoT solutions, SaaS development, React development, TypeScript, Node.js"
        canonical="/"
        structuredData={[organizationSchema, websiteSchema]}
      />
      <Header />
      <main className="w-full bg-white">
        <Hero />
        <About />
        <EnhancedServicesSection />
        <ProductsSection />
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
