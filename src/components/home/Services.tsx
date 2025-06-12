import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Glasses, Cpu, Globe, Users, GraduationCap } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Settings,
      title: 'Infraestrutura',
      description: 'Servidores potentes e seguros para suportar todo nosso ambiente de ensino imersivo.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Glasses,
      title: 'Realidade Virtual',
      description: 'Experiências educativas imersivas com uso de óculos VR para maior engajamento.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Tecnologia',
      description: 'Integração com ferramentas modernas para potencializar o aprendizado técnico e prático.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Acesso Global',
      description: 'Plataforma 100% online com suporte e acesso remoto em qualquer lugar do mundo.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Rede de alunos e mentores conectados para troca de experiências e suporte contínuo.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Certificação',
      description: 'Receba certificados reconhecidos após a conclusão dos módulos e projetos práticos.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
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
              Serviços
            </h6>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Nossos Serviços de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Treinamento</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para capacitação em máquinas agrícolas
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
              className="group bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-emerald-200 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h5 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                  {service.title}
                </h5>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors group/btn">
                  Saiba Mais 
                  <span className="inline-block ml-2 group-hover/btn:translate-x-2 transition-transform">→</span>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;