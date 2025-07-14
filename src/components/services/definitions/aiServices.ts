
import { Bot, Brain, Zap } from "lucide-react";
import { ServiceData } from "../types";

export const aiServices: ServiceData[] = [
  {
    id: "chatbot-development",
    icon: Bot,
    title: "AI Autonomous Agents Development",
    description:
      "From Chatbots to Goal‑Driven Digital Workers — we build everything from high-performance enterprise chatbots to autonomous agents that execute tasks, make decisions, and evolve with usage.",
    detailedDescription:
      "These aren't linear scripts. Our conversational systems are autonomous micro-agents designed to handle real-world workflows, adapt to user context, and integrate seamlessly with your internal tools and APIs.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Chatbots with memory and RAG for customer support/internal use",
      "Multi-agent systems with distributed roles (scheduler, analyst, seller)",
      "Voice-driven agents via Whisper, ElevenLabs, Twilio",
      "Code-executing bots with fallback logic and custom workflows",
      "Hybrid LLM + rules engines for edge cases & compliance",
      "Deployable on Web, Slack, WhatsApp, IVRs, iOS, and custom stacks",
    ],
    technologies: ["LangGraph", "AutoGen", "CrewAI", "ReAct", "CAMEL", "GPT-4o", "Claude 3 Opus", "Pinecone", "ChromaDB", "AgentLLM", "Unstructured.io", "LangChain"],
    startingPrice: "$15,000",
    timeline: "8-16 weeks",
    color: "indigo" as const,
    route: "/chatbot-development",
  },
  {
    id: "ai-calling",
    icon: Brain,
    title: "AI Calling Agency",
    description:
      "Intelligent call automation systems with natural language processing capabilities.",
    detailedDescription:
      "Advanced AI-powered calling systems for lead generation, customer support, and sales automation. Featuring voice AI, sentiment analysis, and CRM integration.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Voice AI",
      "Call Analytics",
      "Lead Generation",
      "CRM Integration",
    ],
    technologies: ["OpenAI", "Twilio", "Python", "TensorFlow"],
    startingPrice: "$8,000",
    timeline: "6-10 weeks",
    color: "slate" as const,
    route: "/ai-calling",
  },
  {
    id: "ai-automation",
    icon: Zap,
    title: "AI Automation",
    description:
      "Custom AI solutions to automate workflows and enhance business processes.",
    detailedDescription:
      "Intelligent automation solutions using machine learning and AI to streamline operations, reduce costs, and improve efficiency across your organization.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Process Automation",
      "Machine Learning",
      "Data Analytics",
      "Workflow Integration",
    ],
    technologies: ["Python", "TensorFlow", "AWS Lambda", "Zapier"],
    startingPrice: "$12,000",
    timeline: "8-12 weeks",
    color: "stone" as const,
    route: "/ai-automation",
  },
];
