import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('[ERROR] Error fetching blog post:', error);
        throw error;
      }

      console.log('[INFO] Blog post fetched:', data?.title);
      setPost(data);
    } catch (error) {
      console.error('[ERROR] Error fetching blog post:', error);
      setError('No se pudo cargar el artículo');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-orange-600 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Artículo no encontrado</h1>
          <p className="text-slate-600 mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Featured Image */}
            {post.cover_image_url && (
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.cover_image_url}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.published_at).toLocaleDateString('es-CR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              {post.author_name && (
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author_name}
                  {post.author_role && <span className="ml-1 text-slate-500">- {post.author_role}</span>}
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-orange-600 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </article>

      {/* Back Button Bottom */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
