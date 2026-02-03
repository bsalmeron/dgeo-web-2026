import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, FlaskConical, Microscope, Scale, TestTube } from 'lucide-react';

const LaboratorioMateriales = () => {
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
              <FlaskConical className="h-12 w-12 text-white mr-4" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Laboratorio de Materiales
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl font-semibold">
              Análisis completo de materiales de construcción y suelos con equipamiento
              de última generación y personal altamente calificado
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
              src="https://www.youtube.com/embed/bpaaoBNW7lY?autoplay=1&mute=1"
              title="Laboratorio de Materiales"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Laboratorio Certificado
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Nuestro laboratorio cuenta con acreditación y certificaciones nacionales e 
                internacionales, garantizando la precisión y confiabilidad de cada ensayo realizado.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Realizamos ensayos especializados de suelos, agregados, concreto, asfalto y otros 
                materiales de construcción, cumpliendo con las normas ASTM, AASHTO y especificaciones 
                del CR-2010.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Nuestro equipo de técnicos y profesionales especializados asegura resultados precisos 
                y oportunos para la toma de decisiones en sus proyectos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-orange-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Áreas de Ensayo
              </h3>
              <ul className="space-y-4">
                {[
                  'Mecánica de suelos',
                  'Agregados pétreos',
                  'Concreto hidráulico',
                  'Mezclas asfálticas',
                  'Control de calidad en obra',
                  'Ensayos de compactación',
                  'Análisis granulométricos',
                  'Límites de Atterberg',
                  'Ensayos de resistencia',
                  'Permeabilidad y consolidación'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Ensayos Especializados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Microscope,
                  title: 'Ensayos de Suelos',
                  items: [
                    'Clasificación de suelos',
                    'Compactación Proctor',
                    'CBR (California Bearing Ratio)',
                    'Consolidación unidimensional',
                    'Corte directo y triaxial',
                    'Permeabilidad'
                  ]
                },
                {
                  icon: Scale,
                  title: 'Ensayos de Agregados',
                  items: [
                    'Granulometría',
                    'Densidad y absorción',
                    'Desgaste Los Ángeles',
                    'Valor de impacto',
                    'Equivalente de arena',
                    'Partículas chatas y alargadas'
                  ]
                },
                {
                  icon: TestTube,
                  title: 'Ensayos de Concreto',
                  items: [
                    'Resistencia a compresión',
                    'Resistencia a flexión',
                    'Asentamiento (Slump)',
                    'Densidad y rendimiento',
                    'Contenido de aire',
                    'Extracción de núcleos'
                  ]
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Certificaciones y Normativas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Normas Aplicadas
                </h3>
                <ul className="space-y-3">
                  {[
                    'ASTM International',
                    'AASHTO (American Association of State Highway and Transportation Officials)',
                    'CR-2010 (Especificaciones Generales para la Construcción de Carreteras)',
                    'INTE (Instituto de Normas Técnicas de Costa Rica)'
                  ].map((norm, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{norm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Ventajas de Nuestro Laboratorio
                </h3>
                <ul className="space-y-3">
                  {[
                    'Equipamiento de última generación',
                    'Personal técnico certificado',
                    'Resultados en tiempo récord',
                    'Reportes detallados y claros',
                    'Servicio de recolección de muestras',
                    'Asesoría técnica especializada'
                  ].map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesita Ensayos de Laboratorio?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contáctenos para recibir una cotización personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cotizacion"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-orange-900 font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Solicitar Cotización
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white font-semibold rounded-lg transition-all"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaboratorioMateriales;
