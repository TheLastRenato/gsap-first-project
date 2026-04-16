import { Zap, Droplet, Leaf } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

/**
 * BenefitsSection Component
 * 
 * Seção que destaca os benefícios principais com:
 * - Ícones animados
 * - Layout assimétrico
 * - Fundo com padrão sutil
 * - Tipografia ousada
 * 
 * Design: Minimalismo Dinâmico
 */
export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: 'Energia Pura',
      description: 'Cafeína natural para máxima performance e foco durante o dia.',
      color: 'text-orange-600',
    },
    {
      icon: Droplet,
      title: 'Com Proteína',
      description: 'Proteína de alta qualidade para recuperação muscular e força.',
      color: 'text-orange-500',
    },
    {
      icon: Leaf,
      title: 'Ingredientes Naturais',
      description: 'Sem aditivos artificiais, apenas o que seu corpo precisa.',
      color: 'text-orange-400',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
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
        <ScrollReveal animation="fadeInUp" className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Por que EnergyMax?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Desenvolvido com ingredientes premium para oferecer a melhor experiência de energia e performance.
          </p>
        </ScrollReveal>

        {/* Grid de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal
                key={index}
                animation="fadeInUp"
                delay={index * 100}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Ícone */}
                  <div className={`${benefit.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
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
              </ScrollReveal>
            );
          })}
        </div>

        {/* Estatísticas */}
        <ScrollReveal animation="fadeInUp" delay={300} className="mt-20 md:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '100%', label: 'Natural' },
              { number: '25g', label: 'Proteína' },
              { number: '80mg', label: 'Cafeína' },
              { number: '0g', label: 'Açúcar' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
