import React from "react";

import logo from '../assets/img/logov2.png'
import './styles.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';


export const NavBar = () =>{
    return (
        <div classname="navBar-container">
            <nav className="nav">
                <div className="nav_brand">
                        
                        <NavLink className="nav_link" to='/'><img width={'75px'} src={logo} alt="logo" /></NavLink>
                </div>
                    <ul classname="nav_list">
                    <li>
                    <NavLink className="nav_link" to='/categoria/CDJ'>CDJ</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav_link" to='/categoria/Mixers'>Mixers</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav_link" to='/categoria/Parlantes'>Parlantes</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav_link" to='cart'>Cart</NavLink>
                            <CartWidget />
                        
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;