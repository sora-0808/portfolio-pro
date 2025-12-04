import React from 'react';
import { Globe, Palette, Smartphone, ArrowRight, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Sites Web Modernes',
      description: 'Création de sites web responsive et performants, adaptés au marché africain et aux besoins locaux.',
      features: ['Design responsive', 'SEO optimisé', 'Performance élevée', 'Hébergement local'],
      color: 'orange'
    },
    {
      icon: Palette,
      title: 'Design UI/UX Africain',
      description: 'Interfaces utilisateur inspirées de la culture africaine, modernes et intuitives pour tous.',
      features: ['Recherche utilisateur', 'Design culturel', 'Accessibilité', 'Tests utilisateurs'],
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'Solutions Mobile-First',
      description: 'Applications et prototypes pensés pour l\'Afrique mobile, où le smartphone est roi.',
      features: ['Mobile-first', 'Offline-ready', 'Faible consommation', 'UX simplifiée'],
      color: 'orange'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-orange-500 mr-3" />
            <span className="text-orange-400 font-semibold text-lg">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Solutions Tech Africaines</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des services adaptés aux réalités africaines, pensés par un jeune développeur qui comprend les enjeux locaux
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border-l-4 ${
                service.color === 'orange' ? 'border-orange-500' : 'border-green-500'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                service.color === 'orange' 
                  ? 'bg-orange-400/10 group-hover:bg-orange-400/20' 
                  : 'bg-green-400/10 group-hover:bg-green-400/20'
              }`}>
                <service.icon className={`h-8 w-8 ${
                  service.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                }`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <ArrowRight className={`h-4 w-4 mr-2 ${
                      service.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`font-semibold transition-colors duration-200 flex items-center group ${
                service.color === 'orange' 
                  ? 'text-orange-400 hover:text-orange-300' 
                  : 'text-green-400 hover:text-green-300'
              }`}>
                Découvrir
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500/10 to-green-500/10 p-6 rounded-xl border border-orange-500/20 max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg">
              <span className="text-orange-400 font-semibold">"Made in Senegal"</span> - 
              Chaque solution est pensée avec la créativité et l'innovation africaine 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;