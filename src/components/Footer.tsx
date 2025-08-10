import React from 'react';
import { 
  Code2, 
  Heart, 
  Github, 
  Linkedin, 
  MessageCircle, 
  Mail, 
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Développement API Backend',
    'Applications Web React',
    'Sites Web Vitrine',
    'Migration Bootstrap → React',
    'Projets à Impact Social'
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/axisonbayala',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/axisonbayala',
      label: 'LinkedIn'
    },
    {
      icon: <MessageCircle size={20} />,
      href: 'https://wa.me/22670000000',
      label: 'WhatsApp'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:contact@axisonbayala.dev',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative">
      {/* African pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-repeat opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234CAF50' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Code2 size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Axison BAYALA
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Développeur Web Full Stack burkinabè, passionné par les technologies 
              backend et les projets à impact social. Je crée des solutions web 
              innovantes avec Node.js, React et MySQL.
            </p>

            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
              <span>🇧🇫</span>
              <span>Ouagadougou, Burkina Faso</span>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:pl-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <div className="text-green-400 font-medium mb-1">Email</div>
                <a
                  href="mailto:contact@axisonbayala.dev"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  contact@axisonbayala.dev
                </a>
              </div>
              
              <div>
                <div className="text-blue-400 font-medium mb-1">Téléphone</div>
                <a
                  href="tel:+22670000000"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +226 70 XX XX XX
                </a>
              </div>

              <div>
                <div className="text-purple-400 font-medium mb-1">Disponibilité</div>
                <div className="text-gray-400 text-sm">
                  Lun - Ven: 8h - 18h
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">
                  Disponible pour nouveaux projets
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Axison BAYALA. Fait avec</span>
              <Heart size={16} className="text-red-400" />
              <span>au Burkina Faso</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                Développé avec React + Tailwind CSS
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full text-white transition-all duration-300 transform hover:scale-110"
                title="Retour en haut"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="text-gray-500 text-xs">
              "La technologie au service de l'impact social" - Axison BAYALA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;