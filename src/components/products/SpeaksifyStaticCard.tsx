import React from 'react';
import { Link } from 'react-router-dom';

const SpeaksifyStaticCard = () => {
  return (
    <div className="product-card bg-white border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg group"
         style={{ background: 'white', borderColor: '#e5e7eb' }}>
      <div className="product-details space-y-4">
        <h3 className="text-xl font-semibold" style={{ color: '#1f2937' }}>Speaksify</h3>
        <p style={{ color: '#6b7280' }}>AI-Powered Public Speaking Coach</p>
        <ul className="space-y-2 text-sm" style={{ color: '#1f2937' }}>
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
        <Link
          to="/products/speaksify"
          className="cta-button inline-block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          style={{ backgroundColor: '#3b82f6', color: 'white' }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default SpeaksifyStaticCard;