// D'GEO Soluciones - Company Constants

export const COMPANY_INFO = {
  name: "D'GEO Soluciones",
  tagline: "Ingeniería Geotécnica de Excelencia",
  phone: "+506 2519-5300",
  email: "info@dgeosoluciones.com",
  address: "San José, Costa Rica"
};

export const SERVICES = [
  {
    id: 'investigacion-geotecnica',
    title: 'Investigación Geotécnica',
    icon: 'Search',
    shortDescription: 'Estudios de suelos y rocas para proyectos seguros y rentables',
    path: '/servicios/investigacion-geotecnica',
    videoUrl: 'https://www.youtube.com/embed/tSRZ-JfmnFE?autoplay=1&mute=1&list=PLxcGmNGDR5_naumr0E2CIxKTHHqdEz5sg'
  },
  {
    id: 'laboratorio-materiales',
    title: 'Laboratorio de Materiales',
    icon: 'FlaskConical',
    shortDescription: 'Control de calidad para obras seguras y duraderas',
    path: '/servicios/laboratorio-materiales',
    videoUrl: 'https://www.youtube.com/embed/bpaaoBNW7lY?autoplay=1&mute=1&list=PLxcGmNGDR5_naumr0E2CIxKTHHqdEz5sg'
  },
  {
    id: 'diseno-construccion',
    title: 'Diseño y Construcción de Obras Geotécnicas',
    icon: 'Building2',
    shortDescription: 'Soluciones técnicas que convierten terrenos complejos en proyectos viables',
    path: '/servicios/diseno-construccion',
    videoUrl: 'https://www.youtube.com/embed/RJcj9tHifDk?autoplay=1&mute=1&list=PLxcGmNGDR5_naumr0E2CIxKTHHqdEz5sg'
  },
  {
    id: 'innovacion-dgeo',
    title: "Innovación D'GEO",
    icon: 'Lightbulb',
    shortDescription: 'Tecnología aérea y análisis avanzado para tomar mejores decisiones',
    path: '/servicios/innovacion-dgeo',
    videoUrl: 'https://www.youtube.com/embed/jV6eaWgEYN4?autoplay=1&mute=1'
  },
  {
    id: 'monitoreo-geotecnico',
    title: 'Monitoreo Geotécnico',
    icon: 'Activity',
    shortDescription: 'Control en tiempo real para proyectos seguros',
    path: '/servicios/monitoreo-geotecnico',
    videoUrl: 'https://www.youtube.com/embed/1yzs1W_6Y40?autoplay=1&mute=1&list=PLxcGmNGDR5_naumr0E2CIxKTHHqdEz5sg'
  }
];

export const FEATURED_CASES = [
  {
    id: 'ruta-nacional-2',
    title: 'Deslizamiento – Ruta Nacional 2',
    client: 'CONAVI',
    category: 'Investigación Geotécnica',
    location: 'El Guarco, Cartago',
    description: 'Un deslizamiento colapsó una de las principales rutas del país, afectando la comunicación nacional. D\'GEO lideró la investigación geotécnica de emergencia y el diseño de la solución, utilizando perforaciones, geofísica, drones y monitoreo para identificar una falla geológica activa.',
    highlight: 'Este caso demuestra nuestra capacidad para intervenir en emergencias nacionales.'
  },
  {
    id: 'green-park',
    title: 'Green Park Free Zone',
    client: 'Grupo Desarrollador de Parques Industriales / Corten',
    category: 'Control de Calidad en Proyectos',
    location: 'Alajuela',
    description: 'Zona franca de naves industriales construida bajo cronogramas exigentes. D\'GEO implementó un laboratorio en sitio durante 4 años, permitiendo control total de subrasantes, pavimentos, compactaciones y concretos en tiempo real.',
    highlight: 'Este caso demuestra cómo el laboratorio en sitio se traduce en velocidad y ahorro.'
  },
  {
    id: 'ruta-nacional-336',
    title: 'Ruta Nacional 336 – León Cortés',
    client: 'CONAVI',
    category: 'Diseño y Construcción',
    location: 'León Cortés',
    description: 'Un carril colapsado con un talud casi vertical, lluvias intensas y sin posibilidad de cerrar la vía. D\'GEO diseñó y construyó un enrocado anclado, una solución híbrida que permitió recuperar terreno y estabilizar el talud al mismo tiempo.',
    highlight: 'Este caso demuestra nuestra capacidad de diseñar y ejecutar soluciones que no existen en el manual.'
  }
];

export const CLIENTS = [
  {
    name: 'CONAVI',
    logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/fee3ac98-21b7-4ed3-b505-164e938ff3b7'
  },
  {
    name: 'H.SOLÍS',
    logo: '/images/clients/hsolis.png'
  },
  {
    name: 'Constructa',
    logo: '/images/clients/constructa.png'
  },
  {
    name: 'C ORELCA',
    logo: '/images/clients/corelca.png'
  },
  {
    name: 'Colegio Federado de Ingenieros y de Arquitectos',
    logo: '/images/clients/cfia.png'
  },
  {
    name: 'FUSION INMOBILIARIA',
    logo: '/images/clients/fusion.png'
  },
  {
    name: 'Fernández Vaglio',
    logo: '/images/clients/fernandez-vaglio.png'
  },
  {
    name: 'Urbanizadora La Laguna',
    logo: '/images/clients/la-laguna.png'
  },
  {
    name: 'MACCAFERRI',
    logo: '/images/clients/maccaferri.png'
  },
  {
    name: 'UNA Universidad Nacional',
    logo: '/images/clients/una.png'
  },
  {
    name: 'MEP',
    logo: '/images/clients/mep.png'
  },
  {
    name: 'MECO',
    logo: '/images/clients/meco.png'
  },
  {
    name: 'Cliente Premium 1',
    logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/fee3ac98-21b7-4ed3-b505-164e938ff3b7'
  },
  {
    name: 'Cliente Premium 2',
    logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/68563fd4-5c6e-4154-ba27-84bc414a25f3'
  }
];

export const ALL_CASES = {
  investigacion: [
    {
      id: 'ruta-nacional-2',
      title: 'Deslizamiento – Ruta Nacional 2',
      client: 'CONAVI',
      location: 'El Guarco, Cartago',
      duration: '1 mes',
      challenge: 'Un deslizamiento bloqueó una de las rutas más importantes del país, afectando la comunicación nacional. Era necesario reabrir la vía con seguridad y definir una solución definitiva.',
      solution: 'Realizamos una investigación geotécnica de emergencia para permitir una reapertura temporal segura y luego una campaña completa para el diseño final, incluyendo: Perforaciones SPT, Refracción sísmica, Tomografía eléctrica, MASW, Piezómetros, Geología de sitio y drones.',
      result: 'Se detectó una falla geológica activa y se diseñó una solución técnica segura que permitió reabrir y estabilizar la ruta.'
    },
    {
      id: 'deslizamientos-ruta-35',
      title: 'Deslizamientos – Ruta Nacional 35',
      client: 'CONAVI / Sánchez-Carvajal',
      location: 'Sifón – La Abundancia',
      duration: '10 meses',
      challenge: 'Durante la construcción de la ruta se presentaron múltiples deslizamientos de gran magnitud que ponían en riesgo la operación de la carretera.',
      solution: 'Evaluamos 12 zonas inestables mediante: Estudios topográficos, Drones, Ensayos SPT y perforación en roca, Tomografía eléctrica, refracción sísmica y MASW, Estudios geológicos y fallas.',
      result: 'Se desarrollaron modelos geológico-geotécnicos y análisis de estabilidad que sirvieron como base para el diseño de las obras de estabilización y sus presupuestos.'
    },
    {
      id: 'hacienda-natura',
      title: 'Condominio Hacienda Natura',
      client: 'Inmobiliaria Montezuma',
      location: 'Naranjo, Alajuela',
      duration: '2 años',
      challenge: 'Desarrollar un proyecto residencial sobre laderas con pendientes pronunciadas, manteniendo la estabilidad y la armonía con el terreno.',
      solution: 'Realizamos estudios de suelo y estabilidad de taludes para definir el mejor uso del terreno.',
      result: 'Se diseñaron soluciones combinadas: Muros de gaviones y muros de retención, Sistema de soil nailing (suelo cosido). Que permitieron construir de forma segura sin alterar el paisaje.'
    },
    {
      id: 'condominio-peraz',
      title: 'Condominio Peraz',
      client: 'Urbanizadora La Laguna',
      location: 'La Unión, Cartago',
      duration: '1 mes',
      challenge: 'Optimizar cortes, rellenos y cimentaciones en un terreno con variabilidad de suelos.',
      solution: 'Se ejecutó una campaña ajustada al presupuesto y al diseño del proyecto: SPT, CBR, Pruebas de infiltración, Tomografía eléctrica, Geología de sitio.',
      result: 'Se logró una zonificación geotécnica que permitió: Optimizar movimientos de tierra, Definir capacidad de soporte, Identificar zonas de riesgo.'
    }
  ],
  laboratorio: [
    {
      id: 'green-park',
      title: 'Green Park Free Zone',
      client: 'Grupo Desarrollador de Parques Industriales / Corten CR',
      location: 'Alajuela',
      duration: '4 años',
      challenge: 'Construcción de naves industriales en zona franca bajo un cronograma exigente.',
      solution: 'Se implementó un laboratorio en sitio para tomar decisiones en tiempo real y evitar atrasos. Verificación de subrasantes, Diseño de pavimentos, Control de compactación, Muestreo y falla de cilindros de concreto (3, 7, 14 y 28 días).',
      result: 'La obra avanzó sin interrupciones por control de calidad, optimizando tiempos y costos en todas las etapas.'
    },
    {
      id: 'villas-del-sol',
      title: 'Villas del Sol',
      client: 'Urbanizadora La Laguna',
      location: 'Alajuela',
      duration: '2 años',
      challenge: 'El terreno contenía rellenos no controlados y suelo vegetal enterrado, lo que ponía en riesgo la viabilidad del proyecto.',
      solution: 'Se implementó laboratorio e inspección en sitio desde el movimiento de tierras. Verificación de subrasantes, Diseño de pavimentos, Control de compactación, Muestreo y pruebas de concreto, Verificación estructural de Casa Club, laguna y muros.',
      result: 'Se garantizó un desarrollo urbanístico seguro y técnicamente viable desde la base.'
    },
    {
      id: 'vive-tibas',
      title: 'Vive Tibás',
      client: 'Desarrollos Vive Tibás',
      location: 'Tibás, San José',
      duration: '8 meses',
      challenge: 'Construcción de viviendas en un plazo corto y con sistemas de cimentación especiales.',
      solution: 'Técnico de laboratorio e ingeniero geotécnico en sitio durante toda la ejecución. Control de mejoramiento de suelos (Geopier), Proctor estándar y modificado, Chequeos de compactación, Muestreo y falla de concretos, Verificación de resistencias tempranas.',
      result: 'Se permitió continuar las coladas sin detener la obra, asegurando calidad y cumplimiento del cronograma.'
    },
    {
      id: 'cedi-walmart',
      title: 'CEDI Walmart Nicaragua',
      client: 'EDICA S.A.',
      location: 'Managua, Nicaragua',
      duration: '6 meses',
      challenge: 'Construcción del primer Centro de Distribución Walmart en Nicaragua con plazos críticos.',
      solution: 'Se implementó control de calidad con técnicos en turnos diurnos y nocturnos. Verificación de subrasantes, Control de compactación, Muestreo y falla de concretos, Extracción de núcleos, Ensayos de resistencia.',
      result: 'Se garantizó la calidad estructural del proyecto incluso bajo jornadas de 24 horas.'
    }
  ],
  diseno: [
    {
      id: 'condominio-atocha',
      title: 'Condominio Atocha',
      client: 'Desarrollos Mega',
      year: '2014',
      challenge: 'Se requería un muro de gaviones de gran tamaño sobre suelos blandos con baja capacidad de soporte.',
      solution: 'Se realizó una investigación adicional y se diseñó una sustitución reforzada con geotextiles, permitiendo reducir el tamaño del muro.',
      result: 'Menor volumen de obra, menor costo y una solución técnicamente más eficiente.'
    },
    {
      id: 'tanque-gamonales',
      title: 'Tanque Gamonales – San Carlos',
      client: 'Fernández Vaglio',
      year: '2015',
      challenge: 'El terreno tenía muy baja capacidad de soporte hasta más de 10 m de profundidad, haciendo inviables las cimentaciones tradicionales.',
      solution: 'Se diseñó un sistema de cimentación compensada con micropilotes.',
      result: 'Se controlaron los asentamientos y se logró una solución segura y económicamente viable dentro del plazo.'
    },
    {
      id: 'faro-escondido',
      title: 'Faro Escondido',
      client: 'Fernández Vaglio',
      year: '2017',
      challenge: 'Un deslizamiento amenazaba una vivienda y piscina, con espacio limitado y sin posibilidad de intervenir propiedades vecinas.',
      solution: 'Se construyó una pantalla anclada de concreto, combinada con protección contra erosión y ejecución especializada en altura.',
      result: 'La edificación fue protegida sin afectar el condominio ni invadir terrenos colindantes.'
    },
    {
      id: 'ruta-nacional-336',
      title: 'Ruta Nacional 336 – León Cortés',
      client: 'CONAVI',
      year: '2017',
      challenge: 'Un carril colapsado con un talud casi vertical, lluvias intensas y sin posibilidad de cerrar la vía.',
      solution: 'Se diseñó y construyó un enrocado anclado, combinando recuperación de terreno y estabilización.',
      result: 'Se recuperó la vía de forma segura, cumpliendo con las exigencias operativas del Gobierno.'
    },
    {
      id: 'hotel-jw-marriott',
      title: 'Hotel JW Marriott',
      client: 'JW Marriott',
      challenge: 'El edificio presentaba grietas por asentamientos del relleno, con espacios de trabajo muy limitados y operación hotelera activa.',
      solution: 'Se diseñaron y construyeron pilotes de recalce, combinados con inyecciones de mortero y concreto.',
      result: 'Se estabilizó la estructura sin interrumpir la operación del hotel y dentro de plazos críticos.'
    }
  ]
};
