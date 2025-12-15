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

  // 🔥 HANDLE SUBMIT CONNECTÉ À N8N - URL DE PRODUCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    try {
      const response = await fetch(
        // URL DE PRODUCTION N8N UTILISÉE ICI :
        'https://sooramalick.app.n8n.cloud/webhook/contact-portfolio',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        }
      );

      // Si le webhook n8n est configuré pour renvoyer un statut 204 (No Content),
      // le statut `response.ok` sera toujours vrai.
      if (!response.ok) {
        // Cette ligne ne devrait s'exécuter que si n8n renvoie explicitement une erreur 4xx ou 5xx
        throw new Error(`Erreur n8n: Statut ${response.status}`);
      }

      alert('✅ Message envoyé avec succès ! Je vous contacte très bientôt incha Allah 🙏');
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('❌ Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  const contactInfo = [
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

  const socialLinks = [
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

  const Input = ({ id, name, type, placeholder, required }: { id: string, name: string, type: string, placeholder: string, required: boolean }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">{placeholder} {required && <span className="text-red-500">*</span>}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={formData[name as keyof typeof formData] as string}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 transition duration-150"
      />
    </div>
  );

  const TextArea = ({ id, name, placeholder, required }: { id: string, name: string, placeholder: string, required: boolean }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">{placeholder} {required && <span className="text-red-500">*</span>}</label>
      <textarea
        id={id}
        name={name}
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 resize-none"
      />
    </div>
  );

  const ContactCard = ({ icon: Icon, title, value, link, color }: typeof contactInfo[0] & { icon: React.ElementType }) => (
    <a href={link || '#'} target={link ? "_blank" : "_self"} rel={link ? "noopener noreferrer" : ""} className={`flex items-start bg-gray-700 p-6 rounded-xl border border-gray-600 transition duration-300 hover:bg-gray-600/50 ${link ? 'cursor-pointer' : 'cursor-default'}`}>
      <div className={`flex-shrink-0 p-3 rounded-full bg-opacity-10 bg-${color}-500 mr-4`}>
        <Icon className={`h-6 w-6 text-${color}-400`} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-300 break-words">{value}</p>
      </div>
    </a>
  );

  const SocialLink = ({ icon: Icon, name, url, color }: typeof socialLinks[0] & { icon: React.ElementType }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className={`text-gray-400 ${color} transition duration-300`}>
      <Icon className="h-7 w-7" />
    </a>
  );


  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl mr-3">📞</span>
            <span className="text-orange-400 font-semibold text-lg">Restons connectés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contactez-moi</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet ? Parlons-en autour d'un bon thé à la menthe ! ☕
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Section d'Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <ContactCard key={index} {...item} icon={item.icon} />
              ))}
            </div>

            <div className="pt-4 border-t border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Retrouvez-moi</h3>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} icon={link.icon} />
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="bg-gray-700 p-8 rounded-2xl border border-gray-600 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Votre Nom Complet"
                required={true}
              />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Votre Adresse Email"
                required={true}
              />
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Sujet de votre message"
                required={true}
              />
              <TextArea
                id="message"
                name="message"
                placeholder="Votre Message..."
                required={true}
              />

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