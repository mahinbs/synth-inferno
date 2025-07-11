
export const getCategoryAccent = (category: string) => {
  switch (category) {
    case 'ai':
      return {
        gradient: 'from-slate-600 to-gray-700',
        border: 'border-slate-500/30',
        bg: 'bg-slate-500/10',
        text: 'text-slate-700'
      };
    case 'web':
      return {
        gradient: 'from-stone-600 to-zinc-700',
        border: 'border-stone-500/30',
        bg: 'bg-stone-500/10',
        text: 'text-stone-700'
      };
    case 'mobile':
      return {
        gradient: 'from-gray-600 to-slate-700',
        border: 'border-gray-500/30',
        bg: 'bg-gray-500/10',
        text: 'text-gray-700'
      };
    case 'saas':
      return {
        gradient: 'from-zinc-600 to-stone-700',
        border: 'border-zinc-500/30',
        bg: 'bg-zinc-500/10',
        text: 'text-zinc-700'
      };
    case 'cloud':
      return {
        gradient: 'from-slate-700 to-gray-800',
        border: 'border-slate-600/30',
        bg: 'bg-slate-600/10',
        text: 'text-slate-800'
      };
    default:
      return {
        gradient: 'from-gray-600 to-slate-700',
        border: 'border-gray-500/30',
        bg: 'bg-gray-500/10',
        text: 'text-gray-700'
      };
  }
};
