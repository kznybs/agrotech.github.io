import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="block">AgroTech</span>
                  <span className="block text-yellow-300">Qualifica</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-white mb-6 font-medium">
                  Solucionando Problemas de Agricultura
                </h2>
                <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto lg:mx-0">
                  AgroTech do campo à máquina, a solução completa para capacitação em realidade virtual no agronegócio
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                  <button className="group bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Saiba Mais
                    <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="group flex items-center text-white hover:text-yellow-300 transition-colors"
                  >
                    <div className="relative mr-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                      </div>
                      <div className="absolute inset-0 bg-white/10 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-lg font-medium">Assistir Vídeo</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Agricultura moderna com tecnologia VR"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video">
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  poster="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200"
                >
                  <source src="#" type="video/mp4" />
                  <p className="p-8 text-center text-gray-600">
                    Vídeo demonstrativo da plataforma AgroTech Qualifica - Senai Grand Prix 2024
                  </p>
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;