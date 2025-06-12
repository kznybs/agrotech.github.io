import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Beatriz Monteiro',
      role: 'Empresária do Agronegócio',
      company: 'Fazenda São José',
      content: 'Investir na AGROTECH QUALIFICA foi a melhor decisão para otimizar meu tempo e treinar minha equipe com tecnologia de ponta. Os resultados foram imediatos!',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'Henrique Vasconcelos',
      role: 'Produtor Rural e Investidor',
      company: 'Agro Vasconcelos',
      content: 'A AGROTECH QUALIFICA transformou a forma como minha fazenda lida com capacitação — moderna, rápida e eficaz. Recomendo para todos os produtores.',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'Carlos Silva',
      role: 'Operador de Máquinas',
      company: 'Cooperativa Central',
      content: 'O treinamento em VR me deu confiança para operar equipamentos que nunca havia usado. A experiência é incrivelmente realista e segura.',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h6 className="text-emerald-200 text-sm font-bold uppercase tracking-wide mb-2">
            Depoimentos
          </h6>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">clientes</span> dizem
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Histórias reais de transformação no agronegócio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="h-16 w-16 text-white" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white leading-relaxed text-lg mb-8 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2">
                      <Quote className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-xl font-bold text-white">{testimonial.name}</h5>
                    <p className="text-emerald-200 font-semibold">{testimonial.role}</p>
                    <p className="text-emerald-300 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-white/5 to-white/10 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-2xl"
          >
            Junte-se aos Nossos Clientes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;