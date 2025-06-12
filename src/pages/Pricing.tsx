import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Star, Zap, Shield, Crown } from 'lucide-react';

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
      description: 'Ideal para iniciantes no agronegócio',
      features: [
        { name: 'Módulos introdutórios em VR', included: true },
        { name: 'Simulação de plantio e colheita', included: true },
        { name: 'Suporte por email', included: true },
        { name: '5 horas de treinamento/mês', included: true },
        { name: 'Treinamento de segurança rural', included: false },
        { name: 'Aulas gravadas e interativas', included: false },
        { name: 'Certificação oficial', included: false },
        { name: 'Mentoria individual', included: false }
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      icon: Shield,
      savings: null
    },
    {
      name: 'Profissional',
      subtitle: 'AGROTECH PRO',
      price: '200',
      description: 'Para profissionais que buscam excelência',
      features: [
        { name: 'Módulos técnicos em VR', included: true },
        { name: 'Simulação com máquinas agrícolas', included: true },
        { name: 'Laboratório virtual de solo', included: true },
        { name: 'Suporte prioritário', included: true },
        { name: 'Aulas ao vivo semanais', included: true },
        { name: '20 horas de treinamento/mês', included: true },
        { name: 'Certificação intermediária', included: true },
        { name: 'Grupos de estudo online', included: false }
      ],
      popular: true,
      color: 'from-emerald-500 to-teal-500',
      icon: Star,
      savings: 'Economize 25%'
    },
    {
      name: 'Master',
      subtitle: 'AGROTECH MASTER',
      price: '149',
      description: 'Solução completa para especialistas',
      features: [
        { name: 'Acesso completo em VR', included: true },
        { name: 'Gestão e automação agrícola', included: true },
        { name: 'Simulação com drones e sensores', included: true },
        { name: 'Mentoria individual semanal', included: true },
        { name: 'Certificação oficial avançada', included: true },
        { name: 'Acesso vitalício ao conteúdo', included: true },
        { name: 'Treinamento ilimitado', included: true },
        { name: 'Consultoria personalizada', included: true }
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500',
      icon: Crown,
      savings: 'Melhor Custo-Benefício'
    }
  ];

  const faqs = [
    {
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.'
    },
    {
      question: 'Os certificados são reconhecidos oficialmente?',
      answer: 'Sim, nossos certificados são reconhecidos pelo MEC e principais instituições do agronegócio.'
    },
    {
      question: 'Preciso de equipamentos especiais?',
      answer: 'Para a experiência completa em VR, fornecemos os óculos necessários. Também oferecemos versões web.'
    },
    {
      question: 'Há garantia de satisfação?',
      answer: 'Oferecemos 30 dias de garantia. Se não ficar satisfeito, devolvemos 100% do valor.'
    }
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
              Planos e <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Preços</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Escolha o plano ideal para sua capacitação em agricultura e transforme sua carreira
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Zap className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold">Oferta especial: 30% de desconto no primeiro mês</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M30 30c0 16.569-13.431 30-30 30v30h60V30H30zM0 30c16.569 0 30-13.431 30-30H0v30z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Preços <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Competitivos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investimento que se paga com o conhecimento adquirido
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: plan.popular ? 1.02 : 1.05, y: -10 }}
                className={`relative bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl border-2 overflow-hidden ${
                  plan.popular 
                    ? 'ring-4 ring-emerald-500 shadow-2xl scale-105 border-emerald-200' 
                    : 'border-gray-200 hover:border-emerald-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="h-4 w-4 mr-2" />
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                {plan.savings && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {plan.savings}
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-4 shadow-lg`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 font-semibold mb-4">{plan.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-black text-gray-900">R$ {plan.price}</span>
                      <span className="text-gray-600 ml-2">/mês</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium flex-1">{feature.name}</span>
                        {feature.included ? (
                          <div className="bg-emerald-100 p-1 rounded-full ml-3">
                            <Check className="h-4 w-4 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="bg-red-100 p-1 rounded-full ml-3">
                            <X className="h-4 w-4 text-red-500" />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
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
            <p className="text-gray-600 mb-6 text-lg">
              Todos os planos incluem garantia de 30 dias e suporte técnico especializado
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['✓ Sem taxa de setup', '✓ Cancele a qualquer momento', '✓ Suporte 24/7', '✓ Atualizações gratuitas'].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center text-emerald-600 font-semibold">
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos planos e serviços
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;