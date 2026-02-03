import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Cotizacion = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', empresa: '', servicio: '', mensaje: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const { error } = await supabase.from('cotizaciones').insert([{ ...formData, created_at: new Date().toISOString() }]);

      if (error) throw error;

      setStatus({ type: 'success', message: '¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.' });
      setFormData({ nombre: '', email: '', telefono: '', empresa: '', servicio: '', mensaje: '' });
    } catch (error) {
      console.error('[ERROR] Error al enviar cotización:', error);
      setStatus({ type: 'error', message: 'Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Solicitar Cotización</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Completa el formulario y nos pondremos en contacto contigo</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              {[
                { name: 'nombre', label: 'Nombre completo', type: 'text', required: true },
                { name: 'email', label: 'Correo electrónico', type: 'email', required: true },
                { name: 'telefono', label: 'Teléfono', type: 'tel', required: true },
                { name: 'empresa', label: 'Empresa', type: 'text', required: false },
                { name: 'servicio', label: 'Servicio de interés', type: 'select', required: true, options: ['', 'Investigación Geotécnica', 'Laboratorio de Materiales', 'Diseño y Construcción', 'Innovación D\'GEO', 'Monitoreo Geotécnico'] }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{field.label} {field.required && <span className="text-red-500">*</span>}</label>
                  {field.type === 'select' ? (
                    <select name={field.name} value={formData[field.name]} onChange={handleChange} required={field.required} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all">
                      {field.options.map(opt => <option key={opt} value={opt}>{opt || 'Selecciona un servicio'}</option>)}
                    </select>
                  ) : (
                    <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} required={field.required} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                  )}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje <span className="text-red-500">*</span></label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="6" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>{status.message}</div>
              )}

              <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                {loading ? 'Enviando...' : (<><Send className="mr-2 h-5 w-5" /> Enviar Solicitud</>)}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Cotizacion;
