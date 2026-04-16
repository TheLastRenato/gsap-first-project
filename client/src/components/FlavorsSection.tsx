import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

/**
 * FlavorsSection Component
 * 
 * Seção que apresenta os diferentes sabores com:
 * - Carrossel interativo
 * - Animações de transição
 * - Descrições de cada sabor
 * - Layout dinâmico
 * 
 * Design: Minimalismo Dinâmico
 */
export default function FlavorsSection() {
  const [activeFlavor, setActiveFlavor] = useState(0);

  const flavors = [
    {
      name: 'Chocolate',
      description: 'Sabor clássico e irresistível com toque de cacau premium.',
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
      description: 'Combinação perfeita de biscoito e creme. Um clássico moderno.',
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

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-white">
      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <ScrollReveal animation="fadeInUp" className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Sabores Incríveis
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha seu sabor favorito e descubra a combinação perfeita de energia e sabor.
          </p>
        </ScrollReveal>

        {/* Carrossel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem grande */}
          <ScrollReveal animation="slideInLeft" className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl" />

              {/* Imagem do sabor */}
              <img
                src={flavors[activeFlavor].image}
                alt={flavors[activeFlavor].name}
                className="relative z-10 w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>
          </ScrollReveal>

          {/* Informações e seletor */}
          <ScrollReveal animation="slideInRight" className="space-y-8">
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
              <div className="grid grid-cols-2 gap-4">
                {flavors.map((flavor, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFlavor(index)}
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
                  <p className="text-lg font-bold text-gray-900">{info.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
