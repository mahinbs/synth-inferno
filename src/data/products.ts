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
}

export const products: Product[] = [
  {
    id: 'speaksify',
    title: 'Speaksify',
    tagline: 'AI-Powered Public Speaking Coach',
    description: 'AI-powered platform that helps users practice, improve, and gain confidence in their communication skills with real-time feedback and personalized coaching.',
    ctaText: 'View Case Study →',
    ctaLink: '/products/speaksify',
    tag: 'AI Coach',
    icon: 'Brain',
    featured: true
  }
];