import React from "react";
import Logo from "./logo";
import "./Navbar.css"
import { HiSearch } from "react-icons/hi";
import { BsFillCartCheckFill } from "react-icons/bs"


function Navbar() {
  return (
    <>
      <nav class="is-bg-navbar navbar is-fixed-top  " role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <Logo width={120} heigth={50} fill="#C780FA" />
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasic" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item custom-navbar-item">
              Home
            </a>

            <a class="navbar-item">
              Contacto
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Productos
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Maquillaje
                </a>
                <a class="navbar-item">
                  Sombras
                </a>
                <a class="navbar-item">
                  Promociones
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  Sorpresas
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item" >
              <input class="input is-normal is-rounded custom-input" type="text" placeholder="Busque Producto y mas..." />

              <span>
                <HiSearch size={28} />
              </span>

            </div>
            <div className="navbar-item">
              
              <div className="shoping-car icon is-medium mr-3">
                <BsFillCartCheckFill size={30}/>
                <span>1</span>

              </div>
            </div>



          </div>



        </div>
      </nav>
    </>
  );
}

export default Navbar;
