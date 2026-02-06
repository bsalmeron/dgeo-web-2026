import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .not('published_at', 'is', null)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('[ERROR] Error fetching blog posts:', error);
        throw error;
      }
      console.log('[INFO] Blog posts fetched:', data?.length || 0);
      setBlogPosts(data || []);
    } catch (error) {
      console.error('[ERROR] Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Blog D'GEO
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Artículos técnicos, noticias y análisis sobre ingeniería geotécnica y construcción en Costa Rica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-orange-600 border-t-transparent"></div>
              <p className="mt-4 text-slate-600">Cargando artículos...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-slate-100"
                  >
                    {post.cover_image_url ? (
                      <div className="h-56 overflow-hidden">
                        <img
                          src={post.cover_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-56 bg-gradient-to-br from-orange-500 to-amber-500"></div>
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
                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-orange-600 font-semibold">
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">
                {searchTerm ? 'No se encontraron artículos que coincidan con tu búsqueda.' : 'No hay publicaciones disponibles en este momento.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
