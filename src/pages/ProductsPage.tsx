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
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '4s'
        }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-6 py-3 border-primary/30 bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-xl text-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700">
                AI Products • Innovation • Technology Solutions
              </Badge>
            </div>
            
            <h1 className={`font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Our Products
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
            animationDelay: '200ms'
          }}>
              Cutting-edge AI solutions designed to transform how businesses operate and engage with their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-12 px-6 relative bg-gradient-to-br from-background via-background/80 to-background overflow-hidden -mt-12">
        {/* Modern backdrop elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="flex justify-center items-center">
            <div className="grid gap-8 w-full max-w-lg mx-auto">
              {products.map((product, index) => (
                <div key={product.id} className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
                  animationDelay: `${index * 200}ms`
                }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ProductsPage;