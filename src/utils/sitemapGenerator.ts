export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const baseUrl = 'https://www.deeceelabs.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapUrls = urls.map(url => {
    const fullUrl = url.loc.startsWith('http') ? url.loc : `${baseUrl}${url.loc}`;
    const lastmod = url.lastmod || currentDate;
    const changefreq = url.changefreq || 'weekly';
    const priority = url.priority || 0.5;
    
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;
};

export const getDefaultSitemapUrls = (): SitemapUrl[] => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    // Main pages
    { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: currentDate },
    { loc: '/portfolio', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
    { loc: '/products', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
    { loc: '/blogs', changefreq: 'daily', priority: 0.8, lastmod: currentDate },
    { loc: '/reviews', changefreq: 'weekly', priority: 0.7, lastmod: currentDate },
    { loc: '/privacy-policy', changefreq: 'monthly', priority: 0.3, lastmod: currentDate },
    
    // Service pages
    { loc: '/web-apps', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/saas', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/mobile-apps', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/sales-force', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/ai-calling', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/ai-automation', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/ar-vr-development', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/iot', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/game-development', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/ui-ux-design', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    { loc: '/chatbot-development', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
    
    // Product pages
    { loc: '/speaksify', changefreq: 'weekly', priority: 0.7, lastmod: currentDate },
    { loc: '/products/speaksify', changefreq: 'weekly', priority: 0.7, lastmod: currentDate },
  ];
};

// Function to generate sitemap for dynamic content
export const generateDynamicSitemap = async (): Promise<string> => {
  try {
    // This would typically fetch from your API/database
    // For now, we'll use static data
    const staticUrls = getDefaultSitemapUrls();
    
    // Add dynamic URLs here (case studies, blog posts, etc.)
    // Example:
    // const blogPosts = await fetchBlogPosts();
    // const blogUrls = blogPosts.map(post => ({
    //   loc: `/blog/${post.slug}`,
    //   changefreq: 'monthly' as const,
    //   priority: 0.6,
    //   lastmod: post.updatedAt
    // }));
    
    // const caseStudies = await fetchCaseStudies();
    // const caseStudyUrls = caseStudies.map(study => ({
    //   loc: `/case-study/${study.id}`,
    //   changefreq: 'monthly' as const,
    //   priority: 0.7,
    //   lastmod: study.updatedAt
    // }));
    
    // const allUrls = [...staticUrls, ...blogUrls, ...caseStudyUrls];
    const allUrls = staticUrls;
    
    return generateSitemap(allUrls);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return generateSitemap(getDefaultSitemapUrls());
  }
};
