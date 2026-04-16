import { useEffect, useRef } from 'react';
import { Zap, Droplet, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * BenefitsSection Component - Com GSAP ScrollTrigger
 * 
 * Animações:
 * - Cards entram com stagger ao scroll
 * - Ícones rotacionam ao hover
 * - Linha decorativa expande ao hover
 * - Números contam até o valor
 * 
 * Design: Minimalismo Dinâmico
 */
export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: Zap,
      title: 'Energia Pura',
      description:
        'Cafeína natural para máxima performance e foco durante o dia.',
      color: 'text-orange-600',
    },
    {
      icon: Droplet,
      title: 'Com Proteína',
      description:
        'Proteína de alta qualidade para recuperação muscular e força.',
      color: 'text-orange-500',
    },
    {
      icon: Leaf,
      title: 'Ingredientes Naturais',
      description:
        'Sem aditivos artificiais, apenas o que seu corpo precisa.',
      color: 'text-orange-400',
    },
  ];

  const stats = [
    { number: 100, label: 'Natural', suffix: '%' },
    { number: 25, label: 'Proteína', suffix: 'g' },
    { number: 80, label: 'Cafeína', suffix: 'mg' },
    { number: 0, label: 'Açúcar', suffix: 'g' },
  ];

  useEffect(() => {
    if (!cardsRef.current) return;

    // Anima cards com stagger
    const cards = cardsRef.current.querySelectorAll('[data-card]');
    gsap.from(cards, {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top center+=100',
        end: 'center center',
        scrub: 1,
      },
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    // Hover animation para ícones
    cards.forEach((card) => {
      const icon = card.querySelector('[data-icon]');
      if (icon) {
        card.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(1.7)',
          });
        });
      }
    });

    // Anima números com contador
    if (statsRef.current) {
      const statNumbers = statsRef.current.querySelectorAll('[data-stat-number]');
      gsap.from(statNumbers, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top center+=100',
          once: true,
        },
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        stagger: 0.1,
        ease: 'power2.out',
        onUpdate: function (this: any) {
          statNumbers.forEach((el, index) => {
            const stat = stats[index];
            const htmlEl = el as HTMLElement;
            const value = Math.floor(parseFloat(htmlEl.innerText || '0'));
            htmlEl.innerText = value + stat.suffix;
          });
        },
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
      {/* Background com padrão */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663212437337/36bT5GNHumSSWz5A5faDcx/benefits-pattern-UxVup3RdcnG9dQKsVLrG74.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Por que EnergyMax?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Desenvolvido com ingredientes premium para oferecer a melhor
            experiência de energia e performance.
          </p>
        </div>

        {/* Grid de benefícios */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} data-card className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  {/* Ícone */}
                  <div
                    data-icon
                    className={`${benefit.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={48} strokeWidth={1.5} />
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Linha decorativa */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Estatísticas */}
        <div ref={statsRef} className="mt-20 md:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  data-stat-number
                  className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
                >
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
