import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';


function App() {
  return (
   <>
    <NavBar />
    <ItemListContainer />
    <ItemDetailContainer />
    <Cart />
   </>  
  );
}

export default App;

