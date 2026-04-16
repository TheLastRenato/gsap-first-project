import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * TestimonialsSection Component - Com GSAP ScrollTrigger
 * 
 * Animações:
 * - Cards entram com stagger ao scroll
 * - Estrelas aparecem com animação
 * - CTA final com hover effect
 * 
 * Design: Minimalismo Dinâmico
 */
export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'João Silva',
      role: 'Atleta',
      content:
        'EnergyMax mudou minha rotina de treinos. A energia é consistente e o sabor é incrível!',
      rating: 5,
      avatar: '👨‍🏫',
    },
    {
      name: 'Maria Santos',
      role: 'Profissional de Tech',
      content:
        'Perfeito para longas horas de trabalho. Sem o crash de outras bebidas energéticas.',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      name: 'Carlos Oliveira',
      role: 'Personal Trainer',
      content:
        'Recomendo para todos os meus clientes. Qualidade premium com preço justo.',
      rating: 5,
      avatar: '👨‍🏫',
    },
    {
      name: 'Ana Costa',
      role: 'Estudante',
      content:
        'A melhor bebida energética que já experimentei. Rápido, eficaz e saudável!',
      rating: 5,
      avatar: '👩‍🎓',
    },
  ];

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    // Anima cards com stagger
    const cards = cardsContainerRef.current.querySelectorAll('[data-testimonial]');
    gsap.from(cards, {
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: 'top center+=100',
        end: 'center center',
        scrub: 1,
      },
      opacity: 0,
      y: 80,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
    });

    // Anima estrelas com delay
    cards.forEach((card, cardIndex) => {
      const stars = card.querySelectorAll('[data-star]');
      gsap.from(stars, {
        scrollTrigger: {
          trigger: card,
          start: 'top center+=100',
          once: true,
        },
        opacity: 0,
        scale: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'back.out(1.7)',
        delay: cardIndex * 0.1,
      });
    });

    // Anima CTA
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top center+=100',
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663212437337/36bT5GNHumSSWz5A5faDcx/testimonials-bg-6osjqtZsEgujowwNtpGpdg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Milhares de pessoas já transformaram sua rotina com EnergyMax.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} data-testimonial className="h-full">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      data-star
                      size={16}
                      className="fill-orange-600 text-orange-600"
                    />
                  ))}
                </div>

                {/* Conteúdo */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow group-hover:text-gray-900 transition-colors">
                  "{testimonial.content}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-16 md:mt-24">
          <p className="text-lg text-gray-600 mb-6">
            Pronto para experimentar a diferença?
          </p>
          <button className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg group">
            <span className="relative">
              Comprar Agora
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
