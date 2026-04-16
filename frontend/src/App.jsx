import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';
import {Home} from '../pages/Home';
import About from '../pages/About';
import Reservas from '../pages/Reservas/Reservas'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/reservas" element={<Reservas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;