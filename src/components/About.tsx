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
  return <section id="about" className="py-20 bg-white relative overflow-hidden about-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* CEO Profile Section */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
              
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Avatar className="w-48 h-48 lg:w-56 lg:h-56 ring-4 ring-primary/20 shadow-xl">
                  <AvatarImage src={ceoProfile} alt="Chandrashekhar Saraswat" className="object-cover" />
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      Chandrashekhar Saraswat
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                      CEO, Dee&Cee Labs
                    </p>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl leading-relaxed text-gray-700 border-l-4 border-blue-500 pl-6 italic font-medium">"At Dee&Cee Labs, we don't build generic software, we craft intelligent systems with purpose, precision, and innovation. We don't just write code. We design for scale, optimize for impact, and invent our own blueprints. As a startup, we move fast, think deeply, and push the limits of what's possible. If your idea needs muscle, mind, and momentum, we're the team to make it real."</blockquote>

                   {/* CTA Section */}
                   <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                     <a href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM" target="_blank" rel="noopener noreferrer">
                       <Button size="lg" className="bg-gray-700 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                         Let's Build Together
                       </Button>
                     </a>
                     
                     <a href="https://www.linkedin.com/in/chandra-shekhar-s-b23216256/" target="_blank" rel="noopener noreferrer">
                       <Button variant="outline" size="lg" className="bg-gray-700 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                         <Linkedin className="w-5 h-5 mr-2" />
                         Connect on LinkedIn
                       </Button>
                     </a>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">At Dee&amp;Cee Labs, we believe in the power of thoughtful innovation. Every project we undertake is an opportunity to blend cutting-edge technology with human creativity, delivering solutions that don't just work, they inspire.</p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Think First</h4>
                  <p className="text-gray-600">We approach every challenge with strategic thinking and creative problem-solving.</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Build Smart</h4>
                  <p className="text-gray-600">Our solutions are crafted with precision, scalability, and user experience in mind.</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Innovate Always</h4>
                  <p className="text-gray-600">We're constantly exploring new technologies and methodologies to stay ahead.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>;
});
About.displayName = 'About';
export default About;