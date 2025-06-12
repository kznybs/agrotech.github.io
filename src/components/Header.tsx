import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Menu, X, Cpu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 py-3">
            <div className="flex items-center justify-center">
              <MapPin className="h-8 w-8 text-emerald-600 mr-3" />
              <div>
                <h6 className="text-sm font-semibold text-gray-900 uppercase">Nosso Escritório</h6>
                <span className="text-sm text-gray-600">Rua Marechal Rondon, 451, Barra do Bugres, Brasil</span>
              </div>
            </div>
            <div className="flex items-center justify-center border-l border-r border-gray-200">
              <Mail className="h-8 w-8 text-emerald-600 mr-3" />
              <div>
                <h6 className="text-sm font-semibold text-gray-900 uppercase">Email</h6>
                <span className="text-sm text-gray-600">agrotech@qualifica.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-8 w-8 text-emerald-600 mr-3" />
              <div>
                <h6 className="text-sm font-semibold text-gray-900 uppercase">Telefone</h6>
                <span className="text-sm text-gray-600">+55 65 98765-4321</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Cpu className="h-10 w-10 text-emerald-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900 uppercase">
                AgroTech Qualifica
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-emerald-600 font-medium transition-colors">
                Início
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Sobre
              </a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Serviços
              </a>
              <a href="#products" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Produtos
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Planos
              </a>
              <a href="#team" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Equipe
              </a>
              <a 
                href="#contact" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Contato
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-900 hover:text-emerald-600 font-medium py-2">
                Início
              </a>
              <a href="#about" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">
                Sobre
              </a>
              <a href="#services" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">
                Serviços
              </a>
              <a href="#products" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">
                Produtos
              </a>
              <a href="#pricing" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">
                Planos
              </a>
              <a href="#team" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">
                Equipe
              </a>
              <a 
                href="#contact" 
                className="block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium text-center mt-4"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;