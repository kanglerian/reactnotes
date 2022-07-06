import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Beranda from './pages/Beranda';
import Produk from './pages/Produk';
import Tentang from './pages/Tentang';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Beranda/> } />
        <Route path="/produk" element={ <Produk/> } />
        <Route path="/tentang" element={ <Tentang/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
