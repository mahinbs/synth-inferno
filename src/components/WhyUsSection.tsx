
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
    color: "blue-500",
    gradient: "from-blue-500 to-blue-300"
  }, {
    icon: Zap,
    title: "Deep expertise across AI, cloud, web, mobile, and immersive tech",
    description: "From artificial intelligence and cloud architecture to immersive VR experiences, our comprehensive skill set covers the entire technology spectrum.",
    color: "purple-500",
    gradient: "from-purple-500 to-purple-300"
  }, {
    icon: Shield,
    title: "Proven track record with startups, agencies, and scale-ups",
    description: "We've successfully partnered with organizations at every stage, from early-stage startups to established enterprises seeking digital transformation.",
    color: "pink-500",
    gradient: "from-pink-500 to-pink-300"
  }, {
    icon: Rocket,
    title: "Design, develop, deploy — and scale with you",
    description: "Our partnership doesn't end at launch. We provide ongoing support, optimization, and scaling solutions as your business grows and evolves.",
    color: "indigo-500",
    gradient: "from-indigo-500 to-indigo-300"
  }];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Dee&Cee Labs?
            </span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Passionate about craft. Obsessed with results. Here's what sets us apart in the digital landscape.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div key={index} className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 ${isVisible ? `animate-fade-in-up animate-stagger-${index + 2}` : 'opacity-0'}`}>
              {/* Icon */}
              <div className={`w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`h-10 w-10 text-${item.color} transition-all duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {item.description}
              </p>

              {/* Hover accent line - now with proper gradient classes */}
              <div className={`mt-6 h-1 bg-gradient-to-r ${item.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up animate-stagger-4' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl p-12 md:p-16 max-w-5xl mx-auto shadow-lg">
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Vision into Reality?
              </span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our expertise can accelerate your digital transformation and drive meaningful results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:text-gray-900 transition-all duration-300 hover:scale-105 transform hover:border-gray-400 shadow-md hover:shadow-lg">
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
