import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Clock, Users, Award, CheckCircle, Star, BookOpen, Target } from 'lucide-react';

const Training = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', name: 'Todos os Cursos' },
    { id: 'beginner', name: 'Iniciante' },
    { id: 'intermediate', name: 'Intermediário' },
    { id: 'advanced', name: 'Avançado' },
    { id: 'certification', name: 'Certificação' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Fundamentos da Agricultura',
      description: 'Aprenda os conceitos básicos da agricultura moderna e sustentável',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8 horas',
      students: 1250,
      rating: 4.8,
      level: 'beginner',
      price: 'Gratuito',
      instructor: 'Dr. João Silva',
      modules: 12,
      certificate: true,
      category: 'beginner'
    },
    {
      id: 2,
      title: 'Operação de Tratores',
      description: 'Domine a operação segura e eficiente de tratores agrícolas',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '15 horas',
      students: 890,
      rating: 4.9,
      level: 'intermediate',
      price: 'R$ 299',
      instructor: 'Eng. Maria Santos',
      modules: 18,
      certificate: true,
      category: 'intermediate'
    },
    {
      id: 3,
      title: 'Agricultura de Precisão',
      description: 'Tecnologias avançadas para otimização da produção agrícola',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '25 horas',
      students: 567,
      rating: 5.0,
      level: 'advanced',
      price: 'R$ 599',
      instructor: 'Dr. Carlos Oliveira',
      modules: 24,
      certificate: true,
      category: 'advanced'
    },
    {
      id: 4,
      title: 'Certificação em Segurança Rural',
      description: 'Certificação oficial em normas de segurança no trabalho rural',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '20 horas',
      students: 2100,
      rating: 4.7,
      level: 'certification',
      price: 'R$ 399',
      instructor: 'Esp. Ana Costa',
      modules: 16,
      certificate: true,
      category: 'certification'
    },
    {
      id: 5,
      title: 'Gestão de Fazendas Inteligentes',
      description: 'IoT e automação para gestão eficiente de propriedades rurais',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '30 horas',
      students: 345,
      rating: 4.9,
      level: 'advanced',
      price: 'R$ 799',
      instructor: 'Dr. Pedro Lima',
      modules: 28,
      certificate: true,
      category: 'advanced'
    },
    {
      id: 6,
      title: 'Introdução ao Agronegócio',
      description: 'Conceitos fundamentais do mercado e cadeia produtiva agrícola',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '12 horas',
      students: 1890,
      rating: 4.6,
      level: 'beginner',
      price: 'R$ 199',
      instructor: 'Econ. Laura Ferreira',
      modules: 14,
      certificate: true,
      category: 'beginner'
    }
  ];

  const filteredCourses = courses.filter(course => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      case 'certification': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner': return 'Iniciante';
      case 'intermediate': return 'Intermediário';
      case 'advanced': return 'Avançado';
      case 'certification': return 'Certificação';
      default: return level;
    }
  };

  const benefits = [
    'Aprenda no seu próprio ritmo',
    'Certificados reconhecidos',
    'Suporte de instrutores especialistas',
    'Acesso vitalício ao conteúdo',
    'Comunidade ativa de alunos',
    'Atualizações gratuitas'
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
              Capacitação <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Profissional</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
              Desenvolva suas habilidades no agronegócio com nossos cursos especializados e certificações reconhecidas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-2xl"
              >
                Explorar Cursos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300"
              >
                Teste Gratuito
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Cursos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Disponíveis</span>
            </h2>
            <p className="text-lg text-gray-600">
              Mostrando {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Course Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getLevelColor(course.level)}`}>
                      {getLevelText(course.level)}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                      {course.price}
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30"
                    >
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </motion.button>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Instructor */}
                  <p className="text-sm text-emerald-600 font-semibold mb-4">
                    Por {course.instructor}
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-emerald-600" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-emerald-600" />
                      {course.modules} módulos
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-emerald-600" />
                      {course.students.toLocaleString()} alunos
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Certificate Badge */}
                  {course.certificate && (
                    <div className="flex items-center mb-4 text-sm text-emerald-600">
                      <Award className="h-4 w-4 mr-2" />
                      Certificado incluído
                    </div>
                  )}

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                  >
                    {course.price === 'Gratuito' ? 'Começar Agora' : 'Inscrever-se'}
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
                Por que escolher nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">cursos?</span>
              </h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Nossa plataforma oferece a melhor experiência de aprendizado online 
                para profissionais do agronegócio.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-2xl"
              >
                <Target className="inline h-5 w-5 mr-2" />
                Começar Jornada
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

export default Training;