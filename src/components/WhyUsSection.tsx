
import { useState, useEffect, memo } from 'react';
import { Target, Zap, Shield, Rocket } from 'lucide-react';

const WhyUsSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

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

  const differentiators = [
    {
      icon: Target,
      title: "Cross-functional teams with product-first mindset",
      description: "Our diverse teams combine technical expertise with business acumen, ensuring every solution drives real business value and user satisfaction.",
      color: "blue-600"
    },
    {
      icon: Zap,
      title: "Deep expertise across AI, cloud, web, mobile, and immersive tech",
      description: "From artificial intelligence and cloud architecture to immersive VR experiences, our comprehensive skill set covers the entire technology spectrum.",
      color: "emerald-600"
    },
    {
      icon: Shield,
      title: "Proven track record with startups, agencies, and scale-ups",
      description: "We've successfully partnered with organizations at every stage, from early-stage startups to established enterprises seeking digital transformation.",
      color: "violet-600"
    },
    {
      icon: Rocket,
      title: "Design, develop, deploy — and scale with you",
      description: "Our partnership doesn't end at launch. We provide ongoing support, optimization, and scaling solutions as your business grows and evolves.",
      color: "slate-600"
    }
  ];

  return (
    <section 
      id="why-us" 
      className="py-20 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Dee&Cee Labs?</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto mb-8 ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Passionate about craft. Obsessed with results. Here's what sets us apart in the digital landscape.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className={`group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${isVisible ? `animate-fade-in-up animate-stagger-${index + 2}` : 'opacity-0'}`}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-${item.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-8 w-8 text-${item.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up animate-stagger-4' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Vision into Reality?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can accelerate your digital transformation and drive meaningful results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 hover:scale-105 transform">
                Start Your Project
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 transform">
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
