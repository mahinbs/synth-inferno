
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LiveViewButtonProps {
  url: string;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
}

const LiveViewButton = ({ url, className = '', variant = 'default', size = 'default' }: LiveViewButtonProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Ensure professional deep blue styling for the button
  const buttonStyles = variant === 'outline' 
    ? `border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white ${className}`
    : `bg-blue-600 hover:bg-blue-700 text-white ${className}`;

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={buttonStyles}
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      View Live
    </Button>
  );
};

export default LiveViewButton;
