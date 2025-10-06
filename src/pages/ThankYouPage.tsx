import { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Mail, Phone, MessageCircle, Clock, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  const handleContactUs = () => {
    navigate('/#contact');
  };

  return (
    <div 
      className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/d0fa4f38-5951-4a69-9df8-13d4faa03aaa.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-gray-900/75"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Animation */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="w-24 h-24 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-400" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Thank You!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your message has been sent successfully. We're excited to work with you and will get back to you within 24 hours.
            </p>
          </div>

          {/* What's Next Section */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">What's Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
                  <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/10 text-blue-400 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Team Review</h3>
                  <p className="text-gray-400 text-sm">Our experts will analyze your requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/10 text-green-400 border border-green-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Proposal</h3>
                  <p className="text-gray-400 text-sm">Tailored solution for your project</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleBackToHome}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                <span>Back to Home</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={handleViewPortfolio}
                className="px-8 py-4 bg-gray-800/50 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-6">Feel free to reach out to us directly:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="mailto:SynthInferno@gmail.com"
                  className="flex items-center justify-center space-x-3 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 rounded-lg p-4 hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Email Us</span>
                </a>
                <a
                  href="tel:+919324054346"
                  className="flex items-center justify-center space-x-3 bg-blue-500/10 border border-blue-400/30 text-blue-400 rounded-lg p-4 hover:bg-blue-500/20 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Call Us</span>
                </a>
                <a
                  href="https://wa.me/9324054346"
                  className="flex items-center justify-center space-x-3 bg-green-500/10 border border-green-400/30 text-green-400 rounded-lg p-4 hover:bg-green-500/20 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className={`transition-all duration-1000 delay-1200 ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-gray-400 text-sm mt-8">
              Thank you for choosing Synth Inferno. We're excited to bring your vision to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
