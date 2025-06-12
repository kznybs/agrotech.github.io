import React, { useState } from 'react';
import { Award, Target, Eye } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Equipe AgroTech Qualifica"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <Award className="h-8 w-8 mb-2" />
                <p className="font-semibold text-sm">Vencedora</p>
                <p className="text-xs opacity-90">Senai Grand Prix</p>
              </div>
            </div>
          </div>

          <div>
            <div className="border-l-4 border-emerald-600 pl-6 mb-8">
              <h6 className="text-emerald-600 text-sm font-semibold uppercase tracking-wide mb-2">
                Sobre Nós
              </h6>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Vencedora do Senai Grand Prix 2024
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Na categoria de inspiração, o projeto AgroTech Qualifica conquistou o 1º lugar na solução 
              para a empresa CNH Industrial, revolucionando o treinamento agrícola com tecnologia VR.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 py-3 px-4 text-center font-semibold transition-colors ${
                    activeTab === 'mission'
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  <Target className="h-5 w-5 mx-auto mb-1" />
                  Nossa Missão
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 py-3 px-4 text-center font-semibold transition-colors ${
                    activeTab === 'vision'
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  <Eye className="h-5 w-5 mx-auto mb-1" />
                  Nossa Visão
                </button>
              </div>

              <div className="transition-all duration-300">
                {activeTab === 'mission' && (
                  <div className="animate-fade-in">
                    <p className="text-gray-700 leading-relaxed">
                      A missão da AgroTech é fornecer treinamento prático e acessível para operadores 
                      de máquinas agrícolas por meio da realidade virtual, promovendo aprendizado seguro, 
                      realista e sem a necessidade de equipamentos complexos. Buscamos qualificar jovens 
                      e agricultores, reduzir riscos no campo e democratizar o acesso à tecnologia no agronegócio.
                    </p>
                  </div>
                )}
                {activeTab === 'vision' && (
                  <div className="animate-fade-in">
                    <p className="text-gray-700 leading-relaxed">
                      Ser referência nacional em capacitação agrícola por meio de tecnologias imersivas, 
                      transformando o aprendizado no campo com soluções inovadoras, acessíveis e eficazes, 
                      impactando positivamente o futuro do agronegócio brasileiro.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;