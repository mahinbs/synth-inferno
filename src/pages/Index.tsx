
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyUsSection from '@/components/WhyUsSection';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <ServicesSection />
        <PortfolioSection />
        <WhyUsSection />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
