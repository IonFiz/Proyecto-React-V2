import React, { Children } from 'react';
export const CartContext = React.createContext([]);

const CartProvider = () =>{
    return (
        <CartContext.Provider value={Nexus}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider