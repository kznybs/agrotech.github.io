import React from 'react';
import { MapPin, Mail, Phone, Twitter, Facebook, Linkedin, Instagram, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">AgroTech Qualifica</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Revolucionando a capacitação agrícola através da realidade virtual e tecnologias inovadoras.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Rua Marechal Rondon, 451, Barra do Bugres, Brasil</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">agrotech@qualifica.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">+55 65 98765-4321</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-gray-900 mb-6 border-b-2 border-emerald-600 pb-2 inline-block">
              Links Rápidos
            </h5>
            <ul className="space-y-3">
              {['Início', 'Sobre Nós', 'Nossos Serviços', 'Nossa Equipe', 'Contato'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold text-gray-900 mb-6 border-b-2 border-emerald-600 pb-2 inline-block">
              Nossos Serviços
            </h5>
            <ul className="space-y-3">
              {['Treinamento VR', 'Certificação', 'Consultoria', 'Suporte Técnico', 'Comunidade'].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Legal */}
          <div>
            <h5 className="text-lg font-semibold text-gray-900 mb-6 border-b-2 border-emerald-600 pb-2 inline-block">
              Siga-nos
            </h5>
            <div className="flex space-x-4 mb-8">
              <a 
                href="#" 
                className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="space-y-2">
              {['Termos & Condições', 'Política de Privacidade', 'Suporte ao Cliente', 'Perguntas Frequentes'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="md:flex md:justify-between md:items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; 2024 AgroTech Qualifica. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-sm">
              Desenvolvido com ❤️ para o futuro da agricultura
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;