
import { useEffect } from 'react';
import SEOHead from '@/components/seo/SEOHead';

const BlogsPage = () => {
  useEffect(() => {
    // Redirect to external blog
    window.location.href = 'https://deenceee.blogspot.com/';
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <SEOHead
        title="Technology Blog | AI, Web Development & Tech Insights"
        description="Stay updated with the latest in technology, AI, web development, and industry insights. Expert articles and technical guides from Synth Inferno team."
        keywords="technology blog, AI blog, web development blog, tech insights, programming articles, technology trends, development guides, React, Node.js, AI development"
        canonical="/blogs"
        noIndex={true}
      />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to our blog...</h1>
        <p className="text-muted-foreground">
          If you're not redirected automatically, 
          <a 
            href="https://deenceee.blogspot.com/" 
            className="text-primary hover:underline ml-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default BlogsPage;
