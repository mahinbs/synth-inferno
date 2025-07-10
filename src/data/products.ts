export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  tag: string;
  icon: string;
  featured?: boolean;
  caseStudyUrl?: string;
}

export const products: Product[] = [
  {
    id: 'speaksify',
    title: 'Speaksify',
    tagline: 'AI-Powered Public Speaking Coach',
    description: 'AI-powered platform that helps users practice, improve, and gain confidence in their communication skills through real-time feedback.',
    ctaText: 'View Case Study →',
    ctaLink: '/products/speaksify',
    tag: 'Voice AI',
    icon: 'Brain',
    featured: true
  }
];