
import { useState, useEffect, memo } from 'react';
import { Target, Zap, Shield, Rocket } from 'lucide-react';

const WhyUsSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px'
    });

    const section = document.getElementById('why-us');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const differentiators = [{
    icon: Target,
    title: "Cross-functional teams with product-first mindset",
    description: "Our diverse teams combine technical expertise with business acumen, ensuring every solution drives real business value and user satisfaction.",
    color: "gray-600"
  }, {
    icon: Zap,
    title: "Deep expertise across AI, cloud, web, mobile, and immersive tech",
    description: "From artificial intelligence and cloud architecture to immersive VR experiences, our comprehensive skill set covers the entire technology spectrum.",
    color: "slate-600"
  }, {
    icon: Shield,
    title: "Proven track record with startups, agencies, and scale-ups",
    description: "We've successfully partnered with organizations at every stage, from early-stage startups to established enterprises seeking digital transformation.",
    color: "zinc-600"
  }, {
    icon: Rocket,
    title: "Design, develop, deploy — and scale with you",
    description: "Our partnership doesn't end at launch. We provide ongoing support, optimization, and scaling solutions as your business grows and evolves.",
    color: "neutral-600"
  }];

  return (
    <section id="why-us" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1c1c1e] leading-tight tracking-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Why Choose <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">Dee&Cee Labs?</span>
          </h2>
          <p className={`text-lg md:text-xl text-[#1c1c1e]/80 max-w-3xl mx-auto mb-8 leading-relaxed tracking-wide ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Passionate about craft. Obsessed with results. Here's what sets us apart in the digital landscape.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className={`group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl shadow-sm ${isVisible ? `animate-fade-in-up animate-stagger-${index + 2}` : 'opacity-0'}`}>
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-gray-600" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#1c1c1e] mb-4 group-hover:text-gray-700 transition-colors duration-300 leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#1c1c1e]/80 leading-relaxed tracking-wide">
                  {item.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gray-600 to-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up animate-stagger-4' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto border border-gray-200 shadow-sm">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#1c1c1e] leading-tight tracking-tight">
              Ready to Transform Your Vision into Reality?
            </h3>
            <p className="text-lg md:text-xl text-[#1c1c1e]/80 mb-8 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Let's discuss how our expertise can accelerate your digital transformation and drive meaningful results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-700 transition-colors duration-300 hover:scale-105 transform">
                Start Your Project
              </button>
              <button className="border-2 border-gray-600 text-gray-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-600 hover:text-white transition-all duration-300 hover:scale-105 transform">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyUsSection.displayName = 'WhyUsSection';
export default WhyUsSection;
