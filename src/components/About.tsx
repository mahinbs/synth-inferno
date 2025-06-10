import { useState, useEffect, memo } from 'react';
import { CheckCircle, Users, Lightbulb, Cpu, Globe } from 'lucide-react';
const About = memo(() => {
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
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const whatSetsUsApart = [{
    icon: Users,
    title: "Human-first Design Thinking",
    description: "We put user experience at the center of everything we create, ensuring intuitive and meaningful interactions."
  }, {
    icon: Cpu,
    title: "AI-Driven Automation",
    description: "Leveraging cutting-edge artificial intelligence to automate processes and enhance decision-making capabilities."
  }, {
    icon: Lightbulb,
    title: "End-to-End Development Expertise",
    description: "From initial concept through deployment and scaling, we handle every aspect of your digital transformation."
  }, {
    icon: Globe,
    title: "Immersive Experiences (VR/AR/Gaming)",
    description: "Creating next-generation interactive experiences that blur the lines between digital and physical worlds."
  }];
  return <section id="about" className="py-20 bg-background relative overflow-hidden" style={{
    backgroundColor: '#F9FAFB'
  }}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Pioneering Digital Frontiers.
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mt-2">
              One Idea at a Time.
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              At Dee&Cee Labs, we don't just build software—we engineer experiences that redefine what's possible. 
              Founded by a team of visionaries with deep expertise across AI, game development, mobile applications, 
              and immersive technologies, we bridge the gap between cutting-edge innovation and real-world impact.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              From startups looking to disrupt entire industries to established enterprises seeking digital transformation, 
              we partner with ambitious organizations to bring their boldest ideas to life. Our approach combines 
              human-centered design with the latest technological advances, ensuring that every solution we create 
              is not only technically superior but also intuitive and impactful.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Whether you need an AI-powered chatbot that feels genuinely conversational, a mobile app that seamlessly 
              integrates complex workflows, or an immersive VR experience that transports users to new dimensions, 
              we have the expertise and passion to make it happen.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-16">
            <h3 className={`font-heading text-3xl md:text-4xl font-bold text-center mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
              What Sets Us Apart
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatSetsUsApart.map((item, index) => <div key={index} className={`bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${isVisible ? `animate-fade-in-up animate-stagger-${index + 3}` : 'opacity-0'}`}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-card-foreground">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Mission Statement */}
          <div className={`text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 ${isVisible ? 'animate-fade-in-up animate-stagger-4' : 'opacity-0'}`}>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8 colour-black">
              We believe technology should amplify human potential, not replace it. Our mission is to create 
              digital solutions that enhance creativity, productivity, and connection—building bridges between 
              what exists today and what's possible tomorrow.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-background/50 rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Innovation-Driven</span>
              </div>
              <div className="flex items-center space-x-2 bg-background/50 rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="font-medium">Human-Centered</span>
              </div>
              <div className="flex items-center space-x-2 bg-background/50 rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">Future-Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
});
About.displayName = 'About';
export default About;