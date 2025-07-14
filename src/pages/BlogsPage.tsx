
import { useEffect } from 'react';

const BlogsPage = () => {
  useEffect(() => {
    // Redirect to external blog
    window.location.href = 'https://deenceee.blogspot.com/';
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
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
