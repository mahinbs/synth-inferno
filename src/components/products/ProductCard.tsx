import { ArrowRight, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { openZohoForm } from '@/utils/zohoForm';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const IconComponent = Brain; // For now, using Brain icon for AI products

  return (
    <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/95 via-gray-800/90 to-slate-800/85 backdrop-blur-2xl border border-cyan-500/30 hover:border-cyan-300/80 transition-all duration-1000 hover:bg-gradient-to-br hover:from-slate-900/98 hover:via-gray-800/95 hover:to-cyan-900/40 hover:shadow-[0_0_80px_rgba(34,211,238,0.4)] hover:scale-[1.05] hover:-translate-y-4 transform-gpu before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-cyan-400/15 before:via-blue-400/10 before:to-teal-400/15 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-1000 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-r after:from-transparent after:via-cyan-300/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-800 overflow-hidden animate-border-pulse-light">
      {/* Tag */}
      <div className="absolute top-4 right-4">
        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
          {product.tag}
        </Badge>
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20 backdrop-blur-sm mb-6 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-500 border border-cyan-400/30">
        <IconComponent className="h-8 w-8 text-cyan-200 group-hover:text-cyan-100 transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-200 transition-colors duration-500 drop-shadow-lg">
        {product.title}
      </h3>
      
      <p className="text-lg text-gray-300 mb-4 font-medium group-hover:text-gray-200 transition-colors duration-300">
        {product.tagline}
      </p>
      
      <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {product.description}
      </p>

      {/* CTA Button */}
      {product.caseStudyUrl ? (
        <a 
          href={product.caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm border border-cyan-400/50 text-cyan-200 px-6 py-3 rounded-xl font-semibold hover:from-cyan-500/40 hover:to-blue-500/40 hover:border-cyan-300/70 hover:text-white hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500 group"
        >
          <span>{product.ctaText}</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      ) : (
        <button 
          onClick={() => openZohoForm(`product-${product.id}`)}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm border border-cyan-400/50 text-cyan-200 px-6 py-3 rounded-xl font-semibold hover:from-cyan-500/40 hover:to-blue-500/40 hover:border-cyan-300/70 hover:text-white hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500 group"
        >
          <span>{product.ctaText}</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;