import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, Facebook, Linkedin, Github } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Gabriel Olímpio',
      role: 'Mestre Ninja IV',
      description: 'Especialista em desenvolvimento VR e líder técnico',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Adilson Netto',
      role: 'Mestre Ninja II',
      description: 'Expert em agricultura e tecnologias agrícolas',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Vinicius Jesus',
      role: 'Terceiro Ninja II',
      description: 'Desenvolvedor full-stack e especialista em UX',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Vitoria Santos',
      role: 'Aprendiz Ninja',
      description: 'Designer UI/UX e especialista em experiência do usuário',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Kellen Kevelyn',
      role: 'Aprendiz Ninja',
      description: 'Analista de dados e especialista em machine learning',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
          <div className="border-l-4 border-emerald-600 pl-8 mb-8 inline-block text-left">
            <h6 className="text-emerald-600 text-sm font-bold uppercase tracking-wide mb-2">
              Nossa Equipe
            </h6>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Profissionais da <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">AgroTech</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os especialistas que tornam a inovação possível
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      href={member.social.twitter}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      href={member.social.linkedin}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      href={member.social.github}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {member.name}
                </h5>
                <p className="text-emerald-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;