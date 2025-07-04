import { ArrowRight, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const IconComponent = Brain; // For now, using Brain icon for AI products

  return (
    <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/60 via-card/40 to-background/20 backdrop-blur-xl border border-border/30 hover:border-primary/50 transition-all duration-500 hover:bg-gradient-to-br hover:from-card/80 hover:via-card/60 hover:to-primary/10 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] hover:-translate-y-2 transform-gpu before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
      {/* Tag */}
      <div className="absolute top-4 right-4">
        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
          {product.tag}
        </Badge>
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="h-8 w-8 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
        {product.title}
      </h3>
      
      <p className="text-lg text-muted-foreground mb-4 font-medium">
        {product.tagline}
      </p>
      
      <p className="text-muted-foreground mb-8 leading-relaxed">
        {product.description}
      </p>

      {/* CTA Button */}
      <Link 
        to={product.ctaLink}
        className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/30 hover:scale-105 transition-all duration-300 group"
      >
        <span>{product.ctaText}</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default ProductCard;