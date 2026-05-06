import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';
import {Home} from '../pages/Home';
import About from '../pages/About';
import Reservas from '../pages/Reservas/Reservas';
import Comunidad from '../pages/Comunidad';   
import Beneficios from '../pages/Beneficios/Beneficios';
import Login from '../pages/Login/Login';
import Registro from '../pages/Registro/Registro';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/registro' element={<Registro />}/>
        <Route path='/login' element={<Login />}/>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/comunidad" element={<Comunidad />} />  {/* Nueva ruta */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;