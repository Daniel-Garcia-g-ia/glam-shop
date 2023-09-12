import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        
        <div>
        
          <ul className="Item">
          <h1>Glam Shop</h1>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <input className="NavSearch" placeholder="Busca productos y mas" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
