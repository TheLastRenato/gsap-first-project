import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * HeroSection Component - Com GSAP Avançado
 * 
 * Animações:
 * - Texto entra com stagger
 * - Imagem rotaciona e flutua
 * - Parallax no fundo
 * - Indicador de scroll animado
 * 
 * Design: Minimalismo Dinâmico com Gradientes Ousados
 */
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Timeline para animações de entrada
    const tl = gsap.timeline();

    // Anima título com split
    if (titleRef.current) {
      tl.from(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        },
        0
      );
    }

    // Anima descrição
    if (descriptionRef.current) {
      tl.from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        },
        0.2
      );
    }

    // Anima CTAs
    if (ctaContainerRef.current) {
      tl.from(
        ctaContainerRef.current.children,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        },
        0.4
      );
    }

    // Anima imagem com rotação e escala
    if (imageRef.current) {
      tl.from(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotationY: 45,
          duration: 1.2,
          ease: 'back.out(1.7)',
        },
        0.2
      );

      // Flutuação contínua da imagem
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Rotação suave contínua
      gsap.to(imageRef.current, {
        rotationZ: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Parallax no fundo
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (heroRef.current) {
            gsap.to(heroRef.current, {
              backgroundPosition: `0% ${self.getVelocity() * 0.1}px`,
              duration: 0.5,
            });
          }
        },
      },
    });

    // Anima indicador de scroll
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
      style={{
        backgroundImage:
          'linear-gradient(135deg, #FF6B35 0%, #FFE5D9 100%)',
      }}
    >
      {/* Conteúdo */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Energize sua vida
              </h1>
              <p
                ref={descriptionRef}
                className="text-white/90 text-lg md:text-xl max-w-md leading-relaxed"
              >
                Descubra EnergyMax: a bebida energética premium com proteína,
                cafeína e sabor excepcional. Feito para quem quer mais energia,
                mais foco e mais performance.
              </p>
            </div>

            {/* CTAs */}
            <div ref={ctaContainerRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Comprar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Benefícios rápidos */}
            <div className="flex gap-6 pt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-white/80 text-sm">Sem lactose</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-white/80 text-sm">Com proteína</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-white/80 text-sm">Reciclável</span>
              </div>
            </div>
          </div>

          {/* Imagem do produto */}
          <div className="flex justify-center lg:justify-end perspective">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Elemento decorativo de fundo */}
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />

              {/* Imagem do produto */}
              <img
                ref={imageRef}
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663212437337/36bT5GNHumSSWz5A5faDcx/product-showcase-d6FpJsdCV3v7fmDaVfiBNx.webp"
                alt="EnergyMax - Bebida Energética"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
