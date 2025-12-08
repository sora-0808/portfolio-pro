import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Je vous recontacterai très bientôt incha Allah 🙏');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo: Array<{
    icon: React.ElementType;
    title: string;
    value: string;
    link: string | null;
    color: 'green' | 'orange';
  }> = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+221 76 587 86 19 ou 78 590 37 72',
      link: 'https://wa.me/221765878619',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'mamadoumansourcisse24@gmail.com',
      link: 'mailto:mamadoumansourcisse24@gmail.com',
      color: 'orange'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Dakar, Sénégal 🇸🇳',
      link: null,
      color: 'green'
    }
  ];

  const socialLinks: Array<{
    icon: React.ElementType;
    name: string;
    url: string;
    color: string;
  }> = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/sora-0808',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mamadou-mansour-ciss%C3%A9-a70457304/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/sooradev',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl mr-3">📞</span>
            <span className="text-orange-400 font-semibold text-lg">Restons connectés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet ? Parlons-en autour d'un bon thé à la menthe ! ☕
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-500/10 to-green-500/10 p-6 rounded-xl border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Discutons de votre projet</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Que vous soyez une startup dakaroise, une PME sénégalaise ou un entrepreneur 
                avec une vision, je suis là pour transformer vos idées en réalité digitale !
              </p>
              <p className="text-orange-400 font-semibold">
                🚀 Réponse garantie sous 24h (sauf samedi après-midi)
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    info.color === 'green' ? 'bg-green-400/10' : 'bg-orange-400/10'
                  }`}>
                    <info.icon className={`h-6 w-6 ${
                      info.color === 'green' ? 'text-green-400' : 'text-orange-400'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${
                          info.color === 'green' 
                            ? 'text-gray-300 hover:text-green-400' 
                            : 'text-gray-300 hover:text-orange-400'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-700 p-3 rounded-lg transition-all duration-300 ${social.color} hover:transform hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-orange-400">💡 Le saviez-vous ?</h4>
              <p className="text-gray-300 text-sm">
                Je travaille souvent depuis les cafés de Dakar (Parcelles Assainies, west Foire, Fann Résidence)
                Si vous êtes dans le coin, on peut se rencontrer pour discuter de votre projet 
                autour d'un café touba ! ☕
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-gray-700 p-8 rounded-2xl border border-gray-600">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Type de projet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                >
                  <option value="">Choisissez votre projet</option>
                  <option value="site-web">Site web vitrine</option>
                  <option value="e-commerce">Boutique en ligne</option>
                  <option value="design-uiux">Design UI/UX</option>
                  <option value="app-mobile">Application mobile</option>
                  <option value="consultation">Consultation tech</option>
                  <option value="formation">Formation/Mentorat</option>
                  <option value="autre">Autre projet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Parlez-moi de votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez votre vision, vos objectifs, votre budget... Plus vous me donnez de détails, mieux je peux vous aider ! 😊"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="h-5 w-5 mr-2" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;