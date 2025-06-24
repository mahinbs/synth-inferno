
import { ArrowLeft, Gamepad2, Eye, Zap, Users, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GamingArVrPage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If contact section doesn't exist on this page, navigate to home page contact
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-6">
              <Gamepad2 className="w-8 h-8 text-gray-600" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Gaming AR/VR Development
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create immersive gaming experiences with cutting-edge augmented and virtual reality technologies. 
              We build next-generation interactive entertainment that captivates and engages users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gray-900 text-white hover:bg-gray-800"
              >
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View AR/VR Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Immersive Gaming Solutions
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <Eye className="w-12 h-12 text-gray-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Virtual Reality Games</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fully immersive VR experiences with realistic physics, stunning visuals, and intuitive controls for all major VR platforms.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-gray-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Augmented Reality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Interactive AR experiences that blend digital content with the real world for mobile and headset platforms.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-gray-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Multiplayer Experiences</h3>
                <p className="text-gray-600 leading-relaxed">
                  Social gaming experiences with real-time multiplayer capabilities and cross-platform compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We use industry-leading tools and frameworks to create exceptional gaming experiences
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Unity', 'Unreal Engine', 'WebXR', 'Three.js', 'ARCore', 'ARKit', 'Oculus SDK', 'Blender'].map((tech) => (
                <div key={tech} className="bg-white rounded-lg p-4 shadow-sm">
                  <span className="font-medium text-gray-900">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Investment & Timeline
            </h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <DollarSign className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Starting at $18,000</h3>
                  <p className="text-gray-600">Comprehensive AR/VR gaming solutions</p>
                </div>
                
                <div>
                  <Clock className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">10-20 Weeks</h3>
                  <p className="text-gray-600">From concept to launch</p>
                </div>
                
                <div>
                  <CheckCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Full Support</h3>
                  <p className="text-gray-600">Ongoing maintenance & updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Create Your AR/VR Gaming Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your gaming vision and bring it to life with immersive AR/VR technology.
          </p>
          <Button 
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
            onClick={() => window.location.href = '/#contact'}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamingArVrPage;
