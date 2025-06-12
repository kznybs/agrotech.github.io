import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Eye, Star } from 'lucide-react';

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      name: 'Camiseta AgroTech',
      price: 'R$ 99,00',
      originalPrice: 'R$ 129,00',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      badge: 'Bestseller'
    },
    {
      name: 'Boné AgroTech',
      price: 'R$ 89,99',
      originalPrice: 'R$ 109,99',
      image: 'https://images.pexels.com/photos/1878093/pexels-photo-1878093.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      badge: 'Novo'
    },
    {
      name: 'Óculos VR AgroTech',
      price: 'R$ 4.999,00',
      originalPrice: 'R$ 5.999,00',
      image: 'https://images.pexels.com/photos/7862604/pexels-photo-7862604.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      badge: 'Premium'
    },
    {
      name: 'Kit Treinamento Premium',
      price: 'R$ 199,00',
      originalPrice: 'R$ 249,00',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      badge: 'Oferta'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
              Produtos
            </h6>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              AgroTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Produtos</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equipamentos e materiais de alta qualidade para sua jornada no agronegócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    product.badge === 'Bestseller' ? 'bg-orange-500' :
                    product.badge === 'Novo' ? 'bg-green-500' :
                    product.badge === 'Premium' ? 'bg-purple-500' :
                    'bg-red-500'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col space-y-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>

                <h6 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h6>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-emerald-600">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                >
                  Adicionar ao Carrinho
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;