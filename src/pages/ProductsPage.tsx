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
            {products.map((product, index) => <div key={product.id} className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <ProductCard product={product} />
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ProductsPage;