import React from 'react';
import logoFull from '../../assets/brand/logo-full.webp';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Topografia', href: '/#servicios' },
      { name: 'Catastro', href: '/#servicios' },
      { name: 'SIG', href: '/#servicios' },
      { name: 'Geodesia', href: '/#servicios' },
    ],
    empresa: [
      { name: 'Nosotros', href: '/#nosotros' },
      { name: 'Proyectos', href: '/#proyectos' },
      { name: 'Equipo', href: '/#nosotros' },
      { name: 'Contacto', href: '/#contacto' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-orange-400" />
              <div>
                <h3 className="text-xl font-bold text-white">D'GEO</h3>
                <p className="text-sm text-orange-400">Soluciones</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Soluciones geoespaciales integrales para proyectos de infraestructura, 
              urbanismo y desarrollo territorial.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contacto@dgeosoluciones.com"
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                >
                  contacto@dgeosoluciones.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+34123456789"
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                >
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Madrid, España
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} D'GEO Soluciones. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacidad"
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacidad
              </Link>
              <Link
                to="/terminos"
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                Términos
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
