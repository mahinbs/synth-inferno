import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SpeaksifyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Speaksify – AI-Powered Public Speaking Coach
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Speaksify is an AI-powered public speaking platform that helps users practice, improve,
              and gain confidence in their communication skills. It analyzes speech patterns, tone,
              clarity, and filler words to provide real-time insights. Our team at Dee&Cee Labs designed
              and developed a clean, intuitive UI and integrated advanced AI tools for real-time feedback
              and personalized coaching.
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-muted/50 aspect-video flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-3xl">🎤</span>
              </div>
              <p className="text-lg font-medium">AI Public Speaking Visual</p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Project Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-2xl border">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create a platform that simulates a personal coach for public speaking, combining
                  AI audio analysis, clean UI, and real-time feedback without overwhelming new users.
                </p>
              </div>
              <div className="bg-background p-8 rounded-2xl border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Designed a minimalist UI to reduce user friction and provide actionable insights.
                  Integrated Web Speech API and Whisper AI to offer real-time analysis and feedback.
                  Progress tracking and saved sessions enabled performance improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Technology Stack</h2>
            <div className="bg-muted/50 p-8 rounded-2xl">
              <p className="text-lg text-muted-foreground">
                React.js, Tailwind CSS, Express.js, Node.js, Web Speech API, Whisper (OpenAI), TensorFlow.js, MongoDB
              </p>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Results & Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center bg-background p-6 rounded-2xl border">
                <h3 className="text-3xl font-bold text-primary mb-2">+75%</h3>
                <p className="text-muted-foreground">Practice Completion Rate</p>
              </div>
              <div className="text-center bg-background p-6 rounded-2xl border">
                <h3 className="text-3xl font-bold text-primary mb-2">+60%</h3>
                <p className="text-muted-foreground">User Retention</p>
              </div>
              <div className="text-center bg-background p-6 rounded-2xl border">
                <h3 className="text-3xl font-bold text-primary mb-2">-40%</h3>
                <p className="text-muted-foreground">Support Load</p>
              </div>
              <div className="text-center bg-background p-6 rounded-2xl border">
                <h3 className="text-3xl font-bold text-primary mb-2">-80%</h3>
                <p className="text-muted-foreground">Time to First Feedback</p>
              </div>
            </div>
            
            <blockquote className="bg-background p-8 rounded-2xl border border-l-4 border-l-primary">
              <p className="text-lg text-muted-foreground italic mb-4 leading-relaxed">
                "Working with the team brought clarity to our vision. They co-created a tool that's intuitive and powerful. Our users love the simplicity and instant feedback."
              </p>
              <cite className="text-foreground font-semibold">– Jhon, Founder of Speaksify</cite>
            </blockquote>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <p>AI bot on phone illustration</p>
                </div>
              </div>
              <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p>Speaksify dashboard</p>
                </div>
              </div>
              <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p>Lead automation panel</p>
                </div>
              </div>
              <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <p>Campaign performance section</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default SpeaksifyPage;