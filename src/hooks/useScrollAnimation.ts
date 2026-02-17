import { useEffect, useRef, useState, type RefObject } from 'react';

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => {
      observer.unobserve(node);
    };
  }, [threshold]);

  return { ref: ref as RefObject<T>, isVisible };
}
