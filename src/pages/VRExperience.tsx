import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, Volume2, Maximize, Eye, Headphones, Monitor, Zap, Shield, Globe } from 'lucide-react';

const VRExperience = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const demos = [
    {
      title: 'Simulação de Plantio',
      description: 'Aprenda técnicas de plantio em ambiente virtual seguro com feedback em tempo real',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Eye,
      color: 'from-green-500 to-emerald-500',
      duration: '15 min',
      level: 'Iniciante'
    },
    {
      title: 'Operação de Máquinas',
      description: 'Treine com equipamentos agrícolas sem riscos, incluindo tratores e colheitadeiras',
      image: 'https://i.imgur.com/xLU9BX4.png',
      icon: Headphones,
      color: 'from-blue-500 to-cyan-500',
      duration: '25 min',
      level: 'Intermediário'
    },
    {
      title: 'Análise de Solo',
      description: 'Identifique características do solo virtualmente usando ferramentas avançadas',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Monitor,
      color: 'from-purple-500 to-pink-500',
      duration: '20 min',
      level: 'Avançado'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos os mais avançados sistemas de VR para criar experiências ultra-realistas'
    },
    {
      icon: Shield,
      title: 'Treinamento Seguro',
      description: 'Aprenda sem riscos em um ambiente controlado e totalmente seguro'
    },
    {
      icon: Globe,
      title: 'Acesso Global',
      description: 'Treine de qualquer lugar do mundo com nossa plataforma online'
    }
  ];

  const stats = [
    { number: '98%', label: 'Retenção de Conhecimento', description: 'Comparado a 20% em métodos tradicionais' },
    { number: '75%', label: 'Redução de Tempo', description: 'Para completar o treinamento' },
    { number: '90%', label: 'Satisfação dos Usuários', description: 'Avaliam como excelente' },
    { number: '100%', label: 'Segurança', description: 'Zero acidentes durante o treinamento' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Experiência <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">VR</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
              Mergulhe no futuro do treinamento agrícola com nossa tecnologia de realidade virtual de última geração
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-2xl"
            >
              Experimentar Agora
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* VR Demo Section */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Experiência <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Imersiva</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como nossa tecnologia VR transforma o aprendizado agrícola
            </p>
          </motion.div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            {/* VR Demo Player */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 mb-12 lg:mb-0"
            >
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                  <img
                    src={demos[activeDemo].image}
                    alt={demos[activeDemo].title}
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                        className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
                      >
                        {isPlaying ? (
                          <Pause className="h-12 w-12 text-white" fill="currentColor" />
                        ) : (
                          <Play className="h-12 w-12 text-white ml-1" fill="currentColor" />
                        )}
                      </motion.div>
                      
                      {!isPlaying && (
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white/10 rounded-full"
                        />
                      )}
                    </div>
                  </motion.button>

                  {/* Controls */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center justify-between text-white mb-3">
                        <div className="flex items-center space-x-4">
                          <button className="hover:text-emerald-400 transition-colors">
                            <Volume2 className="h-5 w-5" />
                          </button>
                          <span className="text-sm font-medium">02:34 / 05:12</span>
                        </div>
                        <button className="hover:text-emerald-400 transition-colors">
                          <Maximize className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <motion.div
                          animate={{ width: isPlaying ? '50%' : '30%' }}
                          transition={{ duration: 0.5 }}
                          className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* VR Indicator */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                      VR LIVE
                    </div>
                  </div>

                  {/* Demo Info */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 text-white text-right">
                      <div className="text-sm font-bold">{demos[activeDemo].level}</div>
                      <div className="text-xs opacity-75">{demos[activeDemo].duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Selection */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-8">
                  Escolha sua Experiência
                </h3>
                
                {demos.map((demo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    onClick={() => setActiveDemo(index)}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                      activeDemo === index
                        ? 'bg-white/10 border-emerald-400 backdrop-blur-sm'
                        : 'bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${demo.color} shadow-lg`}>
                        <demo.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold mb-2 transition-colors ${
                          activeDemo === index ? 'text-emerald-400' : 'text-white'
                        }`}>
                          {demo.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          {demo.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span>⏱️ {demo.duration}</span>
                          <span>📊 {demo.level}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
                >
                  Experimentar Agora
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Por que escolher <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">VR?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A realidade virtual oferece vantagens únicas para o aprendizado agrícola
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl inline-flex mb-6 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-black text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default VRExperience;
