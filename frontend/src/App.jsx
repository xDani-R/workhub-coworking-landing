import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';
import { Home } from '../pages/Home';
import About from '../pages/About';
import Reservas from '../pages/Reservas/Reservas';
import Comunidad from '../pages/Comunidad';   // 👈 Ruta específica
// import Espacios from '../pages/Espacios/Espacios';     // 👈 Ruta específica
import Beneficios from '../pages/Beneficios/Beneficios';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/comunidad" element={<Comunidad />} />
          {/* <Route path="/espacios" element={<Espacios />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;