import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Beatriz Monteiro',
    role: 'Empresária do Agronegócio',
    content: 'Investir na AGROTECH QUALIFICA foi a melhor decisão para otimizar meu tempo e treinar minha equipe com tecnologia de ponta.',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Henrique Vasconcelos',
    role: 'Produtor Rural e Investidor em Tecnologia Agrícola',
    content: 'A AGROTECH QUALIFICA transformou a forma como minha fazenda lida com capacitação — moderna, rápida e eficaz.',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h6 className="text-emerald-200 text-sm font-semibold uppercase tracking-wide mb-2">
            Depoimentos
          </h6>
          <h2 className="text-4xl font-bold text-white">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-600 rounded-full p-2">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;