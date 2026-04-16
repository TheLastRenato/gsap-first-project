import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * FlavorsSection Component - Com GSAP
 * 
 * Animações:
 * - Imagem rotaciona ao trocar sabor
 * - Botões têm animação de clique
 * - Seção entra com parallax
 * 
 * Design: Minimalismo Dinâmico
 */
export default function FlavorsSection() {
  const [activeFlavor, setActiveFlavor] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const flavors = [
    {
      name: 'Chocolate',
      description:
        'Sabor clássico e irresistível com toque de cacau premium.',
      color: 'bg-amber-900',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663212437337/36bT5GNHumSSWz5A5faDcx/flavors-collection-hgHtaEUYTDpJosGxJCmEea.webp',
    },
    {
      name: 'Morango',
      description: 'Fresco, frutado e refrescante. Perfeito para qualquer hora.',
      color: 'bg-pink-500',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663212437337/36bT5GNHumSSWz5A5faDcx/flavors-collection-hgHtaEUYTDpJosGxJCmEea.webp',
    },
    {
      name: 'Cookies & Cream',
      description:
        'Combinação perfeita de biscoito e creme. Um clássico moderno.',
      color: 'bg-amber-100',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663212437337/36bT5GNHumSSWz5A5faDcx/flavors-collection-hgHtaEUYTDpJosGxJCmEea.webp',
    },
    {
      name: 'Baunilha',
      description: 'Suave, elegante e versátil. A escolha dos apaixonados.',
      color: 'bg-yellow-100',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663212437337/36bT5GNHumSSWz5A5faDcx/flavors-collection-hgHtaEUYTDpJosGxJCmEea.webp',
    },
  ];

  useEffect(() => {
    // Anima imagem ao trocar sabor
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        rotationY: 360,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });
    }
  }, [activeFlavor]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Anima seção ao entrar na viewport
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
        once: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    // Anima botões com stagger
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll('button');
      gsap.from(buttons, {
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: 'top center+=100',
          once: true,
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleFlavorClick = (index: number) => {
    // Anima botão ao clicar
    if (buttonsRef.current) {
      const button = buttonsRef.current.children[index] as HTMLElement;
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    }
    setActiveFlavor(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-white"
    >
      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Sabores Incríveis
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha seu sabor favorito e descubra a combinação perfeita de
            energia e sabor.
          </p>
        </div>

        {/* Carrossel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem grande */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl" />

              {/* Imagem do sabor */}
              <img
                ref={imageRef}
                src={flavors[activeFlavor].image}
                alt={flavors[activeFlavor].name}
                className="relative z-10 w-full h-full object-contain p-8 transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              />
            </div>
          </div>

          {/* Informações e seletor */}
          <div className="space-y-8">
            {/* Nome e descrição do sabor ativo */}
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                {flavors[activeFlavor].name}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {flavors[activeFlavor].description}
              </p>
            </div>

            {/* Seletor de sabores */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Escolha um sabor
              </p>
              <div ref={buttonsRef} className="grid grid-cols-2 gap-4">
                {flavors.map((flavor, index) => (
                  <button
                    key={index}
                    onClick={() => handleFlavorClick(index)}
                    className={`p-4 rounded-xl font-semibold transition-all duration-300 transform ${
                      activeFlavor === index
                        ? 'bg-orange-600 text-white scale-105 shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {flavor.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Informações nutricionais */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              {[
                { label: 'Calorias', value: '120 kcal' },
                { label: 'Proteína', value: '25g' },
                { label: 'Cafeína', value: '80mg' },
                { label: 'Açúcar', value: '0g' },
              ].map((info, index) => (
                <div key={index}>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {info.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
