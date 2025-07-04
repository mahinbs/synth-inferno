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
    <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/70">
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