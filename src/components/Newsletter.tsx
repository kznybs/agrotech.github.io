import React from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20zM0 20c11.046 0 20-8.954 20-20H0v20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <div className="border-l-4 border-yellow-400 pl-6 mb-8">
              <h6 className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
                Oferta Especial
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Economize 10% em todos os itens do seu primeiro pedido
              </h2>
            </div>
            
            <p className="text-emerald-100 text-lg mb-8 max-w-lg">
              Não perca essa chance única de levar seus produtos favoritos com desconto especial! 
              É só aproveitar agora antes que acabe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Compre Agora
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Newsletter</h3>
              <p className="text-emerald-100 mb-6">
                Receba as últimas novidades sobre tecnologia agrícola e ofertas exclusivas.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Seu melhor email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors transform hover:scale-105"
                >
                  Cadastrar Agora
                </button>
              </form>
              
              <p className="text-emerald-200 text-sm mt-4">
                Não enviamos spam. Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;