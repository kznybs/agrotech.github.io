import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, Facebook, Linkedin, Github, Mail, MapPin } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Gabriel Olímpio',
      role: 'Mestre Ninja IV',
      department: 'Desenvolvimento & Liderança Técnica',
      description: 'Especialista em desenvolvimento VR e líder técnico com mais de 8 anos de experiência em tecnologias imersivas.',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'VR Development', 'Team Leadership', 'System Architecture'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: 'gabriel@agrotech.com'
      },
      location: 'São Paulo, SP'
    },
    {
      name: 'Adilson Netto',
      role: 'Mestre Ninja II',
      department: 'Agricultura & Tecnologia',
      description: 'Expert em agricultura e tecnologias agrícolas com vasta experiência em automação rural e gestão de fazendas.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Agricultura de Precisão', 'IoT Rural', 'Gestão Agrícola', 'Consultoria'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: 'adilson@agrotech.com'
      },
      location: 'Barra do Bugres, MT'
    },
    {
      name: 'Vinicius Jesus',
      role: 'Terceiro Ninja II',
      department: 'Desenvolvimento Full-Stack',
      description: 'Desenvolvedor full-stack e especialista em UX/UI, focado em criar experiências digitais excepcionais.',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Full-Stack Development', 'UX/UI Design', 'Mobile Development', 'API Design'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: 'vinicius@agrotech.com'
      },
      location: 'Cuiabá, MT'
    },
    {
      name: 'Vitoria Santos',
      role: 'Aprendiz Ninja',
      department: 'Design & Experiência do Usuário',
      description: 'Designer UI/UX apaixonada por criar interfaces intuitivas e experiências memoráveis para usuários.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: 'vitoria@agrotech.com'
      },
      location: 'Campo Grande, MS'
    },
    {
      name: 'Kellen Kevelyn',
      role: 'Aprendiz Ninja',
      department: 'Dados & Inteligência Artificial',
      description: 'Analista de dados e especialista em machine learning, transformando dados em insights valiosos.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Data Science', 'Machine Learning', 'Python', 'Analytics'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: 'kellen@agrotech.com'
      },
      location: 'Brasília, DF'
    }
  ];

  const stats = [
    { number: '5', label: 'Especialistas', description: 'Profissionais dedicados' },
    { number: '10+', label: 'Anos de Experiência', description: 'Experiência combinada' },
    { number: '50+', label: 'Projetos Concluídos', description: 'Soluções entregues' },
    { number: '98%', label: 'Satisfação do Cliente', description: 'Taxa de aprovação' }
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
              Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Equipe</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
              Conheça os especialistas que tornam a inovação possível e transformam o futuro do agronegócio
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-black text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-white font-bold mb-1">{stat.label}</div>
                  <div className="text-emerald-200 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Profissionais da <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">AgroTech</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma equipe multidisciplinar unida pela paixão em revolucionar o agronegócio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Social Links Overlay */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex space-x-3">
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          href={member.social.twitter}
                          className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          href={member.social.linkedin}
                          className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          href={member.social.github}
                          className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-emerald-600 font-bold text-lg mb-1">
                        {member.role}
                      </p>
                      <p className="text-gray-600 font-semibold text-sm">
                        {member.department}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {member.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3">Especialidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-emerald-600" />
                        <span className="text-sm">{member.social.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                        <span className="text-sm">{member.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Junte-se ao nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">time</span>
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Estamos sempre em busca de talentos apaixonados por tecnologia e agricultura. 
              Venha fazer parte da revolução do agronegócio!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-2xl"
              >
                Ver Vagas Abertas
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300"
              >
                Enviar Currículo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;