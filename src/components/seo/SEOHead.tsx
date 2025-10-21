import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Synth Inferno - Engineering the Future Today | AI, Web, Mobile & AR/VR Development",
  description = "Transform your business with cutting-edge AI solutions, mobile apps, web development, and immersive AR/VR experiences. Expert development team specializing in full-stack solutions.",
  keywords = "AI development, machine learning, mobile app development, web development, AR VR development, chatbot development, cloud architecture, IoT solutions, SaaS development, React development, TypeScript, Node.js",
  canonical,
  ogImage = "https://res.cloudinary.com/dtq6gshzf/image/upload/v1755595529/synthinferno-logo_socawa.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  structuredData,
  author = "Synth Inferno Team",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const baseUrl = "https://www.synthinferno.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  const fullTitle = title.includes('Synth Inferno') ? title : `${title} | Synth Inferno`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Synth Inferno" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@deeceelabs" />
      <meta name="twitter:creator" content="@deeceelabs" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="msapplication-navbutton-color" content="#FFFFFF" />
      <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Synth Inferno" />
      
      {/* Language and Geo */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
