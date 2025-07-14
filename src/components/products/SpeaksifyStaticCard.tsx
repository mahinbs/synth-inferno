import React from 'react';

const SpeaksifyStaticCard = () => {
  return (
    <div className="product-card bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
      <img 
        src="/images/speaksify-cover.jpg" 
        alt="Speaksify" 
        className="product-thumbnail w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" 
      />
      <div className="product-details space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Speaksify</h3>
        <p className="text-muted-foreground">AI-Powered Public Speaking Coach</p>
        <ul className="space-y-2 text-sm text-foreground">
          <li className="flex items-start gap-2">
            <span>🎤</span>
            <span>Multilingual voice agents for live speech training</span>
          </li>
          <li className="flex items-start gap-2">
            <span>📊</span>
            <span>Real-time feedback on pace, tone & clarity</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🚀</span>
            <span>Designed for professionals, teams & entrepreneurs</span>
          </li>
          <li className="flex items-start gap-2">
            <span>📈</span>
            <span>300–500% ROI in 90 days*</span>
          </li>
        </ul>
        <a
          href="https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default SpeaksifyStaticCard;