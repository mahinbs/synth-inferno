import { useEffect, useState } from 'react';
import { generateDynamicSitemap } from '../utils/sitemapGenerator';

const SitemapPage: React.FC = () => {
  const [sitemap, setSitemap] = useState<string>('');

  useEffect(() => {
    const generateSitemap = async () => {
      const sitemapContent = await generateDynamicSitemap();
      setSitemap(sitemapContent);
    };
    
    generateSitemap();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      {sitemap}
    </div>
  );
};

export default SitemapPage;
