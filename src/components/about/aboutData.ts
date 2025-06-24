
import { Target, Users, Globe, TrendingUp, Rocket, Brain, Zap } from 'lucide-react';
import { Statistic, ExpertiseItem, ColorClassesMap } from './aboutTypes';

export const statistics: Statistic[] = [
  { icon: Target, label: 'Successful Projects', value: '1,500+', color: 'gray' },
  { icon: Users, label: 'Expert Team Members', value: '230+', color: 'slate' },
  { icon: Globe, label: 'Cities Worldwide', value: '56+', color: 'zinc' },
  { icon: TrendingUp, label: 'Years of Innovation', value: '7+', color: 'neutral' }
];

export const expertise: ExpertiseItem[] = [
  {
    icon: Rocket,
    title: 'Product-Led Growth Approach',
    description: 'We don\'t just develop software—we build products with a clear growth strategy. Every feature, UI component, and integration is designed to improve user engagement, reduce friction, and drive measurable business outcomes.',
    color: 'gray',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80&auto=format&fit=crop'
  },
  {
    icon: Brain,
    title: 'Deep Tech + Business Understanding',
    description: 'Our strength lies in bridging the gap between technology and business. We deeply understand user psychology, business models, and market dynamics, allowing us to build systems that perform under real business pressure.',
    color: 'slate',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop'
  },
  {
    icon: Zap,
    title: 'Speed + Iteration Mastery',
    description: 'With 1500+ projects delivered, we\'ve refined the art of rapid prototyping, MVP development, and iterative scaling. Whether you\'re launching in 30 days or scaling to 1M users, our agile frameworks deliver results—fast.',
    color: 'zinc',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop'
  },
  {
    icon: Users,
    title: 'True Technology Partner',
    description: 'We don\'t work for our clients. We work with them—as partners. From ideation to launch and beyond, we embed ourselves in your mission and act as your extended tech team, not a vendor.',
    color: 'neutral',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop'
  },
  {
    icon: Target,
    title: 'Complex Problem Solving',
    description: 'From automating legacy business operations to building AI-powered workflows and integrating third-party APIs, we specialize in solving non-obvious, high-impact problems with elegant tech solutions.',
    color: 'gray',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&auto=format&fit=crop'
  },
  {
    icon: Globe,
    title: 'Global Delivery Mindset',
    description: 'With a presence in 56+ cities and clients across 10+ countries, we understand the nuances of building systems for global scale—languages, regulations, latency, user behavior, and infrastructure.',
    color: 'slate',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80&auto=format&fit=crop'
  }
];

export const recognitions = [
  'Forbes',
  'Entrepreneur',
  'YourStory'
];

export const colorClasses: ColorClassesMap = {
  gray: {
    border: 'border-gray-400/30',
    gradient: 'from-gray-400/10 to-gray-600/10',
    icon: 'bg-gray-500/10 text-gray-400 border-gray-400/30',
    text: 'text-gray-400',
    tag: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    overlay: 'from-gray-900/80 via-black/60 to-gray-900/80'
  },
  slate: {
    border: 'border-slate-400/30',
    gradient: 'from-slate-400/10 to-slate-600/10',
    icon: 'bg-slate-500/10 text-slate-400 border-slate-400/30',
    text: 'text-slate-400',
    tag: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
    overlay: 'from-slate-900/80 via-black/60 to-slate-900/80'
  },
  zinc: {
    border: 'border-zinc-400/30',
    gradient: 'from-zinc-400/10 to-zinc-600/10',
    icon: 'bg-zinc-500/10 text-zinc-400 border-zinc-400/30',
    text: 'text-zinc-400',
    tag: 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30',
    overlay: 'from-zinc-900/80 via-black/60 to-zinc-900/80'
  },
  neutral: {
    border: 'border-neutral-400/30',
    gradient: 'from-neutral-400/10 to-neutral-600/10',
    icon: 'bg-neutral-500/10 text-neutral-400 border-neutral-400/30',
    text: 'text-neutral-400',
    tag: 'bg-neutral-500/20 text-neutral-300 border-neutral-500/30',
    overlay: 'from-neutral-900/80 via-black/60 to-neutral-900/80'
  }
};
