import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './style.css';
 
const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name:'AdolfoNin',
      email:'AfrikaKorps@gmail.com',
      phone:'1133851995',
      addres:'jean jaures 449',

    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then (({ id }) => console.log(id))
  }
  
  if (cart.length === 0){
    return (
      <>
      <div className='bodycart'>
      <p>Tu carrito esta vacío!</p>
      <Link to='/'>¡Haz clic aquí para comprar algo!</Link>
     
      </div>
      
      </>
    );
  }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }

      <p>
        total:{totalPrice()} 
      </p>
      <button onClick={handleClick}>Emitir Compra</button>
    </>
  );
}

export default Cart