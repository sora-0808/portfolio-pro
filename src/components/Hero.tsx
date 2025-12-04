import React from 'react';
import { ArrowRight, Sparkles, MapPin, Flag } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-5"></div>
      
      {/* Motifs géométriques africains */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-500/20 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-green-500/20 rotate-12 animate-bounce"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6 space-x-4">
          <div className="flex items-center bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/30">
            <Flag className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-orange-400 font-medium">Développeur Sénégalais</span>
          </div>
          <div className="flex items-center bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30">
            <MapPin className="h-4 w-4 text-orange-500 mr-2" />
            <span className="text-green-400 font-medium">Dakar</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-green-200 bg-clip-text text-transparent">
          Créer. Concevoir. Lancer.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Jeune développeur passionné de <span className="text-orange-400 font-semibold">Dakar</span>, 
          je transforme vos idées en solutions digitales modernes
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Spécialisé en développement web et design UI/UX, je contribue à la révolution numérique africaine 🚀
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Démarrons votre projet
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Découvrir mes créations
          </button>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">4+</div>
            <div>Années d'études</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">15+</div>
            <div>Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">100%</div>
            <div>Passion</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full p-1">
          <div className="w-1 h-3 bg-orange-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;