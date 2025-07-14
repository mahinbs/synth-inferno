import { ArrowRight, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { openZohoForm } from '@/utils/zohoForm';
interface ProductCardProps {
  product: Product;
}
const ProductCard = ({
  product
}: ProductCardProps) => {
  const IconComponent = Brain; // For now, using Brain icon for AI products

  return (
    <Link to={product.ctaLink} className="block">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:border-slate-600 transition-all duration-300 group -mt-2">
        <div className="mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
            <IconComponent className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
        
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs mb-2 bg-cyan-400/10 text-cyan-400 border-cyan-400/20">
            {product.tag}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{product.title}</h3>
        <p className="text-slate-400 text-sm mb-2 font-medium">{product.tagline}</p>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
          {product.ctaText}
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;