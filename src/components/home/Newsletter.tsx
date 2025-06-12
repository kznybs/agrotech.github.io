import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mail, Gift, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20zM0 20c11.046 0 20-8.954 20-20H0v20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
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

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-4 border-yellow-400 pl-8 mb-8">
              <h6 className="text-yellow-400 text-sm font-bold uppercase tracking-wide mb-2 flex items-center">
                <Gift className="h-4 w-4 mr-2" />
                Oferta Especial
              </h6>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Economize <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">10%</span> em todos os planos
              </h2>
            </div>
            
            <p className="text-emerald-100 text-xl mb-8 max-w-lg leading-relaxed">
              Não perca essa chance única de transformar sua carreira no agronegócio! 
              Oferta válida apenas para novos assinantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-2xl"
              >
                Aproveitar Oferta
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-700 transition-all duration-300"
              >
                Saiba Mais
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {['Acesso Imediato', 'Suporte 24/7', 'Certificação', 'Garantia 30 dias'].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center text-emerald-100"
                >
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span className="font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4 rounded-2xl inline-flex mb-4">
                  <Mail className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Newsletter Exclusiva</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Receba as últimas novidades sobre tecnologia agrícola, dicas exclusivas e ofertas especiais.
                </p>
              </div>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor email"
                      className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-xl"
                  >
                    Cadastrar Agora
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-green-500 p-4 rounded-full inline-flex mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Obrigado!</h4>
                  <p className="text-emerald-100">Você foi cadastrado com sucesso!</p>
                </motion.div>
              )}
              
              <div className="mt-6 text-center">
                <p className="text-emerald-200 text-sm">
                  🔒 Não enviamos spam. Você pode cancelar a qualquer momento.
                </p>
                <div className="flex justify-center space-x-4 mt-4 text-xs text-emerald-300">
                  <span>✓ 50.000+ inscritos</span>
                  <span>✓ Conteúdo semanal</span>
                  <span>✓ Ofertas exclusivas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;