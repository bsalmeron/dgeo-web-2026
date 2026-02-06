import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '../components/ui/dialog';
import { ArrowRight } from 'lucide-react';

import img1Sm from '../assets/images/dji_0034-800.jpg';
import img1Lg from '../assets/images/dji_0034-1600.jpg';
import img2Sm from '../assets/images/2d7a5538-800.jpg';
import img2Lg from '../assets/images/2d7a5538-1600.jpg';
import img3Sm from '../assets/images/2d7a7305-800.jpg';
import img3Lg from '../assets/images/2d7a7305-1600.jpg';
import img4Sm from '../assets/images/2d7a5493-800.jpg';
import img4Lg from '../assets/images/2d7a5493-1600.jpg';

const Galeria = () => {
  const photos = useMemo(() => ([
    { id: 'dji', title: 'Vista aérea de proyecto', small: img1Sm, large: img1Lg },
    { id: 'campo1', title: 'Trabajo de campo', small: img2Sm, large: img2Lg },
    { id: 'campo2', title: 'Inspección en sitio', small: img3Sm, large: img3Lg },
    { id: 'equipo', title: 'Equipo en acción', small: img4Sm, large: img4Lg },
  ]), []);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openPhoto = (photo) => {
    setActive(photo);
    setOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Galería</h1>
          <p className="mt-3 text-slate-600 text-lg max-w-3xl">
            Evidencia de campo, laboratorio y consultoría. Selección curada para mantener un look profesional y coherente con la marca.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, idx) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => openPhoto(p)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group text-left rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={p.small}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{p.title}</p>
                    <p className="text-white/80 text-sm">Ver en grande</p>
                  </div>
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/15 backdrop-blur">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden">
            {active ? (
              <div className="bg-black">
                <img src={active.large} alt={active.title} className="w-full h-auto object-contain" />
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Galeria;
