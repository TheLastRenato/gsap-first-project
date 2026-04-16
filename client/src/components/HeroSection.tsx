import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

/**
 * HeroSection Component
 * 
 * Seção hero com:
 * - Fundo com gradiente (laranja para peach)
 * - Tipografia ousada (Poppins)
 * - CTA animado
 * - Imagem do produto com parallax suave
 * 
 * Design: Minimalismo Dinâmico com Gradientes Ousados
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background com gradiente */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #FF6B35 0%, #FFE5D9 100%)',
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <ScrollReveal animation="slideInLeft" className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Energize sua vida
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-md leading-relaxed">
                Descubra EnergyMax: a bebida energética premium com proteína, cafeína e sabor excepcional. Feito para quem quer mais energia, mais foco e mais performance.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
          </ScrollReveal>

          {/* Imagem do produto */}
          <ScrollReveal animation="slideInRight" className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Elemento decorativo de fundo */}
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />

              {/* Imagem do produto */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663212437337/36bT5GNHumSSWz5A5faDcx/product-showcase-d6FpJsdCV3v7fmDaVfiBNx.webp"
                alt="EnergyMax - Bebida Energética"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
