import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

/**
 * Footer Component
 * 
 * Rodapé com:
 * - Links de navegação
 * - Informações de contato
 * - Social media
 * - Newsletter signup
 * 
 * Design: Minimalismo Dinâmico
 */
export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-orange-600">EnergyMax</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A bebida energética premium para quem quer mais energia, foco e performance.
            </p>
          </div>

          {/* Produtos */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Produtos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Sabores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Nutrição
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Onde Comprar
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Empresa</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Carreira
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contato</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-orange-600" />
                <a href="mailto:contato@energymax.com" className="hover:text-orange-600 transition-colors">
                  contato@energymax.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-orange-600" />
                <a href="tel:+5511999999999" className="hover:text-orange-600 transition-colors">
                  +55 11 9999-9999
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-orange-600 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; 2024 EnergyMax. Todos os direitos reservados.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
          </div>

          {/* Links legais */}
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-orange-600 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Termos
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
