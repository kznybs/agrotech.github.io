import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Eye } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20zM0 20c11.046 0 20-8.954 20-20H0v20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0"
          >
            <div className="relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Equipe AgroTech Qualifica"
                className="rounded-3xl shadow-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 rounded-2xl shadow-2xl"
              >
                <Award className="h-12 w-12 mb-4" />
                <p className="font-bold text-lg">Vencedora</p>
                <p className="text-sm opacity-90">Senai Grand Prix 2024</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="border-l-4 border-emerald-600 pl-8 mb-8">
              <h6 className="text-emerald-600 text-sm font-bold uppercase tracking-wide mb-2">
                Sobre Nós
              </h6>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Vencedora do <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Senai Grand Prix 2024</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Na categoria de inspiração, o projeto AgroTech Qualifica conquistou o 1º lugar na solução 
              para a empresa CNH Industrial, revolucionando o treinamento agrícola com tecnologia VR.
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 py-4 px-6 text-center font-bold transition-all duration-300 rounded-t-lg ${
                    activeTab === 'mission'
                      ? 'text-emerald-600 bg-emerald-50 border-b-2 border-emerald-600'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  <Target className="h-6 w-6 mx-auto mb-2" />
                  Nossa Missão
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 py-4 px-6 text-center font-bold transition-all duration-300 rounded-t-lg ${
                    activeTab === 'vision'
                      ? 'text-emerald-600 bg-emerald-50 border-b-2 border-emerald-600'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  <Eye className="h-6 w-6 mx-auto mb-2" />
                  Nossa Visão
                </button>
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[120px]"
              >
                {activeTab === 'mission' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                    <p className="text-gray-700 leading-relaxed">
                      A missão da AgroTech é fornecer treinamento prático e acessível para operadores 
                      de máquinas agrícolas por meio da realidade virtual, promovendo aprendizado seguro, 
                      realista e sem a necessidade de equipamentos complexos. Buscamos qualificar jovens 
                      e agricultores, reduzir riscos no campo e democratizar o acesso à tecnologia no agronegócio.
                    </p>
                  </div>
                )}
                {activeTab === 'vision' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ser referência nacional em capacitação agrícola por meio de tecnologias imersivas, 
                      transformando o aprendizado no campo com soluções inovadoras, acessíveis e eficazes, 
                      impactando positivamente o futuro do agronegócio brasileiro.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;