import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Search, MapPin, FileText, Hammer } from 'lucide-react';

const InvestigacionGeotecnica = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al Inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Search className="h-12 w-12 text-white mr-4" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Investigación Geotécnica en Costa Rica
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl font-semibold">
              Estudios de suelos y rocas para proyectos seguros y rentables
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/tSRZ-JfmnFE?autoplay=1&mute=1&list=PLxcGmNGDR5_naumr0E2CIxKTHHqdEz5sg"
              title="Investigación Geotécnica"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-slate-700 leading-relaxed">
              Realizamos <span className="font-bold text-orange-600">estudios geotécnicos, estudios de suelos y análisis de estabilidad</span> para garantizar que cada proyecto se construya sobre bases técnicas reales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué es? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              ¿Qué es una investigación geotécnica?
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Es el estudio del <span className="font-semibold">suelo y la roca donde se va a construir</span> para definir si el terreno es apto, qué tipo de cimentación necesita y qué riesgos existen.
            </p>
            <div className="bg-orange-50 rounded-xl p-8 border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Este análisis permite:</h3>
              <ul className="space-y-3">
                {[
                  'Evitar fallas estructurales',
                  'Reducir costos imprevistos',
                  'Optimizar diseños',
                  'Cumplir normativa'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuestros estudios incluyen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Nuestros estudios incluyen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Estudios de suelos',
                'Estudios de roca',
                'Capacidad de carga',
                'Análisis de asentamientos',
                'Estabilidad de taludes',
                'Licuación',
                'Permeabilidad',
                'Movimientos de tierra'
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-md">
                  <CheckCircle2 className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo realizamos los estudios */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Cómo realizamos los estudios
            </h2>
            <p className="text-lg text-slate-700 mb-8">Usamos una combinación de:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                'Ensayos de campo',
                'Perforaciones y muestreo',
                'Geofísica aplicada',
                'Modelos geológico-geotécnicos'
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-orange-50 rounded-lg p-6">
                  <CheckCircle2 className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-700 italic">
              Esto nos permite evaluar terrenos complejos, urbanos, montañosos o de difícil acceso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ensayos que utilizamos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Ensayos que utilizamos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">
                  Investigación directa
                </h3>
                <ul className="space-y-3">
                  {[
                    'Ensayo SPT',
                    'Muestreo de suelo',
                    'Perforación en roca',
                    'Calicatas',
                    'Pruebas de carga'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">
                  Investigación indirecta
                </h3>
                <ul className="space-y-3">
                  {[
                    'Tomografía eléctrica',
                    'Refracción sísmica',
                    'MASW',
                    'Sondeos eléctricos'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Análisis de estabilidad de taludes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-600 to-amber-500 rounded-2xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Análisis de estabilidad de taludes
            </h2>
            <p className="text-lg leading-relaxed">
              Evaluamos si un talud es estable y qué soluciones técnicas se requieren para evitar deslizamientos o fallas del terreno.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Estudios complementarios */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Estudios complementarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Estudios hidrológicos e hidráulicos',
                'Estudios geológicos e hidrogeológicos',
                'Estudios ambientales (D1 y D2)'
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Por qué elegirnos
            </h2>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Porque no entregamos solo datos: entregamos <span className="font-bold text-orange-600">criterio técnico para tomar decisiones seguras</span>.
            </p>
            <div className="bg-orange-50 rounded-xl p-8">
              <p className="text-lg text-slate-700 mb-4">Cada recomendación busca el equilibrio entre:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Seguridad',
                  'Presupuesto',
                  'Tiempo',
                  'Viabilidad constructiva'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                    <p className="font-bold text-orange-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitás un estudio de suelos o un análisis geotécnico?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactanos y evaluamos tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cotizacion"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-orange-600 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Solicitar Cotización
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white font-semibold rounded-lg transition-all shadow-lg"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestigacionGeotecnica;
