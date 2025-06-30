import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Twitter, Youtube, Globe, Users, Target, ArrowRight, Linkedin, Facebook } from 'lucide-react';
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const offices = [{
    city: 'Dubai',
    country: 'UAE',
    address: 'Office number 13 Empire heights Business bay, Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'dubai@deeceelabs.com',
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    timezone: 'GMT+4'
  }, {
    city: 'Hong Kong',
    country: 'China',
    address: 'The Hong Kong Club Building Level 16, No. 3A Chater Road, Central, Hong Kong',
    phone: '+852 2123 4567',
    email: 'hongkong@deeceelabs.com',
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=800&q=80',
    timezone: 'GMT+8'
  }, {
    city: 'Bengaluru',
    country: 'India',
    address: 'Salarpuria Symbiosis, Ground floor Bannerghatta Road Arekere Village, Begur Hobli, Bengaluru, Karnataka 560076',
    phone: '+91 80 1234 5678',
    email: 'bengaluru@deeceelabs.com',
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    timezone: 'GMT+5:30'
  }, {
    city: 'Bangkok',
    country: 'Thailand',
    address: '15-17, 20, 25-27FI, T-One Building, 8 Soi Sukhumvit 40, Khwaeng Phra Khanong, Khlong Toei, Bangkok 10110, Thailand',
    phone: '+66 2 123 4567',
    email: 'bangkok@deeceelabs.com',
    color: 'pink',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    timezone: 'GMT+7'
  }, {
    city: 'Delhi',
    country: 'India',
    address: 'Office number 309, Ambadeep building- 3rd floor, Kg marg Connaught Place, Delhi 110001, India',
    phone: '+91 11 1234 5678',
    email: 'delhi@deeceelabs.com',
    color: 'green',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    timezone: 'GMT+5:30'
  }];
  const socialLinks = [{
    icon: Instagram,
    label: 'Instagram',
    url: '#',
    color: 'pink'
  }, {
    icon: Twitter,
    label: 'Twitter',
    url: '#',
    color: 'blue'
  }, {
    icon: Youtube,
    label: 'YouTube',
    url: '#',
    color: 'red'
  }, {
    icon: MessageCircle,
    label: 'WhatsApp',
    url: 'https://wa.me/15551234567',
    color: 'green'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    url: '#',
    color: 'linkedin'
  }, {
    icon: Facebook,
    label: 'Facebook',
    url: '#',
    color: 'facebook'
  }];
  const colorClasses = {
    cyan: {
      border: 'border-cyan-400/30',
      gradient: 'from-cyan-400/10 to-cyan-600/10',
      icon: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/30',
      text: 'text-cyan-400',
      hover: 'hover:bg-cyan-500/10 hover:border-cyan-400/50'
    },
    blue: {
      border: 'border-blue-400/30',
      gradient: 'from-blue-400/10 to-blue-600/10',
      icon: 'bg-blue-500/10 text-blue-400 border-blue-400/30',
      text: 'text-blue-400',
      hover: 'hover:bg-blue-500/10 hover:border-blue-400/50'
    },
    purple: {
      border: 'border-purple-400/30',
      gradient: 'from-purple-400/10 to-purple-600/10',
      icon: 'bg-purple-500/10 text-purple-400 border-purple-400/30',
      text: 'text-purple-400',
      hover: 'hover:bg-purple-500/10 hover:border-purple-400/50'
    },
    pink: {
      border: 'border-pink-400/30',
      gradient: 'from-pink-400/10 to-pink-600/10',
      icon: 'bg-pink-500/10 text-pink-400 border-pink-400/30',
      text: 'text-pink-400',
      hover: 'hover:bg-pink-500/10 hover:border-pink-400/50'
    },
    green: {
      border: 'border-green-400/30',
      gradient: 'from-green-400/10 to-green-600/10',
      icon: 'bg-green-500/10 text-green-400 border-green-400/30',
      text: 'text-green-400',
      hover: 'hover:bg-green-500/10 hover:border-green-400/50'
    },
    red: {
      border: 'border-red-400/30',
      gradient: 'from-red-400/10 to-red-600/10',
      icon: 'bg-red-500/10 text-red-400 border-red-400/30',
      text: 'text-red-400',
      hover: 'hover:bg-red-500/10 hover:border-red-400/50'
    },
    linkedin: {
      border: 'border-blue-600/30',
      gradient: 'from-blue-600/10 to-blue-700/10',
      icon: 'bg-blue-600/10 text-blue-600 border-blue-600/30',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-600/10 hover:border-blue-600/50'
    },
    facebook: {
      border: 'border-blue-500/30',
      gradient: 'from-blue-500/10 to-blue-600/10',
      icon: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
      text: 'text-blue-500',
      hover: 'hover:bg-blue-500/10 hover:border-blue-500/50'
    }
  };
  return <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" style={{
    backgroundImage: `url('/lovable-uploads/d0fa4f38-5951-4a69-9df8-13d4faa03aaa.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-gray-900/75"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 hover:bg-gray-800/90 transition-all duration-500 p-6 text-center hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-cyan-400 font-medium">ceo@deeceelabs.com</p>
            <p className="text-gray-400 text-sm mt-1">Business inquiries</p>
          </div>

          <div className="group relative rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-blue-400/30 hover:bg-gray-800/90 transition-all duration-500 p-6 text-center hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-400/30 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-blue-400 font-medium">+1 (555) 123-4567</p>
            <p className="text-gray-400 text-sm mt-1">24/7 Support Available</p>
          </div>

          <div className="group relative rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-green-400/30 hover:bg-gray-800/90 transition-all duration-500 p-6 text-center hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 border border-green-400/30 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
            <a href="https://wa.me/15551234567" className="text-green-400 font-medium hover:text-green-300 transition-colors">
              Quick Chat
            </a>
            <p className="text-gray-400 text-sm mt-1">Instant responses</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder="Project Discussion" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 resize-none text-white placeholder-gray-400" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105">
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Social Media & Additional Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Social Media */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                const colors = colorClasses[social.color];
                return <a key={social.label} href={social.url} className={`group relative rounded-xl bg-gray-800/50 border ${colors.border} ${colors.hover} transition-all duration-300 p-4 flex items-center space-x-3 transform hover:scale-105`}>
                      <div className={`w-8 h-8 rounded-lg ${colors.icon} flex items-center justify-center`}>
                        <social.icon className="h-4 w-4" />
                      </div>
                      <span className={`font-medium ${colors.text}`}>{social.label}</span>
                    </a>;
              })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 flex items-center justify-center">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-white font-medium">1,500+ Projects Delivered</p>
                    <p className="text-gray-400 text-sm">Across 56+ cities worldwide</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/30 flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-white font-medium">230+ Expert Team Members</p>
                    <p className="text-gray-400 text-sm">Developers, designers & strategists</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-400/30 flex items-center justify-center">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-white font-medium">7+ Years of Innovation</p>
                    <p className="text-gray-400 text-sm">Since 2017, trusted globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {offices.map((office, index) => {
            const colors = colorClasses[office.color];
            return <div key={office.city} className={`group relative rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-sm border ${colors.border} hover:bg-gray-800/90 transition-all duration-500 hover:transform hover:scale-105`} style={{
              animationDelay: `${index * 100 + 1000}ms`
            }}>
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500" style={{
                backgroundImage: `url(${office.image})`
              }} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900/80" />
                  
                  {/* Content */}
                  <div className="relative p-6">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                      {office.city}, {office.country}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {office.address}
                    </p>
                    <div className="flex items-center space-x-3 mb-2">
                      <Mail className={`h-4 w-4 ${colors.text}`} />
                      <a href={`mailto:${office.email}`} className={`text-sm ${colors.text} hover:underline`}>
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Phone className={`h-4 w-4 ${colors.text}`} />
                      <a href={`tel:${office.phone}`} className={`text-sm ${colors.text} hover:underline`}>
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className={`h-4 w-4 ${colors.text}`} />
                      <span className="text-gray-500 text-xs">Timezone: {office.timezone}</span>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-3xl p-8 border border-gray-700/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get Started?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Join 1,500+ satisfied clients who have transformed their businesses with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105">
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <a href="https://wa.me/15551234567" className="inline-flex items-center space-x-2 border-2 border-green-400/50 text-green-300 px-8 py-4 rounded-xl hover:bg-green-400/10 hover:border-green-300 transition-all duration-300 font-medium backdrop-blur-sm">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
