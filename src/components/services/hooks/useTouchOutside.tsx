
import { useEffect } from 'react';

interface UseTouchOutsideProps {
  isTouchDevice: boolean;
  isOpen: boolean;
  cardRef: React.RefObject<HTMLDivElement>;
  setIsOpen: (value: boolean) => void;
}

export const useTouchOutside = ({
  isTouchDevice,
  isOpen,
  cardRef,
  setIsOpen
}: UseTouchOutsideProps) => {
  useEffect(() => {
    if (!isTouchDevice || !isOpen) return;

    const handleTouchOutside = (event: TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener('touchstart', handleTouchOutside, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isTouchDevice, isOpen, cardRef, setIsOpen]);
};
