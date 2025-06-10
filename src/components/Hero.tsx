
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useState, useEffect, memo } from 'react';

const Hero = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dknafpppp&public_id=0_Ai_Artificial_Intelligence_1280x720-2_wbcpcy&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false"
          className="w-full h-full object-cover"
          style={{ 
            transform: 'scale(1.1)',
            filter: 'brightness(0.3)',
            pointerEvents: 'none'
          }}
          loading="lazy"
          onLoad={() => setVideoLoaded(true)}
          title="AI Technology Background Video"
        />
        
        {/* Fallback gradient overlay when video is loading */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        )}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className={`font-heading text-6xl md:text-8xl font-bold mb-8 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Engineering the 
            <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Future. Today.
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            At Dee&Cee Labs, we build transformative digital solutions — from immersive games and intelligent chatbots to full-scale AI ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <Play className="h-5 w-5" />
              <span>View Capabilities</span>
            </button>
          </div>

          {/* Key Highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Solutions</h3>
              <p className="text-gray-300">Cutting-edge artificial intelligence and machine learning implementations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Full-Stack Expertise</h3>
              <p className="text-gray-300">End-to-end development from conception to deployment and scaling</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-violet-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Immersive Experiences</h3>
              <p className="text-gray-300">VR/AR applications and interactive gaming solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
