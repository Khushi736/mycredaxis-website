import { useEffect, useRef, useState } from 'react';

export function usePageReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let revealed = false;
    const onScroll = () => checkAlreadyVisible();
    const markVisible = () => {
      if (revealed) return;
      revealed = true;
      setIsVisible(true);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };

    const checkAlreadyVisible = () => {
      const rect = node.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewH * 0.92 && rect.bottom > viewH * 0.06) {
        markVisible();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markVisible();
      },
      {
        threshold: Math.min(threshold, 0.01),
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(node);

    checkAlreadyVisible();
    const t = window.setTimeout(checkAlreadyVisible, 100);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return { ref, isVisible };
}
