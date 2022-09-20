import React from "react";
import React, { useContext } from 'react';
import { CartContext } from "../../App";

export const CartWidget = () =>{
    const nombre = useContext(CartContext);
    return(
        <i className="bi bi-cart3"></i>
    );
}

export default CartWidget;