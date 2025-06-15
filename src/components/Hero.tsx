
import { ArrowRight, Play, Check } from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark Tech Background */}
      <div className="absolute inset-0 z-0">
        {/* Base dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
        
        {/* Tech circuit overlay pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #1cc7ff 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #65f7bc 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, rgba(28, 199, 255, 0.1) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(101, 247, 188, 0.1) 50%, transparent 70%)
            `,
            backgroundSize: '600px 600px, 800px 800px, 200px 200px, 200px 200px'
          }}
        />
        
        {/* Subtle lighting effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>
        
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className={`font-heading text-6xl md:text-8xl font-bold mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-white drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
              Engineering the
            </span>
            <span className="block bg-gradient-to-r from-[#1cc7ff] to-[#65f7bc] bg-clip-text text-transparent drop-shadow-lg" style={{ textShadow: '0 0 30px rgba(28, 199, 255, 0.5)' }}>
              Future. Today.
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`} style={{ color: '#cccccc' }}>
            At Dee&Cee Labs, we build transformative digital solutions — from immersive games and intelligent chatbots to full-scale AI ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
              style={{ 
                backgroundColor: '#6676ff',
                boxShadow: '0 8px 32px rgba(102, 118, 255, 0.3)'
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm border border-white/20 hover:border-white/30"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Play className="h-5 w-5" />
              <span>View Capabilities</span>
            </button>
          </div>

          {/* Key Highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
            <div className="text-center group">
              <div className="w-16 h-16 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-teal-400/30" style={{ background: 'rgba(20, 184, 166, 0.2)' }}>
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Solutions</h3>
              <p className="text-gray-400">Cutting-edge artificial intelligence and machine learning implementations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-emerald-400/30" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Full-Stack Expertise</h3>
              <p className="text-gray-400">End-to-end development from conception to deployment and scaling</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-violet-400/30" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Immersive Experiences</h3>
              <p className="text-gray-400">VR/AR applications and interactive gaming solutions</p>
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
