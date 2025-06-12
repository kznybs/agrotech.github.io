import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Eye, Users, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Fornecer treinamento prático e acessível para operadores de máquinas agrícolas através da realidade virtual, promovendo aprendizado seguro e democratizando o acesso à tecnologia no agronegócio.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência nacional em capacitação agrícola por meio de tecnologias imersivas, transformando o aprendizado no campo com soluções inovadoras e eficazes.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: 'Valores',
      description: 'Inovação, segurança, acessibilidade e excelência em educação. Acreditamos no poder da tecnologia para transformar vidas e impulsionar o agronegócio brasileiro.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Senai Grand Prix 2024',
      description: '1º lugar na categoria Inspiração para CNH Industrial',
      year: '2024'
    },
    {
      icon: Users,
      title: '5000+ Alunos',
      description: 'Treinados em nossa plataforma VR',
      year: '2023-2024'
    },
    {
      icon: Rocket,
      title: 'Expansão Nacional',
      description: 'Presente em 15 estados brasileiros',
      year: '2024'
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
              Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">AgroTech</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Pioneiros em treinamento agrícola com realidade virtual, transformando o futuro do agronegócio brasileiro
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Equipe AgroTech Qualifica"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-2xl">
                  <Award className="h-12 w-12 mb-4" />
                  <p className="font-bold text-lg">Vencedora</p>
                  <p className="text-sm opacity-90">Senai Grand Prix 2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="border-l-4 border-emerald-600 pl-8 mb-8">
                <h6 className="text-emerald-600 text-sm font-bold uppercase tracking-wide mb-2">
                  Nossa História
                </h6>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                  Inovação que <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Transforma</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A AgroTech Qualifica nasceu da visão de revolucionar o treinamento no agronegócio. 
                  Reconhecendo os desafios de capacitação no setor agrícola, desenvolvemos uma solução 
                  inovadora que combina realidade virtual com expertise técnica.
                </p>
                <p>
                  Nossa conquista do 1º lugar no Senai Grand Prix 2024, na categoria de inspiração 
                  para a CNH Industrial, validou nossa abordagem e nos motivou a expandir ainda mais 
                  nosso impacto no setor.
                </p>
                <p>
                  Hoje, somos líderes em treinamento agrícola imersivo, oferecendo experiências 
                  seguras e eficazes que preparam profissionais para os desafios do campo moderno.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Pilares</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os valores que guiam nossa jornada e definem quem somos
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-lg`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Conquistas</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Marcos importantes em nossa jornada de inovação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl inline-flex mb-6">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-3xl font-black text-white mb-2">
                  {achievement.year}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {achievement.title}
                </h3>
                
                <p className="text-emerald-100">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;