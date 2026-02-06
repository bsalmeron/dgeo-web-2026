import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Lightbulb, Cpu, Scan, Satellite } from 'lucide-react';

const InnovacionDgeo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors"
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
              <Lightbulb className="h-12 w-12 text-purple-400 mr-4" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Innovación D'GEO
              </h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl">
              Tecnología de punta y soluciones innovadoras que revolucionan la 
              ingeniería geotécnica en Costa Rica
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
              src="https://www.youtube.com/embed/jV6eaWgEYN4?autoplay=1&mute=1"
              title="Innovación D'GEO"
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
                Liderando la Transformación Digital
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                En D'GEO Soluciones estamos comprometidos con la innovación constante, 
                implementando las tecnologías más avanzadas para ofrecer soluciones geotécnicas 
                más precisas, eficientes y sostenibles.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Nuestra división de innovación se dedica a la investigación, desarrollo e 
                implementación de nuevas tecnologías que mejoran significativamente los procesos 
                de investigación, análisis, diseño y construcción geotécnica.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Colaboramos con universidades, centros de investigación y empresas tecnológicas 
                líderes para estar siempre a la vanguardia de la industria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Áreas de Innovación
              </h3>
              <ul className="space-y-4">
                {[
                  'Modelación numérica avanzada (FEM, FDM)',
                  'Sistemas de información geográfica (GIS)',
                  'Fotogrametría con drones',
                  'Escaneo láser 3D (LiDAR)',
                  'Monitoreo remoto con IoT',
                  'Inteligencia artificial aplicada',
                  'Realidad aumentada para visualización',
                  'BIM (Building Information Modeling) geotécnico'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Tecnologías Implementadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Satellite,
                  title: 'Drones y Fotogrametría',
                  items: [
                    'Levantamientos topográficos de alta precisión',
                    'Modelos digitales de elevación (DEM)',
                    'Ortofotografías georreferenciadas',
                    'Volumetría de excavaciones y rellenos',
                    'Seguimiento de avance de obras',
                    'Inspecciones de taludes y estructuras'
                  ]
                },
                {
                  icon: Scan,
                  title: 'Escaneo Láser 3D',
                  items: [
                    'Nubes de puntos de alta densidad',
                    'Modelos 3D detallados de estructuras',
                    'Detección de deformaciones milimétricas',
                    'Análisis de estabilidad estructural',
                    'Documentación as-built precisa',
                    'Inspecciones no invasivas'
                  ]
                },
                {
                  icon: Cpu,
                  title: 'Software Especializado',
                  items: [
                    'PLAXIS (análisis geotécnico)',
                    'GeoStudio (estabilidad de taludes)',
                    'AutoCAD Civil 3D',
                    'ArcGIS (sistemas de información)',
                    'FLAC3D (modelación numérica)',
                    'Rocscience (mecánica de rocas)'
                  ]
                }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                    <tech.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                    {tech.title}
                  </h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Beneficios de la Innovación Tecnológica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Mayor Precisión',
                  description: 'Datos más exactos y detallados para mejores decisiones de diseño'
                },
                {
                  title: 'Eficiencia en Costos',
                  description: 'Optimización de recursos y reducción de tiempos de ejecución'
                },
                {
                  title: 'Seguridad Mejorada',
                  description: 'Identificación temprana de riesgos y mejores sistemas de prevención'
                },
                {
                  title: 'Sostenibilidad',
                  description: 'Soluciones más amigables con el medio ambiente'
                },
                {
                  title: 'Comunicación Visual',
                  description: 'Modelos 3D y visualizaciones que facilitan la comprensión'
                },
                {
                  title: 'Toma de Decisiones',
                  description: 'Información en tiempo real para decisiones informadas'
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Proyectos de Innovación
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Sistema de Monitoreo Inteligente',
                  description: 'Desarrollo de plataforma IoT para monitoreo continuo de estructuras geotécnicas con alertas automáticas.'
                },
                {
                  title: 'Modelación Predictiva con IA',
                  description: 'Implementación de algoritmos de machine learning para predecir comportamiento de suelos y estructuras.'
                },
                {
                  title: 'BIM Geotécnico',
                  description: 'Integración de información geotécnica en modelos BIM para mejor coordinación multidisciplinaria.'
                },
                {
                  title: 'Realidad Aumentada para Inspecciones',
                  description: 'Aplicación móvil con AR para visualización de condiciones subterráneas durante inspecciones de campo.'
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="border-l-4 border-purple-600 pl-6 py-2"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Interesado en Nuestras Soluciones Innovadoras?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Descubra cómo la tecnología puede transformar su proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cotizacion"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-purple-900 font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Solicitar Cotización
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-all"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovacionDgeo;
