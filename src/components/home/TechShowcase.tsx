import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Smartphone, Cloud, Shield, Zap, Globe } from 'lucide-react';

const TechShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      icon: Cpu,
      name: 'Processamento VR',
      description: 'Engine de alta performance para simulações realistas',
      color: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Cloud,
      name: 'Cloud Computing',
      description: 'Infraestrutura escalável na nuvem',
      color: 'from-purple-500 to-pink-500',
      delay: 0.1
    },
    {
      icon: Smartphone,
      name: 'Multi-Plataforma',
      description: 'Compatível com diversos dispositivos',
      color: 'from-emerald-500 to-teal-500',
      delay: 0.2
    },
    {
      icon: Shield,
      name: 'Segurança Avançada',
      description: 'Proteção de dados e privacidade',
      color: 'from-orange-500 to-red-500',
      delay: 0.3
    },
    {
      icon: Zap,
      name: 'Performance Otimizada',
      description: 'Carregamento rápido e responsivo',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.4
    },
    {
      icon: Globe,
      name: 'Acesso Global',
      description: 'Disponível em qualquer lugar do mundo',
      color: 'from-indigo-500 to-purple-500',
      delay: 0.5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Tecnologia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Ponta</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Utilizamos as mais avançadas tecnologias para criar experiências de treinamento imersivas e eficazes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: tech.delay }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tech.color} mb-6 shadow-lg`}
                  >
                    <tech.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
                    {tech.name}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-full group-hover:scale-125 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Tech Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-4 border-emerald-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-4 border-cyan-400/30 rounded-full"
            />
            <div className="absolute inset-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Cpu className="h-12 w-12 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mt-6 mb-4">
            Ecossistema Integrado
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Todas as tecnologias trabalham em harmonia para proporcionar a melhor experiência de aprendizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechShowcase;