import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      // Configuration EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'bayalaaxison@hotmail.com'
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(
        'service_wlptxcw', // Service ID (à configurer)
        'template_e94erw9', // Template ID (à configurer)
        templateParams,
        'frwlWB9NxiP7BGsmt' // Public Key (à configurer)
      );

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setFormStatus('error');
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-green-400" size={24} />,
      label: "Email",
      value: "bayalaaxison@hotmail.com",
      link: "mailto:bayalaaxison@hotmail.com"
    },
    {
      icon: <Phone className="text-blue-400" size={24} />,
      label: "Téléphone",
      value: "+226 78 60 60 05",
      link: "tel:+22678606005"
    },
    {
      icon: <MapPin className="text-purple-400" size={24} />,
      label: "Localisation",
      value: "Ouagadougou, Burkina Faso",
      link: "https://maps.google.com"
    },
    {
      icon: <MessageCircle className="text-green-500" size={24} />,
      label: "WhatsApp",
      value: "+226 77 71 51 48",
      link: "https://wa.me/0022677715148"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/axisonbayala",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/axison-bayala-ab55282b5/",
      color: "hover:text-blue-400"
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      url: "https://wa.me/0022677715148",
      color: "hover:text-green-400"
    }
  ];

  const projectTypes = [
    "Site Web Vitrine",
    "Application Web (React)",
    "API Backend (Node.js)",
    "E-commerce",
    "Système de Gestion",
    "Migration Bootstrap → React",
    "Projet à Impact Social",
    "Autre"
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Contactez-moi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discutons de votre projet et trouvons ensemble la solution technique idéale
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Envoyez-moi un message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
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
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez le type de projet</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-vertical"
                      placeholder="Décrivez votre projet, vos besoins, votre timeline et votre budget approximatif..."
                    />
                  </div>

                  {/* Form Status */}
                  {formStatus === 'success' && (
                    <div className="flex items-center p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                      <CheckCircle size={20} className="mr-3" />
                      <span>Message envoyé avec succès ! Je vous répondrai dans les 24h.</span>
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="flex items-center p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                      <AlertCircle size={20} className="mr-3" />
                      <span>Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement à bayalaaxison@hotmail.com</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`w-full flex items-center justify-center px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
                      formStatus === 'loading'
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 hover:shadow-xl'
                    }`}
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-3" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-sm text-center">
                    Ou contactez-moi directement via mes réseaux sociaux
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 text-gray-400 ${social.color}`}
                        title={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-green-400 transition-colors">
                        {info.label}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
                  Disponibilité
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span className="text-green-400">8h - 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi:</span>
                    <span className="text-yellow-400">9h - 14h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche:</span>
                    <span className="text-red-400">Fermé</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <p className="text-green-400 text-sm">
                    🟢 Actuellement disponible pour nouveaux projets
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4">FAQ Rapide</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-green-400 font-medium">Délai de réponse ?</div>
                    <div className="text-gray-300">Généralement sous 24h</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-medium">Consultation gratuite ?</div>
                    <div className="text-gray-300">Oui, première consultation gratuite</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-medium">Tarifs projets sociaux ?</div>
                    <div className="text-gray-300">Tarifs préférentiels disponibles</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <p className="text-gray-400 mb-4">
                  Besoin d'une réponse rapide ?
                </p>
                <a
                  href="https://wa.me/0022677715148"
                  className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;