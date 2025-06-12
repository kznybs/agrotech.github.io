import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', name: 'Todos os Posts' },
    { id: 'technology', name: 'Tecnologia' },
    { id: 'agriculture', name: 'Agricultura' },
    { id: 'innovation', name: 'Inovação' },
    { id: 'training', name: 'Treinamento' },
    { id: 'news', name: 'Notícias' }
  ];

  const posts = [
    {
      id: 1,
      title: 'O Futuro da Agricultura: Como a VR está Revolucionando o Treinamento Rural',
      excerpt: 'Descubra como a realidade virtual está transformando a forma como os agricultores aprendem e se capacitam para os desafios do campo moderno.',
      image: 'https://images.pexels.com/photos/7862604/pexels-photo-7862604.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. João Silva',
      date: '2024-01-15',
      readTime: '8 min',
      category: 'technology',
      tags: ['VR', 'Agricultura', 'Inovação'],
      featured: true
    },
    {
      id: 2,
      title: 'Agricultura de Precisão: Tecnologias que Estão Mudando o Agronegócio',
      excerpt: 'Explore as principais tecnologias de agricultura de precisão e como elas estão aumentando a produtividade e sustentabilidade.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Eng. Maria Santos',
      date: '2024-01-12',
      readTime: '6 min',
      category: 'agriculture',
      tags: ['Precisão', 'Tecnologia', 'Produtividade'],
      featured: false
    },
    {
      id: 3,
      title: 'AgroTech Qualifica Vence Senai Grand Prix 2024',
      excerpt: 'Nossa plataforma foi reconhecida como a melhor solução inovadora para capacitação no agronegócio.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Equipe AgroTech',
      date: '2024-01-10',
      readTime: '4 min',
      category: 'news',
      tags: ['Prêmio', 'Reconhecimento', 'Inovação'],
      featured: true
    },
    {
      id: 4,
      title: 'Como Implementar Treinamento VR na Sua Propriedade Rural',
      excerpt: 'Guia prático para implementar soluções de realidade virtual no treinamento de equipes rurais.',
      image: 'https://images.pexels.com/photos/7862604/pexels-photo-7862604.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Carlos Oliveira',
      date: '2024-01-08',
      readTime: '10 min',
      category: 'training',
      tags: ['VR', 'Treinamento', 'Implementação'],
      featured: false
    },
    {
      id: 5,
      title: 'Sustentabilidade no Agronegócio: Práticas Inovadoras para 2024',
      excerpt: 'Conheça as principais práticas sustentáveis que estão moldando o futuro da agricultura.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dra. Ana Costa',
      date: '2024-01-05',
      readTime: '7 min',
      category: 'innovation',
      tags: ['Sustentabilidade', 'Meio Ambiente', 'Futuro'],
      featured: false
    },
    {
      id: 6,
      title: 'IoT na Agricultura: Conectando o Campo ao Futuro',
      excerpt: 'Como a Internet das Coisas está revolucionando o monitoramento e gestão de propriedades rurais.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Pedro Lima',
      date: '2024-01-03',
      readTime: '9 min',
      category: 'technology',
      tags: ['IoT', 'Conectividade', 'Monitoramento'],
      featured: false
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technology': return 'bg-blue-100 text-blue-700';
      case 'agriculture': return 'bg-green-100 text-green-700';
      case 'innovation': return 'bg-purple-100 text-purple-700';
      case 'training': return 'bg-orange-100 text-orange-700';
      case 'news': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">AgroTech</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Insights, novidades e tendências do agronegócio e tecnologia rural
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Tag className="h-5 w-5 text-gray-500 flex-shrink-0" />
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

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Posts em <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Destaque</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        Destaque
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(post.category)}`}>
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center"
                    >
                      Ler Artigo Completo
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'Últimos' : 'Artigos'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Artigos</span>
            </h2>
            <p className="text-lg text-gray-600">
              Mostrando {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'all' ? regularPosts : filteredPosts).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(post.category)}`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    {formatDate(post.date)}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center text-sm"
                  >
                    Ler Mais
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros ou termo de busca</p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;