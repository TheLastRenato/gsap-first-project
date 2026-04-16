import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
}

/**
 * ScrollReveal Component
 * 
 * Anima elementos quando entram na viewport durante scroll.
 * Suporta múltiplas animações e delays para efeito de stagger.
 * 
 * Uso:
 * <ScrollReveal animation="fadeInUp" delay={0}>
 *   <h2>Seu conteúdo aqui</h2>
 * </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Elemento entrou na viewport
          setTimeout(() => {
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'none';
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${animation === 'fadeInUp' ? 'opacity-0 translate-y-8' : ''} ${
        animation === 'slideInLeft' ? 'opacity-0 -translate-x-8' : ''
      } ${animation === 'slideInRight' ? 'opacity-0 translate-x-8' : ''} ${
        animation === 'scaleIn' ? 'opacity-0 scale-95' : ''
      } transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
