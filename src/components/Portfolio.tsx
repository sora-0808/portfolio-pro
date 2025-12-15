import React, { useState } from 'react';
import { ExternalLink, Github, X, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
  {
  id: 1,
  title: 'DakarFood - Resto Africain',
  description: 'Section dédiée aux restaurants africains avec commande en ligne et paiement mobile.',
  image: '/image/resto.jpg',
  technologies: ['Javascript', 'HTML', 'Orange Money', 'Wave', 'CSS'],
  liveUrl: 'https://kayynoss.netlify.app',
  githubUrl: 'https://github.com/sora-0808/RESTO.CO',
  longDescription: 'Plateforme dédiée aux restaurants africains (sénégalais, ivoiriens, maliens, etc.), permettant la consultation de menus traditionnels, la commande en ligne et le paiement via Mobile Money. Interface multilingue (français et wolof) avec une expérience utilisateur simple et rapide.',
  flag: '🍝'
}

,
    {
      id: 2,
      title: 'Designs UI/UX - Créations',
      description: 'Mes créations en design UI/UX inspirées de la culture sénégalaise et africaine.',
      image: '/image/Soora design.jpg',
      technologies: ['Figma', 'Photoshop', 'canva', 'Prototyping'],
      liveUrl: '#',
      githubUrl: '#',
      longDescription: 'Portfolio de designs UI/UX créatifs alliant l\'esthétique africaine aux standards modernes du web. Chaque création reflète ma vision d\'une Afrique numérique innovante et accessible.',
      flag: '🎨'
    },
    {
      id: 3,
      title: 'AgriTech Dashboard',
      description: 'Tableau de bord pour agriculteurs sénégalais avec données météo et prix des marchés.',
      image: '/image/artisan2.jpg',
      technologies: ['Vue.js', 'Chart.js', 'API Météo', 'SMS Integration'],
      liveUrl: 'https://agri-climat.vercel.app/',
      githubUrl: 'https://agri-climat.vercel.app/',
      longDescription: 'Dashboard pour aider les agriculteurs sénégalais avec des données en temps réel sur la météo, les prix des marchés et des conseils agricoles adaptés au climat local.',
      flag: '🌾'
    },
    {
      id: 4,
      title: 'École Numérique Sénégal',
      description: 'Plateforme éducative pour démocratiser l\'apprentissage du code au Sénégal.',
      image: '/image/etudiant.jpg',
      technologies: ['Python', 'Bootstrap', 'flutter', 'JavaScript'],
      liveUrl: 'https://ecole-numerique.vercel.app/',
      githubUrl: 'https://ecole-numerique.vercel.app/',
      longDescription: 'Plateforme éducative gratuite pour enseigner la programmation aux jeunes Sénégalais, avec des cours en français et des exemples adaptés au contexte local.',
      flag: '📚'
    },
    {
      id: 5,
      title: 'TIME of Coding',
      description: 'App communautaire pour organiser des concours de code pour les familles dakaroises et renforcer les liens sociaux.',
      image: '/image/codeur.jpg',
      technologies: ['React', 'SQL', 'Geolocation', 'Push Notifications'],
      liveUrl: '#',
      githubUrl: '#',
      longDescription: 'Application communautaire permettant aux familles dakaroises de partager et organiser les repas de rupture du jeûne, renforçant les liens sociaux traditionnels.',
      flag: '</>'
    },
    {
      id: 6,
      title: 'Artisan Sénégal Portfolio',
      description: 'Site vitrine pour un maître-tailleur de Sandaga avec galerie interactive.',
      image: '/image/tailleur sn.jpg',
      technologies: ['Excel', 'Automatisation', 'Powerpoint', 'WhatsApp API'],
      liveUrl: 'https://pamzvision.netlify.app/',
      githubUrl: 'https://pamzvision.netlify.app/',
      longDescription: 'Portfolio créatif pour un artisan tailleur du marché Sandaga, avec galerie de créations et système de commande via WhatsApp, très populaire au Sénégal.',
      flag: '✂️'
    },
   
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl mr-3">🚀</span>
            <span className="text-orange-400 font-semibold text-lg">Mes Créations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Projets réalisés avec passion depuis Dakar, alliant innovation technologique et culture sénégalaise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-700 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-orange-500/50"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Voir les détails</span>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full">
                  <span className="text-xl">{project.flag}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm ${
                        idx % 2 === 0 
                          ? 'bg-orange-400/10 text-orange-400' 
                          : 'bg-green-400/10 text-green-400'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-orange-500/20">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute top-4 left-4 bg-black/70 text-white p-3 rounded-full">
                  <span className="text-2xl">{selectedProject.flag}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full ${
                        idx % 2 === 0 
                          ? 'bg-orange-400/10 text-orange-400' 
                          : 'bg-green-400/10 text-green-400'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Voir le projet
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    className="border border-gray-600 hover:border-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors hover:text-green-400"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code source
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500/10 to-green-500/10 p-6 rounded-xl border border-orange-500/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="h-5 w-5 text-orange-400 mr-2" />
              <span className="text-orange-400 font-semibold">Fait avec fierté depuis Dakar</span>
            </div>
            <p className="text-gray-300">
              Chaque projet reflète ma passion pour la tech africaine et mon engagement 
              à créer des solutions qui ont du sens pour notre communauté 🇸🇳
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;