import { useInView } from './useInView';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

interface UseScrollAnimationProps {
  direction?: AnimationDirection;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation({
  direction = 'up',
  delay = 0,
  threshold = 0.2,
  triggerOnce = false
}: UseScrollAnimationProps = {}) {
  const [ref, isVisible] = useInView({ threshold, triggerOnce });

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700';
    const delayClass = delay ? `delay-${delay}` : '';

    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClass} ${delayClass} opacity-0 translate-y-16`;
        case 'down':
          return `${baseClass} ${delayClass} opacity-0 -translate-y-16`;
        case 'left':
          return `${baseClass} ${delayClass} opacity-0 translate-x-16`;
        case 'right':
          return `${baseClass} ${delayClass} opacity-0 -translate-x-16`;
        case 'fade':
          return `${baseClass} ${delayClass} opacity-0`;
        default:
          return `${baseClass} ${delayClass} opacity-0`;
      }
    }

    return `${baseClass} ${delayClass} opacity-100 translate-x-0 translate-y-0`;
  };

  return [ref, getAnimationClass()] as const;
}