import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Activity } from 'lucide-react';

const MonitoreoGeotecnico = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al Inicio
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center mb-6">
              <Activity className="h-12 w-12 text-white mr-4" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">Monitoreo Geotécnico</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl font-semibold">Control en tiempo real para proyectos seguros</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/1yzs1W_6Y40?autoplay=1&mute=1&list=PLxcGmNGDR5_naumr0E2CIxKTHHqdEz5sg" title="Monitoreo Geotécnico" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p className="text-xl text-slate-700 leading-relaxed">
            Monitoreamos el comportamiento del suelo y las estructuras para <span className="font-bold text-orange-600">detectar riesgos a tiempo, proteger vidas y evitar pérdidas económicas</span> durante y después de la construcción.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">¿Por qué es importante el monitoreo?</h2>
          <p className="text-lg text-slate-700 mb-6">El terreno y las estructuras cambian con el tiempo. El monitoreo permite:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Detectar movimientos o deformaciones', 'Identificar fallas antes de que se vuelvan críticas', 'Tomar decisiones preventivas', 'Proteger la inversión y la seguridad'].map((item, index) => (
              <div key={index} className="flex items-start bg-orange-50 rounded-lg p-6">
                <CheckCircle2 className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Querés saber cómo se está comportando tu obra?</h2>
          <p className="text-xl text-white/90 mb-8">Implementá un sistema de monitoreo geotécnico</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cotizacion" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-orange-600 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">Solicitar Cotización</Link>
            <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white font-semibold rounded-lg transition-all shadow-lg">Contactar</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonitoreoGeotecnico;
