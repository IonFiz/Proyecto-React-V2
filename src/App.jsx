import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


export const CartContext = React.createContext([]);

function App() {
  return (
   <>
    <BrowserRouter>
      <NavBar />
      <CartContext.Provider value='Nexus'>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
      </CartContext.Provider>
    </BrowserRouter>  
   </>
  );
}

export default App;

