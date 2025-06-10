
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useState, useEffect, memo } from 'react';

const Hero = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className={`font-heading text-6xl md:text-8xl font-bold mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Engineering the 
            <span className="block brand-gradient-text">
              Future. Today.
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            At Dee&Cee Labs, we build transformative digital solutions — from immersive games and intelligent chatbots to full-scale AI ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg interactive-button brand-glow flex items-center space-x-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="group relative bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg interactive-button hover:bg-primary hover:text-primary-foreground flex items-center space-x-3"
            >
              <Play className="h-5 w-5" />
              <span>View Capabilities</span>
            </button>
          </div>

          {/* Key Highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
            <div className="text-center group">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-muted-foreground">Cutting-edge artificial intelligence and machine learning implementations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Expertise</h3>
              <p className="text-muted-foreground">End-to-end development from conception to deployment and scaling</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Immersive Experiences</h3>
              <p className="text-muted-foreground">VR/AR applications and interactive gaming solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
