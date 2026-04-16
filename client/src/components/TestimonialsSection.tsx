import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

/**
 * TestimonialsSection Component
 * 
 * Seção com depoimentos de clientes:
 * - Cards com avaliações
 * - Estrelas de rating
 * - Animações de entrada
 * - Layout responsivo
 * 
 * Design: Minimalismo Dinâmico
 */
export default function TestimonialsSection() {
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

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
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
        <ScrollReveal animation="fadeInUp" className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Milhares de pessoas já transformaram sua rotina com EnergyMax.
          </p>
        </ScrollReveal>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={index}
              animation="fadeInUp"
              delay={index * 100}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-orange-600 text-orange-600"
                    />
                  ))}
                </div>

                {/* Conteúdo */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fadeInUp" delay={400} className="text-center mt-16 md:mt-24">
          <p className="text-lg text-gray-600 mb-6">
            Pronto para experimentar a diferença?
          </p>
          <button className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Comprar Agora
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
