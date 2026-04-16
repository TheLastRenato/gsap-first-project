import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * FloatingCans Component
 * 
 * Animação de latas voando pela tela com efeito 3D
 * Similar ao vídeo do Spylt
 * 
 * Características:
 * - Latas entram de diferentes direções
 * - Rotação 3D contínua
 * - Parallax com scroll
 * - Frase aparece embaixo
 */
export default function FloatingCans() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cansRef = useRef<HTMLDivElement[]>([]);
  const phraseRef = useRef<HTMLDivElement>(null);

  const cans = [
    {
      id: 1,
      emoji: '🥫',
      flavor: 'Chocolate',
      color: 'from-amber-900 to-amber-700',
    },
    {
      id: 2,
      emoji: '🥫',
      flavor: 'Morango',
      color: 'from-pink-500 to-pink-400',
    },
    {
      id: 3,
      emoji: '🥫',
      flavor: 'Cookies & Cream',
      color: 'from-amber-100 to-amber-50',
    },
    {
      id: 4,
      emoji: '🥫',
      flavor: 'Baunilha',
      color: 'from-yellow-100 to-yellow-50',
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline principal para coordenar tudo
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
      });

      // Animar cada lata com trajetória diferente
      cansRef.current.forEach((can, index) => {
        const delay = index * 0.3;
        const duration = 2;

        // Trajetórias diferentes para cada lata
        const trajectories = [
          // Lata 1: Vem de cima-esquerda
          {
            startX: -200,
            startY: -300,
            endX: 100,
            endY: 200,
            rotation: 720,
          },
          // Lata 2: Vem de cima-direita
          {
            startX: 300,
            startY: -250,
            endX: -80,
            endY: 150,
            rotation: -720,
          },
          // Lata 3: Vem de baixo-esquerda
          {
            startX: -150,
            startY: 400,
            endX: 150,
            endY: -100,
            rotation: 540,
          },
          // Lata 4: Vem de baixo-direita
          {
            startX: 250,
            startY: 350,
            endX: -120,
            endY: -150,
            rotation: -540,
          },
        ];

        const trajectory = trajectories[index % trajectories.length];

        // Animar lata
        mainTl.from(
          can,
          {
            x: trajectory.startX,
            y: trajectory.startY,
            opacity: 0,
            scale: 0.3,
            rotationX: 180,
            rotationY: 180,
            rotationZ: trajectory.rotation,
            duration: duration,
            ease: 'power2.inOut',
          },
          delay
        );

        // Rotação contínua enquanto está visível
        gsap.to(can, {
          rotationX: 360,
          rotationY: 360,
          duration: 3,
          repeat: -1,
          ease: 'none',
        });

        // Flutuação suave
        gsap.to(can, {
          y: '+=20',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // Animar frase embaixo
      if (phraseRef.current) {
        mainTl.from(
          phraseRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
          },
          0.5
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center overflow-hidden"
    >
      {/* Fundo com padrão sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-transparent" />
      </div>

      {/* Container 3D para latas */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: '1200px',
        }}
      >
        {cans.map((can, index) => (
          <div
            key={can.id}
            ref={(el) => {
              if (el) cansRef.current[index] = el;
            }}
            className="absolute"
            style={{
              transformStyle: 'preserve-3d',
              width: '120px',
              height: '160px',
            }}
          >
            {/* Lata com gradiente */}
            <div
              className={`w-full h-full rounded-2xl shadow-2xl flex items-center justify-center text-6xl bg-gradient-to-br ${can.color} flex-col gap-2 p-4`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Emoji da lata */}
              <div className="text-5xl">🥫</div>

              {/* Texto do sabor (pequeno) */}
              <div className="text-xs font-bold text-center text-gray-800 opacity-80">
                {can.flavor.split(' ')[0]}
              </div>
            </div>

            {/* Brilho/shine effect */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(10px)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Frase embaixo */}
      <div
        ref={phraseRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-96"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Escolha seu sabor favorito
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Descubra a combinação perfeita de energia, proteína e sabor excepcional
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-orange-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
