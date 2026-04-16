import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import FlavorsSection from '@/components/FlavorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Landing Page Interativa
 * 
 * Estrutura:
 * 1. Hero Section - Apresentação principal com CTA
 * 2. Benefits Section - Benefícios principais
 * 3. Flavors Section - Sabores disponíveis
 * 4. Testimonials Section - Depoimentos de clientes
 * 5. Footer - Rodapé com links e contato
 * 
 * Design: Minimalismo Dinâmico com Gradientes Ousados
 * Tipografia: Poppins (display) + Inter (body)
 * Cores: Laranja (#FF6B35) com gradientes para peach (#FFE5D9)
 * Animações: Scroll-driven, parallax, stagger effects
 */
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Seção Hero */}
      <HeroSection />

      {/* Seção de Benefícios */}
      <BenefitsSection />

      {/* Seção de Sabores */}
      <FlavorsSection />

      {/* Seção de Depoimentos */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
