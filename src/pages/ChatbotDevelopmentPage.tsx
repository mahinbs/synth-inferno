import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Brain, Zap, Shield, Eye, Cog } from "lucide-react";

const ChatbotDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 px-6 py-16 text-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=3882&q=80')`
          }}
        />
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            AI Autonomous Agents Development
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            From Chatbots to Goal‑Driven Digital Workers — we build everything from high-performance enterprise chatbots to autonomous agents that execute tasks, make decisions, and evolve with usage.
          </p>
          <Button 
            asChild 
            className="mt-8 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity"
            size="lg"
          >
            <a
              href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-800 px-6 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">About This Service</h2>
          <p className="text-slate-300 max-w-4xl text-lg">
            These aren't linear scripts. Our conversational systems are autonomous micro-agents designed to handle real-world workflows, adapt to user context, and integrate seamlessly with your internal tools and APIs.
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-slate-900 px-6 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Chatbots with memory and RAG for customer support/internal use",
              "Multi-agent systems with distributed roles (scheduler, analyst, seller)",
              "Voice-driven agents via Whisper, ElevenLabs, Twilio",
              "Code-executing bots with fallback logic and custom workflows",
              "Hybrid LLM + rules engines for edge cases & compliance",
              "Deployable on Web, Slack, WhatsApp, IVRs, iOS, and custom stacks"
            ].map((capability, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-slate-800/80 border border-slate-700">
                <Bot className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-slate-800 px-6 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">Autonomous Agent Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Orchestration & Autonomy",
                tech: "LangGraph, Autogen, CrewAI, ReAct, CAMEL",
                icon: Brain
              },
              {
                title: "LLMs",
                tech: "GPT-4o, Claude 3 Opus, Gemini 1.5, Mistral 7B",
                icon: Zap
              },
              {
                title: "Memory & Retrieval",
                tech: "Pinecone, ChromaDB, Redis, pgvector, LlamaIndex",
                icon: Brain
              },
              {
                title: "RAG Layer",
                tech: "AgentLLM, Unstructured.io, LangChain Expression Language",
                icon: Bot
              },
              {
                title: "Integration",
                tech: "GraphQL, REST, WebSockets, Zapier, Retool, Logic Apps",
                icon: Cog
              },
              {
                title: "Security & Compliance",
                tech: "Azure IAM, Vault, OPA, RBAC, Encrypted State",
                icon: Shield
              },
              {
                title: "Monitoring",
                tech: "Prometheus, Grafana, Loki, OpenTelemetry, Sentry",
                icon: Eye
              },
              {
                title: "Hosting",
                tech: "Docker, Kubernetes, Vercel, AWS Lambda, GCP Cloud Run",
                icon: Cog
              }
            ].map((item, index) => (
              <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 backdrop-blur-sm">
                <item.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-white mb-2 group-hover:text-primary/90 transition-colors duration-300">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Lifecycle */}
      <section className="bg-slate-900 px-6 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">Agent Development Lifecycle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Goal Definition & Constraint Mapping",
              "Architecture & Design",
              "Integration & Interop Layer",
              "Context + Memory Engineering",
              "Security, Compliance & Overrides",
              "Synthetic Testing & Safety Validation",
              "Deployment + Observability"
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/60 border border-slate-700">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <span className="text-slate-300">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-slate-800 text-center py-16">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Built for Autonomy. Tuned for Control.</h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            You don't need another chatbot—you need agents that think, connect, and deliver.
            Whether it's a compliance-aware assistant or a multi-agent business executor, we architect AI that works.
          </p>
          <Button 
            asChild 
            className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity"
            size="lg"
          >
            <a
              href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Your Agent System <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ChatbotDevelopmentPage;