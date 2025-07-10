import { useState, useEffect } from 'react';
import { ArrowRight, Users, TrendingUp, CheckCircle, Brain, Mic, BarChart3, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { openZohoForm } from '@/utils/zohoForm';
const SpeaksifyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyFeatures = [
    {
      icon: Brain,
      title: "AI Speech Analysis",
      description: "Advanced AI analyzes speech patterns, tone, clarity, and filler words in real-time"
    },
    {
      icon: Mic,
      title: "Real-time Feedback",
      description: "Instant coaching feedback during practice sessions to improve immediately"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Track improvement over time with detailed analytics and performance metrics"
    },
    {
      icon: Clock,
      title: "Practice Sessions",
      description: "Save and review practice sessions for continuous improvement"
    }
  ];
  const results = [
    { metric: "+75%", description: "Practice Completion Rate" },
    { metric: "+60%", description: "User Retention" },
    { metric: "-40%", description: "Support Load" },
    { metric: "-80%", description: "Time to First Feedback" }
  ];

  const techStack = [
    "React.js", "Tailwind CSS", "Node.js", "Express.js", 
    "Whisper (OpenAI)", "TensorFlow.js", "MongoDB"
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Speaksify
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                AI-Powered Public Speaking Coach
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Speaksify is an AI-powered public speaking platform that helps users practice, improve,
                and gain confidence in their communication skills. It analyzes speech patterns, tone,
                clarity, and filler words to provide real-time feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build a platform to simulate a public speaking coach with AI analysis, a clean UI,
                and real-time user feedback that could help users improve their communication skills effectively.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrated Web Speech API and Whisper AI for real-time analysis and progress tracking.
                Clean UI and saved sessions improved user experience and coaching value significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Results & Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-card border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
          
          {/* Testimonial */}
          <div className="bg-card border rounded-xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-lg text-center text-muted-foreground mb-4 italic">
              "Working with the team brought clarity to our vision. They co-created a tool that's intuitive and powerful."
            </blockquote>
            <div className="text-center">
              <strong className="text-primary">– Jhon, Founder of Speaksify</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your AI Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can create innovative AI-powered solutions for your business.
          </p>
          <button onClick={() => openZohoForm('speaksify-contact')} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default SpeaksifyPage;