import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import InvestigacionGeotecnica from './pages/services/investigacion-geotecnica';
import LaboratorioMateriales from './pages/services/laboratorio-materiales';
import DisenoContruccion from './pages/services/diseno-construccion';
import InnovacionDgeo from './pages/services/innovacion-dgeo';
import MonitoreoGeotecnico from './pages/services/monitoreo-geotecnico';
import CasosExito from './pages/CasosExito';
import Contacto from './pages/Contacto';
import Cotizacion from './pages/Cotizacion';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/servicios/investigacion-geotecnica" element={<InvestigacionGeotecnica />} />
          <Route path="/servicios/laboratorio-materiales" element={<LaboratorioMateriales />} />
          <Route path="/servicios/diseno-construccion" element={<DisenoContruccion />} />
          <Route path="/servicios/innovacion-dgeo" element={<InnovacionDgeo />} />
          <Route path="/servicios/monitoreo-geotecnico" element={<MonitoreoGeotecnico />} />
          <Route path="/casos-de-exito" element={<CasosExito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
