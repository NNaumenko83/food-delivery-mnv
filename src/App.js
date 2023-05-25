import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { McDonaldsProducts } from './components/Shops/McDonaldsProducts/McDonaldsProducts';
import { KfcProducts } from './components/Shops/KfcProducts/KfcProducts';
import { MurakamiProducts } from './components/Shops/MurakamiProducts/MurakamiProducts';
import { Container } from './App.styled';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <Container>
      <header style={{ height: '100px', padding: '10px' }}>
        <h1>Food delivery</h1>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/cart">Shoping Cart</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="mcdonalds" element={<McDonaldsProducts />} />
          <Route path="kfc" element={<KfcProducts />} />
          <Route path="murakami" element={<MurakamiProducts />} />
        </Route>

        <Route path="cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Container>
  );
}

export default App;
