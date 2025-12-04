import React from 'react';
import { Check, Star, Zap, Crown, Heart } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Star,
      price: '150 000 FCFA',
      priceEuro: '(~230€)',
      description: 'Parfait pour débuter votre présence digitale',
      features: [
        'Site vitrine (3-5 pages)',
        'Design responsive mobile-first',
        'Optimisation SEO de base',
        'Formulaire de contact WhatsApp',
        'Hébergement local 1 an',
        'Formation à la gestion',
        '1 révision incluse'
      ],
      popular: false,
      color: 'orange',
      badge: '🚀 Idéal PME'
    },
    {
      name: 'Pro Sénégal',
      icon: Zap,
      price: '400 000 FCFA',
      priceEuro: '(~610€)',
      description: 'Solution complète pour entreprises ambitieuses',
      features: [
        'Site web complet (illimité)',
        'Design sur mesure + culture locale',
        'SEO optimisé pour le Sénégal',
        'Intégration Orange Money/Wave',
        'CMS en français/wolof',
        'Analytics et suivi',
        '3 révisions incluses',
        'Support 6 mois',
        'Formation équipe'
      ],
      popular: true,
      color: 'green',
      badge: '🏆 Plus populaire'
    },
    {
      name: 'Sur Mesure',
      icon: Crown,
      price: 'Devis',
      priceEuro: 'Personnalisé',
      description: 'Innovation africaine pour projets d\'envergure',
      features: [
        'Application web/mobile complexe',
        'Design system complet',
        'Intégrations API locales',
        'Solutions offline-first',
        'Multi-langues (FR/Wolof/EN)',
        'Déploiement et maintenance',
        'Support prioritaire',
        'Accompagnement dédié',
        'Formation avancée'
      ],
      popular: false,
      color: 'purple',
      badge: '👑 Premium'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offres" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl mr-3">💰</span>
            <span className="text-orange-400 font-semibold text-lg">Tarifs Accessibles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mes Offres</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des prix adaptés au marché sénégalais, parce que la tech doit être accessible à tous
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 ${
                plan.popular 
                  ? 'ring-2 ring-green-400 transform scale-105 border-2 border-green-500/30' 
                  : 'hover:transform hover:-translate-y-2 border border-gray-600'
              } transition-all duration-300 hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-2xl mr-2">{plan.badge.split(' ')[0]}</span>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                    plan.color === 'green' ? 'bg-green-400/10' :
                    plan.color === 'purple' ? 'bg-purple-400/10' : 'bg-orange-400/10'
                  }`}>
                    <plan.icon className={`h-6 w-6 ${
                      plan.color === 'green' ? 'text-green-400' :
                      plan.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                    }`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <div className="text-sm text-gray-400">{plan.priceEuro}</div>
                  {plan.price !== 'Devis' && <span className="text-gray-400 text-sm">/projet</span>}
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.color === 'green' ? 'text-green-400' :
                      plan.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                    }`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
                    : plan.color === 'purple'
                    ? 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                    : 'border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'
                }`}
              >
                {plan.price === 'Devis' ? 'Demander un devis' : 'Démarrer le projet'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="bg-gradient-to-r from-orange-500/10 to-green-500/10 p-6 rounded-xl border border-orange-500/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-orange-400 font-semibold">Engagement social</span>
            </div>
            <p className="text-gray-300 mb-2">
              <strong>Tarifs étudiants :</strong> -30% pour les projets étudiants sénégalais
            </p>
            <p className="text-gray-300">
              <strong>Paiement flexible :</strong> Possibilité de paiement en 3 fois via Orange Money/Wave
            </p>
          </div>
          
          <p className="text-gray-400">
            Tous les prix sont en FCFA (conversion euro indicative). 
            <button 
              onClick={scrollToContact}
              className="text-orange-400 hover:text-orange-300 ml-1 underline"
            >
              Discutons de votre projet !
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;