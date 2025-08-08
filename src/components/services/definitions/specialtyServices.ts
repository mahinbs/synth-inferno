
import { Gamepad2, Palette, Cpu, Eye } from "lucide-react";
import { ServiceData } from "../types";

export const specialtyServices: ServiceData[] = [
  {
    id: "game-development",
    icon: Gamepad2,
    title: "Game Development",
    description:
      "Where creativity meets code to build living, breathing virtual experiences.",
    detailedDescription:
      "We don't just develop games — we design emotional, immersive experiences. With deep expertise in game physics, animation rigs, and multiplayer architecture, our team brings together storyboarding, logic systems, and visual fidelity to create games that don't just entertain — they engage deeply.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multiplayer Game Engines with Real-time Sync",
      "Gamified Learning Platforms",
      "AR/VR-Enabled Training Simulators",
      "In-game Economies with Secure Transaction Layers",
      "Procedural Environments + AI NPC Behavior",
    ],
    technologies: ["Unity", "Unreal Engine", "WebGL", "C#", "C++", "Photon", "Blender", "PlayFab"],
    startingPrice: "$20,000",
    timeline: "12-24 weeks",
    color: "indigo" as const,
    route: "/game-development",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design systems engineered from empathy, validated by data, and refined by interaction science.",
    detailedDescription:
      "We believe that great design is not what it looks like — but how it thinks. At Dee&Cee Labs, our design team fuses behavioral psychology with information architecture and digital ergonomics to craft unforgettable experiences. We're not pixel-pushers — we're product thinkers.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "UX Heatmaps & User Flow Optimization",
      "Design Systems for Scalable Product Ecosystems",
      "Microinteractions that Humanize Tech",
      "Motion Design for Feedback + Delight",
      "Accessibility-First Interfaces (AA/AAA Standards)",
    ],
    technologies: ["Figma", "Adobe XD", "Maze", "Hotjar", "Lottie", "WCAG Compliance"],
    startingPrice: "$7,000",
    timeline: "4-10 weeks",
    color: "purple" as const,
    route: "/ui-ux-design",
  },
  {
    id: "iot",
    icon: Cpu,
    title: "Internet of Things (IoT)",
    description:
      "Secure, intelligent ecosystems that connect devices, data, and decisions.",
    detailedDescription:
      "From hardware control to live telemetry dashboards, we build full-cycle IoT solutions that gather, process, and act on data — in milliseconds.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Industrial IoT Dashboards",
      "Smart Home Systems",
      "Real-time Alerts & Controls",
      "Remote Monitoring",
      "Low Power WAN Optimization",
    ],
    technologies: ["MQTT", "CoAP", "Arduino", "ESP32", "Node-RED", "Raspberry Pi", "AWS IoT Core"],
    startingPrice: "$12,000",
    timeline: "8-14 weeks",
    color: "teal" as const,
    route: "/iot",
  },

];
