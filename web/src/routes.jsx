import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import PetShop from './pages/petshop';
import Home from './pages/home';
import Sidebar from './components/sidebar';

// CSS
import './styles/global.css';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petshop" element={<PetShop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Sidebar />
    </BrowserRouter>
  );
}
