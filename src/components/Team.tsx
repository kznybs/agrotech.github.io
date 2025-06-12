import React from 'react';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Gabriel Olímpio',
    role: 'Mestre Ninja IV',
    image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Adilson Netto',
    role: 'Mestre Ninja II',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Vinicius Jesus',
    role: 'Terceiro Ninja II',
    image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Vitoria Santos',
    role: 'Aprendiz Ninja',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Kellen Kevelyn',
    role: 'Aprendiz Ninja',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-emerald-600 pl-6 mb-16 max-w-2xl">
          <h6 className="text-emerald-600 text-sm font-semibold uppercase tracking-wide mb-2">
            Membros da Equipe
          </h6>
          <h2 className="text-4xl font-bold text-gray-900">
            Profissionais da AgroTech
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-3">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center bg-gray-50">
                <h5 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {member.name}
                </h5>
                <p className="text-gray-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;