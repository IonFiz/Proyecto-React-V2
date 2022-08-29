import React from "react";

export const NavBar = () =>{
    return (
        <div classname="container">
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
                        <a className="nav_link" href="#">Carrito</a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;