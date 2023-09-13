import React from "react";
import Logo from "./logo";
import { HiSearch } from "react-icons/hi";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="Logo">
          <Logo width={130} height={130} />
        </div>

        <div className="container-item">
          <ul className="Item">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="container-search">
          
          <input className="NavSearch" placeholder="Busca productos y mas" />
          <span>{<HiSearch size={24}/>}</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
