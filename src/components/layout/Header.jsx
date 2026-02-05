import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoMark from '../../assets/brand/logo-mark.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/', hash: '', scrollTo: null },
    { name: 'Servicios', path: '/', hash: '#servicios', scrollTo: 'servicios-section' },
    { name: 'Proyectos', path: '/', hash: '#proyectos', scrollTo: 'proyectos-section' },
    { name: 'Nosotros', path: '/', hash: '#nosotros', scrollTo: 'nosotros-section' },
    { name: 'Contacto', path: '/contacto', hash: '', scrollTo: null },
  ];

  const handleNavClick = (e, link) => {
    if (link.scrollTo) {
      // Si estamos en la página home y hay un scrollTo, hacer scroll
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(link.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si no estamos en home, navegar a home y luego hacer scroll
        e.preventDefault();
        window.location.href = '/' + link.hash;
      }
    }
  };

  const scrolledClass = isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + scrolledClass}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <img src={logoMark} alt="D'GEO" className="h-10 w-10 object-contain" />
              <motion.div
                className="absolute inset-0 bg-orange-400/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">D'GEO</h1>
              <p className="text-xs text-orange-400 -mt-1">Soluciones</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path + link.hash}
                onClick={(e) => handleNavClick(e, link)}
                className="text-gray-200 hover:text-orange-400 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path + link.hash}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-gray-200 hover:text-orange-400 transition-colors font-medium block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
