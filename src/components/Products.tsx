import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';

const products = [
  {
    name: 'Camiseta AgroTech',
    price: 'R$ 99,00',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Boné AgroTech',
    price: 'R$ 89,99',
    image: 'https://images.pexels.com/photos/1878093/pexels-photo-1878093.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Óculos VR AgroTech',
    price: 'R$ 4.999,00',
    image: 'https://images.pexels.com/photos/7862604/pexels-photo-7862604.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Kit Treinamento Premium',
    price: 'R$ 199,00',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Manual Digital AgroTech',
    price: 'R$ 49,99',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400',
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-emerald-600 pl-6 mb-16 max-w-2xl">
          <h6 className="text-emerald-600 text-sm font-semibold uppercase tracking-wide mb-2">
            Produtos
          </h6>
          <h2 className="text-4xl font-bold text-gray-900">
            AgroTech Produtos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h6 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h6>
                <p className="text-2xl font-bold text-emerald-600">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;