import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { createOptimizedObserver } = useIntersectionObserver();

  useEffect(() => {
    const observer = createOptimizedObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const section = document.getElementById('products-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [createOptimizedObserver]);

  // Only show featured products on homepage
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section 
      id="products-section" 
      className="relative py-20 overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Explore our intelligent tools designed to scale modern businesses with AI.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        {featuredProducts.length > 0 && (
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <a 
              href="/products"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:from-cyan-600/30 hover:via-blue-600/30 hover:to-teal-600/30 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
            >
              <span>View All Products</span>
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;