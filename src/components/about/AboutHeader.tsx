
import { memo } from 'react';

interface AboutHeaderProps {
  isVisible: boolean;
}

const AboutHeader = memo(({ isVisible }: AboutHeaderProps) => {
  return (
    <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        About <span className="bg-gradient-to-r from-slate-400 to-gray-600 bg-clip-text text-transparent">Dee&Cee Labs</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Founded in <span className="text-slate-400 font-semibold">2017</span>, Dee&Cee Labs is a global software and AI solutions company on a mission to help businesses scale with powerful digital products.
      </p>
    </div>
  );
});

AboutHeader.displayName = 'AboutHeader';

export default AboutHeader;
