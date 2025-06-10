import { useState, useEffect, memo } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
const FAQSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px'
    });
    const section = document.getElementById('faq');
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const faqs = [{
    id: 'timeline',
    question: 'What is the typical timeline for a project?',
    answer: 'Project timelines vary based on complexity and scope. Simple mobile apps or websites typically take 4-8 weeks, while complex AI systems or enterprise solutions can take 3-6 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout development.'
  }, {
    id: 'technologies',
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern technologies including React, Next.js, React Native, Flutter, Unity, TensorFlow, AWS, Azure, and many more. Our team stays current with the latest frameworks and tools to ensure we deliver cutting-edge solutions that are both powerful and future-proof.'
  }, {
    id: 'support',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Absolutely! We offer comprehensive post-launch support including bug fixes, feature updates, performance optimization, and scaling assistance. Our support packages are tailored to your specific needs and can include 24/7 monitoring, regular updates, and dedicated technical support.'
  }, {
    id: 'process',
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with regular sprints, continuous feedback, and iterative improvements. Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing optimization. We maintain transparent communication throughout each phase.'
  }, {
    id: 'ai-expertise',
    question: 'How experienced are you with AI and machine learning?',
    answer: 'Our team has extensive experience in AI/ML, including natural language processing, computer vision, predictive analytics, and conversational AI. We\'ve built custom AI solutions for various industries, from intelligent chatbots to complex recommendation systems and automated decision-making platforms.'
  }, {
    id: 'pricing',
    question: 'How do you structure your pricing?',
    answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements. We provide detailed estimates after understanding your needs and always maintain transparency in our pricing structure.'
  }, {
    id: 'collaboration',
    question: 'How do you handle project communication and collaboration?',
    answer: 'We use modern collaboration tools like Slack, Jira, and GitHub for seamless communication. You\'ll have access to real-time project updates, regular demo sessions, and direct communication with our development team. We believe in transparency and keep you involved throughout the entire process.'
  }, {
    id: 'industries',
    question: 'What industries do you work with?',
    answer: 'We work across various industries including healthcare, fintech, e-commerce, education, gaming, IoT, and enterprise software. Our diverse experience allows us to bring cross-industry insights and best practices to every project, regardless of your specific sector.'
  }];
  return <section id="faq" className="py-20 relative overflow-hidden" style={{
    backgroundColor: '#F9FAFB'
  }}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Get answers to common questions about our services, process, and expertise.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => <Collapsible key={faq.id} open={openFAQ === faq.id} onOpenChange={open => setOpenFAQ(open ? faq.id : null)}>
              <div className={`mb-4 ${isVisible ? `animate-fade-in-up animate-stagger-${index + 2}` : 'opacity-0'}`}>
                <CollapsibleTrigger asChild>
                  <button className="w-full bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 text-left group">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center ml-4 group-hover:bg-primary/20 transition-colors duration-300">
                        {openFAQ === faq.id ? <Minus className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-primary" />}
                      </div>
                    </div>
                  </button>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="bg-card rounded-2xl mt-2 border border-border">
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-black-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>)}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up animate-stagger-4' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-black-foreground mb-6">
              We're here to help! Reach out to our team for personalized answers and project consultation.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 hover:scale-105 transform">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>;
});
FAQSection.displayName = 'FAQSection';
export default FAQSection;