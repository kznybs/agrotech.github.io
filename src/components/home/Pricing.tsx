import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: 'Básico',
      subtitle: 'AGROTECH START',
      price: '150',
      features: [
        { name: 'Módulos introdutórios em VR', included: true },
        { name: 'Simulação de plantio e colheita', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Treinamento de segurança rural', included: false },
        { name: 'Aulas gravadas e interativas', included: false },
        { name: 'Certificação oficial', included: false }
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Padrão',
      subtitle: 'AGROTECH PRO',
      price: '200',
      features: [
        { name: 'Módulos técnicos em VR', included: true },
        { name: 'Simulação com máquinas agrícolas', included: true },
        { name: 'Laboratório virtual de solo', included: true },
        { name: 'Suporte prioritário', included: true },
        { name: 'Aulas ao vivo', included: true },
        { name: 'Grupos de estudo online', included: false }
      ],
      popular: true,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Avançado',
      subtitle: 'AGROTECH MASTER',
      price: '149',
      features: [
        { name: 'Acesso completo em VR', included: true },
        { name: 'Gestão e automação agrícola', included: true },
        { name: 'Simulação com drones e sensores', included: true },
        { name: 'Mentoria individual', included: true },
        { name: 'Certificação oficial', included: true },
        { name: 'Acesso vitalício', included: true }
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M30 30c0 16.569-13.431 30-30 30v30h60V30H30zM0 30c16.569 0 30-13.431 30-30H0v30z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="border-l-4 border-emerald-600 pl-8 mb-8 inline-block text-left">
            <h6 className="text-emerald-600 text-sm font-bold uppercase tracking-wide mb-2">
              Planos de Preço
            </h6>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Preços <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Competitivos</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua capacitação em agricultura
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: plan.popular ? 1.02 : 1.05, y: -10 }}
              className={`relative bg-gradient-to-br from-gray-50 to-white rounded-3xl transition-all duration-500 hover:shadow-2xl border ${
                plan.popular 
                  ? 'ring-4 ring-emerald-500 shadow-2xl scale-105 border-emerald-200' 
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="h-4 w-4 mr-2" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center pt-12 pb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-8">Plano – {plan.subtitle}</p>
                
                <div className={`mx-auto w-32 h-32 rounded-full flex items-center justify-center text-white mb-8 bg-gradient-to-br ${plan.color} shadow-xl`}>
                  <div className="text-center">
                    <span className="text-sm">R$</span>
                    <div className="text-3xl font-black">{plan.price}</div>
                    <span className="text-sm">/Mês</span>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{feature.name}</span>
                      {feature.included ? (
                        <div className="bg-emerald-100 p-1 rounded-full">
                          <Check className="h-4 w-4 text-emerald-600" />
                        </div>
                      ) : (
                        <div className="bg-red-100 p-1 rounded-full">
                          <X className="h-4 w-4 text-red-500" />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 shadow-xl' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white'
                  }`}
                >
                  {plan.popular && <Zap className="inline h-5 w-5 mr-2" />}
                  Começar Agora
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Todos os planos incluem garantia de 30 dias e suporte técnico
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Sem taxa de setup</span>
            <span>✓ Cancele a qualquer momento</span>
            <span>✓ Suporte 24/7</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;