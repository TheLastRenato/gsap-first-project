import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook customizado para usar GSAP ScrollTrigger facilmente
 * 
 * Uso:
 * const ref = useGSAPScrollTrigger({
 *   animation: (element) => {
 *     gsap.to(element, {
 *       x: 100,
 *       duration: 1,
 *       scrollTrigger: {
 *         trigger: element,
 *         start: 'top center',
 *         end: 'bottom center',
 *         scrub: 1,
 *       }
 *     });
 *   }
 * });
 * 
 * return <div ref={ref}>Seu conteúdo</div>
 */
interface UseGSAPScrollTriggerProps {
  animation: (element: HTMLElement) => void;
  dependencies?: any[];
}

export function useGSAPScrollTrigger({
  animation,
  dependencies = [],
}: UseGSAPScrollTriggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      animation(ref.current);
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, dependencies);

  return ref;
}

export default useGSAPScrollTrigger;
