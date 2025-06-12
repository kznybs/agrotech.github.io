import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Menu, X, Cpu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/about' },
    { 
      name: 'Soluções', 
      href: '/services',
      dropdown: [
        { name: 'Treinamento VR', href: '/vr-experience' },
        { name: 'Capacitação', href: '/training' },
        { name: 'Consultoria', href: '/services' }
      ]
    },
    { name: 'Produtos', href: '/products' },
    { name: 'Planos', href: '/pricing' },
    { name: 'Equipe', href: '/team' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden lg:block bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 py-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center group cursor-pointer"
            >
              <div className="bg-emerald-600 p-3 rounded-full mr-4 group-hover:bg-emerald-500 transition-colors">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h6 className="text-sm font-bold text-emerald-100 uppercase tracking-wide">Nosso Escritório</h6>
                <span className="text-sm text-white">Rua Marechal Rondon, 451, Barra do Bugres, Brasil</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center border-l border-r border-emerald-700 group cursor-pointer"
            >
              <div className="bg-emerald-600 p-3 rounded-full mr-4 group-hover:bg-emerald-500 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h6 className="text-sm font-bold text-emerald-100 uppercase tracking-wide">Email</h6>
                <span className="text-sm text-white">agrotech@qualifica.com</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center group cursor-pointer"
            >
              <div className="bg-emerald-600 p-3 rounded-full mr-4 group-hover:bg-emerald-500 transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h6 className="text-sm font-bold text-emerald-100 uppercase tracking-wide">Telefone</h6>
                <span className="text-sm text-white">+55 65 98765-4321</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-100' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-emerald-600 to-teal-600 p-3 rounded-xl mr-4 shadow-lg"
              >
                <Cpu className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 uppercase tracking-tight">
                  AgroTech
                </h1>
                <p className="text-sm text-gray-600 font-semibold">Qualifica</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center px-4 py-2 text-gray-700 hover:text-emerald-600 font-semibold transition-all duration-300 rounded-lg hover:bg-emerald-50">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-6 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors font-medium"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 font-semibold transition-all duration-300 rounded-lg ${
                        location.pathname === item.href
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="ml-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Contato
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 font-semibold rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link 
                  to="/contact" 
                  className="block mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Header;