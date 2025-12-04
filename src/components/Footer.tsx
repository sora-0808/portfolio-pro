import React from 'react';
import { Code2, Heart, MapPin, Flag } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', id: 'accueil' },
    { name: 'À propos', id: 'apropos' },
    { name: 'Services', id: 'services' },
    { name: 'Projets', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Code2 className="h-8 w-8 text-orange-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-white">SooraDev&Design</span>
                <div className="flex items-center text-xs text-orange-400">
                  <Flag className="h-3 w-3 mr-1" />
                  <span>Made in Senegal</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Jeune développeur sénégalais passionné par l'innovation technologique africaine. 
              Basé à Dakar, je crée des solutions digitales modernes qui reflètent notre culture 
              et répondent aux besoins locaux.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <MapPin className="h-4 w-4 mr-2 text-green-400" />
              <span>Dakar, Sénégal 🇸🇳</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Mes Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>🌐 Sites web modernes</li>
              <li>🎨 Design UI/UX africain</li>
              <li>📱 Solutions mobile-first</li>
              <li>💡 Consultation tech</li>
              <li>🎓 Formation & mentorat</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} SooraDev&Design. Tous droits réservés.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Développé avec</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>depuis Dakar</span>
              <span className="text-lg">🇸🇳</span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Fier de contribuer à l'écosystème tech sénégalais • 
              <span className="text-orange-400"> #TechSenegal #MadeInDakar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;