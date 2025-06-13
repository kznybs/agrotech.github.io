import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight, Zap, Shield, Globe, Award } from 'lucide-react';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    { icon: Zap, text: 'Tecnologia VR Avançada' },
    { icon: Shield, text: 'Treinamento Seguro' },
    { icon: Globe, text: 'Acesso Global' },
    { icon: Award, text: 'Certificação Oficial' }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 opacity-20"
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <motion.div 
              style={{ opacity }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm mb-8"
                >
                  <Award className="h-5 w-5 text-emerald-300 mr-2" />
                  <span className="text-emerald-100 font-semibold">Vencedora Senai Grand Prix 2024</span>
                </motion.div>

                <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="block"
                  >
                    AgroTech
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400"
                  >
                    Qualifica
                  </motion.span>
                </h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-3xl lg:text-4xl text-emerald-100 mb-6 font-bold"
                >
                  Revolucionando a Agricultura com VR
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-xl text-emerald-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Transforme o treinamento agrícola com nossa plataforma de realidade virtual. 
                  Capacitação segura, eficiente e inovadora para o futuro do agronegócio.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-2xl"
                  >
                    Começar Agora
                    <ArrowRight className="inline-block ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVideoOpen(true)}
                    className="group flex items-center text-white hover:text-yellow-300 transition-colors"
                  >
                    <div className="relative mr-4">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors backdrop-blur-sm"
                      >
                        <Play className="h-10 w-10 text-white ml-1" fill="currentColor" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-white/10 rounded-full"
                      />
                    </div>
                    <span className="text-xl font-semibold">Assistir Demo</span>
                  </motion.button>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <feature.icon className="h-8 w-8 text-emerald-300 mb-2" />
                      <p className="text-white text-sm font-semibold">{feature.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden lg:block lg:col-span-5"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotateY: [0, 10, 0],
                    rotateX: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative z-10"
                >
                  <img 
                    src="https://i.imgur.com/xLU9BX4.png" 
                    alt="Agricultura moderna com tecnologia VR"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-3xl"></div>
                </motion.div>
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-gray-800">Sistema Online</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -right-6 bg-emerald-600 text-white rounded-2xl p-4 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Satisfação</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl font-bold"
            >
              ✕
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  poster="https://www.youtube.com/watch?v=GV62mDjiyzA"
                >
                  <source src="#" type="video/mp4" />
                  <div className="p-8 text-center text-gray-600">
                    <h3 className="text-2xl font-bold mb-4">Demo AgroTech Qualifica</h3>
                    <p>Vídeo demonstrativo da plataforma vencedora do Senai Grand Prix 2024</p>
                  </div>
                </video>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;
