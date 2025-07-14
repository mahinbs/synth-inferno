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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-zinc-400/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '4s'
        }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-6 py-3 border-cyan-500/30 bg-gradient-to-r from-slate-900/80 via-gray-800/60 to-slate-900/80 backdrop-blur-xl text-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-cyan-400/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700">
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
      <section className="py-20 px-6 relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800 overflow-hidden">
        {/* Modern backdrop elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover our cutting-edge AI solutions designed to revolutionize your business
            </p>
          </div>
          
          <div className="grid gap-8 max-w-md mx-auto">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ProductsPage;