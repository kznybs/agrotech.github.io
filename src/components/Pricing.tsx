import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    subtitle: 'AGROTECH START',
    price: '150',
    features: [
      { name: 'Módulos introdutórios em VR', included: true },
      { name: 'Simulação de plantio e colheita', included: true },
      { name: 'Treinamento de segurança rural', included: false },
      { name: 'Aulas gravadas e interativas', included: false }
    ],
    popular: false
  },
  {
    name: 'Padrão',
    subtitle: 'AGROTECH PRO',
    price: '200',
    features: [
      { name: 'Módulos técnicos em VR', included: true },
      { name: 'Simulação com máquinas agrícolas', included: true },
      { name: 'Laboratório virtual de solo', included: true },
      { name: 'Grupos de estudo online', included: false }
    ],
    popular: true
  },
  {
    name: 'Avançado',
    subtitle: 'AGROTECH MASTER',
    price: '149',
    features: [
      { name: 'Acesso completo em VR', included: true },
      { name: 'Gestão e automação agrícola', included: true },
      { name: 'Simulação com drones e sensores', included: true },
      { name: 'Certificação oficial', included: true }
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-emerald-600 pl-6 mb-16 max-w-3xl">
          <h6 className="text-emerald-600 text-sm font-semibold uppercase tracking-wide mb-2">
            Planos de Preço
          </h6>
          <h2 className="text-4xl font-bold text-gray-900">
            Preços Competitivos para Serviços de Capacitação
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-emerald-600 shadow-xl scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center pt-8 pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">Plano – {plan.subtitle}</p>
                
                <div className={`mx-auto w-32 h-32 rounded-full flex items-center justify-center text-white mb-6 ${
                  plan.popular ? 'bg-gray-900' : 'bg-emerald-600'
                }`}>
                  <div className="text-center">
                    <span className="text-sm">R$</span>
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <span className="text-sm">/Mês</span>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-between">
                      <span className="text-gray-700">{feature.name}</span>
                      {feature.included ? (
                        <Check className="h-5 w-5 text-emerald-600" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 transform hover:scale-105' 
                    : 'bg-gray-200 text-gray-900 hover:bg-emerald-600 hover:text-white'
                }`}>
                  Comprar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;