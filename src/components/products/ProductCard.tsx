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

  return;
};
export default ProductCard;