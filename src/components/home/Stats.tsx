import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Award, Globe, Zap } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Users,
      number: 5000,
      suffix: '+',
      label: 'Alunos Treinados',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      number: 98,
      suffix: '%',
      label: 'Taxa de Aprovação',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Globe,
      number: 15,
      suffix: '+',
      label: 'Estados Atendidos',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      number: 24,
      suffix: '/7',
      label: 'Suporte Online',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20zM0 20c11.046 0 20-8.954 20-20H0v20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Números que <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Impressionam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma já transformou milhares de vidas no agronegócio brasileiro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
                    {inView && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        delay={index * 0.2}
                      />
                    )}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                      {stat.suffix}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;