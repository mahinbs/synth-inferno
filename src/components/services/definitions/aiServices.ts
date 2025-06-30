
import { Bot, Brain, Zap } from "lucide-react";
import { ServiceData } from "../types";

export const aiServices: ServiceData[] = [
  {
    id: "chatbot-development",
    icon: Bot,
    title: "Chatbot Development",
    description:
      "From linear bots to self‑evolving AI assistants — we engineer conversational agents capable of holding memory, inferring emotions, and performing multi‑step workflows across platforms.",
    detailedDescription:
      "These bots aren't scripts — they're miniature AI workers embedded into your business. We create intelligent conversational agents that can understand context, maintain memory across conversations, and execute complex workflows while adapting to user behavior and business needs.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Role-based multi‑agent chatbots (Seller, Scheduler, QA Agent)",
      "Voice‑activated assistants for apps & IVRs",
      "Code‑executing agents with workflow automation",
      "Hybrid AI + rule‑based bots with CRM action sync",
      "Multi-platform deployment (Slack, WhatsApp, Web, iOS)",
    ],
    technologies: ["LangGraph", "AutoGen", "OpenAI Assistants API", "Pinecone", "Weaviate", "OpenRouter", "LangServe", "OpenAI Whisper", "ElevenLabs", "Twilio Voice AI"],
    startingPrice: "$15,000",
    timeline: "8-16 weeks",
    color: "indigo" as const,
    route: "/chatbot-development",
  },
  {
    id: "sales-force",
    icon: Brain,
    title: "Sales Force",
    description:
      "End-to-end CRM and sales pipeline automation solutions tailored to boost lead conversions and manage enterprise relationships.",
    detailedDescription:
      "Comprehensive Salesforce platform setup and customization with automated workflows, lead tracking, and performance analytics. Transform your sales process with enterprise-grade CRM solutions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Salesforce Platform Setup",
      "Sales Pipeline Automation",
      "Lead Capture & Tracking",
      "Real-time Reporting",
      "CRM Data Migration",
    ],
    technologies: ["Salesforce", "Apex", "Lightning", "Pardot"],
    startingPrice: "$9,000",
    timeline: "6-12 weeks",
    color: "blue" as const,
    route: "/sales-force",
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
