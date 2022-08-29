import React from "react";
import '../CartWidget/CartWidget'
import CartWidget from "../CartWidget/CartWidget";
import './styles.css';

export const NavBar = () =>{
    return (
        <div classname="navBar-container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">MiMarca</a>
                </div>
                <ul classname="nav_list">
                    <li>
                        <a className="nav_link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Contact</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">
                            <CartWidget />
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;