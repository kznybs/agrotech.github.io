import React from 'react';
import { Settings, Glasses, Cpu, Globe, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Infraestrutura',
    description: 'Servidores potentes e seguros para suportar todo nosso ambiente de ensino imersivo.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Glasses,
    title: 'Realidade Virtual',
    description: 'Experiências educativas imersivas com uso de óculos VR para maior engajamento.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Cpu,
    title: 'Tecnologia',
    description: 'Integração com ferramentas modernas para potencializar o aprendizado técnico e prático.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Globe,
    title: 'Acesso Global',
    description: 'Plataforma 100% online com suporte e acesso remoto em qualquer lugar do mundo.',
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    icon: Users,
    title: 'Comunidade',
    description: 'Rede de alunos e mentores conectados para troca de experiências e suporte contínuo.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: GraduationCap,
    title: 'Certificação',
    description: 'Receba certificados reconhecidos após a conclusão dos módulos e projetos práticos.',
    color: 'bg-yellow-100 text-yellow-600'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-emerald-600 pl-6 mb-16 max-w-2xl">
          <h6 className="text-emerald-600 text-sm font-semibold uppercase tracking-wide mb-2">
            Serviços
          </h6>
          <h2 className="text-4xl font-bold text-gray-900">
            Nossos Serviços de Treinamento de Máquinas Agrícolas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-50 hover:bg-white p-6 rounded-xl transition-all duration-300 hover:shadow-xl border border-transparent hover:border-emerald-100"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h5>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group">
                      Saiba Mais 
                      <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;