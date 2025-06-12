import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Glasses, Cpu, Globe, Users, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Settings,
      title: 'Infraestrutura Completa',
      description: 'Servidores potentes e seguros para suportar todo nosso ambiente de ensino imersivo com alta disponibilidade.',
      features: ['Servidores dedicados', 'Backup automático', 'Monitoramento 24/7', 'Escalabilidade automática'],
      color: 'from-blue-500 to-cyan-500',
      price: 'Incluído'
    },
    {
      icon: Glasses,
      title: 'Realidade Virtual Avançada',
      description: 'Experiências educativas imersivas com uso de óculos VR de última geração para máximo engajamento.',
      features: ['Óculos VR premium', 'Simulações realistas', 'Feedback háptico', 'Ambientes 360°'],
      color: 'from-purple-500 to-pink-500',
      price: 'R$ 299/mês'
    },
    {
      icon: Cpu,
      title: 'Tecnologia de Ponta',
      description: 'Integração com ferramentas modernas e IA para potencializar o aprendizado técnico e prático.',
      features: ['IA personalizada', 'Machine Learning', 'Analytics avançado', 'API integrada'],
      color: 'from-emerald-500 to-teal-500',
      price: 'R$ 199/mês'
    },
    {
      icon: Globe,
      title: 'Acesso Global',
      description: 'Plataforma 100% online com suporte e acesso remoto em qualquer lugar do mundo.',
      features: ['Acesso mundial', 'Multi-idiomas', 'CDN global', 'Sincronização em tempo real'],
      color: 'from-cyan-500 to-blue-500',
      price: 'Incluído'
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: 'Rede de alunos e mentores conectados para troca de experiências e suporte contínuo.',
      features: ['Fóruns especializados', 'Mentoria 1:1', 'Grupos de estudo', 'Networking'],
      color: 'from-orange-500 to-red-500',
      price: 'R$ 99/mês'
    },
    {
      icon: GraduationCap,
      title: 'Certificação Oficial',
      description: 'Receba certificados reconhecidos após a conclusão dos módulos e projetos práticos.',
      features: ['Certificados digitais', 'Validação blockchain', 'Reconhecimento MEC', 'Portfolio digital'],
      color: 'from-yellow-500 to-orange-500',
      price: 'R$ 149/mês'
    }
  ];

  const benefits = [
    'Redução de 80% nos custos de treinamento',
    'Aumento de 95% na retenção de conhecimento',
    'Treinamento 100% seguro sem riscos',
    'Disponibilidade 24/7 para aprendizado',
    'Suporte técnico especializado',
    'Atualizações constantes de conteúdo'
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
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Serviços</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
              Soluções completas para transformar o treinamento agrícola com tecnologia de ponta
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-2xl"
            >
              Solicitar Demonstração
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Serviços <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Especializados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada serviço foi desenvolvido para atender às necessidades específicas do agronegócio moderno
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    <span className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all duration-300`}
                  >
                    Saiba Mais
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
                Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">AgroTech?</span>
              </h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Nossa plataforma oferece benefícios únicos que transformam completamente 
                a experiência de aprendizado no agronegócio.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-2xl"
              >
                Começar Agora
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 lg:mt-0"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8">Benefícios Exclusivos</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-emerald-100"
                    >
                      <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 flex-shrink-0" />
                      <span className="font-semibold">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;