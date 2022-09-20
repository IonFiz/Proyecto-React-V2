import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartProvider from './context/CartContext';




function App() {
  return (
   <>
    <BrowserRouter>
      <NavBar />
      <CartProvider>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>  
   </>
  );
}

export default App;

