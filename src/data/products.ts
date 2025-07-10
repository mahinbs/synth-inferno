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
    tagline: 'AI-Powered Voice Engagement Engine',
    description: 'AI calls every lead in 30 seconds, engages in real time, and never misses a follow-up.',
    ctaText: 'View Product →',
    ctaLink: '/products/speaksify',
    tag: 'Voice AI',
    icon: 'Brain',
    featured: true,
    caseStudyUrl: 'https://www.boostmysites.in/case-study/5ba46296-94a4-442b-97ad-c174d5e42665'
  }
];