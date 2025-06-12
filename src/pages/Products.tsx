import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Eye, Star, Filter, Search, Heart } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'clothing', name: 'Vestuário' },
    { id: 'equipment', name: 'Equipamentos' },
    { id: 'training', name: 'Treinamento' },
    { id: 'accessories', name: 'Acessórios' }
  ];

  const products = [
    {
      id: 1,
      name: 'Camiseta AgroTech Premium',
      price: 'R$ 99,00',
      originalPrice: 'R$ 129,00',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller',
      category: 'clothing',
      description: 'Camiseta de alta qualidade com tecnologia dry-fit'
    },
    {
      id: 2,
      name: 'Boné AgroTech Profissional',
      price: 'R$ 89,99',
      originalPrice: 'R$ 109,99',
      image: 'https://images.pexels.com/photos/1878093/pexels-photo-1878093.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 89,
      badge: 'Novo',
      category: 'clothing',
      description: 'Boné com proteção UV e ajuste perfeito'
    },
    {
      id: 3,
      name: 'Óculos VR AgroTech Pro',
      price: 'R$ 4.999,00',
      originalPrice: 'R$ 5.999,00',
      image: 'https://images.pexels.com/photos/7862604/pexels-photo-7862604.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviews: 45,
      badge: 'Premium',
      category: 'equipment',
      description: 'Óculos VR de última geração para treinamento imersivo'
    },
    {
      id: 4,
      name: 'Kit Treinamento Completo',
      price: 'R$ 199,00',
      originalPrice: 'R$ 249,00',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 67,
      badge: 'Oferta',
      category: 'training',
      description: 'Kit completo com materiais didáticos e acesso VR'
    },
    {
      id: 5,
      name: 'Manual Digital Interativo',
      price: 'R$ 49,99',
      originalPrice: 'R$ 79,99',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 156,
      badge: 'Digital',
      category: 'training',
      description: 'Manual digital com realidade aumentada'
    },
    {
      id: 6,
      name: 'Luvas Táteis VR',
      price: 'R$ 299,00',
      originalPrice: 'R$ 399,00',
      image: 'https://images.pexels.com/photos/7862604/pexels-photo-7862604.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      reviews: 34,
      badge: 'Inovação',
      category: 'accessories',
      description: 'Luvas com feedback tátil para experiência completa'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'bg-orange-500';
      case 'Novo': return 'bg-green-500';
      case 'Premium': return 'bg-purple-500';
      case 'Oferta': return 'bg-red-500';
      case 'Digital': return 'bg-blue-500';
      case 'Inovação': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

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
              AgroTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Produtos</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Equipamentos e materiais de alta qualidade para sua jornada no agronegócio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Filter className="h-5 w-5 text-gray-500 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-600">
              Mostrando {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && ` na categoria "${categories.find(c => c.id === selectedCategory)?.name}"`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(product.badge)}`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </motion.button>

                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-3">
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
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                    </div>
                    <span className="text-sm font-semibold text-emerald-600">
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
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
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                  >
                    Adicionar ao Carrinho
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros ou termo de busca</p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Products;