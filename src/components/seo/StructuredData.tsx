export interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType: string;
  };
  sameAs?: string[];
}

export interface WebSiteData {
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}

export interface ArticleData {
  headline: string;
  description: string;
  image: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  datePublished: string;
  dateModified?: string;
  url: string;
  mainEntityOfPage: string;
}

export interface ServiceData {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType: string;
  url: string;
}

export interface ProductData {
  name: string;
  description: string;
  image: string;
  brand: {
    name: string;
  };
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
  url: string;
}

export const generateOrganizationSchema = (data: OrganizationData) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": data.name,
  "url": data.url,
  "logo": data.logo,
  "description": data.description,
  ...(data.address && { "address": { "@type": "PostalAddress", ...data.address } }),
  ...(data.contactPoint && { "contactPoint": { "@type": "ContactPoint", ...data.contactPoint } }),
  ...(data.sameAs && { "sameAs": data.sameAs })
});

export const generateWebSiteSchema = (data: WebSiteData) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": data.name,
  "url": data.url,
  "description": data.description,
  ...(data.potentialAction && {
    "potentialAction": {
      "@type": "SearchAction",
      "target": data.potentialAction.target,
      "query-input": data.potentialAction.queryInput
    }
  })
});

export const generateArticleSchema = (data: ArticleData) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": data.headline,
  "description": data.description,
  "image": data.image,
  "author": {
    "@type": "Person",
    "name": data.author.name,
    ...(data.author.url && { "url": data.author.url })
  },
  "publisher": {
    "@type": "Organization",
    "name": data.publisher.name,
    "logo": {
      "@type": "ImageObject",
      "url": data.publisher.logo
    }
  },
  "datePublished": data.datePublished,
  ...(data.dateModified && { "dateModified": data.dateModified }),
  "url": data.url,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": data.mainEntityOfPage
  }
});

export const generateServiceSchema = (data: ServiceData) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": data.name,
  "description": data.description,
  "provider": {
    "@type": "Organization",
    "name": data.provider.name,
    "url": data.provider.url
  },
  ...(data.areaServed && { "areaServed": data.areaServed }),
  "serviceType": data.serviceType,
  "url": data.url
});

export const generateProductSchema = (data: ProductData) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": data.name,
  "description": data.description,
  "image": data.image,
  "brand": {
    "@type": "Brand",
    "name": data.brand.name
  },
  "offers": {
    "@type": "Offer",
    "price": data.offers.price,
    "priceCurrency": data.offers.priceCurrency,
    "availability": data.offers.availability
  },
  "url": data.url
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
