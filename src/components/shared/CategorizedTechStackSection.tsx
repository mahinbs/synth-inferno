import { Code, Server, Cloud, Activity } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useEffect, useRef, useState } from 'react';

const CategorizedTechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techStackCategories = [
    {
      icon: Code,
      title: 'Frontend Stack',
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-400/30',
      bgColor: 'bg-blue-500/10',
      technologies: [
        'React.js', 'Vue.js', 'Next.js', 'Nuxt.js',
        'TypeScript', 'JavaScript ES6+',
        'Tailwind CSS', 'Material-UI', 'Bootstrap',
        'Storybook Pro', 'Stately.ai'
      ]
    },
    {
      icon: Server,
      title: 'Backend Stack',
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-400/30',
      bgColor: 'bg-green-500/10',
      technologies: [
        'Java (Spring Boot)', 'Node.js (Express, Nest)',
        'Python (Django, Flask)', 'PHP (Laravel)',
        'PostgreSQL', 'MongoDB', 'Redis',
        'Fastify', 'Edge Runtime', 'Neon.tech',
        'ClickHouse', 'Drizzle ORM'
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Infrastructure',
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-400/30',
      bgColor: 'bg-purple-500/10',
      technologies: [
        'GitHub Actions', 'Terraform Cloud',
        'Docker', 'Kubernetes',
        'AWS', 'GCP', 'Azure', 'DigitalOcean',
        'Cloudflare Zero Trust', 'Vault', 'Ansible',
        'VPN', 'IAM', 'WAF'
      ]
    },
    {
      icon: Activity,
      title: 'Observability & QA',
      color: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-400/30',
      bgColor: 'bg-orange-500/10',
      technologies: [
        'Datadog', 'New Relic', 'Sentry Pro',
        'Grafana Loki', 'Prometheus',
        'Selenium', 'JUnit', 'TestRail',
        'Twilio', 'WhatsApp Business API',
        'OAuth', 'OpenID Connect'
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Tech Stack
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Cutting-edge technologies and tools that power our web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techStackCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative p-8 rounded-2xl border ${category.borderColor} bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${categoryIndex * 200 + 400}ms`
              }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.bgColor} border ${category.borderColor} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech}
                    className={`group/tech px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-sm text-gray-300 hover:bg-gradient-to-r hover:${category.color} hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 cursor-pointer ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{
                      transitionDelay: `${categoryIndex * 200 + techIndex * 50 + 600}ms`
                    }}
                  >
                    <span className="text-xs font-medium">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-400 mb-6">
            Want to see these technologies in action for your project?
          </p>
          <a 
            href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Let's Discuss Your Tech Stack
            <Code className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorizedTechStackSection;