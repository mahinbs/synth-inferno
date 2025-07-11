import { useState, useEffect, memo } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import ceoProfile from '@/assets/ceo-profile.jpg';
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
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* CEO Profile Section */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
              
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Avatar className="w-48 h-48 lg:w-56 lg:h-56 ring-4 ring-primary/20 shadow-xl">
                  <AvatarImage 
                    src={ceoProfile} 
                    alt="Chandrashekhar Saraswat"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-primary/10 text-primary">
                    CS
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="space-y-6">
                  
                  {/* Name and Title */}
                  <div className="space-y-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                      Chandrashekhar Saraswat
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium">
                      CEO, Dee&Cee Labs
                    </p>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl leading-relaxed text-muted-foreground border-l-4 border-primary pl-6 italic">
                    "The products I can build for you will be the creative ones which would need high level of human intellect. We at Dee&Cee Labs don't build things blindly but put our sweat and blood into creativity and innovation.
                    <br /><br />
                    We just don't build, we think and build.
                    <br /><br />
                    Being a startup, we are ready to build anything and everything."
                  </blockquote>

                  {/* CTA Section */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      Let's Build Together
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Dee&Cee Labs, we believe in the power of thoughtful innovation. Every project we undertake 
                is an opportunity to blend cutting-edge technology with human creativity, delivering solutions 
                that don't just work—they inspire.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Think First</h4>
                  <p className="text-muted-foreground">We approach every challenge with strategic thinking and creative problem-solving.</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Build Smart</h4>
                  <p className="text-muted-foreground">Our solutions are crafted with precision, scalability, and user experience in mind.</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Innovate Always</h4>
                  <p className="text-muted-foreground">We're constantly exploring new technologies and methodologies to stay ahead.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});
About.displayName = 'About';
export default About;