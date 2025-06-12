import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Twitter, Facebook, Linkedin, Instagram, Cpu, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    quickLinks: [
      { name: 'Início', href: '/' },
      { name: 'Sobre Nós', href: '/about' },
      { name: 'Serviços', href: '/services' },
      { name: 'Produtos', href: '/products' },
      { name: 'Contato', href: '/contact' }
    ],
    services: [
      { name: 'Treinamento VR', href: '/vr-experience' },
      { name: 'Certificação', href: '/training' },
      { name: 'Consultoria', href: '/services' },
      { name: 'Suporte Técnico', href: '/contact' },
      { name: 'Comunidade', href: '/blog' }
    ],
    legal: [
      { name: 'Termos & Condições', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Suporte ao Cliente', href: '/contact' },
      { name: 'Perguntas Frequentes', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0 16.569-13.431 30-30 30v30h60V30H30zM0 30c16.569 0 30-13.431 30-30H0v30z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-3 rounded-xl mr-4 shadow-lg">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                      AgroTech
                    </h3>
                    <p className="text-gray-400 font-semibold">Qualifica</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Revolucionando a capacitação agrícola através da realidade virtual e tecnologias inovadoras. 
                  Transformando o futuro do agronegócio brasileiro.
                </p>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start group cursor-pointer"
                >
                  <div className="bg-emerald-600 p-3 rounded-lg mr-4 group-hover:bg-emerald-500 transition-colors">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h6 className="font-bold text-emerald-400 mb-1">Nosso Escritório</h6>
                    <span className="text-gray-300">Rua Marechal Rondon, 451, Barra do Bugres, Brasil</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center group cursor-pointer"
                >
                  <div className="bg-emerald-600 p-3 rounded-lg mr-4 group-hover:bg-emerald-500 transition-colors">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h6 className="font-bold text-emerald-400 mb-1">Email</h6>
                    <span className="text-gray-300">agrotech@qualifica.com</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center group cursor-pointer"
                >
                  <div className="bg-emerald-600 p-3 rounded-lg mr-4 group-hover:bg-emerald-500 transition-colors">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h6 className="font-bold text-emerald-400 mb-1">Telefone</h6>
                    <span className="text-gray-300">+55 65 98765-4321</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="text-xl font-bold text-white mb-8 border-b-2 border-emerald-600 pb-3 inline-block">
                Links Rápidos
              </h5>
              <ul className="space-y-4">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center group"
                    >
                      <span className="mr-3 text-emerald-600 group-hover:translate-x-2 transition-transform">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h5 className="text-xl font-bold text-white mb-8 border-b-2 border-emerald-600 pb-3 inline-block">
                Nossos Serviços
              </h5>
              <ul className="space-y-4">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center group"
                    >
                      <span className="mr-3 text-emerald-600 group-hover:translate-x-2 transition-transform">→</span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h5 className="text-xl font-bold text-white mb-8 border-b-2 border-emerald-600 pb-3 inline-block">
                Siga-nos
              </h5>
              
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href} 
                    className={`bg-gray-700 text-white p-4 rounded-xl hover:text-white transition-all duration-300 shadow-lg ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
              
              <div className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-gray-700 mt-16 pt-8"
          >
            <div className="md:flex md:justify-between md:items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 AgroTech Qualifica. Todos os direitos reservados.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm mr-6">
                  Desenvolvido com ❤️ para o futuro da agricultura
                </p>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-500 transition-colors shadow-lg"
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;