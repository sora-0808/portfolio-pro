import React from 'react';
import { User, Code, Palette, Lightbulb, Award, MapPin, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend', description: 'HTML&CSS, javascript, boostrap', color: 'orange' },
    { icon: Palette, name: 'Design UI/UX', description: 'Figma, PHOTOSHOP, CANVA', color: 'green' },
    { icon: Lightbulb, name: 'Backend', description: 'Node.js, PYTHON, MYSQL', color: 'orange' },
    { icon: Award, name: 'Innovation', description: 'Solutions créatives africaines', color: 'green' },
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">À propos de moi</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jeune développeur sénégalais passionné par la tech et fier de contribuer à l'essor numérique de l'Afrique
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-8 w-8 text-orange-400" />
              <div>
                <h3 className="text-2xl font-bold">SooraDev&Design</h3>
                <div className="flex items-center text-green-400 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Dakar, Sénégal 🇸🇳</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Salut ! Je suis un jeune développeur de <span className="text-orange-400 font-semibold">Dakar</span>, 
              étudiant en 3e année et passionné par le développement web et le design. 
              Mon rêve ? Contribuer à faire du Sénégal un hub technologique en Afrique de l'Ouest !
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Je combine créativité africaine et technologies modernes pour créer des expériences 
              digitales uniques. Chaque projet est une opportunité de montrer le talent tech sénégalais 
              et de résoudre des problèmes concrets avec des solutions innovantes.
            </p>

            <div className="bg-gradient-to-r from-orange-500/10 to-green-500/10 p-6 rounded-xl border border-orange-500/20">
              <div className="flex items-center mb-3">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-orange-400 font-semibold">Ma mission</span>
              </div>
              <p className="text-gray-300">
                Démocratiser l'accès au numérique en Afrique et montrer que l'innovation 
                peut venir de partout, même depuis les rues de Dakar !
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4 text-orange-400">Mes compétences</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className={`bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 border-l-4 ${
                    skill.color === 'orange' ? 'border-orange-500' : 'border-green-500'
                  }`}>
                    <skill.icon className={`h-6 w-6 mb-2 ${
                      skill.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                    }`} />
                    <h5 className="font-semibold text-white">{skill.name}</h5>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-orange-400/20 to-green-500/20 p-8 rounded-2xl backdrop-blur-sm border border-orange-500/20">
              <img
                src="./image/WhatsApp Image 2025-06-24 à 23.30.57_780b6942.jpg "
                alt="SooraDev&Design - Développeur Sénégalais"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">🇸🇳</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
            
            {/* Motifs décoratifs */}
            <div className="absolute top-10 left-10 w-8 h-8 border-2 border-orange-500/30 rotate-45"></div>
            <div className="absolute bottom-10 right-10 w-6 h-6 bg-green-500/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;