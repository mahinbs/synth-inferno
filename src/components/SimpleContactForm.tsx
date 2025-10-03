import { useState } from "react";
import { Send, Mail, Phone, MessageCircle } from "lucide-react";

interface SimpleContactFormProps {
  title?: string;
  subtitle?: string;
  showQuickContact?: boolean;
  className?: string;
  variant?: 'default' | 'compact' | 'minimal';
}

const SimpleContactForm = ({ 
  title = "Get In Touch", 
  subtitle = "Ready to start your project? Let's discuss your requirements.",
  showQuickContact = true,
  className = "",
  variant = 'default'
}: SimpleContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1000);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'compact':
        return {
          container: "py-12",
          form: "p-6",
          title: "text-2xl",
          subtitle: "text-base"
        };
      case 'minimal':
        return {
          container: "py-8",
          form: "p-4",
          title: "text-xl",
          subtitle: "text-sm"
        };
      default:
        return {
          container: "py-16",
          form: "p-8",
          title: "text-3xl",
          subtitle: "text-lg"
        };
    }
  };

  const variantClasses = getVariantClasses();

  if (isSubmitted) {
    return (
      <section 
        className={`py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden ${variantClasses.container} ${className}`}
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className={`py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden ${variantClasses.container} ${className}`}
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`${variantClasses.title} text-4xl md:text-5xl font-bold text-white mb-4`}>
              {title}
            </h2>
            <p className={`${variantClasses.subtitle} text-gray-300 max-w-2xl mx-auto`}>
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Contact Info */}
            {showQuickContact && (
              <div className="lg:col-span-1">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 h-fit">
                  <h3 className="text-xl font-bold text-white mb-6">Quick Contact</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 flex items-center justify-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Email Us</p>
                        <a 
                          href="mailto:SynthInferno@gmail.com" 
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          SynthInferno@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/30 flex items-center justify-center">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Call Us</p>
                        <a 
                          href="tel:+919324054346" 
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          +91 9324054346
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 border border-green-400/30 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-white">WhatsApp</p>
                        <a 
                          href="https://wa.me/9324054346" 
                          className="text-green-400 hover:text-green-300 transition-colors"
                        >
                          +91 9324054346
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div className={showQuickContact ? "lg:col-span-2" : "lg:col-span-3"}>
              <div className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/30 ${variantClasses.form}`}>
                <form
                  action="https://formsubmit.co/SynthInferno@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value={`${window.location.origin}`}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 resize-none text-white placeholder-gray-400"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContactForm;
