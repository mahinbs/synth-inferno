import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';

const ProductsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 border-border/30 bg-card/10 backdrop-blur-sm">
                AI Products • Innovation • Technology Solutions
              </Badge>
            </div>
            
            <h1 className={`font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Our Products
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              Cutting-edge AI solutions designed to transform how businesses operate and engage with their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;