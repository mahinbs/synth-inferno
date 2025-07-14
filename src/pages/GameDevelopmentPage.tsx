import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import DevelopmentLifecycle from "@/components/shared/DevelopmentLifecycle";

const GameDevelopmentPage = () => {
  const techStackCategories = [
    {
      title: "Game Engines & Frameworks",
      technologies: ["Unity 2023", "Unreal Engine 5", "Godot 4", "GameMaker Studio", "Construct 3", "Defold"]
    },
    {
      title: "Programming Languages", 
      technologies: ["C#", "C++", "JavaScript", "TypeScript", "Python", "Lua", "GDScript", "Rust"]
    },
    {
      title: "Graphics & Rendering",
      technologies: ["DirectX 12", "Vulkan API", "OpenGL", "Metal", "WebGL", "WebGPU", "Shader Graph", "HLSL"]
    },
    {
      title: "3D Modeling & Animation",
      technologies: ["Blender", "Maya", "3ds Max", "ZBrush", "Substance Suite", "Houdini", "Cinema 4D"]
    },
    {
      title: "Audio & Sound Design",
      technologies: ["FMOD", "Wwise", "Unity Audio", "Unreal Audio", "Audacity", "Pro Tools", "Logic Pro"]
    },
    {
      title: "Networking & Multiplayer",
      technologies: ["Photon Fusion", "Mirror Networking", "Netcode for GameObjects", "Nakama", "GameSparks", "Playfab"]
    },
    {
      title: "Backend & Cloud Services",
      technologies: ["Firebase", "AWS GameLift", "Google Cloud Gaming", "Azure PlayFab", "Unity Cloud Build"]
    },
    {
      title: "Platform SDKs",
      technologies: ["Steam SDK", "Epic Games Store", "iOS Game Center", "Google Play Games", "Xbox Live", "PlayStation Network"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white" style={{background: 'linear-gradient(180deg, #0D0F21 0%, #13162B 100%)'}}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Game Development Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Create engaging, immersive gaming experiences across all platforms with cutting-edge technology and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Game Development Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional game development tools and engines for creating exceptional gaming experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {techStackCategories.map((category, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{category.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {category.technologies.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection 
        title="Why Choose DeeCee for Game Development?"
        subtitle="Expert game developers with proven experience in creating successful games across all platforms"
      />

      {/* Development Lifecycle */}
      <DevelopmentLifecycle 
        title="Game Development Process"
        subtitle="From concept to launch, our proven game development methodology ensures engaging and successful games"
        className="bg-gray-900/50"
      />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Game?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Turn your game idea into reality with our experienced development team and cutting-edge technology.
          </p>
          <a 
            href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevelopmentPage;