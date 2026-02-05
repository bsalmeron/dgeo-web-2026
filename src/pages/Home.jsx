import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  FlaskConical, 
  Building2, 
  Lightbulb, 
  Activity,
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { SERVICES, FEATURED_CASES, CLIENTS } from '../lib/constants';
import heroImg from '../assets/images/dji_0034-1600.jpg';

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentBlogPosts();
  }, []);

  const fetchRecentBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .not('published_at', 'is', null)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) {
        console.error('[ERROR] Error fetching blog posts:', error);
        throw error;
      }
      console.log('[INFO] Blog posts fetched successfully:', data?.length || 0, 'posts');
      setBlogPosts(data || []);
    } catch (error) {
      console.error('[ERROR] Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const iconMap = {
    Search,
    FlaskConical,
    Building2,
    Lightbulb,
    Activity
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />

        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-700 to-amber-600 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              D'GEO Soluciones
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ingeniería Geotécnica de Excelencia para Costa Rica
            </p>
            <p className="text-lg text-orange-50 mb-12 max-w-2xl mx-auto">
              Soluciones innovadoras en investigación geotécnica, laboratorio de materiales,
              diseño, construcción y monitoreo para proyectos de infraestructura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('servicios-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-orange-50 text-orange-600 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="/contacto"
                className="inline-flex items-center px-8 py-4 bg-orange-800 hover:bg-orange-900 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Conozca D'GEO Soluciones
            </h2>
            <p className="text-lg text-slate-600">
              Descubra cómo transformamos la ingeniería geotécnica en Costa Rica
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/_ujs9vzI9_s"
              title="D'GEO Soluciones"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluciones integrales en ingeniería geotécnica con tecnología de punta 
              y un equipo altamente calificado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.path}
                    className="block h-full bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-100"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold">
                      Ver más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="proyectos-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proyectos destacados que demuestran nuestra experiencia y compromiso con la excelencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {FEATURED_CASES.map((caso, index) => (
              <motion.div
                key={caso.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-orange-600 to-amber-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {caso.title}
                  </h3>
                  <p className="text-sm text-orange-600 mb-3 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    {caso.location}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {caso.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/casos-de-exito"
              className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Ver Todos los Casos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="nosotros-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Clientes que Confían en Nosotros
            </h2>
            <p className="text-lg text-slate-400">
              Trabajamos con las principales instituciones y empresas de Costa Rica
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {CLIENTS.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all min-h-[140px]"
              >
                {client.logo && client.logo.startsWith('http') ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-[90px] w-auto h-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <span className="text-base font-semibold text-white text-center px-2">{client.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Últimas Publicaciones
            </h2>
            <p className="text-lg text-slate-600">
              Manténgase informado sobre las últimas noticias y desarrollos en ingeniería geotécnica
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-600 border-t-transparent"></div>
            </div>
          ) : blogPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      {post.featured_image && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center text-sm text-slate-500 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(post.published_at).toLocaleDateString('es-CR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Ver Todo el Blog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-slate-600">
              <p>No hay publicaciones disponibles en este momento.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
