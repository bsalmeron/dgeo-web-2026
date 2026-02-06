import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2 } from 'lucide-react';
import { ALL_CASES } from '../lib/constants';

const CasosExito = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Casos de Éxito</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Proyectos que demuestran nuestra experiencia en ingeniería geotécnica y construcción</p>
          </motion.div>
        </div>
      </section>

      {Object.entries(ALL_CASES).map(([category, cases]) => (
        <section key={category} className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 capitalize">{category === 'investigacion' ? 'Investigación Geotécnica' : category === 'laboratorio' ? 'Laboratorio de Materiales' : 'Diseño y Construcción'}</h2>
            <div className="space-y-8">
              {cases.map((caso, index) => (
                <motion.div key={caso.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                  <div className="flex items-start mb-4">
                    <Building2 className="h-8 w-8 text-orange-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{caso.title}</h3>
                      <p className="text-orange-600 font-semibold">Cliente: {caso.client}</p>
                      {caso.location && <p className="text-slate-600">Ubicación: {caso.location}</p>}
                      {caso.duration && <p className="text-slate-600">Duración: {caso.duration}</p>}
                      {caso.year && <p className="text-slate-600">Año: {caso.year}</p>}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div><h4 className="font-bold text-slate-900 mb-2">Reto:</h4><p className="text-slate-700">{caso.challenge}</p></div>
                    <div><h4 className="font-bold text-slate-900 mb-2">Solución D'GEO:</h4><p className="text-slate-700">{caso.solution}</p></div>
                    <div><h4 className="font-bold text-slate-900 mb-2">Resultado:</h4><p className="text-slate-700">{caso.result}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CasosExito;
