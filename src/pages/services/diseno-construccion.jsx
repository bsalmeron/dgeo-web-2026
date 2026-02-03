import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Building2, Ruler, HardHat, Layers } from 'lucide-react';

const DisenoCostruccion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-amber-200 hover:text-white mb-8 transition-colors"
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
              <Building2 className="h-12 w-12 text-amber-400 mr-4" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Diseño y Construcción
              </h1>
            </div>
            <p className="text-xl text-amber-100 max-w-3xl">
              Soluciones integrales de diseño y construcción geotécnica con enfoque en 
              eficiencia, seguridad y sostenibilidad
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
              src="https://www.youtube.com/embed/RJcj9tHifDk?autoplay=1&mute=1"
              title="Diseño y Construcción"
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
                Soluciones Integrales
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                En D'GEO Soluciones ofrecemos servicios completos de diseño y construcción de obras 
                geotécnicas, desde la conceptualización hasta la ejecución y seguimiento del proyecto.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Nuestro equipo multidisciplinario de ingenieros, geólogos y constructores trabaja en 
                conjunto para desarrollar soluciones eficientes, seguras y económicas que se adaptan 
                a las condiciones específicas de cada sitio.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Utilizamos tecnología de punta, incluyendo modelación numérica avanzada, software 
                especializado y sistemas de información geográfica (GIS) para optimizar nuestros diseños.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Servicios de Diseño
              </h3>
              <ul className="space-y-4">
                {[
                  'Diseño de cimentaciones profundas y superficiales',
                  'Muros de contención y estructuras de tierra',
                  'Estabilización de taludes',
                  'Sistemas de drenaje y subdrenaje',
                  'Mejoramiento de suelos',
                  'Diseño de pavimentos',
                  'Obras de protección contra deslizamientos',
                  'Diseño de terraplenes y rellenos'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Construction Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Servicios de Construcción
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: HardHat,
                  title: 'Ejecución de Obras',
                  description: 'Construcción de estructuras geotécnicas con altos estándares de calidad'
                },
                {
                  icon: Layers,
                  title: 'Mejoramiento de Suelos',
                  description: 'Técnicas especializadas de compactación, inyección y refuerzo'
                },
                {
                  icon: Ruler,
                  title: 'Control de Calidad',
                  description: 'Supervisión técnica continua durante la ejecución'
                },
                {
                  icon: Building2,
                  title: 'Gestión de Proyectos',
                  description: 'Coordinación integral desde el inicio hasta la entrega'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Specialized Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Soluciones Especializadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Estabilización de Taludes
                </h3>
                <ul className="space-y-3">
                  {[
                    'Anclajes activos y pasivos',
                    'Micropilotes y pilotes de refuerzo',
                    'Muros de suelo reforzado',
                    'Geomallas y geotextiles',
                    'Sistemas de drenaje superficial y profundo',
                    'Bioingeniería de taludes'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Cimentaciones Especiales
                </h3>
                <ul className="space-y-3">
                  {[
                    'Pilotes prefabricados y colados in situ',
                    'Pilas perforadas de gran diámetro',
                    'Micropilotes',
                    'Losas de cimentación',
                    'Mejoramiento con columnas de grava',
                    'Sistemas de cimentación mixta'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Methodologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Nuestra Metodología
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Análisis y Diseño',
                  items: [
                    'Evaluación geotécnica detallada',
                    'Modelación numérica avanzada',
                    'Optimización de soluciones',
                    'Planos constructivos detallados'
                  ]
                },
                {
                  number: '02',
                  title: 'Construcción',
                  items: [
                    'Ejecución con equipos especializados',
                    'Control de calidad continuo',
                    'Supervisión técnica permanente',
                    'Documentación fotográfica'
                  ]
                },
                {
                  number: '03',
                  title: 'Seguimiento',
                  items: [
                    'Inspecciones post-construcción',
                    'Monitoreo de desempeño',
                    'Informes técnicos periódicos',
                    'Soporte técnico continuo'
                  ]
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-bold text-amber-200 mb-4">
                    {phase.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2 text-left">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesita Diseño o Construcción Geotécnica?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Contáctenos para desarrollar la solución ideal para su proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cotizacion"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-amber-900 font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Solicitar Cotización
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition-all"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisenoCostruccion;
