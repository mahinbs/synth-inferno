
export const getCategoryAccent = (category: string) => {
  switch (category) {
    case 'ai':
      return {
        gradient: 'from-cyan-500 to-blue-600',
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-700'
      };
    case 'web':
      return {
        gradient: 'from-purple-500 to-violet-600',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-700'
      };
    case 'mobile':
      return {
        gradient: 'from-emerald-500 to-green-600',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-700'
      };
    case 'saas':
      return {
        gradient: 'from-orange-500 to-amber-600',
        border: 'border-orange-500/30',
        bg: 'bg-orange-500/10',
        text: 'text-orange-700'
      };
    case 'cloud':
      return {
        gradient: 'from-pink-500 to-rose-600',
        border: 'border-pink-500/30',
        bg: 'bg-pink-500/10',
        text: 'text-pink-700'
      };
    default:
      return {
        gradient: 'from-blue-500 to-purple-600',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-700'
      };
  }
};
