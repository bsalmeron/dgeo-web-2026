import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../lib/constants';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Contacto</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Estamos aquí para ayudarte con tu proyecto</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: 'Teléfono', value: COMPANY_INFO.phone, link: `tel:${COMPANY_INFO.phone}` },
              { icon: Mail, title: 'Correo Electrónico', value: COMPANY_INFO.email, link: `mailto:${COMPANY_INFO.email}` },
              { icon: MapPin, title: 'Ubicación', value: COMPANY_INFO.address, link: null }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <item.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                {item.link ? <a href={item.link} className="text-orange-600 hover:text-orange-700">{item.value}</a> : <p className="text-slate-600">{item.value}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
